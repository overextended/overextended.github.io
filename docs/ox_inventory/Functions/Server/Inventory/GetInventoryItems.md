Returns all slots with items in a inventory.

```lua
exports.ox_inventory:GetInventoryItems(inv, owner)
```

* inv: `number` or `table`
* owner?: `string` or `boolean`

**Example:**

```lua
local playerItems = exports.ox_inventory:GetInventoryItems(source)
```
