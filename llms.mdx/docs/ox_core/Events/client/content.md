# Client Events (/docs/ox_core/Events/client)



<Callout type="warning">
  These events are triggered by ox\_core when an action occurs. You should not trigger them from
  other scripts.
</Callout>

## ox:playerLoaded [#oxplayerloaded]

When a character is loaded

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:playerLoaded', function(playerId, isNew)
        print(playerId, isNew)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:playerLoaded', (playerId: number, isNew: boolean) => {
      console.log(playerId, isNew);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* isNew?: `boolean`

## ox:statusTick [#oxstatustick]

On each status tick, returning changed statuses

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:statusTick', function(statuses)
        print(json.encode(statuses))
    end)
    ```

    * statuses: `table<string, number>`
  </Tab>

  <Tab>
    ```ts copy
    on('ox:statusTick', (statuses: Record<string, number>) => {
      console.log(statuses);
    });
    ```

    * statuses: `Record<string, number>`
  </Tab>
</Tabs>

## ox:playerDeath [#oxplayerdeath]

When the character has died

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:playerDeath', function() end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:playerDeath', () => {});
    ```
  </Tab>
</Tabs>

## ox:playerRevived [#oxplayerrevived]

When the character is revived

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:playerRevived', function() end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:playerRevived', () => {});
    ```
  </Tab>
</Tabs>

***

# Net Events [#net-events]

## ox:setGroup [#oxsetgroup]

When the character is added or removed from a group

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    RegisterNetEvent('ox:setGroup', function(groupName, grade)
        print(groupName, grade)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    onNet('ox:setGroup', (groupName: string, grade: number) => {
      console.log(groupName, grade);
    });
    ```
  </Tab>
</Tabs>

* groupName: `string`
* grade?: `number`

## ox:licenseAdded [#oxlicenseadded]

When the character got a new license

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    RegisterNetEvent('ox:licenseAdded', function(licenseName)
        print(licenseName)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    onNet('ox:licenseAdded', (licenseName: string) => {
      console.log(licenseName);
    });
    ```
  </Tab>
</Tabs>

* licenseName: `string`

## ox:licenseRemoved [#oxlicenseremoved]

When a character's license is removed.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    RegisterNetEvent('ox:licenseRemoved', function(licenseName)
        print(licenseName)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    onNet('ox:licenseRemoved', (licenseName: string) => {
      console.log(licenseName);
    });
    ```
  </Tab>
</Tabs>

* licenseName: `string`

## ox:startCharacterSelect [#oxstartcharacterselect]

When the player has spawned.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    RegisterNetEvent('ox:startCharacterSelect', function(userId, characters)
        print(userId, characters)
    end)
    ```

    * userId: `number`
    * characters: `Character[]`

    Character

    * `table`
      * charId: `number`
      * stateId: `number`
      * firstname: `string`
      * lastname: `string`
      * gender: `string`
      * x?: `number`
      * y?: `number`
      * z?: `number`
      * lastPlayed?: `string`
        * Date format `%d/%m/%Y (dd/mm/yyyy)`
  </Tab>

  <Tab>
    ```ts copy
    onNet('ox:startCharacterSelect', (userId: number, characters: Character[]) => {
      console.log(userId, characters);
    });
    ```

    * userId: `number`
    * characters: `Character[]`

    Character

    * `object`
      * charId: `number`
      * stateId: `number`
      * firstname: `string`
      * lastname: `string`
      * gender: `string`
      * x?: `number`
      * y?: `number`
      * z?: `number`
      * lastPlayed?: `string`
        * Date format `%d/%m/%Y (dd/mm/yyyy)`
  </Tab>
</Tabs>

## ox:setActiveCharacter [#oxsetactivecharacter]

When the player has chosen their character.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    RegisterNetEvent('ox:setActiveCharacter', function(character, groups)
        print(character, groups)
    end)
    ```

    * character: `Character`
    * groups: `table<string, number>`

    Character

    * `table`
      * charId: `number`
      * stateId: `number`
      * firstname: `string`
      * lastname: `string`
      * gender: `string`
      * x?: `number`
      * y?: `number`
      * z?: `number`
      * lastPlayed?: `string`
        * Date format `%d/%m/%Y (dd/mm/yyyy)`
      * health?: `number`
      * armour?: `number`
      * isNew?: `boolean`
  </Tab>

  <Tab>
    ```ts copy
    onNet('ox:setActiveCharacter', (character: Character, groups: Record<string, number>) => {
      console.log(character, groups);
    });
    ```

    * character: `Character`
    * groups: `Record<string, number>`

    Character

    * `object`
      * charId: `number`
      * stateId: `number`
      * firstname: `string`
      * lastname: `string`
      * gender: `string`
      * x?: `number`
      * y?: `number`
      * z?: `number`
      * lastPlayed?: `string`
        * Date format `%d/%m/%Y (dd/mm/yyyy)`
      * health?: `number`
      * armour?: `number`
      * isNew?: `boolean`
  </Tab>
</Tabs>
