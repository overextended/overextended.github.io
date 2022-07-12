# Insert

Inserts a new entry into the database and returns the insert id for the row, if valid.

## Lua

### Callback
```lua
-- alias: exports.oxmysql:insert
-- alias: MySQL.Async.insert

MySQL.insert('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', {playerIdentifier, firstName, lastName}, function(id)
    print(id)
end)
```

### Promise
```lua
-- alias: exports.oxmysql:insert_async
-- alias: MySQL.Sync.insert

local id = MySQL.insert.await('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', {playerIdentifier, firstName, lastName})
print(id)
```

## JavaScript

### Callback
```js
// alias: exports.oxmysql.insert

MySQL.insert('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', [playerIdentifier, firstName, lastName], (id) => {
  console.log(id)
})
```

### Promise
```js
// alias: exports.oxmysql.insert_async

const id = await MySQL.insert('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', [playerIdentifier, firstName, lastName])
console.log(id)
```
