---
title: Input Dialog
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The input dialog window allows you to take data from the user
by setting input fields.

### lib.inputDialog

```lua
-- heading: string
-- rows: strings array or table
	-- type: "input" or "checkbox" or "select"
	-- label: string
	-- options: table array (optional - used ONLY with "select" type)
		-- value: string
		-- label: string
	-- password: boolean (optional - used ONLY with "input" type)
	-- icon: string (optional - used ONLY with "input" type)

lib.inputDialog(heading, rows)
```
The callback data is promise based meaning that the thread will
not continue executing until the user either sends the data
or exits the popup.

The data returned will be a table, indexes represent the rows
sent to the dialog, so if we want data from the first field that
would be index `1`, if we want data from the third field, that would
be index `3`, etc...

The input rows will always return a string, if you want a row to be of
number data type, you can use the `tonumber` function to convert it to
a number instead.

If a user left an input field empty it will return `nil`.

You can also add checkboxes that will return `true` if checked and `nil` if unchecked.  
Look at the *Advanced* example for it's usage.

:::caution

When using the advanced method you can define `icon` and `password` **ONLY** with type `"input"` and
you can define `options` **ONLY** with type `"select"`.


Doing so otherwise ***will*** result in errors.
:::

**Example:**

<Tabs>
<TabItem value="basic" label="Basic">

```lua
local input = lib.inputDialog('Police locker', {'Locker number', 'Locker passcode'})

if input then
    local lockerNumber = tonumber(input[1])
    local lockerPasscode = input[2]

    print(lockerNumber, lockerPasscode)
end
```
![Example image](https://i.imgur.com/RvFFZqv.png)
</TabItem>
<TabItem value='advanced' label='Advanced'>

:::danger

Everything under this advanced exampled requires ox_lib version at least 2.3.0 and
as of the time of writing this version **hasn't** been pushed yet.

Optionally you can download the source code and build the UI yourself if you don't
want to wait for the release.
:::

```lua
local input = lib.inputDialog('Police locker', {
	{ type = "input", label = "Locker number" },
	{ type = "checkbox", label = "Some checkbox" },
	{ type = "input", label = "Locker PIN", password = true, icon = 'lock' },
	{ type = "checkbox", label = "Some other checkbox" },
	{ type = 'select', label = 'Value select', options = {
		{ value = 'option1', label = 'Option 1' },
		{ value = 'option2', label = 'Option 2' },
		{ value = 'option3', label = 'Option 3'},
	}}
})
print(json.encode(input, {indent=true}))
```
![Example image](https://i.imgur.com/RBn53LN.png) ![Select example](https://i.imgur.com/rLJuDu6.png)
</TabItem>
</Tabs>
