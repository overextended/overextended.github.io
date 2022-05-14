An alternative to PolyZone utilising [glm.polygon](https://github.com/gottfriedleibniz/lua/blob/luaglm/EXTENDED.md#polygon).

```lua
-- data: table
    -- points: vector3[] all z values must match
    -- thickness: number (optional), default 4
    -- debug: bool (optional)
lib.zones.poly(data)

-- data: table
    -- coords: vector3
    -- size: vector3 (optional), default is vec3(4, 4, 4)
    -- rotation: number (optional), angle in degrees
    -- debug: bool (optional)
lib.zones.box(data)

-- data: table
    -- coords: vector3
    -- radius: number (optional), default is 2
    -- debug: bool (optional)
lib.zones.sphere(data)
```

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
	inside = insideZone,
	onEnter = onEnter,
	onExit = onExit
})
```
