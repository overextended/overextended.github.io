### lib.getNearbyPlayers

Get the id, ped, and coords of all players within range of a set of coordinates.

```lua
---@param coords vector3 The coords to check from.
---@param maxDistance number The max distance to check.
---@param includePlayer boolean Whether or not to include the current player.
---@return number[]
function lib.getNearbyPlayers(coords, maxDistance, includePlayer) end
```
