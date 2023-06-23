type EnumValue = string | number

export default class Enum<T extends EnumValue> {
  private _value: T
  private _label: string

  constructor(value: T, label: string) {
    this._value = value
    this._label = label
  }

  toString(): string {
    return this._value.toString()
  }

  valueOf(): T {
    return this._value
  }

  get value(): T {
    return this._value
  }

  get label(): string {
    return this._label
  }

  static fromValue<T extends Enum<EnumValue>>(value: T['value'], safe = false): T | null {
    const enumValues = Object.values(this)
    const matchingEnum = enumValues.find(
      (enumItem: T) => enumItem._value === value,
    )
    if (matchingEnum)
      return matchingEnum

    if (safe)
      return null

    throw new Error(`Invalid value '${value}' for enum '${this.name}'`)
  }

  static tryFromValue<T extends Enum<EnumValue>>(value: T['value']): T | null {
    return this.fromValue(value, true)
  }

  static values<T extends Enum<EnumValue>>(): T[] {
    const enumValues = Object.values(this)
    return enumValues.filter((enumItem: T) => enumItem instanceof this)
  }

  equals(...others: (Enum<T> | T)[]): boolean {
    return others.some(other => this._isEqual(other))
  }

  private _isEqual(other: Enum<T> | T): boolean {
    if (!(other instanceof Enum))
      return false

    return (
      this.constructor === other.constructor && this._value === other._value
    )
  }
}
