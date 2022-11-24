# Usage

When calling exports to add options, the input is an array of tables with the following properties.

```lua
{
  -- an identifier used when removing options
  name? = string,
  -- an icon from font-awesome
  icon? = string,
  -- display text
  label = string,
  -- range to display (default: 2, max: 7)
  distance? = number,
  -- a group, array of groups, or groups and grades needed to display
  groups? = string | string[] | { [string]: number }
  -- an item, array of items, or items and counts needed to display
  items? = string | string[] | { [string]: number }
  -- a bone, bones table to select specific parts
  bones? = string | string[] -> example :  'bonnet' || { 'bonnet', 'boot' }
  -- custom check to hide or display the option
  canInteract? = function(entity, distance, coords, name, bone),
  -- triggered on option selection (one only)
  onSelect? = function(data),
  export? = string,
  event? = string,
  serverEvent? = string,
  command? = string
}
```
