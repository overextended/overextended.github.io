---
keywords: ['execute']
---

# Update

Returns the number of affected rows by the query.

## Lua

### Callback

```lua
-- alias: exports.oxmysql:update
-- alias: MySQL.Async.execute
-- alias: exports.ghmattimysql:execute

MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ?', {newName, playerIdentifier}, function(affectedRows)
    if affectedRows then
        print(affectedRows)
    end
end)
```

### Promise

```lua
-- alias: exports.oxmysql:update_async
-- alias: MySQL.Sync.execute
-- alias: exports.ghmattimysql:executeSync

local affectedRows = MySQL.update.await('UPDATE users SET firstname = ? WHERE identifier = ?', {newName, playerIdentifier})
if affectedRows then
    print(affectedRows)
end
```

## JavaScript

### Callback

```js
// alias: exports.oxmysql.update

MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ? ', [newName, playerIdentifier], (affectedRows) => {
  if (affectedRows) {
    console.log(affectedRows);
  }
});
```

### Promise

```js
// alias: exports.oxmysql.update_async

const id = MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ? ', [newName, playerIdentifier]);
if (affectedRows) {
  console.log(affectedRows);
}
```
