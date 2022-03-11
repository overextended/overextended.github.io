Sets metadata on the specified slot.

```lua
-- inv: string or number
-- slot: number
-- metadata: table
ox_inventory:SetMetadata(inv, slot, metadata)
```

**Example:**
```lua
local ox_inventory = exports.ox_inventory

local water = ox_inventory:Search(source, 1, 'water')
for k, v in pairs(water) do
    print('\n______________'..'\n- index '..k)
    print(v.name, 'slot: '..v.slot, 'metadata: '..json.encode(v.metadata))
    water = v
end
water.metadata.type = 'clean'
ox_inventory:SetMetadata(source, water.slot, water.metadata)
print(('modified %sx water in slot %s with new metadata'):format(water.count, water.slot))
```