Returns the item from the specified inventory.

```lua
-- inv: string or number
-- item: table or string
-- metadata: any (optional)
-- returnsCount: boolean (optional)
exports.ox_inventory:GetItem(inv, item, metadata, returnsCount)
```

If `returnsCount` is set to true, the returned value will include `count` based on
how many times the item was found.

