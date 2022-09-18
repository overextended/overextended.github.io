import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Caches data related to the player and handling some events or statebags.  
An interval runs every 100ms to update data that cannot be checked via handlers.

## States

- ped: `number`
  - player entity id
- playerId: `number`
  - player id
- serverId: `number`
  - player server id
- vehicle: `number` or `false`
  - vehicle entity id
- seat: `number` or `false`
  - vehicle seat index
- resource: `string`
  - invoking resource name

## lib.onCache

Register an event handler that is triggered when the cached value is updated.

<Tabs>
<TabItem value='Lua'>

```lua
lib.onCache(key, function(value) end)
```

- key: `string`
- value: `any`

```lua
lib.onCache('vehicle', function(value)
    print('old vehicle:', cache.vehicle)
    print('new vehicle:', value)
end)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import { onCache } from '@overextended/ox_lib/client';

onCache(key, (value) => {});
```

- key: `string`
- value: `any`

```ts
import { cache, onCache } from '@overextended/ox_lib/client';

lib.onCache('vehicle', (value) => {
  console.log('old vehicle:', cache.vehicle);
  console.log('new vehicle:', value);
});
```

</TabItem>
</Tabs>
