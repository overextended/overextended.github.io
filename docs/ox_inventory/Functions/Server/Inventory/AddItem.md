Adds an item into the specified inventory.

Should be used alongside [CanCarryItem](./CanCarryItem.md) otherwise, the maximum weight may be exceeded.

```lua
-- inv: string or number
-- item: table or string
-- count: number
-- metadata: table or string (optional)
-- slot: number (optional)
-- cb: function (optional)
exports.ox_inventory:AddItem(inv, item, count, metadata, slot, cb)
```

**Example:**
```lua
exports.ox_inventory:AddItem(1, 'bread', 4, nil, nil, function(success, reason)
    if success then
        print(json.encode(reason, {indent=true}))
        --[[
            {
                "metadata": [],
                "label": "Bread",
                "slot": 1,
                "stack": true,
                "close": true,
                "name": "bread",
                "count": 1,
                "weight": 150
            }
        ]]
    else
        print(success)
        -- nil

        print(reason)
        -- for example if all slots are taken it will give us "inventory_full"
    end
end)
```

**Possible value of the "reason" argument for the callback function:**  
+ "invalid_item": the item doesn't exist
+ "invalid_inventory": the inventory doesn't exist
+ "inventory_full": no free slots
