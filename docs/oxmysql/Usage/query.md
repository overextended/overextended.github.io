---
keywords: ['fetchAll', 'execute']
title: Query
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When selecting data, returns all matching rows and columns; otherwise, returns data like insertId, affectedRows, etc.

## Promise

<Tabs>
<TabItem value="1" label="Lua">

```lua
local response = MySQL.query.await('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})

if response then
    for i = 1, #response do
        local row = response[i]
        print(row.firstname, row.lastname)
    end
end
```

</TabItem>
<TabItem value="2" label="JS">

```js
const response = await MySQL.query('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', [
  identifier
])

if (response) {
  response.forEach((row) => {
    console.log(row.identifier, row.firstname, row.lastname)
  })
}
```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Sync.fetchAll`
- `exports.ghmattimysql.execute`
- `exports.oxmysql.query_async`

## Callback

<Tabs>
<TabItem value="1" label="Lua">

  ```lua
  MySQL.query('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
      identifier
  }, function(response)
      if response then
          for i = 1, #response do
              local row = response[i]
              print(row.firstname, row.lastname)
          end
      end
  end)
  ```

</TabItem>
<TabItem value="2" label="JS">

  ```js
  MySQL.query('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', [
    identifier
  ], (response) => {
    if (response) {
      response.forEach((row) => {
        console.log(row.firstname, row.lastname)
      })
    }
  })
  ```

</TabItem>
</Tabs>

**Aliases**

- `MySQL.Async.fetchAll`
- `exports.ghmattimysql.execute`
- `exports.oxmysql.query`
