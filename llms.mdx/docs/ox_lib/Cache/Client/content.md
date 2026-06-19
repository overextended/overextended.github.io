# Client (/docs/ox_lib/Cache/Client)



Values and cache functionality available to the client, in addition to the [shared](../Shared) values.

## Default values [#default-values]

* ped: `number`
  * player entity id
* playerId: `number`
  * player id
* serverId: `number`
  * player server id
* weapon: `number` or `false`
  * current weapon hash
* vehicle: `number` or `false`
  * vehicle entity id
* seat: `number` or `false`
  * vehicle seat index
* coords: `vector3`
  * current player coords
  * only populated if using `zones` or `points`
  * cannot be listened for with `lib.onCache`
* mount: `number` or `false` (RedM only)
  * mount entity id

## lib.onCache [#liboncache]

Register an event handler that is triggered when the cached value is updated.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.onCache(key, function(value, oldValue) end)
    ```

    * key: `string`
      * `ped`
      * `vehicle`
      * `seat`
      * `weapon`
      * `mount` (RedM only)
    * value: `any`

    ```lua
    lib.onCache('vehicle', function(value, oldValue)
        print('old vehicle:', cache.vehicle)
        print('new vehicle:', value)
    end)
    ```
  </Tab>

  <Tab>
    ```ts
    import { onCache } from '@overextended/ox_lib/client';

    onCache(key, (value) => {});
    ```

    * key: `string`
      * `ped`
      * `vehicle`
      * `seat`
      * `weapon`
      * `mount` (RedM only)
    * value: `any`

    ```ts
    import { cache, onCache } from '@overextended/ox_lib/client';

    lib.onCache('vehicle', (value) => {
      console.log('old vehicle:', cache.vehicle);
      console.log('new vehicle:', value);
    });
    ```
  </Tab>
</Tabs>
