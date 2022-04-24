Returns the amount a player can hold based on available weight.

```lua
---@param inv string | number
---@param item table | string
exports.ox_inventory:CanCarryAmount(inv, item)
```

Example:

```lua
-- Checks how much you can carry
amountToAdd = exports.ox_inventory:CanCarryAmount(inv, 'stone')
-- Adds the amount
exports.ox_inventory:AddItem(inv, 'stone', amountToAdd)
```
