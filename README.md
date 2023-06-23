# Enum

A utility library for working with enumerated types (enums). Simplify the management of constant values by creating strongly-typed enums with custom labels and values. Provides convenience methods for enum conversion, retrieval, and equality checks.

Inspired by [PHP Enum](https://github.com/spatie/enum).

## Installation

```sh
npm install @ngekoding/enum
```

## Usage

This is how an enum can be defined.

```js
import Enum from '@ngekoding/enum'

class UserLevel extends Enum {
  static Basic = new UserLevel(1, 'Basic')
  static Pro = new UserLevel(2, 'Pro')
  static Premium = new UserLevel(3, 'Premium')
}
```

Where the first parameter is the `value` and the second parameter is the `label`.

### Accessing enum values or labels

```js
console.log(UserLevel.Basic.value) // Output: 1
console.log(UserLevel.Basic.label) // Output: Basic
```

### Creating an enum from a value

```js
const userLevel = UserLevel.fromValue(2)
```

When an enum value doesn't exist, you'll get an `Error` exception. If you would prefer not catching an exception, you can use:

```js
const userLevel = UserLevel.tryFromValue(2)
```

When an enum value doesn't exist in this case, `userLevel` will be `null`.

### Comparing enums

Enums can be compared using the `equals` method:

```js
console.log(userLevel.equals(UserLevel.Pro)) // Output: true
```

You can pass several enums to the `equals` method, it will return `true` if the current enum equals one of the given values.

```js
console.log(userLevel.equals(UserLevel.Pro, UserLevel.Premium)) // Output: true
```

### Get an array of enum instances

You can get an array containing all the enum instances defined within the enum class. This is allows easy access to the entire set of enum values.

```js
const values = UserLevel.values()
console.log(values) // Output: [UserLevel.Basic, UserLevel.Pro, UserLevel.Premium]
```
