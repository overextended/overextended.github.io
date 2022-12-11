---
title: Input Dialog
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The input dialog window allows you to take data from the user
by setting input fields.

### lib.inputDialog

<Tabs>
<TabItem value='Lua'>

```lua
lib.inputDialog(heading, rows)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.inputDialog(heading, rows)
```

</TabItem>
</Tabs>

* heading: `string`
* rows: `string[]` or `table` (`array`)
  * type: `'input'` or `'number'` or `'checkbox'` or `'select'` or `'slider'`
  * label: `string`
  * description?: `string`
    * If set will show a ? near the label a user can hover over and the description.
  * options?: `table` (`array`)
    * [ Only used with `'select'` type ]
    * value: `string`
    * label: `string`
  * password?: `boolean`
    * Hides input characters with ability to toggle them on. Used only with `'input'` type.
  * icon?: `string`
    * Used only with `'input'` and `'number'` types.
  * placeholder?: `string`
    * Used only with `'input'` and `'number'` types.
  * disabled?: `boolean`
    * Should the field be disabled from input.
  * default?: `string` or `number`
    * Default value for the field.
  * checked?: `boolean`
    * Whether the checkbox should be checked by default. Used only with `'checkbox'` type.
  * min?: `number`
    * Used only with `'slider'` and `'number'` types.
  * max?: `number`
    * Used only with `'slider'` and `'number'` types.
  * step?: `number`
    * Amount of change per slider step. Used only with `'slider'` type.

The callback data is promise based meaning that the thread will
not continue executing until the user either sends the data
or exits the popup.

The data returned will be a table (array), indexes represent the rows
sent to the dialog, so if we want data from the first field that
would be index `1` (`0`), if we want data from the third field, that would
be index `3` (`2`), etc...

The standard input rows will always return a string, if you want a row to be of
number data type, you can use set the `type` to `number`.

If a user left an input field empty it will return `nil`.

You can also add checkboxes that will return `true` if checked and `nil` if unchecked.
Look at the *Advanced* example for it's usage.

:::caution

When using the advanced method you can define `icon` and `password` **ONLY** with type `'input'` and `'number'` and
you can define `options` **ONLY** with type `'select'`.

Doing so otherwise ***will*** result in errors.
:::

### lib.closeInputDialog

Force closes the active input dialog and sets its return data as `nil`

<Tabs>
<TabItem value='Lua'>

```lua
lib.closeInputDialog()
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.closeInputDialog()
```

</TabItem>
</Tabs>

## Usage Example

### Basic

<Tabs>
<TabItem value='Lua'>

```lua
local input = lib.inputDialog('Police locker', {'Locker number', 'Locker passcode'})

if not input then return end
local lockerNumber = tonumber(input[1])
local lockerPasscode = input[2]

print(lockerNumber, lockerPasscode)
```

</TabItem>
<TabItem value='JS/TS'>

:::caution

This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
:::

```ts
const input = await lib.inputDialog('Police locker', ['Locker number', 'Locker passcode'])

if (!input) return
const lockerNumber = input[0] as number
const lockerPasscode = input[1] as number

console.log(lockerNumber, lockerPasscode)
```

</TabItem>
</Tabs>

![Example image](https://i.imgur.com/RvFFZqv.png)

### Advanced

<Tabs>
<TabItem value="Lua">

```lua
local input = lib.inputDialog('Police locker', {
    { type = "input", label = "Locker number", placeholder = "123" },
    { type = "checkbox", label = "Some checkbox" },
    { type = "input", label = "Locker PIN", password = true, icon = 'lock' },
    { type = "checkbox", label = "Some other checkbox", checked = true },
    { type = 'select', label = 'Value select', options = {
        { value = 'option1', label = 'Option 1' },
        { value = 'option2', label = 'Option 2' },
        { value = 'option3', label = 'Option 3'},
    }},
    { type = "number", label = "Number counter", default = 12 }
})

print(json.encode(input, {indent=true}))
```

</TabItem>
<TabItem value="JS/TS">

:::caution

This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
:::

```ts
const input = await lib.inputDialog('Police locker', [
  { type: 'input', label: 'Locker number', placeholder: '123' },
  { type: 'checkbox', label: 'Some checkbox' },
  { type: 'input', label: 'Locker PIN', password: true, icon: 'lock' },
  { type: 'checkbox', label: 'Some other checkbox', checked: true },
  { type: 'select',   label: 'Value select', options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]},
  { type: 'number', label: 'Number counter', default: 12 },
]);

console.log(JSON.stringify(input, null, 2));
```

</TabItem>
</Tabs>

![Example image](https://i.imgur.com/9dBA2d2.png) ![Select example](https://i.imgur.com/ILdFeot.png)
