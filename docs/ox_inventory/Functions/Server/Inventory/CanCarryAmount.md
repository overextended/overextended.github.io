Returns the amount a player can hold based on available weight.

```lua
exports.ox_inventory:CanCarryAmount(inv, item)
```
* inv: `string` or `number`
* item: `table` or `string`
  * Can be array to check multiple items.

Example:

```lua
-- Checks how much you can carry
amountToAdd = exports.ox_inventory:CanCarryAmount(inv, 'stone')
-- Adds the amount
exports.ox_inventory:AddItem(inv, 'stone', amountToAdd)
```
