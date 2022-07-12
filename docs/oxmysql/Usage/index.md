# Usage

## lib/MySQL

Resources can import oxmysql methods by including our library, granting some type-checking and minor performance improvements over raw export calls.

### Lua

Modify `fxmanifest.lua` for your resource, and add the following above any other script files.

```lua
server_script '@oxmysql/lib/MySQL.lua'
```

If you are using VSCode with [sumneko Lua](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) you can get access to some basic types and intellisense.

```json
"Lua.workspace.library": [
  "C:\\pathtoserver\\resources\\oxmysql\\lib\\define.lua",
]
```

### JavaScript

Use your favourite package manager to install our [node package](https://www.npmjs.com/package/@overextended/oxmysql).

```yaml
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

## Placeholders

Safely format queries by using placeholders in the query, and sending arguments in an array or object.  
Named placeholders are not recommended, and unsupported when using MySQL.prepare.

```lua
MySQL.query('SELECT * FROM users WHERE identifier = ?', { 'license:abcdefg' })
MySQL.query('SELECT * FROM users WHERE identifier = :identifier', { identifier = 'license:abcdefg' })
```

## Upsert

When uncertain if a row should be inserted into the database, or an existing row should be updated, queries should check for duplicate keys.

```lua
MySQL.prepare('INSERT INTO ox_inventory (owner, name, data) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)', { owner, dbId, inventory })
```

This is preferred over checking the existence of a row, then inserting or updating depending on the result.  
Furthermore, unlike using 'REPLACE INTO', the row is not deleted and re-inserted.
