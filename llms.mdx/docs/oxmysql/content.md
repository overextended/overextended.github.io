# OxMySQL (/docs/oxmysql)





<ResourceLinks repo="oxmysql" />

A replacement of mysql-async and ghmattimysql with expanded API and improved compatibility for MySQL 8.

## MySQL or MariaDB? [#mysql-or-mariadb]

Most resources for FiveM were designed to be used with MySQL 5.7 and may hit compatibility issues when using MySQL 8, i.e.

* More reserved keywords, like 'stored' and 'group'.
* Longtext / JSON fields do not support default values.

[MariaDB](https://mariadb.com/downloads/community/) is highly recommended for compatibility, and improved performance (over all versions of MySQL).

## Should I use XAMPP? [#should-i-use-xampp]

**No.** XAMPP is a *webserver stack* intended to be used for development, allowing easy local development and testing.\
Do not setup XAMPP just to run your database, and install [MariaDB](https://mariadb.com/downloads/community/) directly instead.

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download and install [MariaDB](https://mariadb.com/downloads/community/) [#download-and-install-mariadb-step]
  </div>

  <div className="fd-step">
    ### Download the [latest release](https://github.com/overextended/oxmysql/releases/latest) of oxmysql [#download-the-latest-release-of-oxmysql-step]
  </div>

  <div className="fd-step">
    ### Configure your server [#configure-your-server-step]

    * Open your server [configuration file](https://docs.fivem.net/docs/server-manual/setting-up-a-server-vanilla/#servercfg).
    * Add `start oxmysql` to the top of your resource list.
    * Configure your mysql connection string and set it before starting any resources.

    ```bash
    # Use your preferred format. Make sure you only ever use set.
    set mysql_connection_string "mysql://root:12345@localhost:3306/fivem"
    set mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=fivem"
    ```

    <Callout type="info">
      Certain special characters are reserved or unsupported depending on your connection string.\
      Avoid using these characters `; , / ? : @ & = + $ #`, and try swapping connection string format.
    </Callout>
  </div>

  <div className="fd-step">
    ### Slow query warnings [#slow-query-warnings-step]

    You will receive warnings if a query took a long time to complete, configurable with a convar.

    * Query time may not be entirely accurate.
    * Slow queries may not indicate a database issue (e.g. server hitches).
    * Slow queries on server startup are not necessarily problematic.

    ```bash
    set mysql_slow_query_warning 150
    ```
  </div>

  <div className="fd-step">
    ### Debug [#debug-step]

    Enabling the debug option will print all queries in the server console; you can also use an array to only print from a list of resources instead.

    ```bash
    set mysql_debug true
    set mysql_debug [
      "ox_core",
      "ox_inventory"
    ]
    ```

    You can temporarily modify the resource list with commands.

    ```bash
    oxmysql_debug remove ox_core
    oxmysql_debug add ox_core
    ```
  </div>
</div>

## Compatibility [#compatibility]

You can delete the following resources and allow oxmysql to provide their functionality.

* mysql-async
* ghmattimysql

## Usage [#usage]

Resources can import oxmysql methods by including our library, granting some type-checking and minor performance improvements over raw export calls.

### Lua [#lua]

Modify `fxmanifest.lua` for your resource, and add the following above any other script files.

```lua
server_script '@oxmysql/lib/MySQL.lua'
```

### JavaScript [#javascript]

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
import { oxmysql as MySQL } from "@overextended/oxmysql";
```

## Upserting [#upserting]

When uncertain if a row should be inserted into the database, or an existing row should be updated, queries should check for duplicate keys.

```lua
MySQL.prepare('INSERT INTO ox_inventory (owner, name, data) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)', { owner, dbId, inventory })
```

This is preferred over checking the existence of a row, then inserting or updating depending on the result.\
Furthermore, unlike using 'REPLACE INTO', the row is not deleted and re-inserted.
