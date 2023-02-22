# Server

## ox_doorlock:stateChanged

Triggered when a doors state is updated.

```lua
AddEventHandler('ox_doorlock:stateChanged', function(source, doorId, state, usedItem) end)
```

- source: `number` or `nil`
- doorId: `number`
- state: `0` or `1`
- usedItem: `string` or `false`
