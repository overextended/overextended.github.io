### lib.getClosestVehicle

Get the id and coords of the closest vehicle to a set of coordinates.

```lua
---@param coords vector3 The coords to check from.
---@param maxDistance number The max distance to check.
---@param includePlayerVehicle boolean Whether or not to include the player's current vehicle.
---@return number? vehicle
---@return vector3? vehicleCoords
function lib.getClosestVehicle(coords, maxDistance, includePlayerVehicle) end
```
