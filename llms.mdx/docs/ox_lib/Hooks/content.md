# Hooks (/docs/ox_lib/Hooks)



See our [internally registered hooks](https://github.com/overextended/ox_lib/blob/main/resource/state/server.lua) for examples.

# HookPipeline [#hookpipeline]

Creates a hook pipeline for a specific event, which manages a collection of registered hooks and controls execution flow through filtering, rejection, and dispatching.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.hook:new(event, filter)
    ```
  </Tab>

  <Tab>
    ```ts
    import { HookPipeline } from "@overextended/ox_lib/hooks";

    new HookPipeline(event, filter)
    ```
  </Tab>
</Tabs>

* event: `string`
* filter?: `function(hook, payload): boolean`
  * Used to filter out registered hooks based on if they pass a predicate function.

**Returns:** `HookPipeline`

## Methods [#methods]

### registerHook [#registerhook]

Registers a new event handler into the hook pipeline.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    pipeline:registerHook(handler, options)
    ```
  </Tab>

  <Tab>
    ```ts
    pipeline.registerHook(handler, options)
    ```
  </Tab>
</Tabs>

* handler: `function(payload: unknown): boolean`
* options?: `table`
  * Optional metadata to attach to the hook.

### remove [#remove]

Removes hooks from the pipeline.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    pipeline:remove(hookId)
    ```
  </Tab>

  <Tab>
    ```ts
    pipeline.remove(hookId)
    ```
  </Tab>
</Tabs>

* hookId?: `string`
  * If defined, only the specified hook is removed - otherwise all hooks for the invoking resource are removed.

### dispatch [#dispatch]

Executes each registered hook in order of registration, checking the payload against a provided filter using the hook options and executing the hook callback.

A hook may block execution by returning `false` from a registered handler.

If any hook rejects the execution, dispatch is cancelled and `result.ok` is set to `false`.

The returned object acts as a finalisation handle and emits results to registered handlers once closed.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    local hook <close> = pipeline:dispatch(payload)
    ```
  </Tab>

  <Tab>
    ```ts
    using hook = pipeline.dispatch(payload)
    ```
  </Tab>
</Tabs>

* payload: `unknown`

# EventHook [#eventhook]

Allows resources to call [`pipeline.registerHook`](#registerHook) using exports.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.registerHook(eventName, handler, options)
    ```
  </Tab>

  <Tab>
    ```ts
    import { registerHook } from "@overextended/ox_lib/hooks";

    registerHook(eventName, handler, options)
    ```
  </Tab>
</Tabs>

* eventName: `string`
* handler?: `function(payload: unknown): boolean`
* options?: Optional metadata to attach to the hook.

## Methods [#methods-1]

### on [#on]

Attaches a post-execution event handler for this hook.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    hook:on(handler)
    ```
  </Tab>

  <Tab>
    ```ts
    hook.on(handler)
    ```
  </Tab>
</Tabs>

* handler: `function(ok: boolean, payload: unknown)`

### off [#off]

Detatches the currently registered post-hook event handler, if one exists.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    hook:off()
    ```
  </Tab>

  <Tab>
    ```ts
    hook.off()
    ```
  </Tab>
</Tabs>

### remove [#remove-1]

Fully removes this hook from both the local event system and the external hook pipeline provided from the originating resource.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    hook:remove()
    ```
  </Tab>

  <Tab>
    ```ts
    hook.remove()
    ```
  </Tab>
</Tabs>

# Registered Hooks [#registered-hooks]

These hook pipelines are registered and managed by ox\_lib for other resources to interact with.

See [EventHook](Hooks#eventhook) for more information.

## ox\_lib:setPlayerState [#ox_libsetplayerstate]

When using `sv_stateBagStrictMode` players cannot arbitrarily modify their own states, and changes will be rejected by default.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.registerHook('ox_lib:setPlayerState', predicate, { key: state })
    ```
  </Tab>

  <Tab>
    ```ts
    import { registerHook } from "@overextended/ox_lib/hooks";

    registerHook('ox_lib:setPlayerState', predicate, { key: state })
    ```
  </Tab>
</Tabs>

## ox\_lib:setEntityState [#ox_libsetentitystate]

When using `sv_stateBagStrictMode` players cannot arbitrarily modify entity states, and changes will be rejected by default.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.registerHook('ox_lib:setEntityState', predicate, { key: state })
    ```
  </Tab>

  <Tab>
    ```ts
    import { registerHook } from "@overextended/ox_lib/hooks";

    registerHook('ox_lib:setEntityState', predicate, { key: state })
    ```
  </Tab>
</Tabs>
