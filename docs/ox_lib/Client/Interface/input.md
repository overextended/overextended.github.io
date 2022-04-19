---
title: Input Dialog
---

The input dialog window allows you to take data from the user
by setting input fields.

### lib.inputDialog

```lua
-- heading: string
-- rows: strings table

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

If a user left an input field empty it will return `nil`

**Example:**
```lua
local input = lib.inputDialog('Police locker', {'Locker number', 'Locker passcode'})

if input then
    local lockerNumber = tonumber(input[1])
    local lockerPasscode = input[2]

    print(lockerNumber, lockerPasscode)
end
```

![Example image](https://i.imgur.com/RvFFZqv.png)