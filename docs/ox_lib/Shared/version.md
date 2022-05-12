# Dependency version

### lib.checkDependency
Check if a resource is using a specified version or higher, allowing for compatibility checks or throwing errors.
```lua
-- resource: string
-- version: string
lib.checkDependency(resource, version)

if not lib.checkDependency('ox_lib', '1.5.0') then error() end
```
