Creates and sets the player's inventory.

```lua
exports.ox_inventory:setPlayerInventory(player, data)
```
* player: `table`
  * source: `number`
  * identifier: `string`
  * name: `string`
  * groups?: `table`
  * sex?: `string`
  * dateofbirth?: `string`
* data?: `table`
  * If not provided will load player's inventory data from the db.
