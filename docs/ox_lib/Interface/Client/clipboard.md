---
title: Clipboard
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



### lib.setClipboard

Sets the player's clipboard to the specified string value.

:::caution

Will not work if focus is already taken by some NUI component.
:::

<Tabs>
<TabItem value='Lua'>

```lua
lib.setClipboard(value)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.setClipboard(value)
```

</TabItem>
</Tabs>

* value: `string`
