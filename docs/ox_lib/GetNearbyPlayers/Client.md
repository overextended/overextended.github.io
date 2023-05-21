### lib.getNearbyPlayers

Get the id, ped, and coords of all players within range of a set of coordinates.

```lua
lib.getNearbyPlayers(coords, maxDistance, includePlayer)
```

* coords: `vector3`
  * The coords to check from.
* maxDistance: `number`
  * The max distance to check.
* includePlayer: `boolean`
  * Whether or not to include the current player.

Return:

* `{ id: number, ped: number, coords: vector3 }[]`
