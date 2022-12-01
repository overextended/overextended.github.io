Returns if inventory can carry specified weight and free inventory weight.

```lua
exports.ox_inventory:CanCarryWeight(inv, weight)
```
* inv: `string` or `number`
* weight: `number`

Example:

```lua
-- Checks if player can carry 1000 grams.
local fillAmount = 1000
local canCarryWeight, freeWeight = ox_inventory:CanCarryWeight(playerId, fillAmount)

if freeWeight == 0 then
  -- Player can't carry weight.
  return
elseif not canCarryWeight then
  -- Modify fillAmount, because inventory can't carry specified weight
  fillAmount = freeWeight
end

-- Do something
```
