# Prepare

The only function that provides true [prepared statements](https://github.com/sidorares/node-mysql2#using-prepared-statements), granting native protection and query planning by MySQL.  
Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.  

- Date will not return the datestring commonly used in FiveM
- TINYINT 1 and BIT will not return a boolean
- You can only use `?` value placeholders, `??` column placeholders and named placeholders will throw an error  

When using SELECT, the return value will match `query, single, or scalar` depending on the number of columns and rows selected.

## Lua

### Callback
```lua
-- Alias: exports.oxmysql:prepare
-- Alias: MySQL.Async.prepare

MySQL.prepare('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(result)
    if result then
        for _, v in pairs(result) do
            print(v.identifier, v.firstname, v.lastname)
        end
    end
end)
```

### Promise
```lua
-- Alias: exports.oxmysql:prepare_async
-- Alias: MySQL.Sync.prepare

CreateThread(function()
    local result = MySQL.prepare.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})
    if result then
        for _, v in pairs(result) do
            print(v.identifier, v.firstname, v.lastname)
        end
    end
end)
```

## JavaScript

### Callback
```js
exports.oxmysql.prepare('SELECT * FROM users WHERE identifier = ?', [playerIdentifier], function(result) {
  if (result) {
    result.forEach((v) => {
      console.log(v.identifier, v.firstname, v.lastname)
    })
  }
})
```

### Promise
```js
(async () => {
  const result = await exports.oxmysql.prepare_async('SELECT * FROM users WHERE identifier = ?', [playerIdentifier]) {
  if (result) {
    result.forEach((v) => {
      console.log(v.identifier, v.firstname, v.lastname)
    })
  }
})()
```
