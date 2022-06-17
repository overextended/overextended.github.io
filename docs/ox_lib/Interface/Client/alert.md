---
title: Alert Dialog
---

Simple alert dialog that can display a message to the player.  
Returns whether the player pressed the confirm button or canceled the dialog.

```lua
-- data: table
    -- header: string
    -- content: string
    -- centered: boolean (optional)
    -- cancel: boolean (optional)

lib.alertDialog(data)
```

`header` - Dialog title.  
`content` - Dialog body content, supports markdown.  
`centered` - Centers the dialog vertically and horizontally.  
`cancel` - Displays a cancel button (ESC is still available if this is not defined).  

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