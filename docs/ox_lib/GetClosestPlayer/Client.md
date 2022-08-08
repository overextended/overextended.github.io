### lib.getClosestPlayer

Get the id, ped, and coords of the closest player to a set of coordinates.

```lua
---@param coords vector3 The coords to check from.
---@param maxDistance number The max distance to check.
---@param includePlayer boolean Whether or not to include the current player.
---@return number? playerId
---@return number? playerPed
---@return vector3? playerCoords
function lib.getClosestPlayer(coords, maxDistance, includePlayer) end
```
