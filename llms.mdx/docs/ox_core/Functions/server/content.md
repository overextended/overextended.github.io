# Server (/docs/ox_core/Functions/server)



## Ox.CreateAccount [#oxcreateaccount]

Creates a new account for a character with the given charId or stateId.

```lua
Ox.CreateAccount(ownerId, label)
```

**Parameters**

* ownerId: `number` | `string`
* label: `string`

**Returns**

* [`OxAccount`](/ox_core/Classes/Server/OxAccount)

## Ox.CreateGroup [#oxcreategroup]

Creates a new group from the given data, handling all database interactions internally.

```lua
Ox.CreateGroup(data)
```

**Parameters**

* data: `object`
  * name: `string`
  * label: `string`
  * grades: `object[]`
    * label: `string`
    * accountRole?: `string`
  * type?: `string`
  * colour?: `number`
  * hasAccount?: `boolean`

## Ox.CreateVehicle [#oxcreatevehicle]

Creates a new vehicle, which will be saved to the database if it has an assigned owner or group.

```lua
Ox.CreateVehicle(data, coords, heading)
```

**Parameters**

* data: `string` | `object`
  * model: `string`
  * owner?: `number`
  * group?: `string`
  * stored?: `string`
  * properties?: `object`
* coords?: `vector3`
* heading?: `number`

**Returns**

* [`OxVehicle`](/ox_core/Classes/Server/OxVehicle)

## Ox.DeleteAccountInvoice [#oxdeleteaccountinvoice]

Deletes the account invoice with the given invoiceId.

```lua
Ox.DeleteAccountInvoice(invoiceId)
```

**Parameters**

* invoiceId: `number`

**Returns**

* `object`
  * success: `boolean`
  * message?: `string`

## Ox.DeleteGroup [#oxdeletegroup]

Deletes all data associated with the given group name, such as group grades, vehicles, etc.

```lua
Ox.DeleteGroup(groupName)
```

**Parameters**

* groupName: `string`

## Ox.GenerateVehiclePlate [#oxgeneratevehicleplate]

Generate a unique vehicle plate that doesn't exist in database. Pattern defaults to `ox:plateFormat` if not provided.

```lua
Ox.GenerateVehiclePlate(pattern)
```

**Parameters**

* pattern?: `string`

**Returns**

* `string`

## Ox.GenerateVehicleVin [#oxgeneratevehiclevin]

Generate a unique vehicle identification number that doesn't exist in database.

```lua
Ox.GenerateVehicleVin(modelName)
```

**Parameters**

* modelName: `string`
  * Vehicle information (i.e. model and make) are used as part of the VIN.

**Returns**

* `string`

## Ox.GetAccount [#oxgetaccount]

Get the `OxAccount` with the given accountId.

```lua
Ox.GetAccount(accountId)
```

**Parameters**

* accountId: `number`

**Returns**

* [`OxAccount`](/ox_core/Classes/Server/OxAccount)

## Ox.GetCharacterAccount [#oxgetcharacteraccount]

Get the default `OxAccount` for a character by their charId or stateId.

```lua
Ox.GetCharacterAccount(id)
```

**Parameters**

* id: `number` | `string`

**Returns**

* [`OxAccount`](/ox_core/Classes/Server/OxAccount)

## Ox.GetCharIdFromStateId [#oxgetcharidfromstateid]

Get a character's charId from their stateId.\
*Note: This queries the database and shouldn't be used excessively*

```lua
Ox.GetCharIdFromStateId(stateId)
```

**Parameters**

* stateId: `string`

**Returns**

* `number`

## Ox.GetGroupAccount [#oxgetgroupaccount]

Get the `OxAccount` for a group.

```lua
Ox.GetGroupAccount(groupName)
```

**Parameters**

* groupName: `string`

**Returns**

* [`OxAccount`](/ox_core/Classes/Server/OxAccount)

## Ox.GetGroupsByType [#oxgetgroupsbytype]

Returns an array of group names which have the given group type.

```lua
Ox.GetGroupsByType(groupType)
```

**Parameters**

* groupType: `string`

**Returns**

* `string[]`

## Ox.GetGroup [#oxgetgroup]

Get an `OxGroup` from its name.

```lua
Ox.GetGroup(name)
```

**Parameters**

* name: `string`

**Returns**

* `OxGroup`

## Ox.GetPlayer [#oxgetplayer]

Get an `OxPlayer` from its player id.

```lua
Ox.GetPlayer(playerId)
```

**Parameters**

* playerId: `number`

**Returns**

* [`OxPlayer`](/ox_core/Classes/Server/OxPlayer)

## Ox.GetPlayerFromFilter [#oxgetplayerfromfilter]

Get the first `OxPlayer` matching a filter.

```lua
Ox.GetPlayerFromFilter(filter)
```

**Parameters**

* filter?: `{ [string]: any }`
  * Compare player fields and metadata against the given key-value pairs.
  * Groups can be given as a string or array of strings to match.

**Returns**

* [`OxPlayer`](/ox_core/Classes/Server/OxPlayer)

## Ox.GetPlayerFromUserId [#oxgetplayerfromuserid]

Get an `OxPlayer` from its user id.

```lua
Ox.GetPlayerFromUserId(userId)
```

**Parameters**

* userId: `number`

**Returns**

* [`OxPlayer`](/ox_core/Classes/Server/OxPlayer)

## Ox.GetPlayerFromCharId [#oxgetplayerfromcharid]

Get an `OxPlayer` from its character id.

```lua
Ox.GetPlayerFromCharId(charId)
```

**Parameters**

* charId: `number`

**Returns**

* [`OxPlayer`](/ox_core/Classes/Server/OxPlayer)

## Ox.GetPlayers [#oxgetplayers]

Get an array of containing `OxPlayer` for all players matching a filter, if given.

```lua
Ox.GetPlayers(filter)
```

**Parameters**

* filter?: `{ [string]: any }`
  * Compare player fields and metadata against the given key-value pairs.
  * Groups can be given as a string or array of strings to match.

**Returns**

* [`OxPlayer[]`](/ox_core/Classes/Server/OxPlayer)

## Ox.GetVehicle [#oxgetvehicle]

Get an `OxVehicle` from its entity id.

```lua
Ox.GetVehicle(entityId)
```

**Parameters**

* entityId: `number`

**Returns**

* [`OxVehicle`](/ox_core/Classes/Server/OxVehicle)

## Ox.GetVehicleFromFilter [#oxgetvehiclefromfilter]

Get the first `OxVehicle` matching a filter.

```lua
Ox.GetVehicleFromFilter(filter)
```

**Parameters**

* filter?: `{ [string]: any }`
  * Compare vehicle fields and metadata against the given key-value pairs.

**Returns**

* [`OxVehicle`](/ox_core/Classes/Server/OxVehicle)

## Ox.GetVehicleFromNetId [#oxgetvehiclefromnetid]

Get an `OxVehicle` from its network id.

```lua
Ox.GetVehicleFromNetId(netId)
```

**Parameters**

* netId: `number`

**Returns**

* [`OxVehicle`](/ox_core/Classes/Server/OxVehicle)

## Ox.GetVehicleFromVin [#oxgetvehiclefromvin]

Get an `OxVehicle` from its VIN.

```lua
Ox.GetVehicleFromVin(vin)
```

**Parameters**

* vin: `string`

**Returns**

* [`OxVehicle`](/ox_core/Classes/Server/OxVehicle)

## Ox.GetVehicles [#oxgetvehicles]

Get an array of containing `OxVehicle` for all vehicles matching a filter, if given.

```lua
Ox.GetVehicles(filter)
```

**Parameters**

* filter?: `{ [string]: any }`
  * Compare vehicle fields and metadata against the given key-value pairs.

**Returns**

* [`OxVehicle[]`](/ox_core/Classes/Server/OxVehicle)

## Ox.RemoveGroupPermission [#oxremovegrouppermission]

Removes a permission from a specified group and minimum grade.

```lua
Ox.RemoveGroupPermission(groupName, grade, permission)
```

**Parameters**

* groupName: `string`
* grade: `number`
* permission: `string`

## Ox.SaveAllPlayers [#oxsaveallplayers]

Save all players to the database.

```lua
Ox.SaveAllPlayers()
```

## Ox.SaveAllVehicles [#oxsaveallvehicles]

Save all vehicles to the database.

```lua
Ox.SaveAllVehicles()
```

## Ox.SetGroupPermission [#oxsetgrouppermission]

Assigns a permission to a specified group and minimum grade, which will be inherited by higher grades.

```lua
Ox.SetGroupPermission(groupName, grade, permission, value)
```

**Parameters**

* groupName: `string`
* grade: `number`
* permission: `string`
* value: `allow` | `deny`

**Example**

```lua
-- Adding a permission to a group (server side)
Ox.SetGroupPermission('police', 1, 'handcuff', 'allow')

-- Checking if a player has the 'handcuff' permission
if player.hasPermission('group.police.handcuff') then
    -- Do something
end
```

## Ox.SpawnVehicle [#oxspawnvehicle]

Spawns an `OxVehicle` with the given dbId, if it hasn't already been spawned.

```lua
Ox.SpawnVehicle(dbId, coords, heading)
```

**Parameters**

* dbId: `number`
* coords: `vector3`
* heading?: `number`

**Returns**

* [`OxVehicle`](/ox_core/Classes/Server/OxVehicle)

## Ox.GetLicense [#oxgetlicense]

Get license data from its name.

```lua
Ox.GetLicense(name)
```

**Parameters**

* name: `string`

**Returns**

* `OxLicense`

## Ox.GetLicenses [#oxgetlicenses]

Get all licenses' data.

```lua
Ox.GetLicenses()
```

**Returns**

* `OxLicense[]`

## Ox.GetGroupActivePlayers [#oxgetgroupactiveplayers]

Returns an array of all active players in the specified group.

```lua
Ox.GetGroupActivePlayers(groupName)
```

**Parameters**

* groupName: `string`

**Returns**

* `number[]`

## Ox.GetGroupActivePlayersByType [#oxgetgroupactiveplayersbytype]

Returns an array of all active players aggregated from groups matching the specified type.

```lua
Ox.GetGroupActivePlayers(groupType)
```

**Parameters**

* groupType: `string`

**Returns**

* `number[]`

## Ox.BanUser [#oxbanuser]

Bans a user from the server.

```lua
Ox.BanUser(userId, reason, hours)
```

**Parameters**

* userId: `number`
* reason?: `string`
* hours?: `number`

**Returns**

* `boolean`

## Ox.IsUserBanned [#oxisuserbanned]

Checks if a user is currently banned and returns ban details if they are.

```lua
Ox.IsUserBanned(userId)
```

**Parameters**

* userId: `number`

**Returns**

* `BanDetails` | `nil`
  * reason: `string`
  * banned\_at: `string`
  * unban\_at: `string`
  * userId: `number`
  * token: `string`

## Ox.UnbanUser [#oxunbanuser]

Removes a ban from a user.

```lua
Ox.UnbanUser(userId)
```

**Parameters**

* userId: `number`

**Returns**

* `boolean`
