### lib.versionCheck
Compares the resource version to the latest published release on GitHub. 
```lua
-- repository: string
lib.versionCheck(repository)

lib.versionCheck('overextended/ox_lib')
```

[Utilises GitHub's release API](https://docs.github.com/en/rest/reference/releases)
