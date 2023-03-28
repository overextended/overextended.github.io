## Trigger Server Callback

### lib.callback

The response is handled in a separate coroutine.

```lua
lib.callback(name, delay, cb, args)
```

- name: `string`
- delay: `number` or `false`
- cb: `function(param)`
- args: `any`

### lib.callback.await

The current coroutine is yielded until a response is received.

```lua
lib.callback.await(name, delay, args)
```

- name: `string`
- delay: `number` or `false`
- args: `any`

## Register Client Callback

### lib.callback.register

Register an event handler for responding to server requests.

```lua
lib.callback.register(name, cb)
```

- name: `string`
- cb: `function(args)`

## Usage Example: Client To Server

For this example to fully make sense take a look at the example on the <a href='https://overextended.github.io/docs/ox_lib/Callback/Lua/Server#usage-example/'> server</a> page for the callbacks.
```lua 
-- Success is returned
-- Sends 1 as a count
lib.callback('removeWater', false, function(success)
    if success then
        print('Removed 1 water')
    else
        print('You don\'t have any water to remove')
    end
end, 1)
```

## Usage Example: Client To Client
```lua
lib.callback.register('countIncrease', function(amount, increase)
    local sum = amount + increase
    return sum
end)
```
```lua
-- Sum is returned
-- Sends amount varaible and 5 as increase
local amount = 10
lib.callback('countIncrease', false, function(sum)
    print(sum)
end, amount, 5)
```
