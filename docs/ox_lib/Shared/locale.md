# Localisation

Allows players to set a preferred language and attempt to load locale files in any resources using the module.  
Locale files should use the [ISO Language Code](www.lingoes.net/en/translator/langcode.htm) and be saved as `./locales/langcode.json`

Players can use `setlocale [langcode]`, and admins can use `serverlocale [langcode]` to change the loaded file.

```lua
-- str: string
-- ...: string | number
locale(str, ...)
```

Additional arguments can be sent to format the locale output.

```lua
-- Load the locale module
lib.locale()

SetInterval(function()
	print(locale('grand_theft_auto'))
	print(locale('suspect_sex', locale('male')))
end, 5000)
```

```json title="locales/en-US.json"
{
  "grand_theft_auto": "grand theft auto",
  "male": "male",
  "female": "female",
  "suspect_sex": "suspect is %s",
}
```

```json title="locales/fr-FR.json"
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
