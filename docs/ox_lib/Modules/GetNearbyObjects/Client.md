### lib.getNearbyObjects

Get the object handle and coords of all objects within range of a set of coordinates.

```lua
lib.getNearbyObjects(coords, maxDistance)
```

* coords: `vector3`
  * The coords to check from.
* maxDistance: `number`
  * The max distance to check.

Return:

* `{ object: number, coords: vector3 }[]`
