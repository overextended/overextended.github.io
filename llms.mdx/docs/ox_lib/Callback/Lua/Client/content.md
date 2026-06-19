# Client (/docs/ox_lib/Callback/Lua/Client)



## Trigger Server Callback [#trigger-server-callback]

### lib.callback [#libcallback]

The response is handled in a separate coroutine.

```lua
lib.callback(name, delay, cb, ...)
```

* name: `string`
* delay: `number` or `false`
  * Amount of time until this callback can be triggered again
* cb: `function`
* ...: `any`

```lua
lib.callback('ox_inventory:getItemCount', false, function(count)
    print(count)
end, 'water', {type = 'fresh'})
```

### lib.callback.await [#libcallbackawait]

The current coroutine is yielded until a response is received.

```lua
lib.callback.await(name, delay, ...)
```

* name: `string`
* delay: `number` or `false`
  * Amount of time until this callback can be triggered again
* ...: `any`

```lua
local count = lib.callback.await('ox_inventory:getItemCount', false, 'water', {type = 'fresh'})
print(count)
```

## Register Client Callback [#register-client-callback]

### lib.callback.register [#libcallbackregister]

Register an event handler for responding to server requests.

```lua
lib.callback.register(name, cb)
```

* name: `string`
* cb: `function`

```lua
lib.callback.register('ox:getNearbyVehicles', function(radius)
    local nearbyVehicles = lib.getNearbyVehicles(GetEntityCoords(cache.ped), radius, true)
    return nearbyVehicles
end)
```
