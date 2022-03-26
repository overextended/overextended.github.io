Displays the notification used accross the inventory.

The notifications are built using the [react-hot-teast](https://github.com/timolins/react-hot-toast) library.

```lua
-- data: table
exports.ox_inventory:notify(data)
```

Values for the `data` table:
```lua
-- text: string
-- type: string (optional)
    -- 'success'
    -- 'info' - default
    -- 'error'
-- position: string (optional)
    -- 'top-left'
    -- 'top-center' - default
    -- 'top-right'
    -- 'bottom-left'
    -- 'bottom-center'
    -- 'bottom-right
-- duration: number (optional - default is 4000 ms)
```

**Example:**
```lua
exports.ox_inventory:notify({type = 'Success', text = 'Making pancakes', duration = 2500})
```