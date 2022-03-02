Opens an inventory using on the passed data.

```lua
-- inv: string
-- data: any
exports.ox_inventory:openInventory(invType, data)

exports.ox_inventory:openInventory('player', 1)
exports.ox_inventory:openInventory('stash', 1)
exports.ox_inventory:openInventory('shop', { type = 'PoliceArmoury', id = 1 })
```