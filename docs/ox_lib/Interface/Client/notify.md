---
title: Notifications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## lib.notify

Custom notifications with a lot of styling options.

<Tabs>
<TabItem value='Lua'>

```lua
lib.notify(data)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.notify(data)
```

</TabItem>
</Tabs>

* id?: `string`
  * When set the current notification will be unique and only shown once on screen when spammed.
* title?: `string`
  * Must provide if there is no description
* description?: `string`
  * Must provide if there is no title
* duration?: `number`
* position?: `'top'` or `'top-right'` or `'top-left'` or `'bottom'` or `'bottom-right'` or `'bottom-left'`
  * Default: `'top-right'`
* type?: `'inform'` or `'error'` or `'success'`
  * Default: `'inform'`
* style?: `table` (`object`)
  * React CSS styling format
* icon?: `string`
  * Font Awesome 6 icon name
* iconColor: `string`

### Usage Example

#### Standard

<Tabs>
<TabItem value='Lua'>

```lua
lib.notify({
    title = 'Notification title',
    description = 'Notification description',
    type = 'success'
})
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.notify({
  title: 'Notification title',
  description: 'Notification description',
  type: 'success'
})
```

</TabItem>
</Tabs>

![notification](https://i.imgur.com/cRxJICO.png)

#### Custom

<Tabs>
<TabItem value='Lua'>

```lua
lib.notify({
    id = 'some_identifier',
    title = 'Notification title',
    description = 'Notification description',
    position = 'top',
    style = {
        backgroundColor = '#141517',
        color = '#909296'
    },
    icon = 'ban',
    iconColor = '#C53030'
})
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.notify({
  id: 'some_identifier',
  title: 'Notification title',
  description: 'Notification description',
  position: 'top',
  style: {
    backgroundColor: '#141517',
    color: '#909296'
  },
  icon: 'ban',
  iconColor: '#C53030'
})
```

</TabItem>
</Tabs>

![custom_notification](https://i.imgur.com/0EK5APp.png)

## lib.defaultNotify

Default notifications provided by Chakra UI.

<Tabs>
<TabItem value='Lua'>

```lua
lib.defaultNotify(data)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.defaultNotify(data)
```

</TabItem>
</Tabs>

* id?: `number`
  * Same as id in `lib.notify`
* title?: `string`
* description?: `string`
* duration?: `number`
* position?: `'top'` or `'top-right'` or `'top-left'` or `'bottom'` or `'bottom-right'` or `'bottom-left'`
* status?: `'info'` or `'warning'` or `'success'` or `'error'`

### Usage Example

<Tabs>
<TabItem value='Lua'>

```lua
lib.defaultNotify({
    title = 'Notification title',
    description = 'Notification description',
    status = 'success'
})
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.defaultNotify({
  title: 'Notification title',
  description: 'Notification description',
  status: 'success'
})
```

</TabItem>
</Tabs>

![default_notification](https://i.imgur.com/EIibuY9.png)
