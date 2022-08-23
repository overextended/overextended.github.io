# QBCore

Ox Inventory provides a complete suite of tools to replace the built-in items and inventory system from QBCore, and is not intended to be used with resources designed around it.

- Stashes from resources such as qb-policejob, qb-ambulancejob, etc. should be removed, they are not compatible
- qb-inventory should be removed for optimal compatibility, if you didn't remove it, qb-core will not function properly and will show errors.
- qb-shops and qb-weapons automatically get stopped by Ox Inventory, so you don't have to worry about those, just don't start them manually after as they will conflict.

## Optional optimisation

All item related functions from Player, such as `xPlayer.Functions.GetItemByName`, have been modified for compatibility purposes; however they are considered deprecated.

The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones.

You should read through the functions section for further information, but the following should give you a decent idea.

<Tabs>
<TabItem value="qb" label="QBCore">

```lua
local acetone = Player.Functions.GetItemByName('acetone')
local antifreeze = Player.Functions.GetItemByName('antifreeze')
local sudo = Player.Functions.GetItemByName('sudo')
if acetone?.amount > 2 and antifreeze?.amount > 4 and sudo?.amount > 9 then
    Player.Functions.RemoveItem("acetone", 3)
    Player.Functions.RemoveItem("antifreeze", 5)
    Player.Functions.RemoveItem("sudo", 10)
end
```

</TabItem>
<TabItem value="inventory" label="Inventory">

Add the following code somewhere in your resource to cache the exports metatable.

```lua
local ox_inventory = exports.ox_inventory
```

You will be able to reference any functions exposed through the export.

```lua
local items = ox_inventory:Search(source, 'count', {'acetone', 'antifreeze', 'sudo'})
if items and items.acetone > 2 and items.antifreeze > 4 and items.sudo > 9 then
    ox_inventory:RemoveItem(source, 'acetone', 3)
    ox_inventory:RemoveItem(source, 'antifreeze', 5)
    ox_inventory:RemoveItem(source, 'sudo', 10)
end
```

</TabItem>
</Tabs>
