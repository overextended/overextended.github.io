---
title: Skill Check
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.skillCheck

Runs a skill check with the defined difficulty.

<Tabs>
<TabItem value='Lua'>

```lua
lib.skillCheck(difficulty)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.skillCheck(difficulty)
```

</TabItem>
</Tabs>

* difficulty: `easy` or `medium` or `hard` or `object`
  * Can set custom difficulty by sending a object instead of string
    * { areaSize: `number`, speedMultiplier: `number` }
      * easy: { areaSize: 50, speedMultiplier: 1 }
      * medium: { areaSize: 40, speedMultiplier: 1.5 }
      * hard: { areaSize: 25, speedMultiplier: 1.75 }
    * `areaSize` size of the area in degrees.
  * Sending an array will chain the checks together and return false if one fails and true if all succeed

### Usage Example

<Tabs>
<TabItem value='Lua'>

```lua
local success = lib.skillCheck({'easy', 'easy', {areaSize = 60, speedMultiplier = 2}, 'hard'})
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

const success = await lib.skillCheck(['easy', 'easy', {areaSize: 60, speedMultiplier: 2}, 'hard'])
```

</TabItem>
</Tabs>

![skillcheck_example](https://i.imgur.com/RWSWZ1I.png)
