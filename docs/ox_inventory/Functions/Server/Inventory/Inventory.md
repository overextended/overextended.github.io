Returns the inventory associated with the ID (and owner if defined). Otherwise returns null
```lua
---@param id number | table
---@param owner string | boolean (optional)
exports.ox_inventory:Inventory(id, owner)
```
Example:
```lua
local inventory = exports.ox_inventory:Inventory('example_stash', false)
print(json.encode(inventory, {indent = true}))
--[[
    {
      "id": "example_stash,
      "label": "Police Stash",
      "type": "stash,
      "slots": 50,
      "weight": 0,
      "maxWeight": 100000,
      "owner": false,
      ...
    }
]]
```
