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
lib.inputDialog(heading, rows, options)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.inputDialog(heading, rows, options)
```

</TabItem>
</Tabs>

* heading: `string`
* rows: `string[]` or `table` (`array`)
  * type: `'input'` or `'number'` or `'checkbox'` or `'select'` or `'slider'` or `'color'` or `'multi-select'` or `'date'` or `'date-range'` or `'time'` or `'textarea'`
* options?: `table`(`object`)
  * allowCancel: `boolean`
    * If true the user will not be able to cancel and close the input dialog until submitted.

Available properties per field type:

* input
  * label: `string`
  * description?: `string`
  * placeholder?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `string`
  * password?: `boolean`
  * min?: `number`
  * max?: `number`

* number
  * label: `string`
  * description?: `string`
  * placeholder?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `number`
  * min?: `number`
  * max?: `number`

* checkbox
  * label: `string`
  * checked?: `boolean`
  * disabled?: `boolean`
  * required?: `boolean`

* select and multi-select
  * label: `string`
  * options: `table`(`array`)
    * value: `string`
    * label?: `string`
  * description?: `string`
  * placeholder?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `string`
    * value of the default option.
  * clearable?: `boolean`

* slider
  * label: `string`
  * placeholder?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `number`
  * min?: `number`
  * max?: `number`
  * step?: `number`

* color
  * label: `string`
  * description?: `string`
  * placeholder?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `string`
  * format?: `'hex'` | `'hexa'` | `'rgb'` | `'rgba'` | `'hsl'` | `'hsla'`;

* date
  * label: `string`
  * description?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `string` or `true`
    * True defaults to current date
  * format?: `string`
    * Date format to display in the field
  * clearable?: `boolean`

* date-range
  * label: `string`
  * description?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `[string, string]`
  * format?: `string`
    * Date format to display in the field
  * clearable?: `boolean`

* time
  * label: `string`
  * description?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `string`
  * format?: `'12'` or `'24'`
  * clearable?: `boolean`

* textarea
  * label: `string`
  * description?: `string`
  * placeholder?: `string`
  * icon?: `string`
  * required? `boolean`
  * disabled?: `boolean`
  * default?: `number`
  * min?: `number`
    * Minimum amount of rows the text area will take.
  * max?: `number`
    * Maxmimum amount of rows the text area will take, when exceeded goes into overflow.
  * autosize?: `boolean`
    * If true text area will grow with content until max rows are reached.

The callback data is promise based meaning that the thread will not continue executing until the user either sends the data or exits the popup.

The data returned will be a table (array), indexes represent the rows sent to the dialog, so if we want data from the first field that would be index `1` (`0`), if we want data from the third field, that would be index `3` (`2`), etc...

:::caution

Field types such as `date`, `date-range` and `time` return a unix timestamp on the set value.
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
local input = lib.inputDialog('Basic dialog', {'First row', 'Second row'})

if not input then return end
print(input, input[1], input[2])
```

</TabItem>
<TabItem value='JS/TS'>

:::caution

This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
:::

```ts
const input = await lib.inputDialog('Basic dialog', ['First row', 'Second row'])

if (!input) return
console.log(input, input[0], input[1])
```

</TabItem>
</Tabs>

![Example image](https://i.imgur.com/KnZ0sEW.png)

### Advanced

<Tabs>
<TabItem value="Lua">

```lua
local input = lib.inputDialog('Dialog title', {
  {type = 'input', label = 'Text input', description = 'Some input description', required = true, min = 4, max = 16},
  {type = 'number', label = 'Number input', description = 'Some number description', icon = 'hashtag'},
  {type = 'checkbox', label = 'Simple checkbox'},
  {type = 'color', label = 'Colour input', default = '#eb4034'},
  {type = 'date', label = 'Date input', icon = {'far', 'calendar'}, default = true, format = "DD/MM/YYYY"}
})

print(json.encode(input))

-- Getting r, g and b values from colour picker
local r, g, b = string.match(input[4], "rgb%((%d+), (%d+), (%d+)%)")

-- Transforming unit date return to be used with Lua's os library
local date = input[5] / 1000
```

</TabItem>
<TabItem value="JS/TS">

:::caution

This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
:::

```ts
const input = await lib.inputDialog('Police locker', [
  {type: 'input', label: 'Text input', description: 'Some input description', required: true, min: 3, max: 16},
  {type: 'number', label: 'Number input', description: 'Some number description', icon: 'hashtag'},
  {type: 'checkbox', label: 'Simple checkbox'},
  {type: 'color', label: 'Colour input', default: '#eb4034'},
  {type: 'date', label: 'Date input', icon: ['far', 'calendar'], default: true, format: "DD/MM/YYYY"}
]);

console.log(JSON.stringify(input, null, 2));

// Getting r, g and b values from colour picker
const regExp = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
const colourInput = input[3];

const color = regExp.exec(colourInput);

if (!color) return

console.log(+color[1], +color[2], +color[3])
```

</TabItem>
</Tabs>

![Example image](https://i.imgur.com/v44YEkC.png)
