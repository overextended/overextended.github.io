---
title: OxMySQL
---

# OxMySQL

import { Steps } from 'nextra-theme-docs';
import { Callout } from 'nextra/components';
import ResourceLinks from '@components/resource-links';

<ResourceLinks repo="https://github.com/overextended/oxmysql" />

A replacement of mysql-async and ghmattimysql with expanded API and improved compatibility for MySQL 8.

## MySQL or MariaDB?

Most resources for FiveM were designed to be used with MySQL 5.7 and may hit compatibility issues when using MySQL 8, i.e.

- More reserved keywords, like 'stored' and 'group'.
- Longtext / JSON fields do not support default values.

[MariaDB](https://mariadb.com/downloads/community/) is highly recommended for compatibility, and improved performance (over all versions of MySQL).

## Should I use XAMPP?

**No.** XAMPP is a _webserver stack_ intended to be used for development, allowing easy local development and testing.  
Do not setup XAMPP just to run your database, and install [MariaDB](https://mariadb.com/downloads/community/) directly instead.

## Installation

<Steps>

### Download the [latest release](https://github.com/overextended/oxmysql/releases/latest).

### Configure your server

<Callout type="warning">

When using convars do not replicate sensitive information to the client.  
**set** will only be set on the server, while **setr** is replicated.

</Callout>

- Start by opening your server configuration (i.e. server.cfg) and adding `start oxmysql` before any of its dependents (usually it's the first resource you start).
- Set a mysql connection string using either of the following formats, using your server authentication details and target database.

```bash
set mysql_connection_string "mysql://root:12345@localhost:3306/es_extended"
set mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=es_extended"
```

<Callout type="info">

Certain special characters are reserved or unsupported depending on your connection string.  
Avoid using these characters `; , / ? : @ & = + $ #`, and try swapping connection string format.

</Callout>

### Slow query warnings

By default you will receive warnings if a query took ~150ms to complete, however

1. Query time is calculated on fxserver based on response time, and may not be entirely accurate.
2. Server hitches may delay the query response, and may not indicate a database issue.
3. Excessive queries in a short timeframe may report with higher response times.

You can adjust the minimum response time with a convar.

```bash
set mysql_slow_query_warning 150
```

<Callout type="info">

Slow query warnings are only shown if **mysql_ui** or **mysql_debug** is enabled.

</Callout>

### Debug

Enabling the debug option will print all queries in the server console; you can also use an array to only print from a list of resources instead.

```bash
set mysql_debug true
set mysql_debug [
  "ox_core",
  "ox_inventory"
]
```

This value can be changed without restarting oxmysql, and you can temporarily modify the list with commands.

```bash
oxmysql_debug remove ox_core
oxmysql_debug add ox_core
```

### mysql-async compatibility

The `mysql-async` directory must be deleted to properly provide support.

- 🗹 Supports `server_script '@mysql-async/lib/MySQL.lua'`.
- 🗹 Supports `MySQL.Sync` and `MySQL.Async` methods.
- ☐ Raw exports are not supported (i.e. `exports['mysql-async].mysql_execute`).
- ☐ Multi-statements are disabled for security reasons (see [#102](https://github.com/overextended/oxmysql/issues/102)).

### ghmattimysql compatibility

The `ghmattimysql` resource must be stopped to properly provide support.

- 🗹 Supports `exports.ghmattimysql.execute` and other similar exports.
- 🗹 Supports `exports.ghmattimysql.executeSync` and other similar exports.

</Steps>

## Usage

Resources can import oxmysql methods by including our library, granting some type-checking and minor performance improvements over raw export calls.

### Lua

Modify `fxmanifest.lua` for your resource, and add the following above any other script files.

```lua
server_script '@oxmysql/lib/MySQL.lua'
```

If you're using [Lua Language Server](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) you can get access to basic types and intellisense.

```json
"Lua.workspace.library": [
  "C:/pathtoserver/resources/oxmysql/lib/define.lua",
]
```

### JavaScript

You can use raw exports, or install [our npm package](https://www.npmjs.com/package/@overextended/oxmysql) for intellisense and similar usage as Lua.

```bash
# With pnpm
pnpm add @overextended/oxmysql

# With Yarn
yarn add @overextended/oxmysql

# With npm
npm install @overextended/oxmysql
```

Import the oxmysql object into your resource.

```js
import { oxmysql as MySQL } from '@overextended/oxmysql';
```

## Upserting

When uncertain if a row should be inserted into the database, or an existing row should be updated, queries should check for duplicate keys.

```lua
MySQL.prepare('INSERT INTO ox_inventory (owner, name, data) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)', { owner, dbId, inventory })
```

This is preferred over checking the existence of a row, then inserting or updating depending on the result.  
Furthermore, unlike using 'REPLACE INTO', the row is not deleted and re-inserted.
