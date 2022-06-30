---
title: Building inventory UI
---

import IconButton from '@site/src/components/IconButton'
import {FaNodeJs} from 'react-icons/fa'

## Requirements to build:

* PnpM - https://pnpm.io/

## Installing PnpM:
* https://pnpm.io/installation
## Building the UI:

* cd into the web directory of ox_inventory
* In your cmd type `pnpm i` and in will start downloading the node modules.
* After it's done downloading node modules you can run `pnpm build` to build the UI.

:::info Hot reloads
When working in the browser you can run `pnpm start`, which supports hot reloads meaning that
you will see your changes after saving your file.

If you want to work in game you can run `pnpm start:game` which writes changes to disk, so
the only thing you have to do is restart the resource for it take affect.
:::
