# Permissions

Wrapper around the built-in ACL system. Handles lib.addCommand and ox_groups permissions.  
Refer to [Basic Aces & Principals overview/guide](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917) for more information.

### lib.addAce
Assigns the ace permission to a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'.
```lua
-- principal: string
-- ace: string
-- allow: boolean
lib.addAce(principal, ace, allow)

lib.addAce('group.admin', 'command.say')
```

### lib.removeAce
Removes the ace permission from a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'.
```lua
-- principal: string
-- ace: string
-- allow: boolean
lib.removeAce(principal, ace, allow)

lib.removeAce('group.admin', 'command.say')
```

### lib.addPrincipal
Assigns a principal to a parent principal. Children inherit permissions from the parent.
```lua
-- child: string
-- parent: string
lib.addPrincipal(child, parent)

lib.addPrincipal('player.1', 'group.moderator')
```

### lib.removePrincipal
Removes a principal from a parent principal.
```lua
-- child: string
-- parent: string
lib.removePrincipal(child, parent)

lib.removePrincipal('player.1', 'group.moderator')
```
