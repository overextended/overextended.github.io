### lib.raycast.cam

Starts a shapetest originating from the camera, extending to ~10m.

```lua
function lib.raycast.cam(flags, p8) end
```

* flags?: `number`
  * Defaults to 1|2|8|16 (see: https://docs.fivem.net/natives/?_0x377906D8A31E5586)
* p8?: `number`
  * A bit mask with bits 1, 2, 4, or 7 relating to collider types. 4 and 7 are usually used.

Return:

* hit: `boolean`
* entityHit: `number`
* endCoords: `vector3`
* surfaceNormal: `vector3`
* materialHash: `number`
