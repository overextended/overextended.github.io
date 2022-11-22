# Config

All settings are modified using convars, which need to be executed before the resource starts.

```yaml
# Toggle targeting when pressing the hotkey, instead of holding it down.
setr ox_target:toggleHotkey 0

# Change the key to enable targeting (https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard)
setr ox_target:defaultHotkey LMENU

# Draw a sprite (circle) at the centroid of a zone.
setr ox_target:drawSprite 1

# Enable built-in targeting options, e.g. toggling vehicle doors.
setr ox_target:defaults 1

# Enable debugging / testing options, entity outlines, and a raycast indicator.
setr ox_target:debug 0

# Enable / Disable leftclick to select options
setr ox_target:leftClick 1
```
