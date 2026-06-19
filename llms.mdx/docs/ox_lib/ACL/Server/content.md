# Server (/docs/ox_lib/ACL/Server)



Wrapper around the built-in ACL system. Handles lib.addCommand and ox\_groups permissions.\
Refer to [Basic Aces & Principals overview/guide](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917) for more information.

## lib.addAce [#libaddace]

Assigns the ace permission to a principal. Third parameter defaults to 'allow', while passing `false` sets the permission to 'deny'.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.addAce(principal, ace, allow)

    lib.addAce('group.admin', 'command.say')
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/server'

    lib.addAce(principal, ace, allow)

    lib.addAce('group.admin', 'command.say')
    ```
  </Tab>
</Tabs>

* principal: `string`
* ace: `string`
* allow: `boolean`

## lib.removeAce [#libremoveace]

Removes the ace permission from a principal. Third parameter defaults to 'allow', while passing `false` sets the permission to 'deny'.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.removeAce(principal, ace, allow)

    lib.removeAce('group.admin', 'command.say')
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/server'

    lib.removeAce(principal, ace, allow)

    lib.removeAce('group.admin', 'command.say')
    ```
  </Tab>
</Tabs>

* principal: `string`
* ace: `string`
* allow: `boolean`

## lib.addPrincipal [#libaddprincipal]

Assigns a principal to a parent principal. Children inherit permissions from the parent.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.addPrincipal(child, parent)

    lib.addPrincipal('player.1', 'group.moderator')
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/server'

    lib.addPrincipal(child, parent)

    lib.addPrincipal('player.1', 'group.moderator')
    ```
  </Tab>
</Tabs>

* child: `string`
* parent: `string`

## lib.removePrincipal [#libremoveprincipal]

Removes a principal from a parent principal.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.removePrincipal(child, parent)

    lib.removePrincipal('player.1', 'group.moderator')
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/server'

    lib.removePrincipal(child, parent)

    lib.removePrincipal('player.1', 'group.moderator')
    ```
  </Tab>
</Tabs>

* child: `string`
* parent: `string`
