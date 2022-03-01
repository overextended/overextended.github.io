# Cache

Caches data related to the player and handling some events or statebags.  
An interval runs every 100ms to update data that cannot be checked via handlers.  

Still a work-in-progress and does not have any API or events.  
https://github.com/overextended/ox_lib/blob/master/resource/states/client.lua

## States
```lua
cache.ped		= PlayerPedId()
cache.vehicle	= GetVehiclePedIsIn(cache.ped, false)
cache.driver	= GetPedInVehicleSeat(cache.vehicle, -1) == cache.ped
```
