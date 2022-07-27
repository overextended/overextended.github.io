---
title: Server
sidebar_position: 1
---

## Ox.GetAccounts

Return an instance of CAccount for the given charid or group.

```lua
local accounts = Ox.GetAccounts(owner)
```

You can use [player.getAccounts](../../Player/Server/methods.md#playergetaccounts) to to simplify access to an player accounts, however the standard function works for offline players.


You can refer to [vl_banking](https://github.com/Volumed/vl_banking) for a simple implementation of banking using ox_core accounts.
