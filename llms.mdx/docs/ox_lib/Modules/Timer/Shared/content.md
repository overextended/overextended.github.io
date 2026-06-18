# Shared (/docs/ox_lib/Modules/Timer/Shared)



Provides a versatile timer system with options for asynchronous operation, pause and resume functionality, and callbacks on timer completion.

## Timer [#timer]

### lib.timer [#libtimer]

```lua
lib.timer(time, onEnd, async)
```

* time: `number`
* onEnd: `function`
* async?: `boolean`
  * If `true` then the timer does not block script execution on the calling thread.

Returns:

* timer: `OxTimer`

#### Example [#example]

```lua

local timer = lib.timer(5000, function()
   print("timer ended")
end)
```

## Methods [#methods]

### pause [#pause]

Pauses an active timer until `timer:play()` or `timer:forceEnd()` is called.

```lua
timer:pause()
```

#### Example [#example-1]

```lua
local timer = lib.timer(5000, function()
    print("timer ended")
end, true)

timer:pause()
```

### play [#play]

Resume a timer if it is paused with `timer:pause()`.

```lua
timer:play()
```

#### Example [#example-2]

```lua
local timer = lib.timer(5000, function()
    print("timer ended")
end, true)

timer:pause()

Wait(1000)

timer:play()
--timer finishes in 6 seconds rather than 5 because of the pause
```

### forceEnd [#forceend]

Immediately ends the timer and optionally triggers the onEnd callback.

```lua
timer:forceEnd(triggerOnEnd)
```

* triggerOnEnd: `boolean`

#### Example [#example-3]

```lua
local timer = lib.timer(5000, function()
    print("timer ended")
end, true)

timer:pause()

Wait(1000)

timer:forceEnd(false)
--timer finishes in 1 second rather than 5 because of the forceEnd and the call back never runs
```

### isPaused [#ispaused]

Checks if the timer is paused from calling `timer:pause()` previously.

```lua
timer:isPaused()
```

Returns:

* isPaused: `boolean`

#### Example [#example-4]

```lua
local timer = lib.timer(5000, function()
    print("timer ended")
end, true)

print(timer:isPaused()) -- false

timer:pause()

print(timer:isPaused()) -- true
```

### getTimeLeft [#gettimeleft]

Returns the remaining time on the timer in the given format rounded to 2 decimal places

```lua
timer:getTimeLeft(format)
-- format: 'ms' = miliseconds, 's' = seconds, 'm' = minutes, 'h' = hours, nil = all returned in a table
```

* format?: `'ms'` or `'s'` or `'m'` or `'h'`

Returns:

* time: `number` | `{ms: number, s: number, m: number, h: number}`

#### Example [#example-5]

```lua
local timer = lib.timer(5000, function()
    print("timer ended")
end, true)

print(timer:getTimeLeft('ms')) -- 5000 miliseconds
print(timer:getTimeLeft('s'))  -- 5.00 seconds
print(timer:getTimeLeft('m'))  -- 0.08 minutes
print(timer:getTimeLeft('h'))  -- 0.00 hours
print(timer:getTimeLeft())     -- {ms = 5000, s = 5.00, m = 0.08, h = 0.00 }
```

### restart [#restart]

Resets and starts the timer.

```lua
timer:restart()
```

#### Example [#example-6]

```lua
-- this will create a timer that just keeps restarting itself
local timer

timer = lib.timer(5000, function()
    print("timer ended")
    timer:restart()
end, true)

```
