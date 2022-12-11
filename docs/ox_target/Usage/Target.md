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

local models = { `prop_atm_01`, `prop_atm_02` }
local optionsNames = { 'ox:option1', 'ox:option2' }
```

## addModel

Add new options when targeting a specific model or list of models.

```lua
exports.ox_target:addModel(models, options)
```

## removeModel

Remove options from a specific model or list of models.

```lua
exports.ox_target:removeModel(models, optionNames)
```

## addEntity

Add new options when targeting a networked entity matching the given netid or list of netIds.
Requires the use of [NetworkGetNetworkIdFromEntity](https://docs.fivem.net/natives/?_0x9E35DAB6) on an entity id.

```lua
exports.ox_target:addEntity(netIds, options)
```

## removeEntity

Remove options from a networked entity matching the given netid or list of netIds.
Requires the use of [NetworkGetNetworkIdFromEntity](https://docs.fivem.net/natives/?_0x9E35DAB6) on an entity id.

```lua
exports.ox_target:removeEntity(netIds, optionNames)
```

## addLocalEntity

Add new options when targeting a local entity or list of entities.

```lua
exports.ox_target:addLocalEntity(entities, options)
```

## removeLocalEntity

Remove options from a local entity or list of entities.

```lua
exports.ox_target:removeLocalEntity(entities, optionNames)
```
