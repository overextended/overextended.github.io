---
title: Context Menu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.registerContext
Used for registering a context menu.

<Tabs>
<TabItem value='Lua'>

```lua
lib.registerContext(context)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.registerContext(context)
```
</TabItem>
</Tabs>

* id: `string`
  * Unique menu identifier, will be used to open the menu.
* title: `string`
  * Title display in the menu.
* menu?: `string`
  * Menu identifier - if defined there will be a back arrow next to the menu title that will take you to the menu you defined.
* onExit?: `function`
  * Function that will be ran when the user closes their context menu with ESC.
* options: `table` (`object` or `array`)
  * item: `key` (`string`) or `table` (`object`)
    * title?: `string`
      * If not using keys then sets the title for the button.  
    * menu?: `string`
      * Menu identifier that the button will take you to, when defined an arrow.
    * onSelect: `function`
      * Function that's ran when the button is clicked.
    * icon?: `string`
      * FontAwesome icon that will be displayed on the left side, works the same as notification and textui icons.
    * iconColor?: `string`
      * Colour of the displayed icon.
    * arrow?: `boolean`
      * Shows an arrow on the right side like `menu` does, useful when you are opening a menu from an event. Can be set to false to hide it.
    * description?: `string`
      * Description that will appear under the button title that is defined as a key.
    * metadata?: `string[]` or `object` or `array`
      * Information that will display on the side upon hovering a button.
    * event?: `string`
      * Event that the button is going to trigger.
    * serverEvent?: `string`
      * Server event that the button is going to trigger.
    * args?: `any`
      * Arguments that will be sent to the events or onSelect function.

You can register as many context menus in one `lib.registerContext` function
as you'd like.

The menu can be either in the order you write it in, or sorted alphabetically.  
To sort the menu alphabetically the buttons (and/or metadata) need to be defined as keys,
otherwise not using keys and instead using tables will make the menu be in the order you
define it as.

### lib.showContext
Opens a registered context menu by it's id.

<Tabs>
<TabItem value='Lua'>

```lua
lib.showContext(id)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.showContext(id)
```
</TabItem>
</Tabs>

* id: `string`

### lib.hideContext
Hides any currently visible context menu.

<Tabs>
<TabItem value='Lua'>

```lua
lib.hideContext(onExit)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.hideContext(onExit)
```
</TabItem>
</Tabs>

* onExit: `boolean`
  * Defines whether the onExit function for the menu should be ran or not.

### lib.getOpenContextMenu

Returns the id of the currently open context menu.

If no context menu is open returns `nil`.

<Tabs>
<TabItem value='Lua'>

```lua
lib.getOpenContextMenu()
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.getOpenContextMenu()
```
</TabItem>
</Tabs>

### Usage Example
First we register the menu with our specified options then we call the show function in the command.

:::tip
Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu).
:::

<Tabs>
<TabItem value='Lua'>

```lua
lib.registerContext({
    id = 'example_menu',
    title = 'Example Context',
    onExit = function()
        print('Hello there')
    end,
    options = {
        {title = 'Empty button'},
        {
            title = 'Example button',
            description = 'Example button description',
            onSelect = function(args)
              print('Pressed the button!')
            end,
            metadata = {
                {label = 'Value 1', value = 'Some value'},
                {label = 'Value 2', value = 300},
            }
        },
        {
            title = 'Menu button',
            menu = 'other_example_menu',
            description = 'Takes you to another menu!',
            metadata = {'It also has metadata support'}
        },
        {
            title = 'Event button',
            description = 'Open a menu and send event data',
            arrow = true,
            event = 'some_event',
            args = {value1 = 300, value2 = 'Other value'}
        }
    },
    {
        id = 'other_example_menu',
        title = 'Other Context Menu',
        menu = 'example_menu',
        options = {
            ['Nothing here'] = {}
        }
    }
})
```

```lua
RegisterCommand('testcontext', function()
  lib.showContext('example_menu')
end)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'
```

```ts
lib.registerContext([
  {
    id: 'example_menu',
    title: 'Example Context',
    onExit: () => {
      console.log('Hello there');
    },
    options: [
      { title: 'Empty button' },
      {
        title: 'Example button',
        description: 'Example button description',
        onSelect: (args) => {
          console.log('Pressed the button!');
        },
        metadata: [
          { label: 'Value 1', value: 'Some value' },
          { label: 'Value 2', value: 300 },
        ],
      },
      {
        title: 'Menu button',
        menu: 'other_example_menu',
        description: 'Takes you to another menu!',
        metadata: ['It also has metadata support'],
      },
      {
        title: 'Event button',
        description: 'Open a menu and send event data',
        arrow: true,
        event: 'some_event',
        args: { value1: 300, value2: 'Other value' },
      },
    ],
  },
  {
    id: 'other_example_menu',
    title: 'Other Context Menu',
    menu: 'example_menu',
    options: {
      ['Nothing here']: {},
    },
  },
]);
```

```ts
RegisterCommand('testcontext', () => {
  lib.showContext('example_menu')
}, false)
```
</TabItem>
</Tabs>


To trigger the event from the `Event button` and get it's data we first
need to register the event properly:

<Tabs>
<TabItem value='Lua'>

```lua
RegisterNetEvent('some_event', function(data)
    print(json.encode(data, {indent=true}))
    lib.registerContext({
        id = 'another_context_menu',
        title = 'Event Menu',
        menu = 'example_menu',
        options = {
            ['Menu data'] = {
                description = 'Data from the previous menu',
                metadata = {
                    ['Value1'] = data.value1,
                    ['Value2'] = data.value2
                }
            }
        }
    })
    lib.showContext('another_context_menu')
end)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
onNet('some_event', () => {
  console.log(JSON.stringify(data, null, 2))
  lib.registerContext({
    id: 'another_context_menu',
    title: 'Event Menu',
    menu: 'example_menu',
    options: {
      ['Menu data']: {
        description: 'Data from the previous menu',
        metadata: {
          ['Value1']: data.value1,
          ['Value2']: data.value2,
        },
      },
    },
  });
  lib.showContext('another_context_menu');
});
```
</TabItem>
</Tabs>

The data from the `args` table in the menu is passed as a first argument to
the event you register, in this case that argument is called `data`.

Using this event we also register a new context menu with it's own options.


By defining a `menu` param to be the id of the first menu we can get the 
neat back arrow button next to the menu title that will take us back.

If we have a button that does not define either event, serverEvent or menu
the button will do nothing upon being clicked.

Of course just registering the event won't do much so we need to display it
with the `lib.showContext` function, passing in the menu's id.

![menu_example](https://i.imgur.com/aJu92dv.png)  
![metadata](https://i.imgur.com/kFGSlBF.png)  
![event_menu](https://i.imgur.com/r0Ln4VP.png)
