---
title: invOpen
---

Returns whether the player's inventory is currently open or not.

* invOpen: `boolean`

```lua
local isInventoryOpen = LocalPlayer.state.invOpen

if isInventoryOpen then
  -- Do stuff when open
else
  -- Do stuff when closed
end
