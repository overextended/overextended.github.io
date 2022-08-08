---
title: Menu
---

Keyboard navigation menu with specific event functions.

### lib.registerMenu
Registers and caches a menu under the specified id.

```lua
-- data: table
  -- id: string
  -- title: string
  -- options: table
    -- label: string
    -- icon: string (optinal)
    -- values: table of strings (optional - if provided creates a side scrollable list)
    -- description?: string (optional)
    -- defaultIndex: number (optional - sets the current index for the list to specified number)
    -- args: any (optional)
  -- position: 'top-left' or 'top-right' or 'bottom-left' or 'bottom-right' (optional - default is top-left)
  -- disableInput: boolean (optional - default false)
  -- onClose: function (optional)
  -- onSelected: function (optional - triggers every time a new button is selected)
  -- onSideScroll: function (optional - triggers every time a side list is scrolled)
-- cb: function

lib.registerMenu(data, cb)
```

### lib.showMenu
Displays the menu with the provided id.

```lua
-- id: string

lib.showMenu(id)
```

### lib.hideMenu

```lua
-- onExit: boolean (optional - if true runs the menu's onClose function)

lib.hideMenu(onExit)
```

### lib.getOpenMenu
Returns the id of the currently open menu.

```lua
lib.getOpenMenu()
```

### lib.setMenuOptions

```lua
-- id: string
-- options: table
-- index: number (optional - if specified only sets the options table on the specified options index)

lib.setMenuOptions(id, options, index)
```
**Example:**

```lua
-- Replaces the option on 3rd index of specified menu

lib.setMenuOptions('some_menu_id', {label = 'New option', icon = 'plus'}, 3)
```

### Usage Example
First we register the menu with our specified options then we call the show function in the command.  

:::tip
Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu).
:::


```lua
lib.registerMenu({
	id = 'some_menu_id',
	title = 'Menu title',
  position = 'top-right',
	onSideScroll = function(selected, scrollIndex, args)
		print(selected, scrollIndex, args)
	end,
	onSelected = function(selected, scrollIndex, args)
		print(selected, scrollIndex, args)
	end,
	onClose = function()
		print('Menu closed')
	end,
	options = {
		{label = 'Simple button', description = 'It has a description!'},
		{label = 'Simple button with icon', icon = 'arrows-up-down-left-right'},
		{label = 'Button with args', args = 'nice_button'},
		{label = 'List button', values = {'You', 'can', 'side', 'scroll', 'this'}, description = 'It also has a description!'},
		{label = 'List button with default index', values = {'You', 'can', 'side', 'scroll', 'this'}, defaultIndex = 5},
		{label = 'List button with args', values = {'You', 'can', 'side', 'scroll', 'this'}, args = {someValue = 3, otherValue = 'value'}},
	}
}, function(selected, scrollIndex, args)
	print(selected, scrollIndex, args)
end)

RegisterCommand('testmenu', function()
	lib.showMenu('some_menu_id')
end)
```
![Example](https://i.imgur.com/lmimH7e.png)
