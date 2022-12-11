---
title: invBusy
---

Returns whether the player's inventory is currently running an action (i.e. using an item)

* invBusy: `boolean`

```lua
local isInventoryBusy = LocalPlayer.state.invBusy

if isInventoryBusy then
    -- Do stuff when busy
else
    -- Do stuff when not busy
end
```
