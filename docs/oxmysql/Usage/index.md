---
title: Usage
---

```lua
-- Lua
MySQL.query('SELECT * from users WHERE identifier = ?', {identifier}, function(result)
    -- callback response
    -- same as MySQL.Async.fetchAll
end)
CreateThread(function()
    local result = MySQL.query.await('SELECT * from users WHERE identifier = ?', {identifier})
    -- await a promise to resolve
    -- same as MySQL.Sync.fetchAll
end)
```

```js
// JS
exports.oxmysql.query('SELECT * from users WHERE identifier = ?', [identifier], (result) => {
  // callback response
})(async () => {
  const result = await exports.oxmysql.query_async('SELECT * from users WHERE identifier = ?', [identifier]);
  // await a promise to resolve
})();
exports.oxmysql.query_async('SELECT * from users WHERE identifier = ?', [identifier]).then((result) => {
  // utilise .then to resolve a promise like a callback
});
```
