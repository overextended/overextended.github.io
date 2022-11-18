---
title: Creating items
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Defining item data

Before being able to see or use an item in game it **must** first be defined.

All of the items are defined in the `/data/items.lua` file with key, value pairs.  
Key is the name (not the label) of an item and the value is a table containing the
options for the item.

**Item options:**

* label: `string`
* weight?: `number`
* stack?: `boolean`
  * If set to false will not allow the item to be stacked.
* degrade?: `number`
  * Amount of time in minutes the item will degrade after.
* close?: `boolean`
  * If set to false does not close the inventory on item use.
* description?: `string`
  * Item description that will be shown in the tooltip
* consume?: `number`
  * Item count needed and removed use.
  * Default: 1
  * If set to a decimal will consume durability instead (0.2 = 20%).
* allowArmed?: `boolean`
  * If set to true will allow use of item while armed with a weapon.
* client?: `table`
  * export?: `string`
    * Export to be triggered after item use.
  * event?: `string`
    * Event to be triggered after item use.
  * status?: `table`
    * Adjust esx_status values after use.
  * anim?: `table`
      * Animation that will be played during the progress bar.
      * dict: `string`
      * clip: `string`
  * prop?: `table`
      * Attached prop that will be displayed during the progress bar.
      * model: `string` or `hash`
      * pos: `table` (x, y, z)
      * rot: `table` (x, y, z)
  * disable?: `table`
    * Actions to be disabled during the progress bar
    * move?: `boolean`
    * car?: `boolean`
    * combat?: `boolean`
    * mouse?: `boolean`
  * usetime?: `number`
  * cancel?: `boolean`
    * If set to true the player canc cancel item use.
  * add?: `function`(total: `number`)
    * Function that triggers when recieving an item
    * Returns total item count as `total`
  * remove?: `function`(total: `number`)
      * Function that triggers when removing an item
      * Returns total item count as `total`
* buttons?: `table`
  * label: `string`
  * action: `function`(slot: `number`)
    * Callback function when button is clicked in context menu, returns item slot.

**Examples:**
<Tabs>
<TabItem value='burger' label='Burger'>

```lua
['burger'] = {
    label = 'Burger',
    weight = 220,
    stack = true,
    close = true,
    client = {
        status = { hunger = 200000 },
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = {
            model = 'prop_cs_burger_01',
            pos = { x = 0.02, y = 0.02, y = -0.02},
            rot = { x = 0.0, y = 0.0, y = 0.0}
        },
        usetime = 2500,
    }
}
```

</TabItem>
<TabItem value='description_burger' label='Description burger'>

A modified burger item which includes a description.

```lua
['burger'] = {
    label = 'Burger',
    description = 'Just what is the secret formula?'
    weight = 220,
    stack = true,
    close = true,
    client = {
        status = { hunger = 200000 },
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = {
            model = 'prop_cs_burger_01',
            pos = { x = 0.02, y = 0.02, y = -0.02},
            rot = { x = 0.0, y = 0.0, y = 0.0}
        },
        usetime = 2500,
    }
}
```

</TabItem>
<TabItem value='notify_burger' label='Notify burger'>

A modified burger item, which gives you notifications on add and remove arguments.

```lua
['burger'] = {
    label = 'Burger',
    weight = 220,
    stack = true,
    consume = 0,
    client = {
        add = function(total)
            if total > 0 then
                lib.notify({description = 'Nice burger you got there!'})
            end
        end,

        remove = function(total)
            if total < 1 then
                lib.notify({description = 'You lost all of your burgers!'})
            end
        end
    }
}
```

</TabItem>
</Tabs>

## Making the item usable

- If you are using ESX, you can continue using `ESX.RegisterUsableItem`.
- If you are using QBCore, you can continue using `QBCore.Functions.CreateUseableItem`.

Using the built-in system is more secure and provides much more functionality.

### Client callbacks

Item callbacks can be added by defining an export (recommended), or by adding it to [items/client.lua](https://github.com/overextended/ox_inventory/blob/main/modules/items/client.lua#L33).

When defining [item data](https://github.com/overextended/ox_inventory/blob/main/data/items.lua#L11), adding client.export will trigger an event on item use.  
The correct formatting is `export = resourceName.exportName`.

```lua
exports('bandage', function(data, slot)
    local playerPed = PlayerPedId()
    local maxHealth = GetEntityMaxHealth(playerPed)
    local health = GetEntityHealth(playerPed)

    -- Does the ped need to heal? We can cancel the item from being used.
    if health < maxHealth then
        -- Triggers internal-code to correctly use items.
        -- This adds security, removes the item on use, adds progressbar support, and is necessary for server callbacks.
        exports.ox_inventory:useItem(data, function(data)
            -- The server has verified the item can be used.
            if data then
                SetEntityHealth(playerPed, math.min(maxHealth, math.floor(health + maxHealth / 16)))
                lib.notify({description = 'You feel better already'})
            end
        end)
    else
        -- Don't use the item
        lib.notify({type = 'error', description = 'You don\'t need a bandage right now'})
    end
end)
```

### Server callbacks

A callback function can be defined on the server to handle several events (usingItem, usedItem, buyItem).  
This can either be an export (recommended), or added to the bottom of [items/server.lua](https://github.com/overextended/ox_inventory/blob/main/modules/items/server.lua). 
When defining [item data](https://github.com/overextended/ox_inventory/blob/main/data/items.lua#L14), adding server.export will trigger an event for the actions above.
The correct formatting is `export = resourceName.exportName`.

```lua
exports('bandage', function(event, item, inventory, slot, data)
    -- Player is attempting to use the item.
    if event == 'usingItem' then
        local playerPed = GetPlayerPed(inventory.id)
        local maxHealth = GetEntityMaxHealth(playerPed)
        local health = GetEntityHealth(playerPed)

        -- Check if the player needs to be healed.
        if health >= maxHealth then
            TriggerClientEvent('ox_lib:notify', inventory.id, {type = 'error', description = 'You don\'t need a bandage right now'})

            -- Returning 'false' will prevent the item from being used
            return false
        end

        return
    end

    -- Player has finished using the item.
    if event == 'usedItem' then
        return TriggerClientEvent('ox_lib:notify', inventory.id, {description = 'You feel better already'})
    end

    -- Player is attempting to purchase the item.
    if event == 'buying' then
        return TriggerClientEvent('ox_lib:notify', inventory.id, {type = 'success', description = 'You bought a bandage'})
    end
end)
```

## Creating container items

Like with other items the item must first be registered.

**Example:**

```lua
['paperbag'] = {
    label = 'Paper Bag',
    weight = 1,
    stack = false,
    close = false,
    consume = 0
},
```

When registered you can define the item as a container under the `Items.containers` table in `/modules/items/sever.lua`  
The key for the container is the `name` you gave it when registering the item.  
You can also define the number of slots, the maximum weight, blacklist and whitelist items.

* itemName: `table`
  * size: `{number, number}`
    * First index is number of slots the container will have.
    * Second index is the maximum weight of the container.
  * blacklist: `table`
    * Key-value pairs of item name and true
    * `['itemName'] = true`
  * whitelist: `table`
    * Key-value pairs of item name and true
    * `['itemName'] = true`

**Example:**

```lua
['paperbag'] = {
    size = {5, 1000},
    blacklist = {
        ['testburger'] = true -- No burgers!
    }
},
```
