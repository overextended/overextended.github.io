---
title: Methods
---

These functions are inherited by instances of CPlayer.

```lua
local player = Ox.GetPlayer(source)
```

## player.set

Sets the player's metadata for key to the given value.

```lua
local key, value = 'iq', 300
player.set(key, value)
```

## player.get

Return the player's metadata. Sending an argument will retrieve a specific metadata key.

```lua
local data = player.get()
local iq = player.get('iq')
```

## player.getCoords

Return the player's world position. The value will be cached for future calls, so send true for the first argument to update it.

```lua
local coords = player.getCoords(update)
```

## player.setGroup

Updates the player's grade for the given group. A value of 0 will remove the player

```lua
local group, grade = 'police', 3
player.setGroup(group, grade)
```

## player.hasGroup

Check if the player is a member of a given group, and returns the matching group name and grade.  
The filter can be a string, array, or object where key is the group, and value is the minimum grade.

```lua
local filter = { police = 0, sheriff = 0 }
local group, grade = player.hasGroup(filter)
```

## player.isPlayerInScope

Check if the given source is inside the player's scope.

```lua
local target = 2
local inScope = player.isPlayerInScope(target)
```

## player.triggerScopedEvent

Trigger a client event for all players in the player's scope.

```lua
player.triggerScopedEvent(eventName, ...)
```
