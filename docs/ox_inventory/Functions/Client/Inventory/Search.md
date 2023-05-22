---
keywords: ['hasitem']
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Searches the inventory for an item, or list of items, with the result varying based on the first argument.

```lua
exports.ox_inventory:Search(search, item, metadata)
```

* search: `'slots'` or `'count'`
  * `'slots'` returns a table of slots where the item was found at.
  * `'count'` returns the count of the specified item in player's inventory. If searching for multiple items
  returns key-value pairs of itemName = count.
* item: `table` or `string`
  * Can be a single item name or array of item names.
* metadata?: `table` or `string`
  * If metadata is provided as a string it will search the item's `metadata.type` property.

### Count

<Tabs>
<TabItem value="1" label="Single item">

```lua
local count = exports.ox_inventory:Search('count', 'water')
print('You have '..count.. ' water')
```

</TabItem>
<TabItem value="2" label="Multiple items">

```lua
local inventory = exports.ox_inventory:Search('count', {'meat', 'skin'}, {grade="1"})

if inventory then
    for name, count in pairs(inventory) do
        print('You have '..count..' '..name)
    end
end
```

</TabItem>
</Tabs>

### Slots

<Tabs>
<TabItem value="1" label="Single item">

```lua
local water = exports.ox_inventory:Search('slots', 'water')
local count = 0
for _, v in pairs(water) do
    print(v.slot..' contains '..v.count..' water '..json.encode(v.metadata))
    count = count + v.count
end
print('You have '..count..' water')
```

</TabItem>
<TabItem value="2" label="Multiple items">

```lua
local items = exports.ox_inventory:Search('slots', {'meat', 'skin'}, 'deer')

if items then
    for name, data in pairs(items) do
        local count = 0
        for _, v in pairs(data) do
            if v.slot then
                print(v.slot..' contains '..v.count..' '..name..' '..json.encode(v.metadata))
                count = count + v.count
            end
        end
        print('You have '..count..' '..name)
    end
end
```

</TabItem>
</Tabs>
