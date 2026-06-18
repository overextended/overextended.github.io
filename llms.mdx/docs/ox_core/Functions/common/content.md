# Common (/docs/ox_core/Functions/common)



## Ox.GetGroupPermissions [#oxgetgrouppermissions]

Returns the `OxGroupPermissions` object for the group

```lua
Ox.GetGroupPermissions(groupName)
```

**Parameters**

* groupName: `string`

**Returns**

* `OxGroupPermissions`

## Ox.GetTopVehicleStats [#oxgettopvehiclestats]

Returns an object containing the top vehicle stats, either overall or for a specific category (land, air, sea).

```lua
Ox.GetTopVehicleStats(category?)
```

**Parameters**

* category?: `string`

**Returns**

* `VehicleStats` | `{ [string]: VehicleStats }`

### VehicleStats [#vehiclestats]

* `object`
  * acceleration: `number`
  * braking: `number`
  * handling: `number`
  * speed: `number`
  * traction: `number`

## Ox.GetVehicleData [#oxgetvehicledata]

Returns VehicleData for all vehicles, or optionally a specific model or array of models.

```lua
Ox.GetVehicleData(filter?)
```

**Parameters**

* filter?: `string` | `string[]`

**Returns**

* `{ [string]: VehicleData }` | `VehicleData`

### VehicleData [#vehicledata]

* `object`
  * class: `VehicleClasses`
  * doors: `number`
  * make: `string`
  * name: `string`
  * price: `number`
  * seats: `number`
  * type: `string`
  * weapons?: `true`

## Ox.GetVehicleNetworkType [#oxgetvehiclenetworktype]

Returns the netobj type of a vehicle model, which may differ from the vehicle type (e.g. blimp is networked as heli).

```lua
Ox.GetVehicleNetworkType(modelName)
```

**Parameters**

* modelName: `string`

**Returns**

* `string`
