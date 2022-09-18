### lib.versionCheck
Compares the resource version to the latest published release on GitHub. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```lua
lib.versionCheck(repository)
```
* repository: `string`

<Tabs>
<TabItem value='Lua'>

```lua
lib.versionCheck('overextended/ox_lib')
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/server'

lib.versionCheck('overextended/ox_lib')
```
</TabItem>
</Tabs>

[Utilises GitHub's release API](https://docs.github.com/en/rest/reference/releases)
