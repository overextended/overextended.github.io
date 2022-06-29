---
title: Methods
---

These functions are inherited by instances of CVehicle.

```lua
local vehicle = Ox.GetVehicle(entity)
```

## vehicle.set

Sets the vehicle's metadata for key to the given value.

```lua
local key, value = 'vin', '1HGBH41JXMN109186'
vehicle.set(key, value)
```

## vehicle.get

Return the vehicle's metadata. Sending an argument will retrieve a specific metadata key.

```lua
local data = vehicle.get()
local vin = vehicle.get('vin')
```

## vehicle.getCoords

Return the vehicle's world position. The value will be cached for future calls, so send true for the first argument to update it.

```lua
local coords = vehicle.getCoords(update)
```

## vehicle.delete

Remove the vehicle from the database and despawns the entity.

```lua
vehicle.delete()
```

## vehicle.store

Save the vehicle to the database and despawns the entity.

```lua
local store = 'garagea'
vehicle.store(store)
```
