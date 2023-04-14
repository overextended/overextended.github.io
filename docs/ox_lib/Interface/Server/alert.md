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

```lua
TriggerClientEvent('ox_lib:alertDialog', source, data)
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

![alert_dialog](https://i.imgur.com/Xlx86aK.png)
