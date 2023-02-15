---
title: Radial Menu
---

### lib.addRadialItem

Item or array of items added to the global radial menu.

* id: `string`
  * Id that is used for removing options.
* icon: `string`
* label: `string`
* menu?: `string`
  * Id of a menu to open.
* onSelect: `function`

### lib.removeRadialItem

Id of an item to be removed from the global menu.

* id: `string`

### lib.registerRadial

Registers a radial sub menu with predefined options.

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

### Usage Example

:::tip

When adding radial menu items whether they are global or for a sub menu, make sure to stick to short as possible labels
as long labels will look out of place and should not be used with the radial menu because of it's density.
:::


Here's a use case example with some global options and an option utilising the lib's points system.

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
![radial1](https://i.imgur.com/4eYU94s.png)
![radial2](https://i.imgur.com/Czw7mLF.png)
