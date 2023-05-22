---
title: Progress
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## lib.progressBar

Displays a running progress bar.

<Tabs>
<TabItem value='Lua'>

```lua
lib.progressBar(data)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.progressBar(data)
```

</TabItem>
</Tabs>

* duration: `number`
* label: `string`
* useWhileDead?: `boolean`
* allowRagdoll?: `boolean`
* allowCuffed?: `boolean`
* allowFalling?: `boolean`
* canCancel?: `boolean`
* anim?: `table` (`object`)
  * dict?: `string`
    * Must specify either scenario or dict
  * clip: `string`
  * flag?: `number`
    * Default: `49`
  * blendIn?: `float`
    * Default: `3.0`
  * blendOut?: `float`
    * Default: `1.0`
  * duration?: `number`
    Default: `-1`
  * playbackRate?: `number`
    Default: `0`
  * lockX?: `boolean`
  * lockY?: `boolean`
  * lockZ?: `boolean`
  * scenario?: `string`
    * Must specify either scenario or dict
  * playEnter?: `boolean`
    * Default: `true`
* prop?: `table` (`object` or `array`)
  * [ If you want to define multiple props, you can pass them as individual tables (array of objects) ]
  * model: `hash`
  * bone?: `number`
    * Default: `60309`
  * pos: `table`
    * x: `number`
    * y: `number`
    * z: `number`
  * rot: `table` (`object`)
    * x: `number`
    * y: `number`
    * z: `number`
* disable?: `table` (`object`)
  * move?: `boolean`
  * car?: `boolean`
  * combat?: `boolean`
  * mouse?: `boolean`

### Usage Example

<Tabs>
<TabItem value='Lua'>

```lua
if lib.progressBar({
    duration = 2000,
    label = 'Drinking water',
    useWhileDead = false,
    canCancel = true,
    disable = {
        car = true,
    },
    anim = {
        dict = 'mp_player_intdrink',
        clip = 'loop_bottle'
    },
    prop = {
        model = `prop_ld_flow_bottle`,
        pos = vec3(0.03, 0.03, 0.02),
        rot = vec3(0.0, 0.0, -1.5)
    },
}) then print('Do stuff when complete') else print('Do stuff when cancelled') end
```

</TabItem>
<TabItem value='JS/TS'>

:::caution
This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
:::

```ts
import lib from '@overextended/ox_lib/client'

if (await lib.progressBar({
  duration: 2000,
  label: 'Drinking water',
  useWhileDead: false,
  canCancel: true,
  disable: {
    car: true,
  },
  anim: {
    dict: 'mp_player_intdrink',
    clip: 'loop_bottle'
  },
  prop: {
    model: `prop_ld_flow_bottle`,
    pos: {x: 0.03, y: 0.03, z: 0.02},
    rot: {x: 0.0, y: 0.0, z: -1.5}
  },
})) console.log('Do stuff when complete');
else console.log('Do stuff when cancelled')
```

</TabItem>
</Tabs>

![progress_bar](https://i.imgur.com/7ZJgLjl.png)

## lib.progressCircle

Similar to `lib.progressBar` except it displays a circle and you can define a position.

<Tabs>
<TabItem value='Lua'>

```lua
lib.progressCircle(data)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.progressCircle(data)
```

</TabItem>
</Tabs>

* duration: `number`
* label?: `string`
* position?: `'middle'` or `'bottom'`
  * Default: `'middle'`
* useWhileDead?: `boolean`
* allowRagdoll?: `boolean`
* allowCuffed?: `boolean`
* allowFalling?: `boolean`
* canCancel?: `boolean`
* anim?: `table` (`object`)
  * dict?: `string`
    * Must specify either scenario or dict
  * clip: `string`
  * flag?: `number`
    * Default: `49`
  * blendIn?: `float`
    * Default: `3.0`
  * blendOut?: `float`
    * Default: `1.0`
  * duration?: `number`
    Default: `-1`
  * playbackRate?: `number`
    Default: `0`
  * lockX?: `boolean`
  * lockY?: `boolean`
  * lockZ?: `boolean`
  * scenario?: `string`
    * Must specify either scenario or dict
  * playEnter?: `boolean`
    * Default: `true`
* prop?: `table` (`object` or `array`)
  * [ If you want to define multiple props, you can pass them as individual tables (array of objects) ]
  * model: `hash`
  * bone?: `number`
    * Default: `60309`
  * pos: `table`
    * x: `number`
    * y: `number`
    * z: `number`
  * rot: `table` (`object`)
    * x: `number`
    * y: `number`
    * z: `number`
* disable?: `table` (`object`)
  * move?: `boolean`
  * car?: `boolean`
  * combat?: `boolean`
  * mouse?: `boolean`

### Usage Example

<Tabs>
<TabItem value='Lua'>

```lua
if lib.progressCircle({
    duration = 2000,
    position = 'bottom',
    useWhileDead = false,
    canCancel = true,
    disable = {
        car = true,
    },
    anim = {
        dict = 'mp_player_intdrink',
        clip = 'loop_bottle'
    },
    prop = {
        model = `prop_ld_flow_bottle`,
        pos = vec3(0.03, 0.03, 0.02),
        rot = vec3(0.0, 0.0, -1.5)
    },
}) then print('Do stuff when complete') else print('Do stuff when cancelled') end
```

</TabItem>
<TabItem value='JS/TS'>

:::caution
This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
:::

```ts
import lib from '@overextended/ox_lib/client'

if (await lib.progressCircle({
  duration: 2000,
  position: 'bottom',
  useWhileDead: false,
  canCancel: true,
  disable: {
    car: true,
  },
  anim: {
    dict: 'mp_player_intdrink',
    clip: 'loop_bottle'
  },
  prop: {
    model: `prop_ld_flow_bottle`,
    pos: {x: 0.03, y: 0.03, z: 0.02},
    rot: {x: 0.0, y: 0.0, z: -1.5}
  },
})) console.log('Do stuff when complete')
else console.log('Do stuff when cancelled')
```

</TabItem>
</Tabs>

![progress_circle](https://i.imgur.com/2tLbgrW.png)

## lib.progressActive

Returns true if a progress bar is currently active.

<Tabs>
<TabItem value='Lua'>

```lua
lib.progressActive()
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.progressActive()
```

</TabItem>
</Tabs>

## lib.cancelProgress

If there is a progress bar active and the
progress bar can be cancelled then it cancels it.

<Tabs>
<TabItem value='Lua'>

```lua
lib.cancelProgress()
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.cancelProgress()
```

</TabItem>
</Tabs>
