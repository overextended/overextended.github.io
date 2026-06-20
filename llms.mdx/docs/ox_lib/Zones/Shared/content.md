# Shared (/docs/ox_lib/Zones/Shared)



A highly performant spatial check system for the game world. Zones define a 3D area (sphere, box, or polygon) and evaluate whether a position is inside or outside that region - similar to a [colshape](https://wiki.multitheftauto.com/wiki/Element/Collision_shape).

Internally, Zones utilise a [spatial grid](docs/ox_lib/Grid/Shared) to efficiently narrow down relevant zones before performing precise position tests.

For Lua, this replaces [PolyZone](https://github.com/mkafrin/PolyZone) and leverages the [GLM](https://github.com/citizenfx/lua/blob/luaglm-dev/cfx/README.md) library for high performance and memory efficiency.

Zones are also available in JS, utilising our [utility library](https://github.com/overextended/ox) for geometry, grid, and spatial operations.

<Callout>
  Server-side zones do not support player trigger events. The `onEnter`, `onExit`, and `inside` handlers are unavailable.
</Callout>

<Callout>
  Lua and JavaScript zones are not API compatible. The TypeScript definitions and TSDoc comments in the npm package serve as the authoritative reference for the JavaScript API.
</Callout>

## Polygon/Prism Zone [#polygonprism-zone]

Creates a polygon from the given vertices, which is then placed in the world and extruded to the given height to form a 3D shape.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.zones.poly(data)
    ```

    * data: `table`
      * points: `vector3[]`
        * An array of 3d points defining the polygon's shape.
      * thickness?: `number`
        * The height of the polygon, defaulting to `4`.
      * onEnter?: `function(self: table)`
      * onExit?: `function(self: table)`
      * inside?: `function(self: table)`
      * debug?: `boolean`
  </Tab>

  <Tab>
    ```ts
    import { Zone } from "@overextended/ox_lib";
    import { Vector2 } from "@overextended/core/vector";

    Zone.Prism(vertices: Vector2[], height: number, z: number)
    ```
  </Tab>
</Tabs>

## Box Zone [#box-zone]

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.zones.box(data)
    ```

    * data: `table`
      * coords: `vector3`
      * size?: `vector3`
        * Default: `vec3(2, 2, 2)`
      * rotation?: `number`
        * Angle in degrees, defaulting to `0`.
      * onEnter?: `function(self: table)`
      * onExit?: `function(self: table)`
      * inside?: `function(self: table)`
      * debug?: `boolean`
  </Tab>

  <Tab>
    ```ts
    import { Zone } from "@overextended/ox_lib";
    import { Vector3 } from "@overextended/core/vector";

    Zone.Cuboid(origin: Vector3, width: number, depth: number, height: number, heading?: number)
    ```
  </Tab>
</Tabs>

## Sphere Zone [#sphere-zone]

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    lib.zones.sphere(data)
    ```

    * data: `table`
      * coords: `vector3`
      * radius?: `number`
        * Default: `2`
      * onEnter?: `function(self: table)`
      * onExit?: `function(self: table)`
      * inside?: `function(self: table)`
      * debug?: `boolean`
  </Tab>

  <Tab>
    ```ts
    import { Zone } from "@overextended/ox_lib";
    import { Vector3 } from "@overextended/core/vector";

    Zone.Sphere(coords: Vector3, radius: number)
    ```
  </Tab>
</Tabs>

## Methods [#methods]

### onEnter [#onenter]

A function called when the player enters the zone. It can be attached to the zone after instantiation, or in the `data` table if using Lua.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    local function onEnter(self)
        print('entered zone', self.id)
    end

    zone.onEnter = onEnter
    ```
  </Tab>

  <Tab>
    ```ts
    function onEnter(this: Zone) {
      console.log(`entered zone ${this.id}`)
    }

    zone.onEnter = onEnter;
    ```
  </Tab>
</Tabs>

### onExit [#onexit]

A function called when the player exits the zone. It can be attached to the zone after instantiation, or in the `data` table if using Lua.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    local function onExit(self)
        print('exited zone', self.id)
    end

    zone.onExit = onExit
    ```
  </Tab>

  <Tab>
    ```ts
    function onExit(this: Zone) {
      console.log(`exited zone ${this.id}`)
    }

    zone.onExit = onExit;
    ```
  </Tab>
</Tabs>

### inside [#inside]

A function called when the player exits the zone. It can be attached to the zone after instantiation, or in the `data` table if using Lua.

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    local function inside(self)
        print('you are inside zone', self.id)
    end

    zone.inside = inside
    ```
  </Tab>

  <Tab>
    ```ts
    function inside(this: Zone) {
      console.log(`you are inside zone ${this.id}`)
    }

    zone.inside = inside;
    ```
  </Tab>
</Tabs>

### remove [#remove]

Zones can be deleted by using the remove method.

```lua
local zone = lib.zones.box({...})

zone:remove()
```

### contains [#contains]

Tests if a point exists inside the zone, returning a `boolean`.

```lua
local zone = lib.zones.box({...})

if zone:contains(vec3(1, 1, 1)) then
    print('point is inside zone!')
end
```

### setDebug [#setdebug]

Enables or disables debug mode for a zone, optionally with custom colors.

```lua
local zone = lib.zones.box({...})

-- Enable debug with default colors
zone:setDebug(true)

-- Enable debug with custom colors
zone:setDebug(true, vec4(255, 0, 0, 100))

-- Disable debug
zone:setDebug(false)
```

## Utility Functions [#utility-functions]

### lib.zones.getAllZones [#libzonesgetallzones]

Returns all registered zones.

```lua
local zones = lib.zones.getAllZones()
```

### lib.zones.getCurrentZones [#libzonesgetcurrentzones]

Returns all zones the player is currently inside.

```lua
local currentZones = lib.zones.getCurrentZones()
```

### lib.zones.getNearbyZones [#libzonesgetnearbyzones]

Returns all zones near the player.

```lua
local nearbyZones = lib.zones.getNearbyZones()
```

## Examples [#examples]

<Tabs groupId="language" items="['Lua', 'TypeScript']">
  <Tab>
    ```lua
    function onEnter(self)
        print('entered zone', self.id)
    end

    function onExit(self)
        print('exited zone', self.id)
    end

    function inside(self)
        print('you are inside zone ' .. self.id)
    end

    local poly = lib.zones.poly({
        points = {
            vec(413.8, -1026.1, 29),
            vec(411.6, -1023.1, 29),
            vec(412.2, -1018.0, 29),
            vec(417.2, -1016.3, 29),
            vec(422.3, -1020.0, 29),
            vec(426.8, -1015.9, 29),
            vec(431.8, -1013.0, 29),
            vec(437.3, -1018.4, 29),
            vec(432.4, -1027.2, 29),
            vec(424.7, -1023.5, 29),
            vec(420.0, -1030.2, 29),
            vec(409.8, -1028.4, 29),
        },
        thickness = 2,
        debug = true,
        inside = inside,
        onEnter = onEnter,
        onExit = onExit
    })

    local sphere = lib.zones.sphere({
        coords = vec3(442.5363, -1017.666, 28.65637),
        radius = 1,
        debug = true,
        inside = inside,
        onEnter = onEnter,
        onExit = onExit
    })

    local box = lib.zones.box({
        coords = vec3(442.5363, -1017.666, 28.65637),
        size = vec3(1, 1, 1),
        rotation = 45,
        debug = true,
        inside = inside,
        onEnter = onEnter,
        onExit = onExit
    })
    ```
  </Tab>

  <Tab>
    ```ts
    import { Zone } from "@overextended/ox_lib";
    import { Vector2, Vector3 } from "@overextended/core/vector";

    function onEnter(this: Zone) {
      console.log(`entered ${this.id}`)
    }

    function onExit(this: Zone) {
      console.log(`exited ${this.id}`)
    }

    function inside(this: Zone) {
      console.log(`inside ${this.id}`)
    }

    const shouldDraw = true;

    Zone.Prism([
      new Vector2(413.8, -1026.1),
      new Vector2(411.6, -1023.1),
      new Vector2(412.2, -1018.0),
      new Vector2(417.2, -1016.3),
      new Vector2(422.3, -1020.0),
      new Vector2(426.8, -1015.9),
      new Vector2(431.8, -1013.0),
      new Vector2(437.3, -1018.4),
      new Vector2(432.4, -1027.2),
      new Vector2(424.7, -1023.5),
      new Vector2(420.0, -1030.2),
      new Vector2(409.8, -1028.4)
    ], 2, 29)

    Zone.Sphere(new Vector3(442.5363, -1017.666, 28.65637), 1)

    Zone.Cuboid(new Vector3(442.5363, -1017.666, 28.65637), 1, 1, 1)

    Zone.map.forEach((zone) => {
      zone.inside = inside;
      zone.onEnter = onEnter;
      zone.onExit = onExit;
      zone.shouldDraw = shouldDraw;
    })
    ```
  </Tab>
</Tabs>

## Zone creation script [#zone-creation-script]

You can use our builtin zone-creator with `/zone` - with `poly`, `box` or `sphere` as an argument.\
Available controls will be displayed on the right side.

Zones will be saved to `ox_lib/created_zones.lua` with your chosen format.

<Tabs items="[&#x22;function&#x22;, &#x22;array&#x22;, &#x22;ox_target&#x22;]">
  <Tab>
    ```lua
    local poly = lib.zones.poly({
        name = poly,
        points = {
            vec(447.9, -998.8, 25.8),
            vec(450.3, -998.2, 25.8),
            vec(449.9, -995.5, 25.8),
            vec(447.2, -995.6, 25.8),
            vec(446.3, -997.9, 25.8),
        },
        thickness = 2,
    })
    ```
  </Tab>

  <Tab>
    ```lua
    {
        name = poly,
        points = {
            vec(447.9, -998.8, 25.8),
            vec(450.3, -998.2, 25.8),
            vec(449.9, -995.5, 25.8),
            vec(447.2, -995.6, 25.8),
            vec(446.3, -997.9, 25.8),
        },
        thickness = 2,
    },
    ```
  </Tab>

  <Tab>
    ```lua
    exports.ox_target:addPolyZone({
        name = poly,
        points = {
            vec(447.9, -998.8, 25.8),
            vec(450.3, -998.2, 25.8),
            vec(449.9, -995.5, 25.8),
            vec(447.2, -995.6, 25.8),
            vec(446.3, -997.9, 25.8),
        },
        thickness = 2,
    })
    ```
  </Tab>
</Tabs>
