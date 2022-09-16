---
title: Alert Dialog
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Simple alert dialog that can display a message to the player.  
Returns whether the player pressed the confirm button or canceled the dialog.

<Tabs>
<TabItem value='Lua'>

```lua
lib.alertDialog(data)
```
</TabItem>
<TabItem value='JS/TS'>

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

Returns `confirm` if the player pressed the confirm button, otherwise if the player pressed the cancel button
or has exited the dialog with ESC the return will be `cancel`.

**Example:**

```lua
local alert = lib.alertDialog({
    header = 'Hello there',
    content = 'General Kenobi  \n Markdown support!',
    centered = true,
    cancel = true
})

print(alert)
```

![alert_dialog](https://i.imgur.com/TnUT3S1.png)
