---
keywords: ['execute']
title: Update
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns the number of rows affected by the query.

## Promise

<Tabs>
<TabItem value="1" label="Lua">

```lua
local affectedRows = MySQL.update.await('UPDATE users SET firstname = ? WHERE identifier = ?', {
    newName, identifier
})

print(affectedRows)
```

</TabItem>
<TabItem value="2" label="JS">

```js
const affectedRows = await MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ?', [
  newName, identifier
])

console.log(affectedRows)
```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Sync.execute`
- `exports.ghmattimysql.executeSync`
- `exports.oxmysql.update_async`

## Callback

<Tabs>
<TabItem value="1" label="Lua">

```lua
MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ?', {
    newName, identifier
}, function(affectedRows)
    print(affectedRows)
end)
```

</TabItem>
<TabItem value="2" label="JS">

```js
MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ?', [
  newName, identifier
], (affectedRows) => {
  console.log(affectedRows)
})
```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Async.execute`
- `exports.ghmattimysql.execute`
- `exports.oxmysql.update`
