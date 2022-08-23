# ESX

Ox Inventory provides a complete suite of tools to replace the built-in items and inventory system from ESX, and is not intended to be used with resources designed around it.

- ESX loadouts do not exist - resources that use them need to remove references or be modified to look for the weapon as an item
- Stashes from resources such as esx_policejob, esx_ambulancejob, etc. should be removed
- Shops from esx_shops or the armoury from esx_policejob should be removed
- Resources like esx_inventoryhud, esx_trunkinventory, esx_addoninventory, etc. should be removed

## Optional optimisation

All item related functions from xPlayer, such as `xPlayer.getInventoryItem`, have been modified for compatibility purposes; however they are considered deprecated.

The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones.

You should read through the functions section for further information, but the following should give you a decent idea.

<Tabs>
<TabItem value="esx" label="ESX">

```lua
if xPlayer.getInventoryItem('acetone').count > 2 and xPlayer.getInventoryItem('antifreeze').count > 4 and xPlayer.getInventoryItem('sudo').count > 9 then
    xPlayer.removeInventoryItem("acetone", 3)
    xPlayer.removeInventoryItem("antifreeze", 5)
    xPlayer.removeInventoryItem("sudo", 10)
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
