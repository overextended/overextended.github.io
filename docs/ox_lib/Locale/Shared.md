Allows servers to set a preferred language and attempt to load locale files in any resources using the module.  
Locale files should use the [ISO Language Code](http://www.lingoes.net/en/translator/langcode.htm) and be saved as `./locales/langcode.json`

To change the preferred language from English, add the convar to your server.cfg
```cfg
setr ox:locale en
```

Initialise the locale module in your resource (once).
```lua
lib.locale()
```

Format your strings with the new locale global.
```lua
locale(str, ...)
```

* str: `string`
* ...: `string` or `number`

Additional arguments can be sent to format the locale output.

```lua
-- Load the locale module
lib.locale()

SetInterval(function()
	print(locale('grand_theft_auto'))
	print(locale('suspect_sex', locale('male')))
end, 5000)
```

```json title="locales/en.json"
{
  "grand_theft_auto": "grand theft auto",
  "male": "male",
  "female": "female",
  "suspect_sex": "suspect is %s",
}
```

```json title="locales/fr.json"
{
  "grand_theft_auto": "vol de voiture",
  "male": "homme",
  "female": "femme",
  "suspect_sex": "le suspect est %s",
}
```

```lua title="fxmanifest.lua"
files {
	'locales/*.json'
}
```
