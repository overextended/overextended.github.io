---
title: Common issues
---

## Unable to establish a connection

This is usually the result of incorrect database settings or your password containing reserved characters.  
`; , / ? : @ & = + $ #` are reserved.

:::info
  Ensure you have entered the correct database settings in the `mysql_connection_string` convar. You can try using the
  semicolon-separated format if your password contains reserved characters.
:::

## No such export ... in resource oxmysql

- Download the latest release _build_ (not the source code) of oxmysql.
- Ensure it is starting before any resources that require it.

## Numbers treated as string

To resolve this issue simply enable `decimalNumbers` in your connection string, ie. `mysql://root@localhost/essentialmode?decimalNumbers=true`.

:::caution
  JavaScript treats all numbers as floats, so a double or decimal value will be cast as a float with this setting.
  Numbers will have less precision when this setting is enabled.
:::
