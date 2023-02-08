---
title: Functions
---
- Must [import](https://overextended.github.io/docs/ox_core/Getting%20Started/imports) core

### Ox.GetPlayerData
```lua
local player = Ox.GetPlayerData()
print(json.encode(player, { indent = true }))
```
- Returns PlayerIsLoaded or an instance of CPlayer for the client.
