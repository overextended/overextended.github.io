---
title: Events
---

## Client events

### ox:playerLoaded

Triggered once the player has selected a character and spawned.

```lua
AddEventHandler('ox:playerLoaded', function(data) end)
```

### ox:playerLogout

Triggered when the player enters character selection if they were previously playing a character.

```lua
AddEventHandler('ox:playerLogout', function() end)
```

## Networked events

### ox:setGroup

Triggered when a player's grade in a group is modified on the server with `player.setGroup`.

```lua
RegisterNetEvent('ox:setGroup', function(source, group, grade) end)
```
