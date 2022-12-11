Drops can be created from other resources, containing a variety of items and utilising a custom label (instead of 'Drop 32648').

```lua
exports.ox_inventory:CustomDrop(prefix, items, coords, slots, maxWeight, instance)
```

* prefix: `string`
* items: `table`
  * name: `string`
  * count: `number`
  * metadata?: `table`
* coords: `vector3`
* slots?: `number`
* maxWeight?: `number`
* instance?: `string` or `number`

```lua
exports.ox_inventory:CustomDrop('Carcass', {
    {'meat', 5, { grade = 2, type = 'deer' }},
    {'hide', 5, { grade = 2, type = 'deer' }}
}, coords)
```
