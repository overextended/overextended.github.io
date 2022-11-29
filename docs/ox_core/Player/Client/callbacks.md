---
title: Callbacks
---

### ox:getStatus

Triggered after a player has selected a character.

```lua
lib.callback.await('ox:getStatus', delay, targetId, statusName)
```

- delay: `number`
  - Prevents the callback from triggering for the time given in ms.
- targetId: `number`
  - The server id for the player to get statuses for.
- statusName?: `string`
  - The name of the status (i.e. hunger). Can be omitted to return all statuses.
  
