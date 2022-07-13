---
title: Getting started
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IconButton from '@site/src/components/IconButton';
import { FaNpm } from 'react-icons/fa';

:::caution

This resource is **not production ready**. Breaking changes are guaranteed, and support is limited.  
Documentation may fall behind and be rendered obsolete.

:::

## Setup

We **strongly** recommend using Git to help with version control and separating your own changes from the original source code.  
Refer to [GitHub's guide to setting up Git](https://docs.github.com/en/get-started/quickstart/set-up-git#setting-up-git). You can also download a Git GUI client, such as [GitKraken](https://www.gitkraken.com/), to improve your workflow and more easily maintain changes.

### Dependencies

- [oxmysql](https://github.com/overextended/oxmysql/)
  - Database connector
- [ox_lib](https://github.com/overextended/ox_lib/)
  - Shared functions through modules and exports
- [ox_inventory](https://github.com/overextended/ox_inventory)
  - Implements items, weapons, shops, etc.
- [fivem-appearance](https://github.com/pedr0fontoura/fivem-appearance)
  - Player ped customisation.
- [ox_appearance](https://github.com/overextended/ox_appearance)
  - Outfits, shops, and player appearance persistence.

### Optional dependencies

- [npwd](https://github.com/project-error/npwd)

### Installation

<Tabs>
<TabItem value="1" label="Recommended">

- [Download](https://www.nodejs.org/) and install the LTS version of Node.js 16.
- Open a terminal, command prompt, etc. and navigate to your resources folder.
- Execute the following commands

```
npm install --location=global pnpm
git clone https://github.com/overextended/ox_core.git
cd web
pnpm i
pnpm build
```

</TabItem>
<TabItem value="2" label="Lazy">

- Download a tagged [release](https://github.com/overextended/ox_core/releases).

</TabItem>
</Tabs>


## Convars

| Name | Default | Replicated |
|------|------------|---------|
| ox:primaryIdentifier | fivem | false

## Importing the core functions

<Tabs>
<TabItem value='lua' label='Lua'>
Functions are imported by simply adding the import files to the fxmanifest.

**Client:**  
`@ox_core/imports/client.lua`

**Server:**  
`@ox_core/imports/server.lua`
</TabItem>
<TabItem value='js/ts' label='JS/TS'>
If in case you want to write resources in JS/TS you will need to insteall our node client and server wrapper package,
which will allow you to use the core's functions with full type and intellisense support.

<a href='https://www.npmjs.com/package/@overextended/ox_core'>
<IconButton style={{marginTop: '0.7rem'}} side='left' icon={<FaNpm/>}>Package</IconButton>
</a>
</TabItem>
</Tabs>