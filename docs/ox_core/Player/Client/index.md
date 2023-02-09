---
title: Client
sidebar_position: 1
---

### player

 
The player variable refers to the result of [Ox.GetPlayerData](https://github.com/overextended/ox_core/blob/main/client/player.lua#L48) unless reassigned.

**Example:**
```lua
print(json.encode(player, { indent = true }))
```
- player?: `table`
	- name: `string`
	- firstname: `string`
	- lastname: `string`
	- userid: `number`
	- charid: `number`
	- groups: `table`
	- gender: `string`

