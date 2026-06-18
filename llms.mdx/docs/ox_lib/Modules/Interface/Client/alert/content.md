# Alert Dialog (/docs/ox_lib/Modules/Interface/Client/alert)



# Alert Dialog [#alert-dialog]

Simple alert dialog that can display a message to the player.\
Returns whether the player pressed the confirm button or canceled the dialog.

## lib.alertDialog [#libalertdialog]

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    <Tabs items="[&#x22;Client&#x22;, &#x22;Server&#x22;]">
      <Tab>
        ```lua
        lib.alertDialog(data)
        ```
      </Tab>

      <Tab>
        ```lua
        TriggerClientEvent('ox_lib:alertDialog', source, data)
        ```
      </Tab>
    </Tabs>
  </Tab>

  <Tab>
    <Callout>
      This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
    </Callout>

    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.alertDialog(data);
    ```
  </Tab>
</Tabs>

* data: `table` (`object`)
  * header: `string`
    * Dialog title.
  * content: `string`
    * Dialog body content, supports markdown.
  * centered?: `boolean`
    * Centers the dialog vertically and horizontally.
  * cancel?: `boolean`
    * Displays a cancel button (ESC is still available if this is not defined).
  * size?: `'xs'` or `'sm'` or `'md'` or `'lg'` or `'xl'`
  * overflow?: `boolean`
  * labels?: `table`
    * Allows you to define the displayed labels for cancel and/or confirm buttons.
    * cancel?: `string`
    * confirm?: `string`

Returns `'confirm'` if the player pressed the confirm button, otherwise if the player pressed the cancel button
or has exited the dialog with ESC the return will be `'cancel'`.

## lib.closeAlertDialog [#libclosealertdialog]

Force closes the active alert dialog and sets its return data as `nil`

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.closeAlertDialog()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.closeAlertDialog();
    ```
  </Tab>
</Tabs>

## Example [#example]

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    local alert = lib.alertDialog({
        header = 'Hello there',
        content = 'General Kenobi  \n Markdown support!',
        centered = true,
        cancel = true
    })

    print(alert)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    const alert = await lib.alertDialog({
      header: 'Hello there',
      content: 'General Kenobi  \n Markdown support!',
      centered: true,
      cancel: true,
    });

    console.log(alert);
    ```
  </Tab>
</Tabs>

![alert\_dialog](https://i.imgur.com/Xlx86aK.png)
