Adds an item into the specified inventory.

Should be used alongside [CanCarryItem](./CanCarryItem.md).

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
    if not success then
        if reason == 'overburdened' then
            TriggerClientEvent('ox_inventory:notify', source, {type = 'error', text = shared.locale('cannot_carry', count, data.label), duration = 2500})
        end
    end
end)
```