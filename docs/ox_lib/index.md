---
title: Getting Started
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ox_lib is a collection of Lua and UI functions to utilise in other resources.

The UI is built in React so the code needs to be compiled into standard JS.  
If you don't know how to do this then please download the [release](https://github.com/overextended/ox_lib/releases/latest) (ox_lib.zip) which is *already* compiled into a working resource.

<Tabs>
<TabItem value='Lua'>

To enable the library inside of your resource just add `@ox_lib/init.lua` to `shared_scripts` or
a `shared_script` in your `fxmanifest.lua` file.

```lua
shared_scripts {
    '@ox_lib/init.lua'
}
```

Or if the library is the only shared script you use you can do:

```lua
shared_script '@ox_lib/init.lua'
```

</TabItem>
<TabItem value='JS/TS'>

:::caution
Npm package for the lib does **not** support all the functions that are available for Lua.

All supported functions are located inside the `resource` folder in the lib.
:::

You can get the npm package [here](https://npmjs.com/package/@overextended/ox_lib).

**Usage:**  
You can either import the whole library object which contains all the functions for that scope (client/server/shared) or you can deconstruct it and import the functions you find needed at the time.

```ts
import lib from '@overextended/ox_lib/server'
```

```ts
import { versionCheck } from '@overextended/ox_lib/server'
```

</TabItem>
</Tabs>

**ACE Permissions:**

```yaml
add_ace resource.ox_lib command.add_ace allow
add_ace resource.ox_lib command.remove_ace allow
add_ace resource.ox_lib command.add_principal allow
add_ace resource.ox_lib command.remove_principal allow
```

**Configuration**

```yaml
set ox:primaryColor "blue"
set ox:ox:primaryShade 8
```

That's it!  
You can now use the library functions inside of your resource, check the rest of the documentation to see how to utilise them.

## Using icons for interface functions

The icon library used is Font Awesome 6.0, if for the icon you define only a string the default icon type will be `solid`.  
If you want to use a different icon type, i.e apple as a brand, you need to define icon as a table (`array`) with the first value being the icon type (`fas`, `far`, `fab`) as a string, and the second being the icon name.

<Tabs>
<TabItem value='Lua'>

```lua
icon = {'fab', 'apple'}
```

</TabItem>
<TabItem value='JS/TS'>

```ts
icon: ['fab', 'apple']
```

</TabItem>
</Tabs>

## Building the UI

If you wish to edit any of the UI elements you will need to download the *source* code, edit what you need and then compile it.

:::danger

**DO NOT** de-bundle and un-minify the release CSS and JS files to edit them.
:::
**Requirements:**

* [Node.js (LTS)](https://nodejs.org/)
* pnpm

**Installing Node.js:**

* Download the LTS version of Node.js.
* Go through the install and make sure you install all of the features.
* Run node --version in cmd and make sure that it gives you the version number. If it doesn't then you didn't install it correctly.

**Installing pnpm:**

* After installing NodeJS you can install pnpm by running `npm install -g pnpm`.

**Building the UI:**

* cd into the web directory.
* run `pnpm i` to install the dependencies.
* run `pnpm build` to build the source files.

:::info Hot reloads
When working in the browser you can run `pnpm start`, which supports hot reloads meaning that
you will see your changes after saving your file.

If you want to work in game you can run `pnpm start:game` which writes changes to disk, so
the only thing you have to do is restart the resource for it take affect.
:::
