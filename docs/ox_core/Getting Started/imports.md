# Importing the core functions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IconButton from '@site/src/components/IconButton';
import { FaNpm } from 'react-icons/fa';

## Lua

Lua imports can be defined as part of fxmanifest, or loaded with the load function.

<Tabs>
<TabItem value="1" label="fxmanifest">

```lua
client_scripts {
	'@ox_core/imports/client.lua',
	'client/main.lua',
}

server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'@ox_core/imports/server.lua',
	'server/main.lua',
}
```

</TabItem>
<TabItem value="2" label="load">

```lua
local file = ('imports/%s.lua'):format(IsDuplicityVersion() and 'server' or 'client')
local import = LoadResourceFile('ox_core', file)
local chunk = assert(load(import, ('@@ox_core/%s'):format(file)))
chunk()
```

</TabItem>
</Tabs>

## JS/TS

If in case you want to write resources in JS/TS you will need to install our node client and server wrapper package,
which will allow you to use the core's functions with full type and intellisense support.

<a href='https://www.npmjs.com/package/@overextended/ox_core'>
<IconButton style={{marginTop: '0.7rem'}} side='left' icon={<FaNpm/>}>Package</IconButton>
</a>
