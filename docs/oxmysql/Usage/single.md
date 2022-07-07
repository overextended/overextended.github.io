# Single
Returns the columns for a single row.

## Lua

### Callback
```lua
-- alias: exports.oxmysql:single
-- alias: MySQL.Async.fetchSingle

MySQL.single('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(result)
    if result then
        print(result.identifier, result.firstname, result.lastname)
    end
end)
```

### Promise
```lua
-- alias: exports.oxmysql:single_async
-- alias: MySQL.Sync.fetchSingle

local result = MySQL.single.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})
if result then
    print(result.identifier, result.firstname, result.lastname)
end
```

## JavaScript

### Callback
```js
exports.oxmysql.single('SELECT * FROM users WHERE identifier = ?', [playerIdentifier],(result) => {
  if (result) {
    console.log(result.identifier, result.firstname, result.lastname)
  }
})
```

### Promise
```js
const result = await exports.oxmysql.single_async('SELECT * FROM users WHERE identifier = ?', [playerIdentifier])
if (result) {
  console.log(result.identifier, result.firstname, result.lastname)
}
```
