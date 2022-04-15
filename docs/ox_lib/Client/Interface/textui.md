---
title: TextUI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.showTextUI
Show the TextUI window.

**DO NOT** run this every tick, it's intented to be used as a toggle.

```lua
-- text: string
-- options: table (optional)
    -- position: "right-center" or "left-center" or "top-center" (default - "right-center")
    -- icon: string or table
    -- iconColor: string
    -- style: React.CSSProperties
lib.showTextUI(text, options)
```

**Example:**
<Tabs>
<TabItem label="Default" value="default">

```lua
lib.showTextUI('[E] - Fuel vehicle', {
    position = "top-center",
    icon = "gas-pump",
})
```
</TabItem>
<TabItem label="Custom style" value="custom">

```lua
lib.showTextUI('[E] - Pick apple', {
    position = "top-center",
    icon = 'hand',
    iconColor = "red",
    style = {
        borderRadius = 0,
        backgroundColor = 'blue',
        color = 'red'
    }
})
```
</TabItem>
</Tabs>

The icon library used is Font Awesome 6.0, if for the icon you define only a string
the default icon type will be `solid`.  
If you want to use a different icon type, i.e
apple as a brand, you need to define icon as a table with the first value being
the icon type as a string, and the second being the icon name.

`icon = {'fab', 'apple'}`

### lib.hideTextUI
Hides the currently visible TextUI window

```lua
lib.hideTextUI()
```
