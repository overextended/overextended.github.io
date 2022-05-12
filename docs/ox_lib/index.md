---
title: Getting Started
---

ox_lib is a collection of Lua and UI functions to utilise in other resources.

The UI is built in React so the code needs to be compiled into standard JS.  
If you don't know how to do this then please download the [release](https://github.com/overextended/ox_lib/releases/latest) (ox_lib.zip) which is *already* compiled into a working resource.

To enable the library inside of your resource just add `@ox_lib/init.lua` to `shared_scripts` or
a `shared_script` in your `fxmanifest.lua` file.

```lua
shared_scripts {
    '@ox_lib/init.lua'
}
```

Or if the library is the only shared script you use you can do:

```lua
shared_script '@ox_lib/init.lua'
```

That's it!  
You can now use the library functions inside of your resource, check the rest of the
documentation to see how to utilise them.
