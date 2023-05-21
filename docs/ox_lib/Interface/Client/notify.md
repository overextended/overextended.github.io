---
title: Notifications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.notify

Custom notifications with a lot of styling options.

<Tabs>
<TabItem value='Lua'>

<Tabs>
<TabItem value='Client'>

```lua
lib.notify(data)
```

</TabItem>
<TabItem value='Server'>

```lua
TriggerClientEvent('ox_lib:notify', source, data)
```

</TabItem>
</Tabs>

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
  * Markdown support
* duration?: `number`
* position?: `'top'` or `'top-right'` or `'top-left'` or `'bottom'` or `'bottom-right'` or `'bottom-left'` or `'center-right'` or `'center-left'`
  * Default: `'top-right'`
* type?: `'inform'` or `'error'` or `'success'`or `'warning'`
  * Default: `'inform'`
* style?: `table` (`object`)
  * React CSS styling format
* icon?: `string`
  * Font Awesome 6 icon name
* iconColor: `string`

:::caution

Setting `iconColor` will get rid of the contrasted icon colour and it's circular background.
:::

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

![notification](https://i.imgur.com/HFeBTLg.png)

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
        color = '#C1C2C5',
        ['.description'] = {
          color = '#909296'
        }
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
    color: '#C1C2C5',
    '.decription': {
      color: '#909296',
    },
  },
  icon: 'ban',
  iconColor: '#C53030'
})
```

</TabItem>
</Tabs>

![custom_notification](https://i.imgur.com/WpqiW5f.png)
