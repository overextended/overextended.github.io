---
title: lib.callback
---

```lua
-- name: string
-- delay: number or false
-- cb: function
lib.callback(name, delay, cb, ...)
```

```lua
lib.callback('ox_inventory:getItemCount', false, function(count)
	print(count)
end, 'water', {type = 'fresh'})
```
