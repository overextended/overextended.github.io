---
title: Getting started
sidebar_position: 1
---

## Installation

We always recommend using Git so you can track changes and update easily, however this requires building the UI.  
Otherwise, download the [latest release](https://github.com/overextended/ox_doorlock/releases).

### Building

You can ignore this if you downloaded a release build.

- [Download](https://www.nodejs.org/) and install the LTS version of Node.js.
- Open a terminal, command prompt, etc. and navigate to your resources folder.
- Execute the following commands

```bash
npm install --location=global pnpm
git clone https://github.com/overextended/ox_core.git
cd web
pnpm i
pnpm build
```

### Dependencies

- [oxmysql](https://github.com/overextended/oxmysql/)
- [ox_lib](https://github.com/overextended/ox_lib/)

### Optional Dependencies

- [ox_target](https://github.com/overextended/ox_target/) or [qtarget](https://github.com/overextended/qtarget) or [qb-target](https://github.com/qbcore-framework/qb-target)
  - Doors can be lockpicked using the interaction menu.

### Supported Frameworks

These aren't necessary to run ox_doorlock, but they will add additional features.

- [ox_core](https://github.com/overextended/ox_core)
- [esx](https://github.com/esx-framework/esx-legacy)
- [qb-core](https://github.com/qbcore-framework/qb-core)

## Opening the UI

Assuming you've installed the resource and it has started, you can use `/doorlock` to open the UI.

- If the cursor is displayed but nothing appeared, the UI hasn't been built.
- Check you are authorised to use the command.
  - Type `test_ace player.1 command.doorlock` in the server console (replace 1 with your server id).
