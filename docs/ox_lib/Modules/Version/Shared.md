### lib.checkDependency

Check if a resource is using a specified version or higher, allowing for compatibility checks or throwing errors.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```lua
lib.checkDependency(resource, version)
```

* resource: `string`
* version: `string`

<Tabs>
<TabItem value='Lua'>

```lua
if not lib.checkDependency('ox_lib', '1.5.0') then error() end
```

</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/shared'
// import { checkDependency } from '@overextended/ox_lib/shared'

if (!lib.checkDependency('ox_lib', '1.5.0')) error()
```

</TabItem>
</Tabs>
