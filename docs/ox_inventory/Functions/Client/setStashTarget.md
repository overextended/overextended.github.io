Forces the secondary-inventory key to open the passed inventory. Can be useful to enable inventory access while standing inside a marker.

```lua
exports.ox_inventory:setStashTarget(id, owner)
```
* id: `string` or `number`
  * Stash id.
* owner?: `string` or `number`

**Example:**

```lua
exports.ox_inventory:setStashTarget('motel5', 'bobsmith')
```
