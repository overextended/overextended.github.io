### setMoneyCheck

Replaces the standard inventory search for "money".

```lua
exports.ox_fuel:setMoneyCheck(function()
    local accounts = ESX.GetPlayerData().accounts

    for i = 1, #accounts do
        if accounts[i].name == 'bank' then
            return accounts[i].money
        end
    end

    return 0
end)
```
