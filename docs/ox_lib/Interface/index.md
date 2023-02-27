---
title: Interface
---

If you wish to change the primary colour for the UI to better match your server's theme you can do so easily through the available convars.

They don't require you to build the UI, just restart the resource.

Convars:

```yaml
setr ox:primaryColor blue
setr ox:primaryShade 8
```

Changing the primary colour will change the colour in elements such as the progress bar/circle, skill check, radial menu center button and hover,
dialog confirm buttons, input field focus, and more.

You can find the full list of preset colours and shades here:

https://mantine.dev/theming/colors/#default-colors

Here is a list of custom colours provided:

- discord
- qbox
- qbcore
- nosleep
- nopixel

It is recommended to use primary shade `3` for best results with the custom colours.

### How to add custom colours

**1)** Head to https://omatsuri.app/color-shades-generator and pick or paste in a primary colour.
**2)** Make sure the palette has a total of only `10` colours.
**3)** Head to `ox_lib/web/src/theme/index.ts` and create a new entry in the colours table with your desired name.
**4)** Paste in the colour palette you obtained from omatsuri to your new entry and you're all set!

Keep in mind adding more custom colours *will* require you to download the source code and build the UI.
