Get data for the currently equipped weapon.

```lua
exports.ox_inventory:getCurrentWeapon()
```

You can also listen for changes to the current weapon using an event handler.

```lua
AddEventHandler('ox_inventory:currentWeapon', function(currentWeapon)
	CurrentWeapon = currentWeapon
end)
```

- currentWeapon?: `table`
  - ammo?: `string` Name of the item used as ammo.
  - hash: `number`
  - label: `string`
  - melee: `boolean`
  - metadata: `table`
    - ammo?: `number` Amount of ammo loaded into the weapon.
    - components?: `table` Array of component item names, used to apply weapon components.
    - durability?: `number`
    - registered?: `string` Name of the player that bought the weapon at a shop.
    - serial?: `string`
  - name: `string` Name of the item.
  - slot: `number`
  - weight: `number`
