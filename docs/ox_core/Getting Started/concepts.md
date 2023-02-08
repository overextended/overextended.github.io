# Concepts

We'll try to explain some technical but core concepts used in ox_core here.

## Classes

Lua doesn't have support for true classes, but rather prototype-based inheritance.  
A prototype can hold its own variables and methods, which another object (an instance) can reference or call.

```lua
-- OxPlayer will hold all inherited variables and methods for instances of it.
local OxPlayer = {}

-- Sets the "index metamethod" of OxPlayer to reference itself.
-- This is how instances will know to look up the table.
OxPlayer.__index = OxPlayer

-- Set a new metatable on the table passed to the function.
-- The important code here is { __index = OxPlayer }.
function OxPlayer.new(player)
    return setmetatable(player, OxPlayer)
end

-- Using the `:` syntax will pass the object as the first parameter.
function OxPlayer:getUsername()
    return self.username
end

-- Create our instance of OxPlayer.
local player = OxPlayer.new({
    username = 'Bob the Builder'
})

-- This is the same as OxPlayer.getUsername(player).
local username = player:getUsername()

-- 'Bob the Builder'
print(username)
```

When using the imported classes in your resources you can treat the methods as if you are calling a regular function.

```lua
local player = Ox.GetPlayer(playerId)
print(player.getUsername())
```
