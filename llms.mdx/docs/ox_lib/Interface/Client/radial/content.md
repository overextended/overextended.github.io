# Radial Menu (/docs/ox_lib/Interface/Client/radial)



* Radial menu has a global menu that's by default accessed with `z` and only displays when there is at least one item.
* You can add and remove items from the global menu using `lib.addRadialItem` and `lib.removeRadialItem`.
* Use `lib.registerRadial` for creating sub menus and use the `menu` property on the items to open those sub menus.

## lib.addRadialItem [#libaddradialitem]

Item or array of items added to the global radial menu, or to a sub menu if `parentMenuId` is specified.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.addRadialItem(items, parentMenuId)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.addRadialItem(items, parentMenuId);
    ```
  </Tab>
</Tabs>

* items: `table` (`object` or `array`)
  * id: `string`
    * Id that is used for removing options.
  * icon: `string`
    * Either a font awesome or a custom URI.1
  * iconWidth?: `number`
  * iconHeight?: `number`
    * In the case of a custom URI, adjust the size of the icon.
  * label: `string`
    * Label uses `  \n` to insert a newline
  * menu?: `string`
    * Id of a menu to open.
  * onSelect: `function(currentMenu: string | nil, itemIndex: number)` | `string`
    * Function that's ran when a user clicks the item.
  * keepOpen?: `boolean`
* parentMenuId?: `string`
  * If specified, adds the item(s) to the sub menu with this id instead of the global menu.

## lib.removeRadialItem [#libremoveradialitem]

Id of an item to be removed from the global menu, or from a sub menu if `parentMenuId` is specified.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.removeRadialItem(id, parentMenuId)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.removeRadialItem(id, parentMenuId);
    ```
  </Tab>
</Tabs>

* id: `string`
* parentMenuId?: `string`
  * If specified, removes the item from the sub menu with this id instead of the global menu.

## lib.clearRadialItems [#libclearradialitems]

Removes all items from the radial menu.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.clearRadialItems()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.clearRadialItems();
    ```
  </Tab>
</Tabs>

## lib.registerRadial [#libregisterradial]

Registers a radial sub menu with predefined options.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.registerRadial(radial)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.registerRadial(radial);
    ```
  </Tab>
</Tabs>

* radial: `table` (`object`)
  * id: `string`
    * Unique menu id used to open with `menu` prop on an item.
  * items: `array`
    * icon: `string`
    * label: `string`
      * Label uses `  \n` to insert a newline
    * menu?: `string`
      * Id of a menu to open.
    * onSelect?: `function(currentMenu: string | nil, itemIndex: number)` | `string`
      * Function that's ran when a user clicks the item.

## lib.hideRadial [#libhideradial]

Hides the radial menu if one is open.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.hideRadial()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.hideRadial();
    ```
  </Tab>
</Tabs>

## lib.disableRadial [#libdisableradial]

Disallow players from opening the radial menu.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.disableRadial(state)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.disableRadial(state);
    ```
  </Tab>
</Tabs>

* state: `boolean`
  * Whether or not radial menu should be disabled

## lib.getCurrentRadialId [#libgetcurrentradialid]

Returns the id of the currently open radial menu.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    local id = lib.getCurrentRadialId()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    let id = lib.getCurrentRadialId();
    ```
  </Tab>
</Tabs>

## Usage Example [#usage-example]

<Callout>
  When adding radial menu items whether they are global or for a sub menu, make sure to stick to
  short as possible labels as long labels will look out of place and should not be used with the
  radial menu because of its density.
</Callout>

Here's a use case example with some global options and an option utilising the lib's points system.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    exports('myMenuHandler', function(menu, item)
        print(menu, item)

        if menu == 'police_menu' and item == 1 then
            print('Handcuffs')
        end
    end)

    lib.registerRadial({
      id = 'police_menu',
      items = {
        {
          label = 'Handcuff',
          icon = 'handcuffs',
          onSelect = 'myMenuHandler'
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
  </Tab>

  <Tab>
    <Callout>
      Points system in the lib isn't available for the npm package.
    </Callout>

    ```ts
    import lib from '@overextended/ox_lib/client'

    exports('myMenuHandler', (menu, item) => {
        console.log(menu, item)

        if (menu === 'police_menu' and item === 1) {
            console.log('Handcuffs')
        }
    })

    lib.registerRadial({
      id: 'police_menu',
      items: [
        {
          label: 'Handcuff',
          icon: 'handcuffs',
          onSelect: 'myMenuHandler'
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
  </Tab>
</Tabs>

![radial1](https://i.imgur.com/4eYU94s.png)
![radial2](https://i.imgur.com/Czw7mLF.png)
