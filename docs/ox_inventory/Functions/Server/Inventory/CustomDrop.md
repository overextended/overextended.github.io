Drops can be created from other resources, containing a variety of items and utilising a custom label (instead of 'Drop 32648').

```lua
-- prefix: string
-- items: table
    -- name: string
    -- count: number
    -- metadata: table (optional)
-- coords: vector3
-- slots: number (optional)
-- maxWeight: number (optional)
-- instance: string | number (optional)
exports.ox_inventory:CustomDrop(prefix, items, coords, slots, maxWeight, instance)
```

```lua
exports.ox_inventory:CustomDrop('Carcass', {
    {'meat', 5, { grade = 2, type = 'deer' }},
    {'hide', 5, { grade = 2, type = 'deer' }}
}, coords)
```
