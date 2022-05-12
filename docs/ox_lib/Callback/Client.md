Triggers a registered server callback and registers an event handler for the response.

### lib.callback
The response is handled in a separate coroutine.
```lua
-- name: string
-- delay: number or false
-- cb: function
lib.callback(name, delay, cb, ...)

lib.callback('ox_inventory:getItemCount', false, function(count)
    print(count)
end, 'water', {type = 'fresh'})
```

### lib.callback.await
The current coroutine is yielded until a response is received.
```lua
-- name: string
-- delay: number or false
lib.callback.await(name, delay, ...)

local count = lib.callback.await('ox_inventory:getItemCount', false, 'water', {type = 'fresh'})
print(count)
```
