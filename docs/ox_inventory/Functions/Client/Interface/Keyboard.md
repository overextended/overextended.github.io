Opens a keyboard input dialog.

The `rows` param takes a table of strings where each string entry will represent
a single row.

```lua
-- header: string
-- rows: table
exports.ox_inventory:Keyboard(header, rows)
```
Returns a table of strings where the first index is going to be the first row of the dialog,
the second index the second row and so on.

**Example:**
```lua
local input = exports.ox_inventory:Keyboard('Money transfer', {'Player name', 'Amount'})

if input then
    local playerName = input[1]
    local amount = tonumber(input[2])

    if not playerName or not amount then return end
end
```