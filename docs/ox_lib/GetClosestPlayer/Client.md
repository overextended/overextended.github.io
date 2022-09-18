### lib.getClosestPlayer

Get the id, ped, and coords of the closest player to a set of coordinates.

```lua
function lib.getClosestPlayer(coords, maxDistance, includePlayer) end
```
* coords: `vector3`
  * The coords to check from.
* maxDistance: `number`
  * The max distance to check.
* includePlayer: `boolean`
  * Whether or not to include the current player.

Return:
* playerId?: `number`
* playerPed?: `nubmer`
* playerCoords?: `vector3`
