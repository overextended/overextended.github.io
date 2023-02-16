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
  * Title display in the menu; has markdown support.
* menu?: `string`
  * Menu identifier - if defined there will be a back arrow next to the menu title that will take you to the menu you defined.
* canClose: `boolean`
  * If set to false the user won't be able to exit the menu without pressing one of the buttons.
* onExit?: `function`
  * Function that will be ran when the user closes their context menu with ESC.
* onBack?: `function`
  * Function that will be ran when the user presses the back button to return to a previous menu.
* options: `table` (`object` or `array`)
  * item: `key` (`string`) or `table` (`object`)
    * title?: `string`
      * If not using keys then sets the title for the button; has markdown support.
    * disabled?: `boolean`
      * Grays out the button and makes it unclickable.
    * menu?: `string`
      * Menu identifier that the button will take you to, when defined an arrow.
    * onSelect: `function`
      * Function that's ran when the button is clicked.
    * icon?: `string`
      * FontAwesome icon that will be displayed on the left side, works the same as notification and textui icons.
    * iconColor?: `string`
      * Colour of the displayed icon.
    * progress?: `number`
      * Adds a progress bar filled to this percentage
    * colorScheme?: `string`
      * Sets the color scheme of the progress bar. Current options can be found here:
        * https://mantine.dev/theming/colors/#default-colors
        * For example: `blue` or `teal`
    * arrow?: `boolean`
      * Shows an arrow on the right side like `menu` does, useful when you are opening a menu from an event. Can be set to false to hide it.
    * description?: `string`
      * Description that will appear under the button title that is defined as a key; has markdown support.
    * image?: `string`
      * Url to an image that will be displayed in the button's metadata.
    * metadata?: `string[]` or `object` or `array`
      * Information that will display on the side upon hovering a button.
      * label: `string`
      * value: `any`
      * progress?: `number`
        * Display a progress bar in the metadata.
    * event?: `string`
      * Event that the button is going to trigger.
    * serverEvent?: `string`
      * Server event that the button is going to trigger.
    * args?: `any`
      * Arguments that will be sent to the events or onSelect function.

You can register as many context menus in one `lib.registerContext` function
as you'd like.

The menu can be either in the order you write it in, or sorted alphabetically.  
To sort the menu alphabetically the buttons (and/or metadata) need to be defined as keys, otherwise not using keys and instead using tables will make the menu be in the order you define it as.

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
  id = 'some_menu',
  title = 'Some context menu',
  options = {
    {
      title = 'Empty button',
    },
    {
      title = 'Disabled button',
      description = 'This button is disabled',
      icon = 'hand',
      disabled = true
    },
    {
      title = 'Example button',
      description = 'Example button description',
      icon = 'circle',
      onSelect = function()
        print("Pressed the button!")
      end,
      metadata = {
        {label = 'Value 1', value = 'Some value'},
        {label = 'Value 2', value = 300}
      },
    },
    {
      title = 'Menu button',
      description = 'Takes you to another menu!',
      menu = 'other_menu',
      icon = 'bars'
    },
    {
      title = 'Event button',
      description = 'Open a menu from the event and send event data',
      icon = 'check',
      event = 'test_event',
      arrow = true,
      args = {
        someValue = 500
      }
    }
  }
})
```
</TabItem>

<TabItem value="JS/TS">

```ts
import lib from '@overextended/ox_lib/client'

lib.registerContext({
  id: 'some_menu',
  title: 'Some context menu',
  options: [
    {
      title: 'Empty button',
    },
    {
      title: 'Disabled button',
      description: 'This button is disabled',
      icon: 'hand',
      disabled: true
    },
    {
      title: 'Example button',
      description: 'Example button description',
      icon: 'circle',
      onSelect: () => {
        console.log("Pressed the button!")
      },
      metadata: [
        {label: 'Value 1', value: 'Some value'},
        {label: 'Value 2', value: 300}
      ],
    },
    {
      title: 'Menu button',
      description: 'Takes you to another menu!',
      menu: 'other_menu',
      icon: 'bars'
    },
    {
      title: 'Event button',
      description: 'Open a menu from the event and send event data',
      icon: 'check',
      event: 'test_event',
      arrow: true,
      args: {
        someValue: 500
      }
    }
  ]
})
```
</TabItem>
</Tabs>

Then we can also register our second menu called `other_menu`

<Tabs>
<TabItem value='Lua'>

```lua
lib.registerContext({
  id = 'other_menu',
  title = 'Other context menu',
  menu = 'some_menu',
  onBack = function()
    print('Went back!')
  end,
  options = {
    {
      title = 'Nothing here'
    }
  }
})
```
</TabItem>
<TabItem value='JS/TS'>

```ts
lib.registerContext({
  id: 'other_menu',
  title: 'Other context menu',
  menu: 'some_menu',
  onBack: () => {
    console.log('Went back!')
  },
  options: [
    {
      title: 'Nothing here'
    }
  ]
})
```
</TabItem>
</Tabs>

And the event that we are going to run from the `some_menu` menu, which is going to open another menu.

<Tabs>
<TabItem value="Lua">

```lua
RegisterNetEvent('test_event', function(args)
  lib.registerContext({
    id = 'event_menu',
    title = 'Event menu',
    menu = 'some_menu',
    options = {
      {
        title = 'Event value: '..args.someValue,
      }
    }
  })

  lib.showContext('event_menu')
end)
```
</TabItem>

<TabItem value="JS/TS">

```ts
onNet('test_event', (args: {someValue: number}) => {
  lib.registerContext({
    id:'event_menu',
    title:'Event menu',
    menu:'some_menu',
    options: [
      {
        title: `Event value: ${args.someValue}`,
      }
    ]
  })

  lib.showContext('event_menu')
})
```
</TabItem>
</Tabs>


Lastly we register a test command to show the `some_menu` menu.

<Tabs>
<TabItem value="Lua">

```lua
RegisterCommand('testcontext', function()
  lib.showContext('some_menu')
end)
```
</TabItem>
<TabItem value="JS/TS">

```ts
RegisterCommand('testcontext', () => {
  lib.showContext('some_menu')
})
```
</TabItem>
</Tabs>

The data from the `args` table in the menu is passed as a first argument to the event you register.

Using this event we also register a new context menu with it's own options.

By defining a `menu` param to be the id of the first menu we can get the back arrow button next to the menu title that will take us back.

![menu_example](https://i.imgur.com/TkaH2P9.png)
![metadata](https://i.imgur.com/0mMmwgi.png)
![sub_menu](https://i.imgur.com/RbT1tKX.png)
![event_menu](https://i.imgur.com/zjIiROj.png)
