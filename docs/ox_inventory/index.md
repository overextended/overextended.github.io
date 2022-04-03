---
title: Getting Started
---

import IconButton from '@site/src/components/IconButton';
import { BsGithub, BsBookHalf } from 'react-icons/bs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

This resource is being designed with the intention of providing advanced functionality while remaining easy to use,
however it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;
otherwise you **should not** install this resource.
:::

## Dependecies

### OxMySQL

We utilise our own resource to communicate with MySQL databases via the node-mysql2 package.
The backend is actively maintained and updated unlike the package used by mysql-async, providing improved performance, security, and features.
We provide full backwards compatibility with mysql-async and build for the current Cfx architecture.

<div style={{ display: 'flex' }}>
  <a href="https://www.github.com/overextended/oxmysql" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
  <a href="https://overextended.github.io/docs/oxmysql/Installation/">
    <IconButton side="left" icon={<BsBookHalf />}>
      Documentation
    </IconButton>
  </a>
</div>

### Ox Lib

A resource designed to provide reusable functions that can be loaded into any resource with simple variable declarations rather than through fxmanifest.

**Currently used for:**

- SetInterval
- Server Callbacks
- Table utilities (contains, matches)
- Requesting models, animations, etc.
- Disabling control actions

<div style={{ width: 'fit-content' }}>
  <a href="https://www.github.com/overextended/ox_lib">
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
</div>

### Production Build

The interface is written in TypeScript using the React library, so the code included in the repository will not work.
You either need to build the package yourself (more information in [guides](./Guides) section), or download a release (ox_inventory.zip).

<div style={{ width: 'fit-content' }}>
  <a href="https://www.github.com/overextended/ox_inventory/releases/latest" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
</div>

## Optional resources

The resources listed under here **aren't** necessary for the inventory to work but still have full support.

### qtarget

A high performance targeting solution based on bt-target, and the basis for qb-target.
It is being updated alongside Ox Inventory to improve support as well as add compatibility when using QBCore or migrating from bt-target.
All stashes and shops will utilise PolyZone's instead of markers to interact with them.

:::caution

If you wish to use it first you must ensure that qtarget is enabled in the resource convars.
You will need to enable compatibility manually by adjusting your config - more information provided below.

You must start qtarget before the inventory and after your framework.
:::

<div style={{ display: 'flex' }}>
  <a href="https://www.github.com/overextended/qtarget" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
  <a href="https://overextended.github.io/qtarget/">
    <IconButton side="left" icon={<BsBookHalf />}>
      Documentation
    </IconButton>
  </a>
</div>

### NPWD

A standalone and feature-rich phone created by Project Error.

The inventory will handle disabling the phone when the player has no item, and supports toggling the phone through item use.

<div style={{ display: 'flex' }}>
  <a href="https://www.github.com/project-error/npwd" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
  <a href="https://projecterror.dev/docs">
    <IconButton side="left" icon={<BsBookHalf />}>
      Documentation
    </IconButton>
  </a>
</div>

### Installation

<Tabs>
<TabItem value="fresh_esx" label="Fresh ESX" default>

Use a compatible version of [ESX Legacy](https://github.com/esx-framework/esx-legacy) (1.6.0+)  
Execute the query inside [install.sql](https://github.com/overextended/ox_inventory/blob/main/setup/install.sql) and [vehicle.sql](https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql)  

 Start order should look like the following:
```
start oxmysql
start es_extended
start ox_lib
start ox_inventory
...
```
</TabItem>
<TabItem value="convert_esx" label="Convert ESX">

Use a compatible version of [ESX Legacy](https://github.com/esx-framework/esx-legacy) (1.6.0+)  
Execute the query inside [install.sql](https://github.com/overextended/ox_inventory/blob/main/setup/install.sql)
and [vehicle.sql](https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql)  
Open `fxmanifest.lua` and uncomment `server_script 'setup/convert.lua'`  
Start the server and execute the `convertinventory` command from the console  
Remove the conversion file  

 Start order should look like the following:
```
start oxmysql
start es_extended
start ox_lib
start ox_inventory
everything else
...
```

</TabItem>
<TabItem value="convert_linden" label="Upgrade from Linden Inventory">

Execute the query inside [upgrade.sql](https://github.com/overextended/ox_inventory/blob/main/setup/upgrade.sql)
and [vehicle.sql](https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql)  
Open `fxmanifest.lua` and uncomment `server_script 'setup/convert.lua'`  
Start the server and execute the `convertinventory` linden command from the console  
Remove the conversion file

</TabItem>
<TabItem value="standalone" label="Standalone">

Work in progress.

Refer to the "bridge" module to get an idea of how you setup support for any framework.  
Modifications will need to be made for licenses, owned vehicles, and jobs.

</TabItem>
</Tabs>

:::caution

You should restart your server after the first startup to ensure everything has been correctly setup
:::

## Upgrading ESX

Ox Inventory provides a complete suite of tools to replace the built-in items and inventory system from ESX, and is not intended to be used with resources designed around it.

- ESX loadouts do not exist - resources that use them need to remove references or be modified to look for the weapon as an item
- Stashes from resources such as esx_policejob, esx_ambulancejob, etc. should be removed
- Shops from esx_shops or the armoury from esx_policejob should be removed
- Resources like esx_inventoryhud, esx_trunkinventory, esx_addoninventory, etc. should be removed

### Optional optimisation

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

## Common Issues

### UI has not been built

Because the UI for inventory is written in React it can't run natively under FiveM so it must first be bundled into html/css/js.

We provide an easy way for you to do this by downloading a pre-bundled release, which you can get from [here](https://github.com/overextended/ox_inventory/releases/latest).  
Make sure you download the `ox_inventory.zip` file as that one contains the bundled files and others are raw source code.

If in case you wanted to edit the inventory UI you would have to build these files yourself.  
To do so please read our [_Building inventory UI_](./Guides/inventory_ui.md) guide.