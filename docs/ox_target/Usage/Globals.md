Registers options that will apply to all entities of that type (object, ped, player, vehicle).

```lua
local options = {
    {
        name = 'ox:option1',
        event = 'ox_target:debug',
        icon = 'fa-solid fa-road',
        label = 'Option 1',
        canInteract = function(entity, distance, coords, name, bone)
            return math.random(0, 100) < 51
        end
    },
    {
        name = 'ox:option2',
        event = 'ox_target:debug',
        icon = 'fa-solid fa-road',
        label = 'Option 2',
        canInteract = function(entity, distance, coords, name, bone)
            return math.random(0, 100) < 51
        end
    }
}

local optionNames = { 'ox:option1', 'ox:option2' }
```

## Create Globals

```lua
exports.ox_target:addGlobalObject(options)
exports.ox_target:addGlobalPed(options)
exports.ox_target:addGlobalPlayer(options)
exports.ox_target:addGlobalVehicle(options)
```

## Remove Globals

```lua
exports.ox_target:removeGlobalObject(optionNames)
exports.ox_target:removeGlobalPed(optionNames)
exports.ox_target:removeGlobalPlayer(optionNames)
exports.ox_target:removeGlobalVehicle(optionNames)
```
