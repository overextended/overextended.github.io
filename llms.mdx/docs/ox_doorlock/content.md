# Ox Doorlock (/docs/ox_doorlock)





<ResourceLinks repo="ox_doorlock" />

A door management resource that can be used standalone or alongside ox\_core, qbx\_core, and es\_extended.

## Installation [#installation]

<Callout type="info">
  We **strongly** recommend referring to [Guides](../guides) for setting up Git, Node.js, and bun.
</Callout>

<div className="fd-steps">
  <div className="fd-step">
    ### Install all resource dependencies. [#install-all-resource-dependencies-step]

    * [oxmysql](../oxmysql)
    * [ox\_lib](../ox_lib/)
  </div>

  <div className="fd-step">
    ### Download a release or build the source code. [#download-a-release-or-build-the-source-code-step]

    * Download the [latest release](https://github.com/overextended/ox_doorlock/releases/latest).

    ```bash
    git clone https://github.com/overextended/ox_doorlock.git
    cd ox_doorlock/web
    bun i
    bun run build
    ```
  </div>

  <div className="fd-step">
    ### Install optional dependencies. [#install-optional-dependencies-step]

    These resources aren't required but provide additional functionality.

    * [ox\_target](../ox_target/)
  </div>
</div>

## Opening the UI [#opening-the-ui]

If you have installed and started the resource, you can use `/doorlock` to open the UI.

* If the cursor is displayed but not the UI then you have not built it.
* You may not be authorised to use the command.

  * Enter `test_ace player.1 command.doorlock` in the server console (replace 1 with your server id).

## Convert doors [#convert-doors]

Door configuration files written for nui\_doorlock can be automatically added to your MySQL database.

* Any files with the `.lua` extension placed in the `ox_doorlock/convert` directory will be read on resource start.
* If the directory doesn't exist, you can create it.
* Conversion cannot be guaranteed, especially if the config was not written for nui\_doorlock.

## Adding new native audio [#adding-new-native-audio]

A guide can be found [here](https://forum.cfx.re/t/how-to-make-a-simplesound-using-native-audio/5156001) for adding new native audio.
