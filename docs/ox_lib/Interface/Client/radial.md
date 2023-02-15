---
title: Radial Menu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.addRadialItem

Item or array of items added to the global radial menu.

<Tabs>
<TabItem value='Lua'>

```lua
lib.addRadialItem(items)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.addRadialItem(items)
```
</TabItem>
</Tabs>

* id: `string`
  * Id that is used for removing options.
* icon: `string`
* label: `string`
* menu?: `string`
  * Id of a menu to open.
* onSelect: `function`

### lib.removeRadialItem

Id of an item to be removed from the global menu.

<Tabs>
<TabItem value='Lua'>

```lua
lib.removeRadialItem(item)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.removeRadialItem(item)
```
</TabItem>
</Tabs>

* id: `string`

### lib.registerRadial

Registers a radial sub menu with predefined options.

<Tabs>
<TabItem value='Lua'>

```lua
lib.registerRadial(radial)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.registerRadial(radial)
```
</TabItem>
</Tabs>

* id: `string`
  * Unique menu id used to open with `menu` prop on an item.
* items: `array`
  * icon: `string`
  * label: `string`
  * menu?: `string`
    * Id of a menu to open.
  * onSelect?: `function`

### lib.hideRadial

Hides the radial menu if one is open.

<Tabs>
<TabItem value='Lua'>

```lua
lib.hideRadial()
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.hideRadial()
```
</TabItem>
</Tabs>

### Usage Example

:::tip

When adding radial menu items whether they are global or for a sub menu, make sure to stick to short as possible labels
as long labels will look out of place and should not be used with the radial menu because of it's density.
:::


Here's a use case example with some global options and an option utilising the lib's points system.

<Tabs>
<TabItem value='Lua'>

```lua
lib.registerRadial({
  id = 'police_menu',
  items = {
    {
      label = 'Handcuff',
      icon = 'handcuffs',
      onSelect = function()
        print('Handcuffs')
      end
    },
    {
      label = 'Frisk',
      icon = 'hand'
    },
    {
      label = 'Fingerprint',
      icon = 'fingerprint'
    },
    {
      label = 'Jail',
      icon = 'bus'
    },
    {
      label = 'Search',
      icon = 'magnifying-glass',
      onSelect = function()
        print('Search')
      end
    }
  }
})

lib.addRadialItem({
  {
    id = 'police',
    label = 'Police',
    icon = 'shield-halved',
    menu = 'police_menu'
  },
  {
    id = 'business_stuff',
    label = 'Business',
    icon = 'briefcase',
    onSelect = function()
      print("Business")
    end
  }
})

local coords = GetEntityCoords(cache.ped)
local point = lib.points.new(coords, 5)

function point:onEnter()
  lib.addRadialItem({
    id = 'garage_access',
    icon = 'warehouse',
    label = 'Garage',
    onSelect = function()
      print('Garage')
    end
  })
end

function point:onExit()
  lib.removeRadialItem('garage_access')
end
```
</TabItem>
<TabItem value='JS/TS'>

:::caution

Points system in the lib isn't available for the npm package.
:::

```ts
import lib from '@overextended/ox_lib/client'

lib.registerRadial({
  id: 'police_menu',
  items: [
    {
      label: 'Handcuff',
      icon: 'handcuffs',
      onSelect: () => {
        console.log('Handcuffs')
      }
    },
    {
      label: 'Frisk',
      icon: 'hand'
    },
    {
      label: 'Fingerprint',
      icon: 'fingerprint'
    },
    {
      label: 'Jail',
      icon: 'bus'
    },
    {
      label: 'Search',
      icon: 'magnifying-glass',
      onSelect: () => {
        console.log('Search')
      }
    }
  ]
})

lib.addRadialItem([
  {
    id: 'police',
    label: 'Police',
    icon: 'shield-halved',
    menu: 'police_menu'
  },
  {
    id: 'business_stuff',
    label: 'Business',
    icon: 'briefcase',
    onSelect: () => {
      console.log('Business')
    }
  }
])
```
</TabItem>
</Tabs>

![radial1](https://i.imgur.com/4eYU94s.png)
![radial2](https://i.imgur.com/Czw7mLF.png)
