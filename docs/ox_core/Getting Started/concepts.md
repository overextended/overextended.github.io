# Concepts

We'll try to explain some technical but core concepts used in ox_core here.

## Classes

Lua doesn't have support for true classes, but rather prototype-based inheritance.
A prototype can hold its own variables and methods, which another object (an instance) can reference or call.

```lua
-- CPlayer will hold all inherited variables and methods for instances of it.
local CPlayer = {}

-- Sets the "index metamethod" of CPlayer to reference itself.
-- This is how instances will know to look up the table.
CPlayer.__index = CPlayer

-- Set a new metatable on the table passed to the function.
-- The important code here is { __index = CPlayer }.
function CPlayer.new(player)
    return setmetatable(player, CPlayer)
end

-- Using the `:` syntax will pass the object as the first parameter.
function CPlayer:getUsername()
    return self.username
end

-- Create our instance of CPlayer.
local player = CPlayer.new({
    username = 'Bob the Builder'
})

-- This is the same as CPlayer.getUsername(player).
local username = player:getUsername()

-- 'Bob the Builder'
print(username)
```

When using the imported classes in your resources you can treat the methods as if you are calling a regular function.

```lua
local player = Ox.GetPlayer(playerId)
print(player.getUsername())
```
