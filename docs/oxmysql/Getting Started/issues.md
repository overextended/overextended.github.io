# Common Issues

### Unable to establish a connection

This is usually the result of incorrect database settings or your password containing reserved characters (`; , / ? : @ & = + $ #`).
:::tip Solution
Ensure you have entered the correct database settings in the mysql_connection_string convar.  
You can try using the semicolon-separated format if your password contains reserved characters.
:::

### No such export ... in resource oxmysql

Typically the result of failing to follow instructions.
:::tip Solution
Download the latest release _build_ (not source) of oxmysql, and ensure it is starting before any resources that require it.
:::

### Numbers treated as string

This is an incompatibility between mysqljs (used by mysql-async) and mysql2 (used by oxmysql) (See [Known incompatibilities with node-mysql](https://github.com/sidorares/node-mysql2/tree/master/documentation#known-incompatibilities-with-node-mysql))

To resolve this issue simply add `&decimalNumbers=true` to the connection string, ie. `mysql://root@localhost/essentialmode?charset=utf8mb4_general_ci&decimalNumbers=true` to revert to the behavior of mysqljs.

Do note with this that precision will be less with this, as Javascript treats all numbers as floats, so a double or decimal will be cast to a float this way.
