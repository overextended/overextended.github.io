# Cache

Caches data related to the player and handling some events or statebags.  
An interval runs every 100ms to update data that cannot be checked via handlers.  

https://github.com/overextended/ox_lib/blob/master/resource/cache/client.lua

## States
```lua
cache.ped		-- player entity id
cache.vehicle	-- vehicle entity id
cache.seat		-- vehicle seat index
```

## lib.onCache
Register a callback function when the value is changed.
```lua
lib.onCache('vehicle', function(value)
	print('vehicle', value)
end)

lib.onCache('seat', function(value)
	print('seat', value)
end)
```
