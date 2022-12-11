# Placeholders

This allows queries to be properly prepared and escaped; the following lines are equivalent.

```lua
"SELECT group FROM users WHERE identifier = ?", {identifier}
"SELECT group FROM users WHERE identifier = :identifier", {identifier = identifier}
"SELECT group FROM users WHERE identifier = @identifier", {['@identifier'] = identifier}
```

Named placeholders are deprecated and should be avoided as much as possible.
