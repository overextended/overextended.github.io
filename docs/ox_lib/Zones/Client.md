Faster alternative to PolyZone utilising [glm.polygon](https://github.com/gottfriedleibniz/lua/blob/luaglm/EXTENDED.md#polygon).

## lib.zones.poly

```lua
lib.zones.poly(data)
```

* data: `table`
  * points: `vector3[]`
    * All z values must match
  * thickness?: `number`
    * Default: `4`
  * onEnter: `function`(self: `table`)
  * onExit: `function`(self: `table`)
  * inside: `function`(self: `table`)
  * debug?: `boolean`

## lib.zones.box

```lua
lib.zones.box(data)
```

* data: `table`
  * coords: `vector3`
  * size?: `vector3`
    * Default: `vec3(4, 4, 4)`
  * rotation?: `number`
    * Angle in degrees
  * onEnter: `function`(self: `table`)
  * onExit: `function`(self: `table`)
  * inside: `function`(self: `table`)
  * debug?: `boolean`

## lib.zones.sphere

```lua
lib.zones.sphere(data)
```

* data: `table`
  * coords: `vector3`
  * radius?: `number`
    * Default: `2`
  * onEnter: `function`(self: `table`)
  * onExit: `function`(self: `table`)
  * inside: `function`(self: `table`)
  * debug?: `boolean`

## Usage Examples

```lua
function onEnter(self)
    print('entered zone', self.id)
end

function onExit(self)
    print('exited zone', self.id)
end

function inside(self)
    print('you are inside zone ' .. self.id)
end

local poly = lib.zones.poly({
    points = {
        vec(413.8, -1026.1, 29),
        vec(411.6, -1023.1, 29),
        vec(412.2, -1018.0, 29),
        vec(417.2, -1016.3, 29),
        vec(422.3, -1020.0, 29),
        vec(426.8, -1015.9, 29),
        vec(431.8, -1013.0, 29),
        vec(437.3, -1018.4, 29),
        vec(432.4, -1027.2, 29),
        vec(424.7, -1023.5, 29),
        vec(420.0, -1030.2, 29),
        vec(409.8, -1028.4, 29),
    },
    thickness = 2,
    debug = true,
    inside = inside,
    onEnter = onEnter,
    onExit = onExit
})

local sphere = lib.zones.sphere({
    coords = vec3(442.5363, -1017.666, 28.65637),
    radius = 1,
    debug = true,
    inside = inside,
    onEnter = onEnter,
    onExit = onExit
})

local box = lib.zones.box({
    coords = vec3(442.5363, -1017.666, 28.65637),
    size = vec3(1, 1, 1),
    rotation = 45,
    debug = true,
    inside = inside,
    onEnter = onEnter,
    onExit = onExit
})
```

Zones can be deleted by using the remove method.

```lua
poly:remove()
sphere:remove()
box:remove()
```

## Zone creation script

Similarly to PolyZone, there is a zone creation script included.

To use it use the `/zone` with `poly`, `box` or `sphere` as args.

Available controls will be displayed on the right side.

Once saved you will find the created zone details in created_zones.lua within ox_lib
