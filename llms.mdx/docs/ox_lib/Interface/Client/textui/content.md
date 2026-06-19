# TextUI (/docs/ox_lib/Interface/Client/textui)



# TextUI [#textui]

## lib.showTextUI [#libshowtextui]

Show the TextUI window.

<Callout type="warning">
  **DO NOT** run this function every tick, it's intended to be used as a toggle.
</Callout>

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.showTextUI(text, options)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.showTextUI(text, options);
    ```
  </Tab>
</Tabs>

* text: `string`
* options?: `table`
  * position?: `'right-center'` or `'left-center'` or `'top-center'` or `'bottom-center'`
    * Default: `'right-center'`
  * icon?: `string` or `table` (`array`)
  * iconColor?: `string`
  * iconAnimation?: `'spin'` `'spinPulse'` `'spinReverse'` `'pulse'` `'beat'` `'fade'` `'beatFade'` `'bounce'` `'shake'`
  * style?: React.CSSProperties
  * alignIcon?: `'top'` or `'center'`
    * Default: `'center'`

## lib.hideTextUI [#libhidetextui]

Hides the currently visible TextUI window

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.hideTextUI()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.hideTextUI();
    ```
  </Tab>
</Tabs>

## lib.isTextUIOpen [#libistextuiopen]

Returns whether Text UI is opened or not. The currently displayed text is returned as the second value.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    local isOpen, text = lib.isTextUIOpen()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    const [isOpen, text] = lib.isTextUIOpen();
    ```
  </Tab>
</Tabs>

## Usage Example [#usage-example]

### Basic [#basic]

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.showTextUI('[E] - Fuel vehicle')
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.showTextUI('[E] - Fuel vehicle');
    ```
  </Tab>
</Tabs>

![basic\_example](https://i.imgur.com/uZS40fD.png)

### Custom styling [#custom-styling]

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.showTextUI('[E] - Pick apple', {
        position = "top-center",
        icon = 'hand',
        style = {
            borderRadius = 0,
            backgroundColor = '#48BB78',
            color = 'white'
        }
    })
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.showTextUI('[E] - Pick apple', {
      position: 'top-center',
      icon: 'hand',
      style: {
        borderRadius: 0,
        backgroundColor: '#48BB78',
        color: 'white',
      },
    });
    ```
  </Tab>
</Tabs>

![custom\_example](https://i.imgur.com/sy9lPC0.png)
