# Progress (/docs/ox_lib/Modules/Interface/Client/progress)



# Progress [#progress]

## lib.progressBar [#libprogressbar]

Displays a running progress bar.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.progressBar(data)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client'

    lib.progressBar(data)
    ```
  </Tab>
</Tabs>

* duration: `number`
* label: `string`
* useWhileDead?: `boolean`
* allowRagdoll?: `boolean`
* allowSwimming?: `boolean`
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
    * Default: `-1`
  * playbackRate?: `number`
    * Default: `0`
  * lockX?: `boolean`
  * lockY?: `boolean`
  * lockZ?: `boolean`
  * scenario?: `string`
    * Must specify either scenario or dict
  * playEnter?: `boolean`
    * Default: `true`
* prop?: `table` (`object` or `array`)
  * \[ If you want to define multiple props, you can pass them as individual tables (array of objects) ]
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
  * rotOrder?: `number`
    * [The order in which yaw, pitch and roll is applied.](https://docs.fivem.net/natives/?_0xAFBD61CC738D9EB9)
    * Default: `0`
* disable?: `table` (`object`)
  * move?: `boolean`
  * car?: `boolean`
  * combat?: `boolean`
  * mouse?: `boolean`
  * sprint?: `boolean`

### Usage Example [#usage-example]

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
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
  </Tab>

  <Tab>
    <Callout>
      This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
    </Callout>

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
  </Tab>
</Tabs>

![progress\_bar](https://i.imgur.com/7ZJgLjl.png)

## lib.progressCircle [#libprogresscircle]

Similar to `lib.progressBar` except it displays a circle and you can define a position.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.progressCircle(data)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client'

    lib.progressCircle(data)
    ```
  </Tab>
</Tabs>

* duration: `number`
* label?: `string`
* position?: `'middle'` or `'bottom'`
  * Default: `'middle'`
* useWhileDead?: `boolean`
* allowRagdoll?: `boolean`
* allowSwimming?: `boolean`
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
    * Default: `-1`
  * playbackRate?: `number`
    * Default: `0`
  * lockX?: `boolean`
  * lockY?: `boolean`
  * lockZ?: `boolean`
  * scenario?: `string`
    * Must specify either scenario or dict
  * playEnter?: `boolean`
    * Default: `true`
* prop?: `table` (`object` or `array`)
  * \[ If you want to define multiple props, you can pass them as individual tables (array of objects) ]
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
  * rotOrder?: `number`
    * [The order in which yaw, pitch and roll is applied.](https://docs.fivem.net/natives/?_0xAFBD61CC738D9EB9)
    * Default: `0`
* disable?: `table` (`object`)
  * move?: `boolean`
  * car?: `boolean`
  * combat?: `boolean`
  * mouse?: `boolean`
  * sprint?: `boolean`

### Usage Example [#usage-example-1]

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
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
  </Tab>

  <Tab>
    <Callout>
      This function is **asynchronous** requiring you to do a `.then` callback on the promise or make your function `async`.
    </Callout>

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
  </Tab>
</Tabs>

![progress\_circle](https://i.imgur.com/2tLbgrW.png)

## lib.progressActive [#libprogressactive]

Returns true if a progress bar is currently active.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.progressActive()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client'

    lib.progressActive()
    ```
  </Tab>
</Tabs>

## lib.cancelProgress [#libcancelprogress]

If there is a progress bar active and the
progress bar can be cancelled then it cancels it.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.cancelProgress()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client'

    lib.cancelProgress()
    ```
  </Tab>
</Tabs>
