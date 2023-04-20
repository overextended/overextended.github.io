### lib.raycast.cam

Starts a shapetest originating from the camera, extending to ~10m.

```lua
lib.raycast.cam(flags, ignore, distance)
```

* flags?: `number`
  * Defaults to 1|2|8|16 (see: https://docs.fivem.net/natives/?_0x377906D8A31E5586)
* ignore?: `number`
  * A bit mask with bits 1, 2, 4, or 7 relating to collider types. 4 and 7 are usually used.
* distance?: `number`

Return:

* hit: `boolean`
* entityHit: `number`
* endCoords: `vector3`
* surfaceNormal: `vector3`
* materialHash: `number`
