# Single
Returns the columns for a single row.

## Lua

### Callback
```lua
-- alias: exports.oxmysql:single
-- alias: MySQL.Async.fetchSingle

MySQL.single('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(row)
    if row then
        print(row.identifier, row.firstname, row.lastname)
    end
end)
```

### Promise
```lua
-- alias: exports.oxmysql:single_async
-- alias: MySQL.Sync.fetchSingle

local row = MySQL.single.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})
if row then
    print(row.identifier, row.firstname, row.lastname)
end
```

## JavaScript

### Callback
```js
// alias: exports.oxmysql.single

MySQL.single('SELECT * FROM users WHERE identifier = ?', [playerIdentifier],(row) => {
  if (row) {
    console.log(row.identifier, row.firstname, row.lastname)
  }
})
```

### Promise
```js
// alias: exports.oxmysql.single_async

const row = await MySQL.single('SELECT * FROM users WHERE identifier = ?', [playerIdentifier])
if (row) {
  console.log(row.identifier, row.firstname, row.lastname)
}
```
