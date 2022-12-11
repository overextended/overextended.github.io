# Transaction

A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a `boolean`, which is the result of the transaction.

## Specific Format

When using the `Specific` format you must pass one parameter to the oxmysql export. In this case, the `queries` parameter contains your queries and the SQL variables unique to each query.

This is useful for transactions where the queries do not share many SQL variables.

### Lua

```lua
local queries = {
    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 1 } },
    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 2 } }
} -- NOTE, the 'values' tables can be named 'parameters' here for MySQL-Async compatibility.
```

#### Callback

```lua
-- alias: exports.oxmysql:transaction
-- alias: MySQL.Async.transaction

MySQL.transaction(queries, function(success)
    print(success)
end)
```

#### Promise

```lua
-- alias: exports.oxmysql:transaction_async
-- alias: MySQL.Sync.transaction
local success = MySQL.transaction.await(queries)
print(success)
```

### JavaScript

```js
const queries = [
  { query: 'INSERT INTO `test` (id) VALUES (:someid)', values: { someid: 1 } },
  { query: 'INSERT INTO `test` (id) VALUES (:someid)', values: { someid: 2 } },
]; // NOTE, the 'values' objects can be named 'parameters' here for MySQL-Async compatibility.
```

#### Callback

```js
// alias: exports.oxmysql.transaction

MySQL.transaction(queries, (success) => {
  console.log(success);
});
```

#### Promise

```js
// alias: exports.oxmysql.transaction_async

const success = await MySQL.transaction(queries);
console.log(success);
```

## Shared Format

When using the `Shared` format you must pass two parameters to the oxmysql export. The `queries` and the `parameters` those queries will use.  
This is useful if your queries use the same SQL variables.

### Lua

```lua
local queries = {
    'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',
    'SET `name` = :newname IN `test` WHERE `id` = :someid'
}

local parameters = { ['someid'] = 2, ['somename'] = 'John Doe', ['newname'] = 'John Notdoe' }
```

#### Callback

```lua
-- alias: exports.oxmysql:transaction
-- alias: MySQL.Async.transaction

MySQL.transaction(queries, parameters, function(success)
    print(success)
end)
```

#### Promise

```lua
-- alias: exports.oxmysql:transaction_async
-- alias: MySQL.Sync.transaction

local success = MySQL.transaction.await(queries, parameters)
print(success)
```

### JavaScript

```js
const queries = [
  'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',
  'SET `name` = :newname IN `test` WHERE `id` = :someid',
];

const parameters = { someid: 2, somename: 'John Doe', newname: 'John Notdoe' };
```

#### Callback

```js
// alias: exports.oxmysql.transaction

MySQL.transaction(queries, parameters, (success) => {
  console.log(success);
});
```

#### Promise

```js
// exports.oxmysql.transaction_async

const success = await MySQL.transaction(queries, parameters);
console.log(success);
```

## Transaction Isolation Level

This can be set through the convar `mysql_transaction_isolation_level` which should be an integer ranging from `1-4`. The default convar value set by oxmysql is `2`.

| Convar Value | Result           |
| ------------ | ---------------- |
| 1            | Repeatable Read  |
| 2            | Read Committed   |
| 3            | Read Uncommitted |
| 4            | Serializable     |
