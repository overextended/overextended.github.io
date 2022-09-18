---
title: Menu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Keyboard navigation menu with specific event functions.

### lib.registerMenu
Registers and caches a menu under the specified id.

<Tabs>
<TabItem value='Lua'>

```lua
lib.registerMenu(data, cb)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.registerMenu(data, cb)
```
</TabItem>
</Tabs>

* data: `table` (`object`)
  * id: `string`
  * title: `string`
  * options: `table` (`array`)
    * label: `string`
    * icon?: `string`
    * values?: `table` (`string[]`)
      * If provided creates a side scrollabel list.
    * description?: `string`
      * Displays tooltip below menu on hovered item with provided description.
    * defaultIndex?: `number`
      * Sets the current index for the list to specified number.
    * args?: `any`
  * position?: `'top-left'` or `'top-right'` or `'bottom-left'` or `'bottom-right'`
    * Default: `'top-left'`
  * disableInput?: `boolean`
    * Default: `false`
  * onClose: `function`
    * Function that runs when the menu is exited via ESC/Backspace.
  * onSelected: `function`(selected: `number`: scrollIndex: `number`: args: `any`)
    * Function being ran when the selected button in the menu changes. 
  * onSideScroll: `function`(selected: `number`: scrollIndex: `number`: args: `any`)
    * Function ran whenever a scroll list item is changed.
* cb: `function`(selected: `number`: scrollIndex: `number`: args: `any`)
  * Callback function when the menu item is pressed.

### lib.showMenu
Displays the menu with the provided id.


<Tabs>
<TabItem value='Lua'>

```lua
lib.showMenu(id)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.showMenu(id)
```
</TabItem>
</Tabs>

* id: `string`



### lib.hideMenu

<Tabs>
<TabItem value='Lua'>

```lua
lib.hideMenu(onExit)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.hideMenu(onExit)
```
</TabItem>
</Tabs>

* onExit?: `boolean`
  * If true runs the menu's `onClose` function.

### lib.getOpenMenu
Returns the id of the currently open menu.

<Tabs>
<TabItem value='Lua'>

```lua
lib.getOpenMenu()
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.getOpenMenu()
```
</TabItem>
</Tabs>


### lib.setMenuOptions

<Tabs>
<TabItem value='Lua'>

```lua
lib.setMenuOptions(id, options, index)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.setMenuOptions(id, options, index)
```
</TabItem>
</Tabs>

* id: `string`
* options: `table` (`object` or `array`)
* index?: `number`
  * If specified only sets the options table on the specified options index.

**Example:**

Replaces the 3rd index option of the specified menu

<Tabs>
<TabItem value='Lua'>

```lua
lib.setMenuOptions('some_menu_id', {label = 'New option', icon = 'plus'}, 3)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.setMenuOptions('some_menu_id', {label: 'New option', icon: 'plus'}, 3)
```
</TabItem>
</Tabs>

### Usage Example
First we register the menu with our specified options then we call the show function in the command.  

:::tip
Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu).
:::


<Tabs>
<TabItem value='Lua'>

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
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.registerMenu({
  id: 'some_menu_id',
  title: 'Menu title',
  position: 'top-right',
  onSideScroll: (selected, scrollIndex, args) => {
    console.log(selected, scrollIndex, args)
  },
  onSelected: (selected, scrollIndex, args) => {
    console.log(selected, scrollIndex, args)
  },
  onClose: () => {
    console.log('Menu closed')
  },
  options: [
    {label: 'Simple button', description: 'It has a description!'},
    {label: 'Simple button with icon', icon: 'arrows-up-down-left-right'},
    {label: 'Button with args', args: 'nice_button'},
    {label: 'List button', values: ['You', 'can', 'side', 'scroll', 'this'], description: 'It also has a description!'},
    {label: 'List button with default index', values: ['You', 'can', 'side', 'scroll', 'this'], defaultIndex: 5},
    {label: 'List button with args', values: ['You', 'can', 'side', 'scroll', 'this'], args: {someValue: 3, otherValue: 'value'}},
  ]
}, (selected, scrollIndex, args) => {
  console.log(selected, scrollIndex, args)
})

RegisterCommand('testmenu', () => {
  lib.showMenu('some_menu_id')
}, false)
```
</TabItem>
</Tabs>

![Example](https://i.imgur.com/lmimH7e.png)
