### lib.cron.new

Creates a new [cronjob](https://en.wikipedia.org/wiki/Cron), scheduling a task to run at fixed times or intervals.  
Supports numbers, any value `*`, lists `1,2,3`, ranges `1-3`, and steps `*/4`.  
Day of the week is a range of `1-7` starting from Sunday and allows short-names (i.e. sun, mon, tue).

```lua
lib.cron.new(expression, job, options)
```

* expression:
  * string A cron expression such as `* * * * *` representing minute, hour, day, month, and day of the week
* job:
  * fun(task: `OxTask`, date: `osdate`)
* options?:
  * debug?: `boolean`
