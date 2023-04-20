### setPaymentMethod

Replaces the standard payment method using "money" as an item.

```lua
exports.ox_fuel:setPaymentMethod(function(playerId, amount)
    local xPlayer = ESX.GetPlayerFromId(playerId)
    local bankAmount = xPlayer.getAccount('bank').money

    if bankAmount >= amount then
        xPlayer.removeAccountMoney('bank', amount)
        return true
    end

    TriggerClientEvent('ox_lib:notify', source, {
        type = 'error',
        description = locale('not_enough_money', amount - bankAmount)
    })
end)
```
