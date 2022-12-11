Returns a table of all registered items. The format is as defined in [data/items.lua](https://github.com/overextended/ox_inventory/blob/main/data/items.lua).

```lua
exports.ox_inventory:Items()
```

The following snippet can be used in crafting resources such as okokCrafting or core_crafting, rather than querying the database.

```lua
local itemNames
ESX.RegisterServerCallback('crafting:itemNames', function(source, cb)
    if not itemNames then
        itemNames = {}
        for item, data in pairs(exports.ox_inventory:Items()) do
            itemNames[item] = data.label
        end
    end
    cb(itemNames)
end)
```
