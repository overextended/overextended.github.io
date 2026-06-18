# Functions (/docs/ox_fuel/Client/functions)



## setMoneyCheck [#setmoneycheck]

Override the built-in money check.

```lua
exports.ox_fuel:setMoneyCheck(method)
```

### Parameters [#parameters]

* method: `function(): number`

### Example [#example]

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
