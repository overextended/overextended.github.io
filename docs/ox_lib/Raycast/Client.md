### lib.raycast.cam

Starts a shapetest originating from the camera, extending to ~10m.

```lua
---@param fov number? GetFinalRenderedCamFov
---@param ratio number? GetAspectRatio
---@param flag number? Defaults to 1|2|8|16 (see: https://docs.fivem.net/natives/?_0x377906D8A31E5586)
---@return number entityHit
---@return vector3 endCoords
---@return vector3 surfaceNormal
---@return number materialHash
function lib.raycast.cam(fov, ratio, flag) end
```
