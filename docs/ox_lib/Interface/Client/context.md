---
title: Context Menu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.registerContext
Used for registering a context menu.

```lua
-- id: string
-- title: string
-- menu: string (optional)
-- onExit: function (optional)
-- options: table
    -- item: key as string or table
        -- title: string (optional - if item isn't key)
        -- menu: string (optional)
        -- arrow: boolean (optional)
        -- description: string (optional)
        -- metadata: string table or key, value table or table (optional)
        -- event: string (optional)
        -- serverEvent: string (optional)
        -- args: any (optional)
lib.registerContext(context)
```

You can register as many context menus in one `lib.registerContext` function
as you'd like.

`id` - Unique menu identifier, will be used to open the menu.  
`title` - Every menu must have a title.  
`menu` - Menu identifier - if defined there will be a back arrow next to the menu title
that will take you to the menu you defined.  
`onExit` - Function that will be ran when the user closes their context menu with ESC.
`options` - Contains all the clickable menu items.  
`item` - Defined as a key, can be empty if you don't want it to do anything.  
`item/title` - If not using keys then sets the title for the button.  
`item/menu` - Menu identifier that the button will take you to, when defined an arrow
pointing to the right to indicate a menu will be shown.  
`item/arrow` - Shows an arrow on the right side like `menu` does, useful when you are 
opening a menu from an event.  
`item/description` - Description that will appear under the button title that is defined
as a key.  
`item/metadata` - Information that will display on the side upon hovering a button.  
`item/event` - Event that the button is going to trigger.  
`item/serverEvent` - Server event that the button is going to trigger.  
`args` - Arguments that will be sent to the events.  

The menu can be either in the order you write it in, or sorted alphabetically.  
To sort the menu alphabetically the buttons (and/or metadata) need to be defined as keys,
otherwise not using keys and instead using tables will make the menu be in the order you
define it as.

### lib.showContext
Opens a registered context menu by it's id.

```lua
-- id: string

lib.showContext(id)
```

### lib.hideContext
Hides any currently visible context menu.

`onExit` param defines whether the onExit function for the
menu should be ran or not.

```lua

-- onExit: boolean
lib.hideContext(onExit)
```

### lib.getOpenContextMenu

Returns the id of the currently open context menu.

If not context menu is open returns `nil`.

```lua
lib.getOpenContextMenu()
```

### Usage Example
This is a simple command that will register and open a
context menu.

<Tabs>
<TabItem value='custom' label='Custom order'>

```lua
RegisterCommand('testcontext', function()
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
    lib.showContext('example_menu')
end)
```
</TabItem>
<TabItem value='ordered' label='Alphabetically ordered'>

```lua
RegisterCommand('testcontext', function()
    lib.registerContext({
        id = 'example_menu',
        title = 'Example Context',
        options = {
            ['Empty button'] = {},
            ['Example button'] = {
                description = 'Example button description',
                metadata = {
                    ['Value 1'] = 'Some value',
                    ['Value 2'] = 300
                }
            },
            ['Menu button'] = {
                menu = 'other_example_menu',
                description = 'Takes you to another menu',
                metadata = {'It also has metadata support'}
            },
            ['Event button'] = {
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
    lib.showContext('example_menu')
end)
```
</TabItem>
</Tabs>

To trigger the event from the `Event button` and get it's data we first
need to register the event properly:

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