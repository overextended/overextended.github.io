### lib.getNearbyVehicles

Get the id and coords of all vehicles within range of a set of coordinates.

```lua
---@param coords vector3 The coords to check from.
---@param maxDistance number The max distance to check.
---@param includePlayerVehicle boolean Whether or not to include the player's current vehicle.
---@return number[]
function lib.getNearbyVehicles(coords, maxDistance, includePlayerVehicle) end
```
