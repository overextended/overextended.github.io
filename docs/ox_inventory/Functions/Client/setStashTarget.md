Forces the secondary-inventory key to open the passed inventory. Can be useful to enable inventory access while standing inside a marker.

```lua
-- id: string or number
-- owner: string or number (optional)
exports.ox_inventory:setStashTarget(id, owner)

exports.ox_inventory:setStashTarget('motel5', 'bobsmith')
```