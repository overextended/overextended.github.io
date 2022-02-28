---
title: lib.callback.await
---

```lua
-- name: string
-- delay: number or false
lib.callback.await(name, delay, ...)
```

```lua
local count = lib.callback('ox_inventory:getItemCount', false, 'water', {type = 'fresh'})
print(count)
```
