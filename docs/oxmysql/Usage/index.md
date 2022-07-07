# Usage

## Placeholders

Safely format queries by using placeholders in the query, and sending arguments in an array or object.  
Named placeholders are not recommended, and unsupported when using MySQL.prepare.

```lua
MySQL.query('SELECT * FROM users WHERE identifier = ?', { 'license:abcdefg' })
MySQL.query('SELECT * FROM users WHERE identifier = :identifier', { identifier = 'license:abcdefg' })
```

```js
exports.oxmysql.query('SELECT * FROM users WHERE identifier = ?', { 'license:abcdefg' });
exports.oxmysql.query('SELECT * FROM users WHERE identifier = :identifier', { identifier: 'license:abcdefg' });
```

## Upsert

When uncertain if a row should be inserted into the database, or an existing row should be updated, queries should check for duplicate keys.  

```lua
MySQL.prepare('INSERT INTO ox_inventory (owner, name, data) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)', { owner, dbId, inventory })
```

This is preferred over checking the existence of a row, then inserting or updating depending on the result.  
Furthermore, unlike using 'REPLACE INTO', the row is not deleted and re-inserted.
