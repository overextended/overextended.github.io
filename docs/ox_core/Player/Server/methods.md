---
title: Methods
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These functions are inherited by instances of CPlayer.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local player = Ox.GetPlayer(source)
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
import { GetPlayer } from '@overextended/ox_core/server';

const player = GetPlayer(source);
```

</TabItem>
</Tabs>

## player.set

Sets the player's metadata for key to the given value.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local key, value = 'iq', 300
player.set(key, value)
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
const [key, value] = ['iq', 300];
player.set(key, value);
```

</TabItem>
</Tabs>

## player.get

Return the player's metadata. Sending an argument will retrieve a specific metadata key.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local data = player.get()
local iq = player.get('iq')
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
const data = player.get();
const iq = player.get('iq');
```

</TabItem>
</Tabs>

## player.getAccounts

Returns an instance of CAccount for the player.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
player.getAccounts()
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
player.getAccounts()
```

</TabItem>
</Tabs>

## player.getCoords

Return the player's world position. The value will be cached for future calls, so send true for the first argument to update it.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local coords = player.getCoords(update)
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
const coords = player.getCoords(update);
```

</TabItem>
</Tabs>

## player.setGroup

Updates the player's grade for the given group. Any value below 1 will remove the group from the player.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local group, grade = 'police', 3
player.setGroup(group, grade)
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
const [group, grade] = ['police', 3];
player.setGroup(group, grade);
```

</TabItem>
</Tabs>

## player.hasGroup

Check if the player is a member of a given group, and returns the matching group name and grade.  
The filter can be a string, array, or object where key is the group, and value is the minimum grade.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local filter = { police = 0, sheriff = 0 }
local group, grade = player.hasGroup(filter)
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
const filter = { police: 0, sheriff: 0 };
const [group, grade] = player.hasGroup(filter);
```

</TabItem>
</Tabs>

## player.isPlayerInScope

Check if the given source is inside the player's scope.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local target = 2
local inScope = player.isPlayerInScope(target)
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
const target = 2;
const inScope = player.isPlayerInScope(target);
```

</TabItem>
</Tabs>

## player.triggerScopedEvent

Trigger a client event for all players in the player's scope.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
player.triggerScopedEvent(eventName, ...)
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
player.triggerScopedEvent(eventName, ...)
```

</TabItem>
</Tabs>
