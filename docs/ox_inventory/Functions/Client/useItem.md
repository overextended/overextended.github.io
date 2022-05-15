Uses the passed item, then triggers the callback function.  
Should be calling during item callbacks to utilise the builtin methods (server checks, progress bar, etc.).

```lua
-- data: table
-- cb: function (optional)
exports.ox_inventory:useItem(data, cb)
```

```lua
exports('bandage', function(data, slot)
    local playerPed = PlayerPedId()
    local maxHealth = GetEntityMaxHealth(playerPed)
    local health = GetEntityHealth(playerPed)

    -- Does the ped need to heal?
    if health < maxHealth then
        -- Use the bandage
        exports.ox_inventory:useItem(data, function(data)
            -- The item has been used, so trigger the effects
            if data then
                SetEntityHealth(playerPed, math.min(maxHealth, math.floor(health + maxHealth / 16)))
                exports.ox_inventory:notify({text = 'You feel better already'})
            end
        end)
    else
        -- Don't use the item
        exports.ox_inventory:notify({type = 'error', text = 'You don\'t need a bandage right now'})
    end
end)
```
