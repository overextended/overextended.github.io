---
title: lib.disableControls
---

```lua
lib.disableControls:Add(...)
lib.disableControls:Remove(...)
lib.disableControls:Clear(...)
lib.disableControls()
```

```lua
lib.disableControls:Add(23, 25, 36, 263)

CreateThread(function()
	while true do
		Wait(0)
		lib.disableControls()
	end
end)
```
