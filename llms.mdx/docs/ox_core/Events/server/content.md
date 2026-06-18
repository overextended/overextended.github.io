# Server Events (/docs/ox_core/Events/server)



<Callout type="warning">
  These events are triggered by ox\_core when an action occurs. You should not trigger them from
  other scripts.
</Callout>

## ox:savedPlayers [#oxsavedplayers]

When players are saved to the database.

<Callout type="info">
  By default this event is triggered:

  * Every 10 minutes.
  * When the server is shutdown.
  * When [`Ox.SaveAllPlayers`](/ox_core/Functions/server#oxsaveallplayers) is called.
  * When the command `saveplayers` is used.
</Callout>

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:savedPlayers', function(playersSaved)
        print(playersSaved)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:savedPlayers', (playersSaved: number) => {
      console.log(playersSaved);
    });
    ```
  </Tab>
</Tabs>

* playersSaved: `number`

## ox:setActiveGroup [#oxsetactivegroup]

When the active group of a character has changed.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:setActiveGroup', function(playerId, groupName, previousGroupName)
        print(playerId, groupName, previousGroupName)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:setActiveGroup', (playerId: number, groupName: string, previousGroupName: string | undefined) => {
      console.log(playersSaved);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* groupName: `string`
* previousGroupName: `string | undefined`

## ox:setGroup [#oxsetgroup]

When a character is added or removed from a group.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:setGroup', function(playerId, groupName, grade)
        print(playerId, groupName, grade)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:setGroup', (playerId: number, groupName: string, grade?: number) => {
      console.log(playerId, groupName, grade);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* groupName: `string`
* grade?: `number`

## ox:licenseAdded [#oxlicenseadded]

When a character receives a new license.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:licenseAdded', function(playerId, licenseName)
        print(playerId, licenseName)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:licenseAdded', (playerId: number, licenseName: string) => {
      console.log(playerId, licenseName);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* licenseName: `string`

## ox:licenseRemoved [#oxlicenseremoved]

When a character's license is removed.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:licenseRemoved', function(playerId, licenseName)
        print(playerId, licenseName)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:licenseRemoved', (playerId: number, licenseName: string) => {
      console.log(playerId, licenseName);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* licenseName: `string`

## ox:playerLogout [#oxplayerlogout]

When a player logs out from their current character, crashes, or otherwise disconnects from the server.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:playerLogout', function(playerId, userId, charId)
        print(playerId, userId, charId)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:playerLogout', (playerId: number, userId: number, charId: number) => {
      console.log(playerId, userId, charId);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* userId: `number`
* charId: `number`

## ox:createdCharacter [#oxcreatedcharacter]

When a player has created a new character.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:createdCharacter', function(playerId, userId, charId)
        print(playerId, userId, charId)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:createdCharacter', (playerId: number, userId: number, charId: number) => {
      console.log(playerId, userId, charId);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* userId: `number`
* charId: `number`

## ox:playerLoaded [#oxplayerloaded]

When a player selects and loads a character.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:playerLoaded', function(playerId, userId, charId)
        print(playerId, userId, charId)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:playerLoaded', (playerId: number, userId: number, charId: number) => {
      console.log(playerId, userId, charId);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* userId: `number`
* charId: `number`

## ox:deletedCharacter [#oxdeletedcharacter]

When a character is deleted.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:deletedCharacter', function(playerId, userId, charId)
        print(playerId, userId, charId)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:deletedCharacter', (playerId: number, userId: number, charId: number) => {
      console.log(playerId, userId, charId);
    });
    ```
  </Tab>
</Tabs>

* playerId: `number`
* userId: `number`
* charId: `number`

## ox:savedVehicles [#oxsavedvehicles]

When vehicles are saved to the database.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:savedVehicles', function(vehiclesSaved)
        print(vehiclesSaved)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:savedVehicles', (vehiclesSaved: number) => {
      console.log(vehiclesSaved);
    });
    ```
  </Tab>
</Tabs>

* vehiclesSaved: `number`

## ox:spawnedVehicle [#oxspawnedvehicle]

When an [`OxVehicle`](/ox_core/Classes/Server/OxVehicle) has spawned.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:spawnedVehicle', function(entityId, id)
        print(entityId, id)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:spawnedVehicle', (entityId: number, id: number) => {
      console.log(entityId, id);
    });
    ```
  </Tab>
</Tabs>

* entityId: `number`
* id: `number`

## ox:despawnVehicle [#oxdespawnvehicle]

Before an [`OxVehicle`](/ox_core/Classes/Server/OxVehicle) gets despawned.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:despawnVehicle', function(entityId, id)
        print(entityId, id)
    end)
    ```
  </Tab>

  <Tab>
    ```ts copy
    on('ox:despawnVehicle', (entityId: number, id: number) => {
      console.log(entityId, id);
    });
    ```
  </Tab>
</Tabs>

* entityId: `number`
* id: `number`

## ox:updatedBalance [#oxupdatedbalance]

When an account's balance is updated.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:updatedBalance', function(data)
        print(json.encode(data))
    end)
    ```

    * data `table`
      * accountId: `number`
      * amount: `number`
      * action: `'add' | 'remove'`
  </Tab>

  <Tab>
    ```ts copy
    on('ox:updatedBalance', (data: object) => {
      console.log(data);
    });
    ```

    * data `object`
      * accountId: `number`
      * amount: `number`
      * action: `'add' | 'remove'`
  </Tab>
</Tabs>

## ox:transferredMoney [#oxtransferredmoney]

When an account's money is transferred.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:transferredMoney', function(data)
        print(json.encode(data))
    end)
    ```

    * data `table`
      * fromAccountId: `number`
      * toAccountId: `number`
      * amount: `'add' | 'remove'`
  </Tab>

  <Tab>
    ```ts copy
    on('ox:transferredMoney', (data: object) => {
      console.log(data);
    });
    ```

    * data `object`
      * fromAccountId: `number`
      * toAccountId: `number`
      * amount: `'add' | 'remove'`
  </Tab>
</Tabs>

## ox:depositedMoney [#oxdepositedmoney]

When money is deposited into an account.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:depositedMoney', function(data)
        print(json.encode(data))
    end)
    ```

    * data `table`
      * playerId: `number`
      * accountId: `number`
      * amount: `number`
  </Tab>

  <Tab>
    ```ts copy
    on('ox:depositedMoney', (data: object) => {
      console.log(data);
    });
    ```

    * data `object`
      * playerId: `number`
      * accountId: `number`
      * amount: `number`
  </Tab>
</Tabs>

## ox:withdrewMoney [#oxwithdrewmoney]

When money is withdrawn from an account.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:withdrewMoney', function(data)
        print(json.encode(data))
    end)
    ```

    * data `table`
      * playerId: `number`
      * accountId: `number`
      * amount: `number`
  </Tab>

  <Tab>
    ```ts copy
    on('ox:withdrewMoney', (data: object) => {
      console.log(data);
    });
    ```

    * data `object`
      * playerId: `number`
      * accountId: `number`
      * amount: `number`
  </Tab>
</Tabs>

## ox:invoicePaid [#oxinvoicepaid]

When an invoice is paid.

<Tabs items="['Lua', 'JS']">
  <Tab>
    ```lua copy
    AddEventHandler('ox:invoicePaid', function(data)
        print(json.encode(data))
    end)
    ```

    * data `table`
      * amount: `number`
      * payerId: `number`
      * fromAccount: `number`
      * toAccount: `number`
  </Tab>

  <Tab>
    ```ts copy
    on('ox:invoicePaid', (data: object) => {
      console.log(data);
    });
    ```

    * data `object`
      * amount: `number`
      * payerId: `number`
      * fromAccount: `number`
      * toAccount: `number`
  </Tab>
</Tabs>
