import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Opens an inventory using the passed data.
Forces a player to open an inventory, without usual security checks (groups, coords).

```lua
exports.ox_inventory:forceOpenInventory(playerId, invType, data)
```

- playerId: `number`
- invType: `string`
  - `'player'`
  - `'stash'`
  - `'container'`
  - `'drop'`
  - `'glovebox'`
  - `'trunk'`
  - `'dumpster'`
- data: `number` or `string` or `table`

<Tabs>
<TabItem value="1" label="Player">

**Open the target player's inventory.**

```lua
exports.ox_inventory:forceOpenInventory(1, 'player', 3)
```

**Admin command to open a player's inventory.**

```lua
RegisterCommand('openplayerinv', function(source, args)
	  exports.ox_inventory:forceOpenInventory(source, 'player', tonumber(args[1]))
end, true)
```

</TabItem>
<TabItem value="2" label="Stash">

**Open the first stash in [data/stashes](https://github.com/overextended/ox_inventory/blob/main/data/stashes.lua#L2-L19).**

```lua
exports.ox_inventory:forceOpenInventory(1, 'stash', 'apartment420')
```

**Open a custom stash (created on the server with RegisterStash).**

```lua
exports.ox_inventory:forceOpenInventory(1, 'stash', 'society_police')
```

**Open a stash with a specific owner.**

```lua
exports.ox_inventory:forceOpenInventory(1, 'stash', { id = 'police_locker', owner = 'license:xxxxxxxx' })
```

</TabItem>
</Tabs>
