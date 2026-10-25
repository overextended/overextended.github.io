# Functions (/docs/ox_doorlock/Server/functions)



Gets data for a door with the given id, matching the id for the database entry.

## getDoor [#getdoor]

```lua
exports.ox_doorlock:getDoor(doorId)
```

Gets data for a door with the given `id`, matching the id for the database entry.

* id: `number`

Return:

* door: `table`

## getDoorFromName [#getdoorfromname]

```lua
exports.ox_doorlock:getDoorFromName(name)
```

Gets data for a door with the given `name`, matching the name for the database entry.

* name: `string`

Return:

* door: `table`

## editDoor [#editdoor]

```lua
exports.ox_doorlock:editDoor(doorId, data)
```

Edit configuration for the given doorId.

* doorId: `number`
* data: `table`

## createDoor [#createdoor]

```lua
exports.ox_doorlock:createDoor(data)
```

Creates a new door and saves it to the database, the same as creating one with the `/doorlock` command. The door is
synced to all clients straight away.

* data: `table`
  * name?: `string`
    * Defaults to the door's coordinates.
  * model?: `number`
    * Model hash of the door. Required for a single door.
  * heading?: `number`
    * Required for a single door.
  * coords?: `vector3`
    * Required for a single door. A double door defaults to the point between its two doors.
  * doors?: `table`
    * Two tables for a double door, each with `model`, `heading` and `coords`.
  * state?: `0` or `1`
    * `1` (locked) by default.
  * maxDistance?: `number`
  * passcode?: `string`
  * autolock?: `number`
    * Locks the door again after the given amount of seconds.
  * doorRate?: `number`
  * auto?: `boolean`
  * lockpick?: `boolean`
  * lockpickDifficulty?: `table`
  * hideUi?: `boolean`
  * holdOpen?: `boolean`
  * lockSound?: `string`
  * unlockSound?: `string`
  * characters?: `table`
    * Array of character identifiers.
  * groups?: `table`
    * Table of group names where the numeric value is the minimum grade required.
    * `{['police'] = 0, ['ambulance'] = 2}`
  * items?: `table`
    * Array of items, each with `name`, `metadata?` and `remove?`.

Return:

* doorId: `number`

<Callout type="warning">
  The door is stored in the database and stays there until it is removed. Check for it with
  [getDoorFromName](#getdoorfromname) before creating it, rather than creating it again every time your resource starts.
</Callout>

<br />

<u>
  **Example**
</u>

```lua
if not exports.ox_doorlock:getDoorFromName('PDM Showroom Doors') then
    local doorId = exports.ox_doorlock:createDoor({
        name = 'PDM Showroom Doors',
        state = 1,
        maxDistance = 2,
        groups = { ['cardealer'] = 0 },
        doors = {
            {
                model = `v_ilev_csr_door_r`,
                heading = 340,
                coords = vector3(-37.3311, -1108.8733, 26.7198),
            },
            {
                model = `v_ilev_csr_door_l`,
                heading = 340,
                coords = vector3(-39.1337, -1108.2181, 26.7198),
            },
        },
    })

    print(('Created door %s'):format(doorId))
end
```

## removeDoor [#removedoor]

```lua
exports.ox_doorlock:removeDoor(doorId)
```

Deletes the door with the given doorId from the database and removes it from all clients.

* doorId: `number`

Return:

* success: `boolean`

<Callout type="error">
  Throws an error if no door exists with the given doorId.
</Callout>

## setDoorState [#setdoorstate]

```lua
exports.ox_doorlock:setDoorState(doorId, state)
```

Sets a door with the given doorId as locked if state is `true` or `1`.

* doorId: `number`
* state: `0` or `1` or `boolean`
