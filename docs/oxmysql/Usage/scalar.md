---
keywords: ['scalar', 'fetchScalar']
title: Scalar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns the first column for a single row.

## Promise

<Tabs>
<TabItem value="1" label="Lua">

```lua
local firstName = MySQL.scalar.await('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
})

print(firstName)
```

</TabItem>
<TabItem value="2" label="JS">

```js
const firstName = await MySQL.scalar('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', [
  identifier
])

console.log(firstName)
```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Sync.fetchScalar`
- `exports.ghmattimysql.scalar`
- `exports.oxmysql.scalar_async`

## Callback

<Tabs>
<TabItem value="1" label="Lua">

```lua
MySQL.scalar('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
}, function(firstName)
    print(firstName)
end)
```

</TabItem>
<TabItem value="2" label="JS">

```js
MySQL.scalar('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', [
  identifier
], (firstName) => {
  console.log(firstName)
})
```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Async.fetchScalar`
- `exports.ghmattimysql.scalar`
- `exports.oxmysql.scalar`
