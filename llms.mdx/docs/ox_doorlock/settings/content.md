# Door Settings (/docs/ox_doorlock/settings)



# Door Settings [#door-settings]

## General [#general]

* Door name
  * Used to easily identify the door.
* Passcode
  * Door can be unlocked by anybody by using the code or phrase.
* Autolock interval
  * Door will be locked after x seconds.
* Interact distance
  * Door can only be used when within x metres.
* Door rate
  * Door movement speed for sliding/garage/automatic doors, or swinging doors when locked.
* Locked
  * Sets the door as locked by default.
* Double
  * Door is a set of two doors, controlled together.
* Automatic
  * Sliding/garage/automatic door.
* Lockpick
  * Door can be lockpicked when interacting with a targeting resource.
* Hide UI
  * No indicators (i.e. icon, text) will display on the door.
* Hold Open
  * Holds the door open while unlocked.

## Characters [#characters]

* Character Id
  * Character identifier used by a framework (i.e. player.charid, xPlayer.identifier, Player.CitizenId).

## Groups [#groups]

* Group
  * Framework dependent, referring to jobs, gangs, etc.
* Grade
  * The minimum grade to allow access for the group (0 to allow all).

## Items [#items]

* Item
  * Name of the item.
* Metadata type
  * Requires metadata support (i.e. ox\_inventory) to check slot.metadata.type.
* Remove on use
  * Removes the item after interacting with the door.

## Lockpick [#lockpick]

* Difficulty
  * Sets the skillcheck difficulty (see [docs](../ox_lib/Modules/Interface/Client/skillcheck)).
* Area size
  * Custom difficulty area size in degrees.
* Speed multiplier
  * Custom difficulty idicator speed multipier.

## Sound [#sound]

* Lock sound
  * Sound to play on door lock.
* Unlock sound
  * Sound to play on door unlock.

*Note*: Sounds are stored in the `./web/public/sounds` directory.
