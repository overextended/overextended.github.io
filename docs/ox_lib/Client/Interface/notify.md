---
title: Notifications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.notify
Custom notifications with a lot of styling options.

```lua
-- id: string (optional)
-- title: string (if description then optional)
-- description: string (if title then optional)
-- duration: number (optional)
-- position: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left' (optional)
-- type: 'inform' | 'error' | 'success'
-- style: table (optional)
-- icon: string (optional)
-- iconColor: string (optional)

lib.notify(data)
```
`id` - When set the current notification will be unique and only shown once on screen  
`title` - Must provide if there is no description  
`description` - Must provide if there is no title  
`position` - Default: `'top-right'`  
`type` - Default: `'inform'`
`style` - React CSS styling, works the same as in [TextUI](textui.md)  
`icon` - Font Awesome 6 icon, works the same as in [TextUI](textui.md)  
`iconColor` - Set a different color for the provided icon  


**Example:**
<Tabs>
<TabItem value='standard' label="Standard">

```lua
lib.notify({
    title = 'Notification title',
    description = 'Notification description',
    type = 'success'
})
```
</TabItem>
<TabItem value='custom' label="Custom">

```lua
lib.notify({
    id = 'some_identifier',
    title = 'Notification title',
    description = 'Notification description',
    position = 'top',
    style = {
        backgroundColor = 'red',
        color = 'blue'
    },
    icon = 'bed',
    iconColor = 'purple'
})
```
</TabItem>
</Tabs>

### lib.defaultNotify
Default notifications provided by Chakra UI.

```lua
-- title: string (if description then optional)
-- description: string (if title then optional)
-- duration: number (optional)
-- position: ToastPositionWithLogical (optional)
-- status: "info" | "warning" | "success" | "error" (optional)
-- id: number (optional)

lib.defaultNotify(data)
```

**Example:**

```lua
lib.defaultNotify({
    title = 'Notification title',
    description = 'Notification description',
    status = 'success'
})
```