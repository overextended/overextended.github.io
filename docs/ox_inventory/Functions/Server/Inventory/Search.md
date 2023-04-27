Searches an inventory for a specified item.

```lua
exports.ox_inventory:Search(inv, search, item, metadata)
```

* inv: `table` or `string` or `number`
* search: `string`
* item: `table` or `string`
* metadata?: `table` or `string`

`search` can be either `'slots'` or `'count'`, where slots will return a table of data
and count will return the found amount of the specified item.
