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
