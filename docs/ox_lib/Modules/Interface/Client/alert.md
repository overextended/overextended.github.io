---
title: Alert Dialog
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Simple alert dialog that can display a message to the player.  
Returns whether the player pressed the confirm button or canceled the dialog.

### lib.alertDialog

<Tabs>
<TabItem value='Lua'>

<Tabs>
<TabItem value='Client'>

```lua
lib.alertDialog(data)
```

</TabItem>
<TabItem value='Server'>

```lua
TriggerClientEvent('ox_lib:alertDialog', source, data)
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value='JS/TS'>

:::caution
This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
:::

```ts
import lib from '@overextended/ox_lib/client'

lib.alertDialog(data)
```

</TabItem>
</Tabs>

* data: `table` (`object`)
  * header: `string`
    * Dialog title.
  * content: `string`
    * Dialog body content, supports markdown.
  * centered?: `boolean`
    * Centers the dialog vertically and horizontally.
  * cancel?: `boolean`
    * Displays a cancel button (ESC is still available if this is not defined).
  * size?: `'xs'` or `'sm'` or `'md'` or `'lg'` or `'xl'`
  * overflow?: `boolean`
  * labels?: `table`
    * Allows you to define the displayed labels for cancel and/or confirm buttons.
    * cancel?: `string`
    * confirm?: `string`

Returns `confirm` if the player pressed the confirm button, otherwise if the player pressed the cancel button
or has exited the dialog with ESC the return will be `cancel`.

### lib.closeAlertDialog

Force closes the active alert dialog and sets its return data as `nil`

<Tabs>
<TabItem value='Lua'>

```lua
lib.closeAlertDialog()
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.closeAlertDialog()
```

</TabItem>
</Tabs>

**Example:**

<Tabs>
<TabItem value='Lua'>

```lua
local alert = lib.alertDialog({
    header = 'Hello there',
    content = 'General Kenobi  \n Markdown support!',
    centered = true,
    cancel = true
})

print(alert)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

const alert = await lib.alertDialog({
  header: 'Hello there',
  content: 'General Kenobi  \n Markdown support!',
  centered: true,
  cancel: true
})

console.log(alert)
```

</TabItem>
</Tabs>

![alert_dialog](https://i.imgur.com/Xlx86aK.png)
