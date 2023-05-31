---
title: Prepare
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The only function that provides true prepared statements, granting native protection and query planning by MySQL.  
Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.

- Date will not return the datestring commonly used in FiveM
- TINYINT 1 and BIT will not return a boolean
- You can only use ? value placeholders, ?? column placeholders and named placeholders will throw an error

When using SELECT, the return value will match `query`, `single`, or `scalar` depending on the number of columns and rows selected.

## Promise

<Tabs>
<TabItem value="1" label="Lua">

```lua
local response = MySQL.prepare.await('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})


print(json.encode(response, { indent = true, sort_keys = true }))
```

</TabItem>
<TabItem value="2" label="JS">

```js
const response = await MySQL.prepare('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', [
  identifier
])

console.log(JSON.stringify(response))
```

</TabItem>
</Tabs>

**Aliases**

- `exports.oxmysql.prepare_async`

## Callback

<Tabs>
<TabItem value="1" label="Lua">

```lua
MySQL.prepare('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
}, function(response)
    print(json.encode(response, { indent = true, sort_keys = true }))
end)
```

</TabItem>
<TabItem value="2" label="JS">

```js
MySQL.prepare('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', [
  identifier
], (response) => {
  console.log(JSON.stringify(response))
})
```

</TabItem>
</Tabs>

**Aliases**

- `exports.oxmysql.prepare`
