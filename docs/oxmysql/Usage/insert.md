---
keywords: ['execute', 'insert']
title: Insert
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Inserts a new entry into the database and returns the insert id for the row, if valid.

## Promise

<Tabs>
<TabItem value="1" label="Lua">

```lua
local id = MySQL.insert.await('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', {
    identifier, firstName, lastName
})

print(id)
```

</TabItem>
<TabItem value="2" label="JS">

```js
const id = await MySQL.insert('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', [
  identifier, firstName, lastName
])

console.log(id)
```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Sync.insert`
- `exports.ghmattimysql.executeSync`
- `exports.oxmysql.insert_async`

## Callback

<Tabs>
<TabItem value="1" label="Lua">

```lua
MySQL.insert('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', {
    identifier, firstName, lastName
}, function(id)
    print(id)
end)
```

</TabItem>
<TabItem value="2" label="JS">

```js
MySQL.insert('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', [
  identifier, firstName, lastName
], (id) => {
  console.log(id)
})
```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Async.insert`
- `exports.ghmattimysql.execute`
- `exports.oxmysql.insert`
