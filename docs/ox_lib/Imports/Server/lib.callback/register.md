---
id: register
title: lib.callback.register
---

```lua
-- name: string
-- cb: function
lib.callback.register(name, cb)
```

```lua
lib.callback.register('ox_inventory:getItemCount', function(source, item, metadata, target)
	local inventory = target and Inventory(target) or Inventory(source)
	return (inventory and Inventory.GetItem(inventory, item, metadata, true)) or 0
end)
```
