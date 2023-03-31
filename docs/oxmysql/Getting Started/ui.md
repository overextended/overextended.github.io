---
title: Using the Debug UI
---

Debug UI can show you useful information about your queries such as the total query time, count and total number of slow queries.  
You can also see which resources take up the most query time, the number of queries they ran and how many were slow.


## Requirements

Before using the UI first you have to make sure you have the `mysql_ui` convar set to true:

```yaml
set mysql_ui true
```

Also make sure that you have `command` ace permission access, then you should be able to use the `mysql` command in game to open up the UI and see your query data.


:::tip

You *do not* need to have the `mysql_debug` convar set to `true` in order to use the debug ui.
:::

## Main page

The main page shows you the resources that ran queries where you can filter them through a search bar, your general data
along side a pie chart which shows what resources took the most query time.

![oxmysql_ui_main](https://i.imgur.com/iQqWELJ.png)



## Resource page

The resource page shows you all the queries and their execution time inside a table that the resource previously ran,
alongside the total amount of the queries, execution time and slow queries for the selected resource.

Columns can be sorted by ascending and descending order.

Hovering over a query will display the full query inside a tooltip.


![oxmysql_ui_queries](https://i.imgur.com/gZpJoIg.png)

:::tip

Queries that exceed the value set in the `mysql_slow_query_warning` convar (defualt is 150) are going to show up as orange
and will be added to the slow queries count.
:::

*Note: For demonstation purposes the `mysql_slow_query_warning` convar was set to 5 here.*
