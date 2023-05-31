---
title: Single
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns all selected columns for a single row.

## Promise

<Tabs>
<TabItem value="1" label="Lua">

```lua
local row = MySQL.scalar.await('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
})

if not row then return end

print(row.firstname, row.lastname)
```

</TabItem>
<TabItem value="2" label="JS">

```js
const row = await MySQL.scalar('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', [
  identifier
])

if (!row) return;

console.log(row.firstname, row.lastname)
```

</TabItem>
</Tabs>

**Aliases**

- `exports.oxmysql.single_async`

## Callback

<Tabs>
<TabItem value="1" label="Lua">

```lua
MySQL.scalar('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
}, function(row)
    if not row then return end

    print(row.firstname, row.lastname)
end)
```

</TabItem>
<TabItem value="2" label="JS">

```js
MySQL.scalar('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', [
  identifier
], (row) => {
  if (!row) return;

  console.log(row.firstname, row.lastname)
})
```

</TabItem>
</Tabs>

**Aliases**

- `exports.oxmysql.single`
