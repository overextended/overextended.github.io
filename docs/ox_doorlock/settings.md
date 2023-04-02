# Door Settings

### General

- Door name
  - Used to easily identify the door.
- Door label
  - Used to display a label on the door instead of the standard lock/unlock text.
- Passcode
  - Door can be unlocked by anybody by using the code or phrase.
- Autolock interval
  - Door will be locked after x seconds.
- Interact distance
  - Door can only be used when within x metres.
- Door rate
  - Door movement speed for sliding/garage/automatic doors, or swinging doors when locked.
- Locked
  - Sets the door as locked by default.
- Double
  - Door is a set of two doors, controlled together.
- Automatic
  - Sliding/garage/automatic door.
- Lockpick
  - Door can be lockpicked when interacting with a targeting resource.
- Hide UI
  - No indicators (i.e. icon, text) will display on the door.

### Characters

- Character Id
  - Character identifier used by a framework (i.e. player.charid, xPlayer.identifier, Player.CitizenId).

### Groups

- Group
  - Framework dependent, referring to jobs, gangs, etc.
- Grade
  - The minimum grade to allow access for the group (0 to allow all).

### Items

- Item
  - Name of the item.
- Metadata type
  - Requires metadata support (i.e. ox_inventory) to check slot.metadata.type

### Lockpick

- Difficulty
  - Sets the skillcheck difficulty (see [docs](https://overextended.github.io/docs/ox_lib/Interface/Client/skillcheck)).
- Area size
  - Custom difficulty area size.
- Speed multiplier
  - Custom difficulty idicator speed.

