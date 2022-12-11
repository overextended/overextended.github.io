### lib.getNearbyPlayers

Get the id, ped, and coords of all players within range of a set of coordinates.

```lua
function lib.getNearbyPlayers(coords, maxDistance, includePlayer) end
```

* coords: `vector3`
  * The coords to check from.
* maxDistance: `number`
  * The max distance to check.
* includePlayer: `boolean`
  * Whether or not to include the current player.

Return:

* `number[]`
