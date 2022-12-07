Creates a new custom stash.

```lua
exports.ox_inventory:RegisterStash(id, label, slots, maxWeight, owner, groups, coords)
```
* id: `string`
  * Stash identifier when loading from the database.
* label: `string`
  * Display name when inventory is open.
* slots: `number`
* maxWeight: `number`
* owner: `string` or `boolean` or `nil`
  * `string`: Can only access the stash linked to the owner.
  * `true`: Each player has a unique stash but can request other player's stashes.
  * `nil`: Always shared.
* groups: `table`
    * Table of player groups (jobs) able to access the stash.
    * Table of group names where the numeric value is the minimum grade required.
    * `{['police'] = 0, ['ambulance'] = 2}`
* coords: `vector3`

:::caution

This function needs to be triggered before a player can open the stash.
:::

**Example:**

For a use case example on this function check out the written [Guide](../../../Guides/stashes.md) for it.
