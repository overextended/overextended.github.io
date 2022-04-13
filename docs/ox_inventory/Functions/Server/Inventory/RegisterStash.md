Creates a new custom stash.

```lua
-- id: string or number
-- label: string
-- slots: number
-- maxWeight: number
-- owner: string or boolean or nil
-- groups: table
-- coords: vector3
exports.ox_inventory:RegisterStash(id, label, slots, maxWeight, owner, groups, coords)
```

* `id` - Stash identifier when loading from the database.  
* `label` - Display name when inventory is open.
* `owner` - Defines stash permissions. 
    * `string`: Can only access the stash linked to the owner.
    * `true`: Each player has a unique stash but can request other player's stashes.
    * `nil`: Always shared.
* `groups` - Player groups (jobs) able to access the stash.
    * Table of group names where the numeric value is the minimum grade required.
    * `{['police'] = 0, ['ambulance'] = 2}`

:::caution

This function needs to be triggered before a player can open the stash.
Occasioanlly you can use the `ox_inventory:openInventory` function.
:::

**Example:**

For a use case example on this function check out the written [Guide](../../../Guides/stashes.md) for it.
