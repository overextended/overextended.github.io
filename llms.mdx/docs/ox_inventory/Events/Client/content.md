# Client (/docs/ox_inventory/Events/Client)



This is not a comprehensive list of events and is missing events intended for internal use only.

## Event Triggers [#event-triggers]

<Callout type="info">
  These events 

  **are safe**

   to trigger and handle in other scripts.
</Callout>

### ox\_inventory:disarm [#ox_inventorydisarm]

Can be triggered to force the player to disarm.

```lua
TriggerClientEvent('ox_inventory:disarm', playerId, noAnim)
```

* playerId: `number`
* noAnim: `boolean`
  * If `true`, disarm animation will be skipped

### ox\_inventory:suppressItemNotifications [#ox_inventorysuppressitemnotifications]

Can be triggered to enable or disable NUI item notifications

```lua
TriggerClientEvent('ox_inventory:suppressItemNotifications', playerId, value)
```

* playerId: `number`
* value: `boolean`

## Event Handlers [#event-handlers]

<Callout type="warning">
  These events 

  **should not**

   be triggered by any other scripts.
</Callout>

### ox\_inventory:updateInventory [#ox_inventoryupdateinventory]

Triggered after inventory slots have been updated, included on load.\
Changes is a table containing all updated slot data indexed by slotId. Empty slots are `false`.

```lua
AddEventHandler('ox_inventory:updateInventory', function(changes) end)
```

* changes: `table<number, table | false>`

### ox\_inventory:currentWeapon [#ox_inventorycurrentweapon]

Triggered when a weapon is equipped or its metadata is altered.

```lua
AddEventHandler('ox_inventory:currentWeapon', function(weapon) end)
```

* weapon?: `table`

### ox\_inventory:itemCount [#ox_inventoryitemcount]

Triggered when the amount of an item in the player's inventory is changed.\
&#x2A;Note: Not available for ESX, use esx:addInventoryItem or esx:removeInventoryItem.*

```lua
AddEventHandler('ox_inventory:itemCount', function(itemName, totalCount) end)
```

* itemName: `string`
* totalCount: `number`

### ox\_inventory:updateWeaponComponent [#ox_inventoryupdateweaponcomponent]

```lua
AddEventHandler('ox_inventory:updateWeaponComponent', function(action, componentHash, componentItem) end)
```

* action: `'added' | 'removed'`
* componentHash: `number`
* componentItem: `string`

### ox\_inventory:usedItem [#ox_inventoryuseditem]

```lua
AddEventHandler('ox_inventory:usedItem', function(name, slotId, metadata) end)
```

* name: `string`
* slotId: `number`
* metadata?: `table`
