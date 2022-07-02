---
slug: ./../ # Sets the url to /docs/oxmysql/
---

# Getting Started

## Installation
- Download the [latest build](https://github.com/overextended/oxmysql/releases/latest) of oxmysql (not the source code).
- Extract the contents of the archive to your resources folder.
- Start the resource near the top of your resources in your `server.cfg`.
- If you have a lot of streamed assets, load them first to prevent timing out the connection.


## Configuration
You can change the configuration settings by using convars inside your `server.cfg`.
Reference the following for an idea of how to set your connection options.
You must include one of the following lines, adjusted for your connection and database settings.
```
set mysql_connection_string "mysql://root:12345@localhost:3306/es_extended?charset=utf8mb4"
set mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=es_extended;charset=utf8mb4"
```
Certain special characters are reserved or blocked and may cause issues when used in your password.  
For more optional settings (such as multiple statements) you can reference [pool.d.ts](https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Pool.d.ts#L10) and [connection.d.ts](https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Connection.d.ts#L8).  


You can also add the following convars if you require extra information when testing queries.
```
set mysql_slow_query_warning 150
set mysql_debug true
```
### Using the UI
Before using the UI first you have to make sure you have the `mysql_ui` convar set to true:
```
set mysql_ui true
```
Also make sure that you have `command` ace permission access, then you should be able to use the
`mysql` command in game to open up the UI and see your query data.

