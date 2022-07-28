Mostly follows the format used by ESX and QBCore, with extra data such as damaged/missing props.  
https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L5

### lib.getVehicleProperties
```lua
-- vehicle: entity
lib.getVehicleProperties(vehicle)

lib.getVehicleProperties(GetVehiclePedIsUsing(PlayerPedId()))
```

### lib.setVehicleProperties
Requires the vehicle to belong to the client. _Do not use NetworkRequestControlOfEntity_.
```lua
-- vehicle: entity
-- props: table
lib.setVehicleProperties(vehicle, props)

RegisterNetEvent('ox_lib:setVehicleProperties', function(netid, data)
    lib.setVehicleProperties(NetToVeh(netid), data)
end)
```

#### Recommended usage
The server should tell the owner of the entity to set properties, using the following trigger.
```lua
TriggerClientEvent('ox_lib:setVehicleProperties', entityOwner, vehNetId, data)
```
