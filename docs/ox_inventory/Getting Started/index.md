---
title: Getting started
sidebar_position: 1
---

import ResourceLinks from '@site/src/components/ResourceLinks';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

This resource is being designed with the intention of providing advanced functionality while remaining easy to use,
however it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;
otherwise you **should not** install this resource.
:::

## Dependencies

### oxmysql

We utilise our own resource to communicate with MySQL databases via the node-mysql2 package.  
The backend is actively maintained and updated unlike the package used by mysql-async, providing improved performance, security, and features.  
We provide full backwards compatibility with mysql-async and build for the current Cfx architecture.

<ResourceLinks repo="https://www.github.com/overextended/oxmysql" docs="../oxmysql"></ResourceLinks>

### ox_lib

Provides easily reusable functions that can be imported into your resource or called with exports. Notably used for

- Intervals
- Event callbacks
- Streaming
- Points and markers
- Notifications and progress bar

<ResourceLinks repo="https://www.github.com/overextended/ox_lib" docs="../ox_lib"></ResourceLinks>

## Optional Dependencies

The resources listed under here **aren't** necessary for the inventory to work but still have full support.

### ox_target

A performant and flexible standalone "third-eye" targeting resource.  
Stashes, shops, and crafting benches will be accessible via zone targets instead of using markers.

<ResourceLinks repo="https://www.github.com/overextended/ox_target" docs="../ox_target"></ResourceLinks>

### npwd

A standalone and feature-rich phone created by Project Error.

The inventory will handle disabling the phone when the player has no item, and supports toggling the phone through item use.

<ResourceLinks repo="https://github.com/project-error/npwd" docs="https://projecterror.dev/docs/npwd/start/installation"></ResourceLinks>

## Installation

### Production Build

The user interface included with the source code must be compiled.  
You can compile it yourself by following the [build guide](./Guides/inventory_ui), otherwise download a production build below.

<ResourceLinks repo="https://github.com/overextended/ox_inventory/releases/latest"></ResourceLinks>

### Setup

If you are using a supported framework, refer to the dedicated guide in the navigation bar.

#### Custom Framework

Integration between your framework and ox_inventory should be relatively simple if you aren't replacing and attempting to support backwards-compatibility with an existing inventory system.

You should first reference the [mysql](https://github.com/overextended/ox_inventory/blob/main/modules/mysql/server.lua) module and setup appropriate table and column names.

```lua
elseif shared.framework == 'myframework' then
    playerTable = 'characters' -- table storing player / character data
    playerColumn = 'charid'    -- primary key for identifying the character (i.e. identifier, citizenid, id)
    vehicleTable = 'vehicles'  -- table storing owned vehicle data
    vehicleColumn = 'id'       -- primary key for identifying the vehicle (i.e. plate, vin, id)
end
```

You will need events and functions to handle licenses, owned vehicles, and job systems; these should be handled in the "bridge" module.

If your framework doesn't have its own inventory system or you don't care about compatibility, it may be easier to refer to the incredibly barebones [ox bridge](https://github.com/overextended/ox_inventory/tree/main/modules/bridge/ox) (used by ox_core).

Refer to the [esx bridge](https://github.com/overextended/ox_inventory/tree/main/modules/bridge/esx) or [qbcore bridge](https://github.com/overextended/ox_inventory/tree/main/modules/bridge/qb) to get an idea of replacing existing inventories.

... todo: more information, work on a bridge template

:::caution

You should restart your server after the first startup to ensure everything has been correctly setup
:::
