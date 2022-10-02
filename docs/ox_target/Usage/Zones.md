The input for zones differs slightly from all other options, instead taking the [zone](../../ox_lib/Zones/Client.md) properties and two additional properties (drawSprite, and options).

## addSphereZone

```lua
exports.ox_target:addSphereZone(parameters)
```

### Parameters

```lua
{
  coords = vector3,
  radius = number,
  debug? = boolean,
  drawSprite? = boolean,
  options = options,
}
```

### Example

```lua
exports.ox_target:addSphereZone({
    coords = vec3(440.5363, -1015.666, 28.85637),
    radius = 1,
    debug = drawZones,
    options = {
        {
            name = 'sphere',
            event = 'ox_target:debug',
            icon = 'fa-solid fa-circle',
            label = '(Debug) Sphere',
            canInteract = function(entity, distance, coords, name)
                return true
            end
        }
    }
})
```

## addBoxZone

```lua
exports.ox_target:addBoxZone(parameters)
```

### Parameters

```lua
{
  coords = vector3,
  size = vector3,
  rotation = number,
  debug? = boolean,
  drawSprite? = boolean,
  options = options,
}
```

### Example

```lua
exports.ox_target:addBoxZone({
    coords = vec3(442.5363, -1017.666, 28.85637),
    size = vec3(2, 2, 2),
    rotation = 45,
    debug = drawZones,
    options = {
        {
            name = 'box',
            event = 'ox_target:debug',
            icon = 'fa-solid fa-cube',
            label = '(Debug) Box',
            canInteract = function(entity, distance, coords, name)
                return true
            end
        }
    }
})
```

## removeZone

```lua
exports.ox_target:removeZone(id)
```

The `id` passed to removeZone is the return value from addBoxZone / addSphereZone.
