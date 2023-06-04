import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Search from '@components/Search';

function useHead() {
  const { title } = useConfig();

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="ox.ico" />
      <title>{`${title} – Overextended`}</title>
    </>
  );
}

function useNextSeoProps() {
  const path = useRouter().asPath;
  const arr = path.split('/');
  const title = arr[arr.length - 1].replace(/[-_]/g, ' ');

  return {
    titleTemplate: /[a-z]/.test(title) && /[A-Z]/.test(title) ? title : '%s',
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://avatars.githubusercontent.com/u/88127058?s=38') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Overextended
    </div>
  ),
  project: {
    link: 'https://github.com/overextended/overextended.github.io',
  },
  chat: {
    link: 'https://discord.gg/hmcmv3P7YW',
  },
  docsRepositoryBase: 'https://github.com/overextended/overextended.github.io/blob/main',
  footer: {
    text: 'Overextended',
  },
  // search: {
  //   component: <Search />,
  // },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    // titleComponent({ title, type }) {
    //   return (
    //     <>
    //       {title[0].toUpperCase()}
    //       {title.slice(1)}
    //     </>
    //   );
    // },
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
