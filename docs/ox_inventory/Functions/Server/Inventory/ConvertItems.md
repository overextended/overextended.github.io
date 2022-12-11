Takes traditional item data and updates it to support ox_inventory.

```lua
exports.ox_inventory:ConvertItems(playerId, items)
```

* playerId: `number`
* items: `table`

Data conversion example:

```lua
Old: [{"cola":1, "bread":3}]
New: [{"slot":1,"name":"cola","count":1},
{"slot":2,"name":"bread","count":3}]
```
