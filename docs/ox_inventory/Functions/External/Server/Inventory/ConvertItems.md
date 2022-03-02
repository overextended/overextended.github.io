Takes traditional item data and updates it to support ox_inventory.

```lua
-- playerId: number
-- items: table
exports.ox_inventory:ConvertItems(playerId, items)
```

Data conversion example:
 ```
 Old: [{"cola":1, "bread":3}]
 New: [{"slot":1,"name":"cola","count":1}, {"slot":2,"name":"bread","count":3}]
```