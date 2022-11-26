---
title: Events
---

## Server events

### ox:playerLoaded

Triggered after a player has selected a character.

```lua
AddEventHandler('ox:playerLoaded', function(source, userid, charid) end)
```

### ox:setGroup

Triggered when a player's grade in a group is modified with `player.setGroup`.

```lua
AddEventHandler('ox:setGroup', function(source, group, grade) end)
```

### ox:playerLogout

Triggered when the player logs out from their current character or disconnects from the server.

```lua
AddEventHandler('ox:playerLogout', function(source, userid, charid) end)
```

### ox:characterDeleted

Triggered when the player has deleted a character.

```lua
AddEventHandler('ox:characterDeleted', function(source, userid, charid) end)
```

## Networked events

### ox:playerDeath

Triggered on player death and revival.

```lua
RegisterNetEvent('ox:playerDeath', function(isDead) end)
```

### ox:setPlayerInService

Can be triggered to set a player as "in service" for a specific group they are a member of.

```lua
RegisterNetEvent('ox:setPlayerInService', function(group) end)
```
