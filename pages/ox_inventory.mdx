import ResourceLinks from '@components/resource-links';
import { Steps, Tabs, Tab } from 'nextra-theme-docs';
import { Callout } from 'nextra/components';

# Ox Inventory

<ResourceLinks repo="https://github.com/overextended/ox_inventory" />

A slot-based inventory with item metadata for "item uniqueness".

<Callout type="warning">

If you are replacing a built-in framework inventory there will be compatibility errors.  
If you are unwilling or incapable of resolving incompatibilities, do not install this resource.

</Callout>

## Installation

<Callout type="info">

We **strongly** recommend referring to [Guides](../guides) for setting up Git, Node.js, and pnpm.

</Callout>

<Steps>
### Install all resource dependencies
- [oxmysql](../oxmysql)
- [ox_lib](../ox_lib/)

### Download a [release](https://github.com/overextended/ox_inventory/releases) or build the source code.

```bash
git clone https://github.com/overextended/ox_inventory.git
cd ox_inventory/web
pnpm i
pnpm build
```

### Install optional dependencies

These resources aren't required but provide additional functionality.

- [ox_target](../ox_target/)

### Resource start order

It's important for your resources to start in a logical order to prevent errors from missing dependencies.

```bash
start oxmysql   # this should be one of the first resources
start ox_lib
start framework # the name of your framework (i.e. ox_core, es_extended, qb-core)
start ox_target
start ox_inventory
```

### Config

Resource configuration is handled using [convars](https://docs.fivem.net/docs/scripting-reference/convars/).

```bash
### Shared

# Activate specific event handlers and functions (supported: ox, esx, qb, nd)
setr inventory:framework "esx"

# Number of slots for player inventories
setr inventory:slots 50

# Maximum carry capacity for players, in grams (frameworks may override this)
setr inventory:weight 30000

# Integrated support for qtarget/ox_target stashes, shops, etc
# Note: qtarget is deprecated, a future update may drop support (ox_target only, or gated features)
setr inventory:target false

# Jobs with access to police armoury, evidence lockers, etc
setr inventory:police ["police", "sheriff"]

### Client

# The URL to load item images from
setr inventory:imagepath "nui://ox_inventory/web/images"

# Weapons will reload after reaching 0 ammo
setr inventory:autoreload false

# Blur the screen while accessing the inventory
setr inventory:screenblur true

# Default hotkeys to access primary and secondary inventories, and hotbar
setr inventory:keys ["F2", "K", "TAB"]

# Enable control action when inventory is open
setr inventory:enablekeys [249]

# Weapons must be aimed before shooting
setr inventory:aimedfiring false

# Show a list of all nearby players when giving items
setr inventory:giveplayerlist false

# Toggle weapon draw/holster animations
setr inventory:weaponanims true

# Toggle item notifications (add/remove)
setr inventory:itemnotify true

# Toggle weapon item notifications (equip/holster)
setr inventory:weaponnotify true

# Disable drop markers and spawn a prop instead
setr inventory:dropprops true

# Set the default model used for drop props
setr inventory:dropmodel "prop_med_bag_01b"

# Disarm the player if an unexpected weapon is in use (i.e. did not use the weapon item)
setr inventory:weaponmismatch true

# Ignore weapon mismatch checks for the given weapon type (e.g. ['WEAPON_SHOVEL', 'WEAPON_HANDCUFFS'])
setr inventory:ignoreweapons []

# Suppress weapon and ammo pickups
setr inventory:suppresspickups 1

### Server

# Compare current version to latest release on GitHub
set inventory:versioncheck true

# Stashes will be wiped after remaining unchanged for the given time
set inventory:clearstashes "6 MONTH"

# Discord webhook url, used for imageurl metadata content moderation (image embeds)
set inventory:webhook ""

# Logging via ox_lib (0: Disable, 1: Standard, 2: Include AddItem/RemoveItem, and all shop purchases)
set inventory:loglevel 1

# Item prices fluctuate in shops
set inventory:randomprices true

# Loot will randomly generate inside unowned vehicles and dumpsters
set inventory:randomloot true

# Minimum job grade to remove items from evidence lockers
set inventory:evidencegrade 2

# Trim whitespace from vehicle plates when checking owned vehicles
setr inventory:trimplate true

# Set the contents of randomly generated inventories
# [item name, minimum, maximum, loot chance]
set inventory:vehicleloot [
    ["cola", 1, 1],
    ["water", 1, 1],
    ["garbage", 1, 2, 50],
    ["panties", 1, 1, 5],
    ["money", 1, 50],
    ["money", 200, 400, 5],
    ["bandage", 1, 1]
]

set inventory:dumpsterloot [
    ["mustard", 1, 1],
    ["garbage", 1, 3],
    ["money", 1, 10],
    ["burger", 1, 1]
]

# Set items to sync with framework accounts
set inventory:accounts ["money"]
```

</Steps>

## Framework incompatibilities

- Any frameworks with their own built-in inventory, item, or weapon systems are expected to have compatibility issues.
- Money as an item may conflict with banking/account systems.
  - You can sync these values with [server.syncInventory](https://github.com/overextended/ox_inventory/blob/aff8ef9e9ee3f93f177ce03b3f37895ff5781800/modules/bridge/nd/server.lua#L64-L77).

Refer to issue [#1297](https://github.com/overextended/ox_inventory/issues/1297) for known compatibility issues.

## Using an unsupported framework

If your framework does not have official support you'll have to implement it yourself.  
If you're replacing an existing/built-in inventory system this may be complicated, but is a fairly simple task otherwise.

This setup is highly opinionated and rigid, so it's up to your own ability as a developer to make it work.

<Steps>
### Setup a bridge submodule

You'll want to set the target framework first - this could be the name, an acronym, or just "custom".

```bash
setr inventory:framework "custom"
```

Copy the `ox` directory from the [bridge](https://github.com/overextended/ox_inventory/tree/main/modules/bridge) directory and give it the name you used above.

The bare minimum functions and event handlers are added here, but you'll need to change them to match your framework; we can't provide any help here. You can refer to the other framework bridges if you need inspiration.

### Setup database references

Take a look at the [mysql](https://github.com/overextended/ox_inventory/blob/main/modules/mysql/server.lua) module. You'll need to reference your player/vehicle tables and id columns.

```lua
elseif shared.framework == 'custom' then
    playerTable = 'characters' -- table storing player / character data
    playerColumn = 'charid'    -- primary key for identifying the character (i.e. identifier, citizenid, id)
    vehicleTable = 'vehicles'  -- table storing owned vehicle data
    vehicleColumn = 'id'       -- primary key for identifying the vehicle (i.e. plate, vin, id)
end
```

</Steps>

## ESX

- You will need a [compatible version of ESX Legacy](https://github.com/esx-framework/esx_core) (1.6.0 or higher).
- You can convert player inventories with `convertinventory esx`.
- All items in the database will be migrated to the internal item data.
  - Always restart the resource when items are migrated!

## QBCore

<Callout type="warning">Support for QBCore is extremely limited, highly incompatible, and unlikely to improve.</Callout>

- You can use any "version" of qb-core that supports `QBCore.Functions.AddPlayerMethod`.
- You can convert player and vehicle inventories with `convertinventory qb`.
- All QB.Shared.Items will be migrated to the internal item data.
  - Always restart the resource when items are migrated!

### Qbox Project

- [Qbox Project GitHub](https://github.com/Qbox-project/)
- [Qbox txAdmin Recipe](https://github.com/Qbox-project/txAdminRecipe)

Qbox is a fork of QBCore developed by former team members and contributors to QBCore.

- Improved security and performance of qb resources.
- Integrated support for ox_inventory, with improved compatibility.
- Support for ox_lib and ox_target.
