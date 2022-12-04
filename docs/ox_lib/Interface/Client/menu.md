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
    * progress?: `number`
    * colorScheme?: `string`
    * icon?: `string`
    * iconColor?: `string`
    * values?: `table` (`Array<string | {label: string; description: string}>`)
      * If provided creates a side scrollabel list.
      * When using object and setting description, the set description will be displayed in the menu tooltip.
    * checked?: `boolean`
      * Setting either true or false will make the button a checkbox, if `values` is also provided the button will be a
      scrollable list.
    * description?: `string`
      * Displays tooltip below menu on hovered item with provided description.
    * defaultIndex?: `number`
      * Sets the current index for the list to specified number.
    * args?: {[key: `string`]: `any`}
      * Allows you to pass any arguments through the button.
      * If the button has `values` then `isScroll` is automatically passed.
      * If the button has `checked` to either true or false then `isCheck` is automatically passed.
    * close?: `boolean`
      * If set to false, it won't close the menu upon interacting with this option.
  * position?: `'top-left'` or `'top-right'` or `'bottom-left'` or `'bottom-right'`
    * Default: `'top-left'`
  * disableInput?: `boolean`
    * Default: `false`
  * canClose: `boolean`
    * If set to false the user won't be able to exit the menu without pressing one of the buttons.
  * onClose: `function`(keyPressed?: `'Escape' | 'Backspace'`)
    * Function that runs when the menu is exited via ESC/Backspace.
  * onSelected: `function`(selected: `number`, secondary: `number` | `boolean`, args: {[key: `string`]: `any`})
    * Function being ran when the selected button in the menu changes. 
  * onSideScroll: `function`(selected: `number`, scrollIndex: `number`, args: {[key: `string`]: `any`})
    * Function ran whenever a scroll list item is changed.
  * onCheck: `function`(selected: `number`, checked: `boolean`, args: {[key: `string`]: `any`})
* cb: `function`(selected: `number`, scrollIndex: `number`, args: {[key: `string`]: `any`})
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
        print("Scroll: ", selected, scrollIndex, args)
    end,
    onSelected = function(selected, secondary, args)
        if not secondary then
            print("Normal button")
        else
            if args.isCheck then
                print("Check button")
            end

            if args.isScroll then
                print("Scroll button")
            end
        end
        print(selected, secondary, json.encode(args, {indent=true}))
    end,
    onCheck = function(selected, checked, args)
        print("Check: ", selected, checked, args)
    end,
    onClose = function(keyPressed)
        print('Menu closed')
        if keyPressed then
            print(('Pressed %s to close the menu'):format(keyPressed))
        end
    end,
    options = {
        {label = 'Simple button', description = 'It has a description!'},
        {label = 'Checkbox button', checked = true},
        {label = 'Scroll button with icon', icon = 'arrows-up-down-left-right', values={'hello', 'there'}},
        {label = 'Button with args', args = {someArg = 'nice_button'}},
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
    console.log("Scroll: ", selected, scrollIndex, args)
  },
  onSelected: (selected, secondary, args) => {
    if (!secondary) {
      console.log("Normal button")
    } else {
      if (args.isCheck) {
        console.log("Check button")
      }

      if (args.isScroll) {
        console.log("Scroll button")
      }
    }
    console.log(selected, secondary, JSON.stringify(args, null, 2))
  },
  onCheck: (selected, checked, args) => {
    console.log("Check: ", selected, checked, args)
  },
  onClose: (keyPressed) => {
    console.log('Menu closed')
    if (keyPressed) {
      console.log(`Pressed ${keyPressed} to close the menu`)
    }
  },
  options: [
    {label: 'Simple button', description: 'It has a description!'},
    {label: 'Checkbox button', checked: true},
    {label: 'Scroll button with icon', icon: 'arrows-up-down-left-right', values: ['hello', 'there']},
    {label: 'Button with args', args: {someArg: 'nice_button'}},
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

![Example](https://i.imgur.com/eIdWZ4c.png)
