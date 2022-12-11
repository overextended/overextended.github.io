---
slug: ./../ # Sets the url to /docs/oxmysql/
---

# Getting Started

## MySQL or MariaDB?

Most resources for FiveM were designed to be used with MySQL 5.7 and may hit compatibility issues when using MySQL 8, i.e.

- More reserved keywords, like 'stored' and 'group'.
- Longtext / JSON fields do not support default values.

[MariaDB](https://mariadb.org/) is strongly recommended for compatibility, and improved performance (over all versions of MySQL).

## XAMPP

XAMPP is not a database, and should not be used solely to start your MySQL/MariaDB service. Please _do not_ use XAMPP.

## Installation

- Download the [latest build](https://github.com/overextended/oxmysql/releases/latest) of oxmysql (not the source code).
- Extract the contents of the archive to your resources folder.
- Start the resource near the top of your resources in your `server.cfg`.
- If you have a lot of streamed assets, load them first to prevent timing out the connection.

## Configuration

You can change the configuration settings by using convars inside your `server.cfg`.
Reference the following for an idea of how to set your connection options.
You must include one of the following lines, adjusted for your connection and database settings.

:::caution
When using convars do not replicate sensitive information to the client.
**set** will only be set on the server, while **setr** is replicated.
:::

```yaml
set mysql_connection_string "mysql://root:12345@localhost:3306/es_extended?charset=utf8mb4"
set mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=es_extended;charset=utf8mb4"
```

Certain special characters are reserved or blocked and may cause issues when used in your password.
For more optional settings (such as multiple statements) you can reference [pool.d.ts](https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Pool.d.ts#L10) and [connection.d.ts](https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Connection.d.ts#L8).

You can also add the following convars if you require extra information when testing queries.

```yaml
set mysql_slow_query_warning 150
set mysql_debug true
```

### Debug options

When using the `mysql_debug` convar, rather than setting the value as true, you can send an array and enable debug prints for a set list of resources instead.

```yaml
set mysql_debug [
    "ox_core",
    "ox_inventory"
]
```

This list can be adjusted during runtime with commands, temporarily adding or removing resources until the resource is restarted.

```yaml
oxmysql_debug remove ox_core
oxmysql_debug add ox_core
```

### Using the UI

Before using the UI first you have to make sure you have the `mysql_ui` convar set to true:

```yaml
set mysql_ui true
```

Also make sure that you have `command` ace permission access, then you should be able to use the
`mysql` command in game to open up the UI and see your query data.

## Compatibility

You shouldn't run multiple mysql resources to ensure the best experience.
The resources listed below can be deleted to allow oxmysql to handle the events, without any changes.

### mysql-async

Standard API for mysql-async uses `server_script '@mysql-async/lib/MySQL.lua'`.
Raw exports, mostly used in resources written in JavaScript or C#, are _not supported_.

### ghmattimysql

As of v2.4.0, oxmysql can be utilised with ghmattimysql's exports, such as `exports.ghmattimysql:execute`.
