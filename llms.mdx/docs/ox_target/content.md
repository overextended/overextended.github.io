# Ox Target (/docs/ox_target)





<ResourceLinks repo="ox_target" />

A performant and flexible standalone targeting resource or "third-eye", with additional functionality for ox\_inventory, ox\_core, qbx\_core, and es\_extended.

## Installation [#installation]

<Callout type="info">
  We **strongly** recommend referring to [Guides](../guides) for setting up Git, Node.js, and bun.
</Callout>

<div className="fd-steps">
  <div className="fd-step">
    ### Install all resource dependencies [#install-all-resource-dependencies-step]

    * [ox\_lib](../ox_lib/)
  </div>

  <div className="fd-step">
    ### Download a release or clone the source code. [#download-a-release-or-clone-the-source-code-step]

    * Download the [latest release](https://github.com/overextended/ox_target/releases/latest).

    ```bash
    git clone https://github.com/overextended/ox_target.git
    ```
  </div>

  <div className="fd-step">
    ### Config [#config-step]

    Resource configuration is handled using [convars](https://docs.fivem.net/docs/scripting-reference/convars/).

    ```bash
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
  </div>
</div>

## Supported Frameworks [#supported-frameworks]

These aren't necessary to run ox\_target, but they will add additional features.

* [ox\_core](https://github.com/overextended/ox_core)
* [esx](https://github.com/esx-framework/esx-legacy)
* [qbx\_core](https://github.com/Qbox-project/qbx_core)
