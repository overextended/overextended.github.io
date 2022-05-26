---
title: Progress
---

### lib.progressBar
Displays a running progress bar.

```lua
-- duration: number
-- label: string
-- useWhileDead: boolean (optional)
-- canCancel: boolean (optional)
-- anim: table (optional)
    -- dict: string (optional - either scenario or dict)
    -- clip: string
    -- flag: number (optional - default is 49)
    -- blendIn: float (optional - default is 3.0)
    -- blendOut: float (optional - default is 1.0)
    -- duration: number (optional - default is -1)
    -- flag: number (optional - default is 49)
    -- playbackRate: number (optional - default is 0)
    -- lockX: boolean (optional)
    -- lockY: boolean (optional)
    -- lockZ: boolean (optional)

    -- scenario: string (optional - either scenario or dict)
    -- playEnter: boolean (optional - default is true)
-- prop: table (optional)
    -- model: hash
    -- x: number
    -- y: number
    -- z: number
    -- bone: number (optional - default is 60309)
    -- pos: table
        -- x: number
        -- y: number
        -- z: number
    -- rot: table
        -- x: number
        -- y: number
        -- z: number
-- disable: table (optional)
    -- move: boolean (optional)
    -- car: boolean (optional)
    -- combat: boolean (optional)
    -- mouse: boolean (optional)
    --- ...: number (optional - Keys to disable, can have unlimted)
    
lib.progressBar(data)
```
If you want to define multiple props, you can pass them
as individual tables in the `prop` table.

**Example:**
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

![progress_bar](https://i.imgur.com/7pAwktr.png)

### lib.progressCircle
Similar to `lib.progressBar` except it displays a circle and has no label and
you can define a position.

```lua
-- duration: number
-- position: "middle" or "bottom" (optional - default is "middle")
-- useWhileDead: boolean (optional)
-- canCancel: boolean (optional)
-- anim: table (optional)
    -- dict: string (optional - either scenario or dict)
    -- clip: string
    -- flag: number (optional - default is 49)
    -- blendIn: float (optional - default is 3.0)
    -- blendOut: float (optional - default is 1.0)
    -- duration: number (optional - default is -1)
    -- flag: number (optional - default is 49)
    -- playbackRate: number (optional - default is 0)
    -- lockX: boolean (optional)
    -- lockY: boolean (optional)
    -- lockZ: boolean (optional)

    -- scenario: string (optional - either scenario or dict)
    -- playEnter: boolean (optional - default is true)
-- prop: table (optional)
    -- model: hash
    -- x: number
    -- y: number
    -- z: number
    -- bone: number (optional - default is 60309)
    -- pos: table
        -- x: number
        -- y: number
        -- z: number
    -- rot: table
        -- x: number
        -- y: number
        -- z: number
-- disable: table (optional)
    -- move: boolean (optional)
    -- car: boolean (optional)
    -- combat: boolean (optional)
    -- mouse: boolean (optional)
    --- ...: number (optional - Keys to disable, can have unlimted)

lib.progressCircle(data)
```

**Example:**
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

![progress_circle](https://i.imgur.com/nETRm5f.png)

### lib.progressActive
Returns true if a progress bar is currently active.

```lua
lib.progressActive()
```

### lib.cancelProgress
If there is a progress bar active and the
progress bar can be cancelled then it cancels it.

```lua
lib.cancelProgress()
```
