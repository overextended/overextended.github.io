# Skill Check (/docs/ox_lib/Interface/Client/skillcheck)



# Skill Check [#skill-check]

## lib.skillCheck [#libskillcheck]

Runs a skill check with the defined difficulty.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.skillCheck(difficulty, inputs)
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    lib.skillCheck(difficulty, inputs);
    ```
  </Tab>
</Tabs>

* difficulty: `'easy'` or `'medium'` or `'hard'` or `table`
  * Preset difficulties:
    * 'easy' - `{ areaSize: 50, speedMultiplier: 1 }`
    * 'medium' - `{ areaSize: 40, speedMultiplier: 1.5 }`
    * 'hard' - `{ areaSize: 25, speedMultiplier: 1.75 }`
  * Custom difficulties can be set by sending an object instead of one of the preset strings above
    * areaSize: `number`
      * Size of the success area in degrees
    * speedMultiplier: `number`
      * Multiplier for the speed of the indicator
* inputs?: `string[]`
  * A random key will be picked from the inputs table for each skill check
  * If no inputs are defined the key is defaulted to `e`

## lib.skillCheckActive [#libskillcheckactive]

Returns true if a skill check is currently active.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.skillCheckActive()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client'

    lib.skillCheckActive()
    ```
  </Tab>
</Tabs>

## lib.cancelSkillCheck [#libcancelskillcheck]

Cancels the currently ongoing skill check.

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    lib.cancelSkillCheck()
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client'

    lib.cancelSkillCheck()
    ```
  </Tab>
</Tabs>

## Usage Example [#usage-example]

<Tabs items="[&#x22;Lua&#x22;, &#x22;JS&#x22;]">
  <Tab>
    ```lua
    local success = lib.skillCheck({'easy', 'easy', {areaSize = 60, speedMultiplier = 2}, 'hard'}, {'w', 'a', 's', 'd'})
    ```
  </Tab>

  <Tab>
    ```ts
    import lib from '@overextended/ox_lib/client';

    const success = await lib.skillCheck(
      ['easy', 'easy', { areaSize: 60, speedMultiplier: 2 }, 'hard'],
      ['w', 'a', 's', 'd']
    );
    ```
  </Tab>
</Tabs>

![skillcheck\_example](https://i.imgur.com/rgfkn0S.png)
