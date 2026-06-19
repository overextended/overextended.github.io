# Clipboard (/docs/ox_lib/Interface/Client/clipboard)



# Clipboard [#clipboard]

## lib.setClipboard [#libsetclipboard]

Sets the player's clipboard to the specified string value.

<Callout>
  Will not work if focus is already taken by some NUI component.
</Callout>

<Callout>
  To create a new line use 

  `\t\n`

   not just 

  `\n`

   in your string.
</Callout>

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.setClipboard(value)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.setClipboard(value);
    ```
  </Tab>
</Tabs>

* value: `string`
