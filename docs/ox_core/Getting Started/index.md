---
title: Getting started
sidebar_position: 1
slug: ./../
---

import ResourceLinks from '@site/src/components/ResourceLinks';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

This resource is **not production ready**. Breaking changes are guaranteed, and support is limited.  
Documentation may fall behind and be rendered obsolete.

:::

We **strongly** recommend using Git to help with version control and separating your own changes from the original source code.  
Refer to [GitHub's guide to setting up Git](https://docs.github.com/en/get-started/quickstart/set-up-git#setting-up-git).

You can also download a Git GUI client, such as [GitKraken](https://www.gitkraken.com/), to improve your workflow and more easily maintain changes.

## Dependencies

These resources are required for ox_core to function, and must start before it.

- [oxmysql](https://github.com/overextended/oxmysql/)
- [ox_lib](https://github.com/overextended/ox_lib/)
- [fivem-appearance](https://github.com/pedr0fontoura/fivem-appearance)
- [ox_appearance](https://github.com/overextended/ox_appearance)

## Installation

<Tabs>
<TabItem value="1" label="Recommended">

- [Download](https://www.nodejs.org/) and install the LTS version of Node.js 16.
- Open a terminal, command prompt, etc. and navigate to your resources folder.
- Execute the following commands

```bash
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

## Recommended resources

The following resources aren't required, but should offer the best experience for your server.

### ox_inventory

Slot-based inventory system with support for item metadata (uniqueness), shops, crafting, and much more.

<ResourceLinks repo="https://github.com/overextended/ox_inventory" docs="../ox_inventory"></ResourceLinks>

### npwd

Phone with many built-in apps such as Twitter, Marketplace, and Notes; with support for 3rd party app integration.

<ResourceLinks repo="https://github.com/project-error/npwd" docs="https://projecterror.dev/docs/npwd/start/installation"></ResourceLinks>

### pefcl

Banking and financing, with support for multiple, unique, and shared accounts.  
If using it with [ox_inventory](https://github.com/overextended/ox_inventory), open `pefcl/config.json` and enable framework integration.

```json
"frameworkIntegration": {
  "enabled": true,
  "resource": "ox_inventory",
  "syncInitialBankBalance": false
},
```

<ResourceLinks repo="https://github.com/project-error/pefcl" docs="https://projecterror.dev/docs/pefcl/installation"></ResourceLinks>
