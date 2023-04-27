Sets the maximum weight available for an inventory.

```lua
exports.ox_inventory:SetMaxWeight(inv, maxWeight)
```

* inv: `table` or `string` or `number`
* maxWeight: `number`

**Example:**

```lua
local ox_inventory = exports.ox_inventory

-- Set the max weight for player 1's inventory to 20kg.
ox_inventory:SetMaxWeight(1, 20000)
```
