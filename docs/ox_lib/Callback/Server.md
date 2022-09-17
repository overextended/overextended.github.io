### lib.callback.register
```lua
lib.callback.register(name, cb)
```
* name: `string`
* cb: `function`

```lua
lib.callback.register('ox_inventory:getItemCount', function(source, item, metadata, target)
    local inventory = target and Inventory(target) or Inventory(source)
    return (inventory and Inventory.GetItem(inventory, item, metadata, true)) or 0
end)
```
