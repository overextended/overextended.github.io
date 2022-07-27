---
title: Methods
---

These functions are inherited by instances of CVehicle.

```lua
local accounts = Ox.GetAccounts(owner)
```

## accounts.get

Gets the current balance for an account.

```lua
local account = 'fleeca'
local balance = accounts.get(account)
```

## accounts.set

Sets the balance of an account to the given amount.

```lua
local account, newBalance = 'fleeca', 200
accounts.set(account, newBalance)
```

## accounts.add

Increases the balance of an account by the given amount.

```lua
local account, amount = 'fleeca', 100
accounts.add(account, amount)
```

## accounts.remove

Decreases the balance of an account by the given amount.

```lua
local account, amount = 'fleeca', 100
accounts.remove(account, amount)
```
