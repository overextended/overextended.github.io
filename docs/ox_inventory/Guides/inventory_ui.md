---
title: Building inventory UI
---

import IconButton from '@site/src/components/IconButton'
import {FaNodeJs} from 'react-icons/fa'

## Requirements to build:

* Node.js
* pnpm

## Installing Node.js:

* Download the LTS version of Node.js 16.
* Go through the install and make sure you install all of the features.
* Run `node --version` in cmd and make sure that it gives you the version number. If it doesn't then you didn't install it correctly.

<div style={{width: 'fit-content'}}>
    <a href="https://www.nodejs.org">
        <IconButton side='left' icon={<FaNodeJs/>}>Download</IconButton>
    </a>
</div>

## Installing pnpm:

* Now that you've installed Node.js you can install pnpm by running `npm install -g pnpm` in cmd.

## Building the UI:

* cd into the web directory of ox_inventory
* In your cmd type `pnpm i` and it will start downloading the node modules.
* After it's done downloading node modules you can run `pnpm build` to build the UI.

:::info Hot reloads
When working in the browser you can run `pnpm start`, which supports hot reloads meaning that
you will see your changes after saving your file.

If you want to work in game you can run `pnpm start:game` which writes changes to disk, so
the only thing you have to do is restart the resource for it take affect.
:::
