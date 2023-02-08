# Usage

When calling exports to add options, the input is an array of tables with the following properties.

- label: `string` Display text.
- name?: `string` Used as an identifier to remove the option.
- icon?: `string` Name of a [Font Awesome](https://fontawesome.com/icons) icon.
- iconColor?: `string`
- distance?: `number`
- bones?: `string` | `string[]` A bone name or array of bone names.
  - Refer to [GetEntityBoneIndexByName](https://docs.fivem.net/natives/?_0xFB71170B7E76ACBA).
- groups?: `string` | `string[]` | `table<string, number>` A group, array of groups, or pairs of groups-grades required to show the option.
  - Groups are framework dependent, and may refer to jobs, gangs, etc.
- items?: `string` | `string[]` | `table<string, number`>` An item, array of items, or pairs of items-count required to show the option.
  - Items are framework dependent.
- canInteract?: `function(entity, distance, coords, name, bone)` Check if the option should display or be hidden.
  - Do not use this function to "return true". Options will always display if this is undefined.
- onSelect?: `function(data)`
- export?: `string`
- event?: `string`
- serverEvent?: `string`
- command?: `string`
