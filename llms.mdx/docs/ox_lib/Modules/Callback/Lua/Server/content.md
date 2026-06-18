# Server (/docs/ox_lib/Modules/Callback/Lua/Server)



## Trigger Client Callback [#trigger-client-callback]

### lib.callback [#libcallback]

The response is handled in a separate coroutine.

```lua
lib.callback(name, playerId, cb, ...)
```

* name: `string`
* playerId: `number`
* cb: `function`
* ...: `any`

```lua
lib.callback('ox:getNearbyVehicles', source, function(vehicles)
    for i = 1, #vehicles do
        DeleteEntity(entity)
    end
end, args.radius)
```

### lib.callback.await [#libcallbackawait]

The current coroutine is yielded until a response is received.

```lua
lib.callback.await(name, playerId, ...)
```

* name: `string`
* playerId: `number`
* ...: `any`

```lua
local vehicles = lib.callback.await('ox:getNearbyVehicles', source, args.radius)

for i = 1, #vehicles do
    DeleteEntity(entity)
end
```

## Register Server Callback [#register-server-callback]

### lib.callback.register [#libcallbackregister]

Register an event handler for responding to client requests.

```lua
lib.callback.register(name, cb)
```

* name: `string`
* cb: `function`

```lua
lib.callback.register('ox_inventory:getItemCount', function(source, item, metadata, target)
    local inventory = target and Inventory(target) or Inventory(source)
    return (inventory and Inventory.GetItem(inventory, item, metadata, true)) or 0
end)
```
