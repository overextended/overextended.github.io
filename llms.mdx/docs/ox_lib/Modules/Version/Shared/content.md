# Shared (/docs/ox_lib/Modules/Version/Shared)



## lib.checkDependency [#libcheckdependency]

Check if a resource is using a specified version or higher, allowing for compatibility checks or throwing errors.

```lua
lib.checkDependency(resource, version)
```

* resource: `string`
* version: `string`

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    if not lib.checkDependency('ox_lib', '1.5.0') then error() end
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/shared'
    // import { checkDependency } from '@overextended/ox_lib/shared'

    if (!lib.checkDependency('ox_lib', '1.5.0')) error()
    ```
  </Tab>
</Tabs>
