# Scalar

Returns the first column for a single row.

## Lua

### Callback

```lua
-- alias: exports.oxmysql:scalar
-- alias: MySQL.Async.fetchScalar
-- alias: exports.ghmattimysql:scalar

MySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier}, function(firstname)
    print(firstname)
end)
```

### Promise

```lua
-- alias: exports.oxmysql:scalar_async
-- alias: MySQL.Sync.fetchScalar
-- alias: exports.ghmattimysql:scalarSync

local firstname = MySQL.scalar.await('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier})
print(firstname)
```

## JavaScript

### Callback

```js
// alias: exports.oxmysql.scalar

MySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier], (firstname) => {
  console.log(firstname)
})
```

### Promise

```js
// alias: exports.oxmysql.scalar_async

const firstname = await MySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier])
console.log(firstname)
```
