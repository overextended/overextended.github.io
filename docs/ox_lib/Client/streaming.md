# Streaming

Check if assets exist, such as models, and loads them into memory.  
Throws errors for invalid assets and returns false if it could not be loaded.

### lib.requestAnimDict
```lua
-- dict: string
-- timeout: number [default: 100]
lib.requestAnimDict(dict, timeout)
```

### lib.requestAnimSet
```lua
-- set: string
-- timeout: number [default: 100]
lib.requestAnimSet(set, timeout)
```

### lib.requestModel
```lua
-- model: string
-- timeout: number [default: 100]
lib.requestModel(model, timeout)
```

### lib.requestStreamedTextureDict
```lua
-- dict: string
-- timeout: number [default: 100]
lib.requestStreamedTextureDict(dict, timeout)
```

### lib.requestNamedPtfxAsset
```lua
-- fxName: string
-- timeout: number [default: 100]
lib.requestNamedPtfxAsset(fxName, timeout)
```