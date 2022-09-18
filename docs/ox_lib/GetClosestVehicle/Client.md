### lib.getClosestVehicle

Get the id and coords of the closest vehicle to a set of coordinates.

```lua
function lib.getClosestVehicle(coords, maxDistance, includePlayerVehicle) end
```

* coords: `vector3`
  * The coords to check from.
* maxDistance: `number`
  * The max distance to check.
* includePlayerVehicle: `boolean`
  * Whether or not to include the player's current vehicle.

Return:
* vehicle?: `number`
* vehicleCoords?: `vector3`
