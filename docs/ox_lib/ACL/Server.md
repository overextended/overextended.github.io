Wrapper around the built-in ACL system. Handles lib.addCommand and ox_groups permissions.
Refer to [Basic Aces & Principals overview/guide](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917) for more information.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.addAce

Assigns the ace permission to a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'.

<Tabs>
<TabItem value='Lua'>

```lua
lib.addAce(principal, ace, allow)

lib.addAce('group.admin', 'command.say')
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/server'

lib.addAce(principal, ace, allow)

lib.addAce('group.admin', 'command.say')
```

</TabItem>
</Tabs>

* principal: `string`
* ace: `string`
* allow: `boolean`

### lib.removeAce

Removes the ace permission from a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'.

<Tabs>
<TabItem value='Lua'>

```lua
lib.removeAce(principal, ace, allow)

lib.removeAce('group.admin', 'command.say')
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/server'

lib.removeAce(principal, ace, allow)

lib.removeAce('group.admin', 'command.say')
```

</TabItem>
</Tabs>

* principal: `string`
* ace: `string`
* allow: `boolean`

### lib.addPrincipal

Assigns a principal to a parent principal. Children inherit permissions from the parent.

<Tabs>
<TabItem value='Lua'>

```lua
lib.addPrincipal(child, parent)

lib.addPrincipal('player.1', 'group.moderator')
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/server'

lib.addPrincipal(child, parent)

lib.addPrincipal('player.1', 'group.moderator')
```

</TabItem>
</Tabs>

* child: `string`
* parent: `string`

### lib.removePrincipal

Removes a principal from a parent principal.

<Tabs>
<TabItem value='Lua'>

```lua
lib.removePrincipal(child, parent)

lib.removePrincipal('player.1', 'group.moderator')
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/server'

lib.removePrincipal(child, parent)

lib.removePrincipal('player.1', 'group.moderator')
```

</TabItem>
</Tabs>

* child: `string`
* parent: `string`
