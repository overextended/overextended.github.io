# Server (/docs/ox_lib/Version/Server)



## lib.versionCheck [#libversioncheck]

Compares the resource version to the latest published release on GitHub.\
[Utilises GitHub's release API](https://docs.github.com/en/rest/reference/releases)

```lua
lib.versionCheck(repository)
```

* repository: `string`

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.versionCheck('overextended/ox_lib')
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/server'

    lib.versionCheck('overextended/ox_lib')
    ```
  </Tab>
</Tabs>
