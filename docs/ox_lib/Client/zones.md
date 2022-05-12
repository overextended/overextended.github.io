# Zones

More optimised version of polyzones utilising glm polygon.

```lua
-- data: table
    -- points: table of vector3s, all z values must match
    -- thickness: number (optional), default 2
    -- debug: bool (optional)
lib.zones.poly(data)

-- data: table
    -- coords: vector3
    -- size: vector3
    -- rotation: number (optional), angle in degrees
    -- debug: bool (optional)
lib.zones.box(data)

-- data: table
    -- coords: vector3
    -- radius: number (optional), default is 2
    -- debug: bool (optional)
lib.zones.sphere(data)

local zone = lib.points.box({
    coords = playerCoords,
    dunak = 'nerd',
})

function zone:onEnter()
    print('entered box', self.id)
end

function zone:onExit()
    print('exited box', self.id)
end

function zone:inside()
    print('you are inside the box ' .. self.id)
end
```
