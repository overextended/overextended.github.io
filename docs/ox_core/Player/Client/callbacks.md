---
title: Callbacks
---

### ox:getStatus

```lua
lib.callback.await('ox:getStatus', delay, targetId, statusName)
```

- delay: `number`
- targetId: `number`
  - The server id for the player to get statuses for.
- statusName?: `string`
  - The name of the status (i.e. hunger). Can be omitted to return all statuses.
  
