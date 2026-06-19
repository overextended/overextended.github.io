# Shared (/docs/ox_lib/Selector/Shared)



A weighted random selection utility class that supports multiple named sets of items with optional weight-based probability selection.

## OxSelector Class [#oxselector-class]

The `OxSelector` class provides methods for managing and selecting items from one or more sets, with support for both uniform random selection and weighted random selection.

### OxSelectorItem [#oxselectoritem]

Each item in a selector set is defined as a tuple containing a weight and a value.

* `[1]`: `number`
  * The weight of the item (must be 0 or greater).
* `[2]`: `any`
  * The value to return when selected.

## lib.selector [#libselector]

Creates a new OxSelector instance.

```lua
local selector = lib.selector:new(sets)
```

### Parameters [#parameters]

* sets: `OxSelectorItem[]` or `table<string, OxSelectorItem[]>`
  * A single array of items (uses the default set), or a table of named sets.

### Returns [#returns]

* `OxSelector`
  * The newly created selector instance.

### Example [#example]

```lua
-- Single set (default)
local selector = lib.selector:new({
    { 10, 'common_item' },
    { 5, 'uncommon_item' },
    { 1, 'rare_item' },
})

-- Multiple named sets
local selector = lib.selector:new({
    weapons = {
        { 50, 'WEAPON_PISTOL' },
        { 30, 'WEAPON_SMG' },
        { 10, 'WEAPON_RIFLE' },
        { 5, 'WEAPON_RPG' },
    },
    vehicles = {
        { 60, 'sultan' },
        { 30, 'elegy2' },
        { 10, 'zentorno' },
    },
})
```

## OxSelector:getRandom [#oxselectorgetrandom]

Get a random item from a set using uniform probability (ignores weights).

```lua
selector:getRandom(setName)
```

### Parameters [#parameters-1]

* setName?: `string`
  * The name of the set to select from. Defaults to `'default'` if not provided.

### Returns [#returns-1]

* `any` or `nil`
  * The selected item's value, or `nil` if the set does not exist.

### Example [#example-1]

```lua
local selector = lib.selector:new({
    { 100, 'apple' },
    { 1, 'banana' },
})

-- Each item has equal chance of being selected (50/50)
local item = selector:getRandom()
print(item) -- 'apple' or 'banana'
```

## OxSelector:getRandomWeighted [#oxselectorgetrandomweighted]

Get a random item from a set using weighted probability.

```lua
selector:getRandomWeighted(setName)
```

### Parameters [#parameters-2]

* setName?: `string`
  * The name of the set to select from. Defaults to `'default'` if not provided.

### Returns [#returns-2]

* `any` or `nil`
  * The selected item's value, or `nil` if the set does not exist or total weight is 0.

### Example [#example-2]

```lua
local selector = lib.selector:new({
    { 100, 'apple' },  -- ~99% chance
    { 1, 'banana' },   -- ~1% chance
})

-- Items are selected based on their weight
local item = selector:getRandomWeighted()
print(item) -- Most likely 'apple'
```

## OxSelector:getRandomAmount [#oxselectorgetrandomamount]

Get multiple random items from a set using uniform probability.

```lua
selector:getRandomAmount(setName, count)
```

### Parameters [#parameters-3]

* setName?: `string`
  * The name of the set to select from. Defaults to `'default'` if not provided.
* count: `number`
  * The number of items to select (must be a positive number).

### Returns [#returns-3]

* `any[]`
  * An array of selected item values.

### Example [#example-3]

```lua
local selector = lib.selector:new({
    { 10, 'item_a' },
    { 10, 'item_b' },
    { 10, 'item_c' },
})

local items = selector:getRandomAmount(nil, 5)
-- Returns 5 randomly selected items with equal probability
```

## OxSelector:getRandomWeightedAmount [#oxselectorgetrandomweightedamount]

Get multiple random items from a set using weighted probability.

```lua
selector:getRandomWeightedAmount(setName, count)
```

### Parameters [#parameters-4]

* setName?: `string`
  * The name of the set to select from. Defaults to `'default'` if not provided.
* count: `number`
  * The number of items to select (must be a positive number).

### Returns [#returns-4]

* `any[]`
  * An array of selected item values.

### Example [#example-4]

```lua
local selector = lib.selector:new({
    loot = {
        { 70, 'common_loot' },
        { 25, 'rare_loot' },
        { 5, 'legendary_loot' },
    },
})

local items = selector:getRandomWeightedAmount('loot', 3)
-- Returns 3 items selected based on their weights
```

## OxSelector:getSet [#oxselectorgetset]

Get all items from a specific set.

```lua
selector:getSet(setName)
```

### Parameters [#parameters-5]

* setName?: `string`
  * The name of the set to retrieve. Defaults to `'default'` if not provided.

### Returns [#returns-5]

* `OxSelectorItem[]`
  * A deep clone of the set's items.

### Example [#example-5]

```lua
local selector = lib.selector:new({
    { 10, 'item_a' },
    { 20, 'item_b' },
})

local items = selector:getSet()
-- Returns: { { 10, 'item_a' }, { 20, 'item_b' } }
```

## OxSelector:getAllSets [#oxselectorgetallsets]

Get all sets from the selector.

```lua
selector:getAllSets()
```

### Returns [#returns-6]

* `table<string, OxSelectorItem[]>`
  * A deep clone of all sets.

### Example [#example-6]

```lua
local selector = lib.selector:new({
    weapons = {
        { 50, 'WEAPON_PISTOL' },
    },
    vehicles = {
        { 60, 'sultan' },
    },
})

local allSets = selector:getAllSets()
-- Returns: { weapons = { { 50, 'WEAPON_PISTOL' } }, vehicles = { { 60, 'sultan' } } }
```

## OxSelector:addSet [#oxselectoraddset]

Add a new set to the selector.

```lua
selector:addSet(setName, items)
```

### Parameters [#parameters-6]

* setName: `string`
  * The name of the new set.
* items: `OxSelectorItem[]`
  * An array of items to add (must contain at least one item).

### Example [#example-7]

```lua
local selector = lib.selector:new({
    { 10, 'existing_item' },
})

selector:addSet('newSet', {
    { 50, 'new_item_a' },
    { 30, 'new_item_b' },
})
```

## OxSelector:updateSet [#oxselectorupdateset]

Update an existing set with new items.

```lua
selector:updateSet(setName, newItems)
```

### Parameters [#parameters-7]

* setName: `string`
  * The name of the set to update.
* newItems: `OxSelectorItem[]`
  * An array of items to replace the existing set (must contain at least one item).

### Example [#example-8]

```lua
local selector = lib.selector:new({
    rewards = {
        { 100, 'old_reward' },
    },
})

selector:updateSet('rewards', {
    { 50, 'new_reward_a' },
    { 50, 'new_reward_b' },
})
```

## OxSelector:removeSet [#oxselectorremoveset]

Remove a set from the selector.

```lua
selector:removeSet(setName)
```

### Parameters [#parameters-8]

* setName: `string`
  * The name of the set to remove.

### Example [#example-9]

```lua
local selector = lib.selector:new({
    temporary = {
        { 10, 'temp_item' },
    },
})

selector:removeSet('temporary')
```

## Usage Example [#usage-example]

A complete example demonstrating loot table management for a game system.

```lua
-- Create a loot selector with different rarity tiers
local lootSelector = lib.selector:new({
    common = {
        { 40, { name = 'bread', count = 1 } },
        { 30, { name = 'water', count = 1 } },
        { 20, { name = 'bandage', count = 2 } },
        { 10, { name = 'lockpick', count = 1 } },
    },
    rare = {
        { 50, { name = 'medkit', count = 1 } },
        { 30, { name = 'armor', count = 1 } },
        { 15, { name = 'weapon_parts', count = 3 } },
        { 5, { name = 'keycard', count = 1 } },
    },
    legendary = {
        { 60, { name = 'WEAPON_CARBINERIFLE', ammo = 60 } },
        { 30, { name = 'WEAPON_PUMPSHOTGUN', ammo = 24 } },
        { 10, { name = 'WEAPON_SNIPERRIFLE', ammo = 10 } },
    },
})

-- Simulate opening a loot crate
local function openLootCrate(crateType)
    local tierRoll = math.random(100)
    local tier

    if crateType == 'basic' then
        tier = tierRoll <= 80 and 'common' or 'rare'
    elseif crateType == 'military' then
        if tierRoll <= 40 then
            tier = 'common'
        elseif tierRoll <= 85 then
            tier = 'rare'
        else
            tier = 'legendary'
        end
    end

    -- Get 1-3 items from the selected tier
    local itemCount = math.random(1, 3)
    local loot = lootSelector:getRandomWeightedAmount(tier, itemCount)

    return loot
end

-- Example usage
RegisterCommand('openloot', function()
    local loot = openLootCrate('military')

    for i = 1, #loot do
        print(('Received: %s'):format(json.encode(loot[i])))
    end
end)
```
