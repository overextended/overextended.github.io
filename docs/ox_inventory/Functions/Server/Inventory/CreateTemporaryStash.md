Creates a temporary stash which will be removed after some time.

```lua
exports.ox_inventory:RegisterStash(properties)
```

- properties: `table`
  - label: `string`
  - slots: `number`
  - maxWeight: `number`
  - owner?: `string` `number` or `boolean`
    - `string`: Can only access the stash linked to the owner.
    - `true`: Each player has a unique stash but can request other player's stashes.
    - The inventory is always shared if `false` or `nil`.
  - groups?: `table<string, number>`
    - Table of group names (e.g. jobs) where the numeric value is the minimum grade required.
    - `{['police'] = 0, ['ambulance'] = 2}`
  - coords?: `vector3`
    - Stash can only be accessed while nearby.
  - items?: `table<string>`
    - A table of items that the stash will contain.

Return:
- inventoryId: `string`
