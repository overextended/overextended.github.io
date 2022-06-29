---
title: Server
sidebar_position: 1
---

## Ox.GetPlayer

Return an instance of CPlayer for the given player source.

```lua
local player = Ox.GetPlayer(source)
print(json.encode(player, { indent = true }))
```

## Ox.GetPlayers

Returns an array containing all players. Methods will not be applied if the first argument is false.

```lua
local players = Ox.GetPlayers(usemetatable)

for i = 1, #players do
    local player = players[i]
    print(json.encode(player, { indent = true }))
end
```
