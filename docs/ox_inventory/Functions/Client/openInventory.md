import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Opens an inventory using the passed data.

```lua
exports.ox_inventory:openInventory(invType, data)
```
* invType: `string`
  * `'player'`
  * `'shop'`
  * `'stash'`
  * `'crafting'`
  * `'container'`
  * `'drop'`
  * `'glovebox'`
  * `'trunk'`
  * `'dumpster'`
* data: `number` or `string` or `table`

<Tabs>
<TabItem value="1" label="Player">

**Open the target player's inventory.**

```lua
exports.ox_inventory:openInventory('player', 3)
```

</TabItem>
<TabItem value="2" label="Shop">

**Open the fourth "General Store" [location](https://github.com/overextended/ox_inventory/blob/main/data/shops.lua#L14).**

```lua
exports.ox_inventory:openInventory('shop', { type = 'General', id = 4 })
```

</TabItem>
<TabItem value="3" label="Stash">

**Open the first stash in [data/stashes](https://github.com/overextended/ox_inventory/blob/main/data/stashes.lua#L2-L19).**

```lua
exports.ox_inventory:openInventory('stash', 1)
```

**Open a custom stash (created on the server with RegisterStash).**

```lua
exports.ox_inventory:openInventory('stash', 'society_police')
```

**Open a stash with a specific owner.**

```lua
exports.ox_inventory:openInventory('stash', { id = 'police_locker', owner = 'license:xxxxxxxx' })
```

</TabItem>
</Tabs>
