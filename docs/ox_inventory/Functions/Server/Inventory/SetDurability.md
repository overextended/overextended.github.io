Sets durability onto the specified slot.

Can be used for repairing weapons.

```lua
-- inv: string or number
-- slot: number
-- durability: number
exports.ox_inventory:SetDurability(inv, slot, durability)
```

**Example:**
```lua
local ox_inventory = exports.ox_inventory

-- Set the durability of the item in slot 3 of source player's inventory to 100
ox_inventory:SetDurability(source, 3, 100)

-- Set the durability of the source player's current weapon to 100
local weapon = ox_inventory:GetCurrentWeapon(source)

if weapon then
    ox_inventory:SetDurability(source, weapon.slot, 100)
end
```