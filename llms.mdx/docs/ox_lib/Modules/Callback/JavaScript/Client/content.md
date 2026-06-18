# Client (/docs/ox_lib/Modules/Callback/JavaScript/Client)



## Trigger Server Callback [#trigger-server-callback]

### triggerServerCallback [#triggerservercallback]

```ts
triggerServerCallback(eventName, delay, ...args);
```

* eventName: `string`
* delay: `number` or `null`
  * Amount of time until this callback can be triggered again
* ..args: `any`

## Register Client Callback [#register-client-callback]

### onServerCallback [#onservercallback]

```ts
onServerCallback(eventName, cb);
```

* eventName: `string`
* cb: `function`(...args: `any`)

## Usage Example [#usage-example]

For this example to fully make sense take a look at the example on the [server](./Server#usage-example) page for the callbacks.

```ts
import { onServerCallback, triggerServerCallback } from "@overextended/ox_lib/client";
```

```ts
onServerCallback("test:client", (...args: [number, number, string]) => {
  console.log(args);
  return {
    clientValue: "Value from the client",
  };
});
```

```ts
setTimeout(async () => {
  const args = [1, null, 3, null, null, 6];
  const response = await triggerServerCallback<{ serverValue: number }>("test:server", 1, args);
  if (!response) return;
  console.log("Response from server", response);
}, 100);
```
