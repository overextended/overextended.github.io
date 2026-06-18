# OxVehicle (/docs/ox_core/Classes/Server/OxVehicle)



## OxVehicle [#oxvehicle]

* entity: `number`
* make: `string`
* model: `string`
* netId: `number`
* plate: `string`
* group?: `string`
* id?: `number`
* owner?: `number`
* vin?: `string`

## OxVehicle.delete [#oxvehicledelete]

Despawns the vehicle and removes it from the database.

```lua
vehicle.delete()
```

## OxVehicle.despawn [#oxvehicledespawn]

Despawns the vehicle, optionally saving it to the database.

```lua
vehicle.despawn(save)
```

**Parameters**

* save?: `boolean`

## OxVehicle.get [#oxvehicleget]

Get the value of specific key from the vehicle's metadata.

```lua
vehicle.get(key)
```

**Parameters**

* key: `string`

**Returns**

* `unknown`

## OxVehicle.getCoords [#oxvehiclegetcoords]

Returns the vehicle's current coordinates.

```lua
vehicle.getCoords()
```

**Returns**

* `vector3`

## OxVehicle.getProperties [#oxvehiclegetproperties]

Returns the vehicle's properties object.

```lua
vehicle.getProperties()
```

**Returns**

* `VehicleProperties`

## OxVehicle.getState [#oxvehiclegetstate]

Returns the vehicle's statebag interface.

```lua
vehicle.getState()
```

**Returns**

* `StateBagInterface`

## OxVehicle.getStored [#oxvehiclegetstored]

Returns the vehicle's "stored" state.

```lua
vehicle.getStored()
```

**Returns**

* `string?`

## OxVehicle.respawn [#oxvehiclerespawn]

Spawns a new entity for the vehicle, removing an existing entity if it exists and reapplying stored vehicle properties.

```lua
vehicle.respawn(coords, rotation)
```

**Parameters**

* coords?: `vector3`
* rotation?: `vector3`

## OxVehicle.save [#oxvehiclesave]

Saves the vehicle to the database.

```lua
vehicle.save()
```

**Returns**

* `number`

## OxVehicle.set [#oxvehicleset]

Stores a value in the vehicle's metadata, which will be saved to the database (*this behaviour is likely to be removed*).

```lua
vehicle.set(key, value)
```

**Parameters**

* key: `string`
* value: `any`

## OxVehicle.setGroup [#oxvehiclesetgroup]

Sets the vehicle as a group vehicle "owned" by the given group name, or removes the group if omitted.

```lua
vehicle.setGroup(groupName)
```

**Parameters**

* groupName?: `string`

## OxVehicle.setOwner [#oxvehiclesetowner]

Sets the owner of a vehicle as the given charId, or removes the owner if omitted.

```lua
vehicle.setOwner(charId)
```

**Parameters**

* charId?: `number`

## OxVehicle.setPlate [#oxvehiclesetplate]

Sets the registered plate of a vehicle to the given value. The plate will be padded or stripped to 8 characters.

This plate is not necessarily the displayed plate on vehicle properties.

```lua
vehicle.setPlate(plate: string)
```

## OxVehicle.setProperties [#oxvehiclesetproperties]

Saves the properties (mods, extras, etc.) stored on the vehicle, optionally applying them to the entity.

```lua
vehicle.setProperties(properties, apply)
```

**Parameters**

* properties: `VehicleProperties`
* apply?: `boolean`

## OxVehicle.setStored [#oxvehiclesetstored]

Sets the vehicle as "stored" at the given value (e.g. impound, garage, null), and optionally despawns and saves the vehicle.

```lua
vehicle.setStored(value, despawn)
```

**Parameters**

* value?: `string`
* despawn?: `boolean`
