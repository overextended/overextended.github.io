---
title: Creating custom stashes
---

import IconButton from '@site/src/components/IconButton'
import { BsGithub } from 'react-icons/bs'

We can set up custom stashes from outside the resource utilising the exported RegisterStash function. Firstly, we need to define the stashes properties.  

```lua
-- id: string
-- label: string
-- slots: number
-- weight: number
-- owner: string or boolean (optional)
-- group: table (optional)
	-- name: string
	-- grade: number
-- coords: vector or table (optional)
```

- `id` - A unique name to identify the stash in the database
- `label` - Display name when viewing the stash
- `slots` - Number of slots that the stash will have
- `weight` - Maximum stash weight
- `owner` - See below
- `group` - Key-value pairs of job name and minimum grade to access
- `coords` - Vector or table containing coordinates

The owner field will set permissions for stash access, with stashes registering to specific identifiers.
- true: Each player has their own unique stash, but can request to open the stash of another player
- false: Only a single stash exists and is shared between all players
- string: The stash explicitly belongs to the given owner, usually a player identifier

You can set the stash coordinates to prevent the stash from being opened if the player isn't close enough.

## Example

Below the value is hardset, but it could be loaded from the database (especially if there are unknown fields, i.e. owner)
```lua
-- Server
local stash = {
	id = '42wallabyway',
	label = '42 Wallaby Way',
	slots = 50,
	weight = 100000,
	owner = 'char1:license'
}

AddEventHandler('onServerResourceStart', function(resourceName)
	if resourceName == 'ox_inventory' or resourceName == GetCurrentResourceName() then
		exports.ox_inventory:RegisterStash(stash.id, stash.label, stash.slots, stash.weight, stash.owner)
	end
end)

-- Client
exports.ox_inventory:openInventory('stash', {id='42wallabyway', owner=property.owner})
```

The following sample is based on esx_property's db data.
```lua
-- Server
local properties

MySQL.query('SELECT * FROM `properties`', {}, function(result)
	properties = result
end

RegisterNetEvent('ox:loadStashes', function(id)
local stash = properties[id]
	if stash then
		-- id: 1, name: WhispymoundDrive, label: 2677 Whispymound Drive, coords: {"x":118.748,"y":566.573,"z":175.697}
		ox_inventory:RegisterStash(stash.name, stash.label, 50, 100000, true, false, json.encode(stash.room_menu))
	end
end)

-- Client
local ox_inventory = exports.ox_inventory

if ox_inventory:openInventory('stash', property.id) == false then
	TriggerServerEvent('ox:loadStashes')
	ox_inventory:openInventory('stash', property.id)
end
```

## Example resource

We put together an example resource showcasing how to properly utilise the stash API:

<div style={{width: 'fit-content'}}>
	<a href="https://www.github.com/overextended/ox_inventory_examples">
		<IconButton side='left' icon={<BsGithub/>}>GitHub</IconButton>
	</a>
</div>
