Mostly follows the format used by ESX and QBCore, with extra data such as damaged/missing props.  
https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L5

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.getVehicleProperties


```ts
lib.getVehicleProperties(vehicle)
```
* vehicle: `entity`

<Tabs>
<TabItem value='Lua'>

```lua
lib.getVehicleProperties(GetVehiclePedIsUsing(PlayerPedId()))
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.getVehicleProperties(GetVehiclePedIsUsing(PlayerPedId()))
```
</TabItem>
</Tabs>


### lib.setVehicleProperties
Requires the vehicle to belong to the client. _Do not use NetworkRequestControlOfEntity_.

```lua
lib.setVehicleProperties(vehicle, props)
```
* vehicle: `entity`
* props: `table` (`object`)

<Tabs>
<TabItem value='Lua'>

```lua
RegisterNetEvent('ox_lib:setVehicleProperties', function(netid, data)
    lib.setVehicleProperties(NetToVeh(netid), data)
end)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

onNet('ox_lib:setVehicleProperties', (netid, data) => {
  lib.setVehicleProperties(NetToVeh(netid), data)
})
```
</TabItem>
</Tabs>



#### Recommended usage
The server should tell the owner of the entity to set properties, using the following trigger.
```lua
TriggerClientEvent('ox_lib:setVehicleProperties', entityOwner, vehNetId, data)
```
