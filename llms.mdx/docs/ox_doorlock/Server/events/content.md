# Events (/docs/ox_doorlock/Server/events)



## Handlers [#handlers]

These events **should not** be triggered by any other scripts.

### ox\_doorlock:stateChanged [#ox_doorlockstatechanged]

Triggered when a doors state is updated.

```lua
AddEventHandler('ox_doorlock:stateChanged', function(source, doorId, state, usedItem) end)
```

* source: `number` or `nil`
* doorId: `number`
* state: `boolean`
* usedItem: `string` or `false` or `nil`
