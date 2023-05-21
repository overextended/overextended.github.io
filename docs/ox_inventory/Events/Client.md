# Client events

This is not a comprehensive list of events and is missing events intended for internal use only.

## Triggers

These events are safe to trigger and handle in other scripts.

### ox_inventory:disarm

Can be triggered to force the player to disarm.

```lua
TriggerClientEvent('ox_inventory:disarm', playerId, noAnim)
```

## Handlers

These events shouldn't be triggered by any other scripts.

### ox_inventory:updateInventory

Triggered after inventory slots have been updated, included on load.  
Changes is a table containing all updated slot data indexed by slotId. Empty slots are "false".

```lua
AddEventHandler('ox_inventory:updateInventory', function(changes) end)
```

- changes: `table<number, table | false>`

### ox_inventory:currentWeapon

Triggered when a weapon is equipped or its metadata is altered.

```lua
AddEventHandler('ox_inventory:currentWeapon', function(weapon) end)
```

- weapon?: `table`

### ox_inventory:itemCount

Triggered when the amount of an item in the player's inventory is changed.  
_Note: Not available for ESX, use esx:addInventoryItem or esx:removeInventoryItem._

```lua
AddEventHandler('ox_inventory:itemCount', function(itemName, totalCount) end)
```
