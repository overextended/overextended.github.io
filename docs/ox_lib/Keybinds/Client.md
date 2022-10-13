# Keybinds

Simple and centralised key mapping management, supporting callbacks when pressing and releasing keybinds.

```lua
lib.keybinds.new(data)
```
* data: `table`
  * name: `string`
  * description: `string`
  * keybind?: `string`
    * Default: None
  * disable?: `function`(self: `table`, toggle: `boolean`)
  * onPressed?: `function`(self: `table`, toggle: `boolean`)
  * onReleased?: `function`(self: `table`, toggle: `boolean`)

```lua
local function buttonPressed()
    print('respects being paid')
end

local function buttonReleased()
    print('no longer paying respects')
end

local keybind = lib.keybinds.new({
    name = 'respects',
    description = 'press F to pay respects',
    keybind = 'F',
    onPressed = buttonPressed,
    onReleased = buttonReleased
})
```

The keybind object can be retrieved in other scripts by using the getter function.
```lua
local keybind = lib.keybinds.get('respects')
```

Keybinds can be enabled/disabled by using the disable method.
```lua
keybind:disable(true) -- disable
keybind:disable(false) -- enable
```