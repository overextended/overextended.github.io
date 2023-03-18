# CreateDropFromPlayer

Creates a new drop with the contents of a player's inventory.

```lua
exports.ox_inventory:CreateDropFromPlayer(playerId)
```

- playerId: `number`

Return:
- dropId: `string`

**Example**

```lua
local dropId = exports.ox_inventory:CreateDropFromPlayer(1)
```
