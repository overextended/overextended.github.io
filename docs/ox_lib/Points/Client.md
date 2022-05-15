# Points

Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates.  

```lua
-- coords: vector3
-- distance: number
-- data: table
lib.points.new(coords, distance, data)

local point = lib.points.new(playerCoords, 5, {
    dunak = 'nerd',
})

function point:onEnter()
    print('entered range of point', self.id)
end

function point:onExit()
    print('left range of point', self.id)
end

function point:nearby()
    DrawMarker(2, self.coords.x, self.coords.y, self.coords.z, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 1.0, 1.0, 1.0, 200, 20, 20, 50, false, true, 2, nil, nil, false)

    if self.currentDistance < 1 and IsControlJustReleased(0, 38) then
        print('inside marker', self.id)
        print(self.dunak)
    end
end
```

Points can be deleted by using the remove method.
```lua
point:remove()
```
