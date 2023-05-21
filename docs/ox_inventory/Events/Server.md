# Server events

This is not a comprehensive list of events and is missing events intended for internal use only.

## Handlers

These events shouldn't be triggered by any other scripts.

### ox_inventory:openedInventory

Triggered after an inventory is opened by a player.

```lua
AddEventHandler('ox_inventory:openedInventory', function(playerId, inventoryId) end)
```

- playerId: `number`
- inventoryId: `string`

### ox_inventory:closeInventory

Triggered after an inventory is closed by a player.

```lua
AddEventHandler('ox_inventory:closeInventory', function(playerId, inventoryId) end)
```
