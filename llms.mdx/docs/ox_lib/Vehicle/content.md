# Vehicle (/docs/ox_lib/Vehicle)



A class for vehicle entities implementing a custom statebag interface and common entity operations.

## Constructor [#constructor]

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.vehicle:new(handle)
    ```
  </Tab>

  <Tab>
    ```ts
    import { Vehicle } from "@overextended/ox_lib";

    new Vehicle(handle)
    ```
  </Tab>
</Tabs>

* handle: `number` The entity's [script handle](https://docs.fivem.net/docs/scripting-manual/networking/ids/#entity-handle).

**Returns:** `Vehicle`

## Methods [#methods]

### setOnGround [#setonground]

Attempts to set the entity onto the ground.\
On the server, this uses the `ox_entity_setonground` state and a [statebag change handler](https://github.com/overextended/ox_lib/blob/44796d362997f9d1b67a01b56ed5bcba1e73c2f4/resource/client.lua#L39-L74).

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:setOnGround()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.setOnGround()
    ```
  </Tab>
</Tabs>

**Returns:** `boolean`

### getType [#gettype]

Gets the entity's vehicle type. See [GetVehicleType](https://docs.fivem.net/natives/?_0xA273060E).

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:getType()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.getType()
    ```
  </Tab>
</Tabs>

**Returns:** `string`

### getPlate [#getplate]

Gets the entity's number plate text.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:getPlate()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.getPlate()
    ```
  </Tab>
</Tabs>

**Returns:** `string`

### setPlate [#setplate]

Sets the entity's number plate text.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:setPlate(plate)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.setPlate(plate)
    ```
  </Tab>
</Tabs>

* plate: `string`

{/* 
  Internal class used by the GameEntity classes (Ped, Player, Prop, Vehicle).
  */}

{/* ## Properties

  <TypeTable
  type={{
    handle: {
      description: "The entity's script handle.",
      type: 'number',
      required: true
    },
    netId: {
      description: "The entity's network id.",
      type: 'number',
      required: true
    },
    type: {
      description: "The entity's type (i.e. Ped, Player, Prop, Vehicle).",
      type: 'string',
      required: true
    },
    statebag: {
      description: "The entity's internal statebag name.",
      type: 'string',
      required: true
    },
  }}
  /> */}

### set [#set]

Writes a value to the entity's statebag.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:set(key, value)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.set(key, value)
    ```
  </Tab>
</Tabs>

* key: `string`
* value: `any`

**Returns:** `boolean` - If the state changed.

### setr [#setr]

Writes a replicated value to the entity's statebag. Client-set values are validated by the server.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:setr(key, value)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.setr(key, value)
    ```
  </Tab>
</Tabs>

* key: `string`
* value: `any`

**Returns:** `boolean` - If the state changed.

### sets [#sets]

Writes a synced value to the entity's statebag. Client-set values are validated by the server.\
Synced values are only replicated between the player and server, and cannot be set on non-player entities.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:sets(key, value)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.sets(key, value)
    ```
  </Tab>
</Tabs>

* key: `string`
* value: `any`

**Returns:** `boolean` - If the state changed.

### get [#get]

Returns a value from the entity's statebag.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:get(key)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.get(key)
    ```
  </Tab>
</Tabs>

* key: `string`

**Returns:** `unknown`

### has [#has]

Returns whether a key exists in the entity's statebag.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:has(key)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.has(key)
    ```
  </Tab>
</Tabs>

* key: `string`

**Returns:** `boolean`

### keys [#keys]

Returns an array of all keys set on the entity's statebag.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:keys()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.keys()
    ```
  </Tab>
</Tabs>

**Returns:** `string[]`

### setHandle [#sethandle]

Updates the handle, netId, and statebag properties on an entity. Useful if re-using an entity instance, respawning an entity, changing the model, etc.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:setHandle(handle)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.setHandle(handle)
    ```
  </Tab>
</Tabs>

* handle: `number`

### getCoords [#getcoords]

Gets the entity's current coordinates.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:getCoords()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.getCoords()
    ```
  </Tab>
</Tabs>

**Returns:** `Vector3`

### setCoords [#setcoords]

Sets the entity's coordinates to the specified position.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:setCoords(x, y, z, deadFlag, ragdollFlag, clearArea)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.setCoords()
    ```
  </Tab>
</Tabs>

* x: `number`
* y: `number`
* z: `number`
* deadFlag?: `boolean` (Defaults to false)
* ragdollFlag?: `boolean` (Defaults to false)
* clearArea?: `boolean` (Defaults to false)

### getModel [#getmodel]

Gets the entity's current model hash.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:getModel()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.getModel()
    ```
  </Tab>
</Tabs>

**Returns:** `number`

### getHeading [#getheading]

Gets the entity's current heading (or yaw) in degrees.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:getHeading()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.getHeading()
    ```
  </Tab>
</Tabs>

**Returns:** `number`

### setHeading [#setheading]

Sets the entity's heading (or yaw) to the given value in degrees.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:setHeading(heading)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.setHeading(heading)
    ```
  </Tab>
</Tabs>

* heading: `number`

### getRoutingBucket [#getroutingbucket]

Gets the entity's current routing bucket.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:getRoutingBucket()
    ```
  </Tab>

  <Tab>
    ```ts
    entity.getRoutingBucket()
    ```
  </Tab>
</Tabs>

**Returns:** `number`

### setRoutingBucket [#setroutingbucket]

Sets the entity's routing bucket to the given id. &#x2A;*Server only.**

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    entity:setRoutingBucket(bucketId)
    ```
  </Tab>

  <Tab>
    ```ts
    entity.setRoutingBucket(bucketId)
    ```
  </Tab>
</Tabs>

* bucketId: `number`
