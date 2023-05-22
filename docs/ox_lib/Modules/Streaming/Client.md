Check if assets exist, such as models, and loads them into memory.  
Throws errors for invalid assets and returns true if the asset is loaded.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.requestAnimDict

<Tabs>
<TabItem value='Lua'>

```lua
lib.requestAnimDict(dict, timeout)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.requestAnimDict(dict, timeout)
```

</TabItem>
</Tabs>

* dict: `string`
* timeout: `number`
  * Default: `100`

### lib.requestAnimSet

<Tabs>
<TabItem value='Lua'>

```lua
lib.requestAnimSet(set, timeout)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.requestAnimSet(set, timeout)
```

</TabItem>
</Tabs>

* set: `string`
* timeout: `number`
  * Default: `100`

### lib.requestModel

<Tabs>
<TabItem value='Lua'>

```lua
lib.requestModel(model, timeout)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.requestModel(model, timeout)
```

</TabItem>
</Tabs>

* model: `string`
* timeout: `number`
  * Default: `100`

### lib.requestStreamedTextureDict

<Tabs>
<TabItem value='Lua'>

```lua
lib.requestStreamedTextureDict(dict, timeout)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.requestStreamedTextureDict(dict, timeout)
```

</TabItem>
</Tabs>

* dict: `string`
* timeout: `number`
  * Default: `100`

### lib.requestNamedPtfxAsset

<Tabs>
<TabItem value='Lua'>

```lua
lib.requestNamedPtfxAsset(fxName, timeout)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.requestNamedPtfxAsset(fxName, timeout)
```

</TabItem>
</Tabs>

* fxName: `string`
* timeout: `number`
  * Default: `100`

### lib.requestScaleformMovie

<Tabs>
<TabItem value='Lua'>

```lua
lib.requestScaleformMovie(scaleformMovie, timeout)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.requestScaleformMovie(scaleformMovie, timeout)
```

</TabItem>
</Tabs>

* dict: `string`
* timeout: `number`
  * Default: `100`

### lib.requestWeaponAsset

<Tabs>
<TabItem value='Lua'>

```lua
lib.requestWeaponAsset(weaponType, timeout, weaponResourceFlags, extraWeaponComponentFlags)
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.requestWeaponAsset(weaponType, timeout, weaponResourceFlags, extraWeaponComponentFlags)
```

</TabItem>
</Tabs>

* weaponType: `string | number`
* timeout: `number?`
  * Number of ticks to wait for the asset to load. Default is `500`
* weaponResourceFlags: `WeaponResourceFlags?`
  * Default is `31`
* extraWeaponComponentFlags: `ExtraWeaponComponentFlags?`
  * Default is `0`

Return:
* `string | number?` weaponType

### WeaponResourceFlags

```
1 WRF_REQUEST_BASE_ANIMS
2 WRF_REQUEST_COVER_ANIMS
4 WRF_REQUEST_MELEE_ANIMS
8 WRF_REQUEST_MOTION_ANIMS
16 WRF_REQUEST_STEALTH_ANIMS
32 WRF_REQUEST_ALL_MOVEMENT_VARIATION_ANIMS
31 WRF_REQUEST_ALL_ANIMS
```

### ExtraWeaponComponentFlags

```
0 WEAPON_COMPONENT_NONE
1 WEAPON_COMPONENT_FLASH
2 WEAPON_COMPONENT_SCOPE
4 WEAPON_COMPONENT_SUPP
8 WEAPON_COMPONENT_SCLIP2
16 WEAPON_COMPONENT_GRIP
```
