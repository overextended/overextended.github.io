# Query
Generic function that can be utilised for any query.  
When selecting data it will return all matching rows and columns, otherwise it will return field data such as insertid, affectedRows, etc.

## Lua

### Callback
```lua
-- alias: exports.oxmysql:query
-- alias: MySQL.Async.query

MySQL.query('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(result)
    if result then
        for i = 1, #result do
            local row = result[i]
            print(row.identifier, row.firstname, row.lastname)
        end
    end
end)
```
### Promise
```lua
-- alias: exports.oxmysql:query_async
-- alias: MySQL.Sync.query

local result = MySQL.query.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})
if result then
    for i = 1, #result do
        local row = result[i]
        print(row.identifier, row.firstname, row.lastname)
    end
end
```

## JavaScript

### Callback
```js
// alias: exports.oxmysql.query

MySQL.query('SELECT * FROM users WHERE identifier = ?', [playerIdentifier], (result) => {
  if (result) {
    result.forEach((row) => {
      console.log(row.identifier, row.firstname, row.lastname)
    })
  }
})
```
### Promise
```js
// alias: exports.oxmysql.query_async

const result = await MySQL.query('SELECT * FROM users WHERE identifier = ?', [playerIdentifier])
if (result) {
  result.forEach((row) => {
    console.log(row.identifier, row.firstname, row.lastname)
  })
}
```
