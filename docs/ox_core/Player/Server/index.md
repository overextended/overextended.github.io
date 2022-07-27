---
title: Server
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Ox.GetPlayer

Return an instance of CPlayer for the given player source.
<Tabs>
<TabItem value='lua' label='Lua'>

```lua
local player = Ox.GetPlayer(source)
print(json.encode(player, { indent = true }))
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
import { GetPlayer } from '@overextended/ox_core/server';

const player = GetPlayer(source);
console.log(JSON.stringify(player));
```

</TabItem>
</Tabs>

## Ox.GetPlayers

Returns an array containing all players. Methods will not be applied if the first argument is false.
Players can be filtered to only return players that match the given properties, or groups.

<Tabs>
<TabItem value='lua' label='Lua'>

```lua
-- Get an array containing all players in the police or sheriff groups, with grade 3 or higher.
local filter = { groups = {['sheriff'] = 3, ['police'] = 3} })

local players = Ox.GetPlayers(usemetatable, filter)

for i = 1, #players do
    local player = players[i]
    print(json.encode(player, { indent = true }))
end
```

</TabItem>
<TabItem value='js/ts' label='JS/TS'>

```ts
import { GetPlayers } from '@overextended/ox_core/server';

// Get an array containing all players in the police or sheriff groups, with grade 3 or higher.
const filter = { groups: { sheriff: 3, police: 3 } })

const players = GetPlayers(useclass, filter);
for (let i = 0; i < players.length; i++) {
  const player = players[i];
  console.log(JSON.stringify(player));
}
```

</TabItem>
</Tabs>
