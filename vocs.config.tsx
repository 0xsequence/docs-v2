import { defineConfig } from 'vocs'
import { sidebar, topNav } from './nav'

export default defineConfig({
  title: 'Sequence',

  // ogImageUrl: {
  //   '/': '/og-image.png',
  //   '/docs':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  //   '/op-stack':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  // },
  iconUrl: { light: '/img/favicon.ico', dark: '/img/favicon.ico' },
  logoUrl: {
    light: '/img/sequence-composite-light.svg',
    dark: '/img/sequence-composite-dark.svg',
  },

  // rootDir: '.',
  basePath: '/',

  topNav,
  sidebar,

  // NOTE: taking up valuable space, will move those
  // to footer and other sections
  // socials: [
  //   {
  //     icon: 'github',
  //     link: 'https://github.com/0xsequence',
  //   },
  //   {
  //     icon: 'discord',
  //     link: 'https://discord.gg/sequence',
  //   },
  //   {
  //     icon: 'x',
  //     link: 'https://x.com/0xsequence',
  //   },
  // ],

  theme: {
    // accentColor: {
    //   light: '#442CA8',
    //   dark: '#99ADED',
    // },
    colorScheme: 'dark',
    variables: {
      fontFamily: {
        default: 'Inter',
        // mono: 'Roboto Mono'
      },
      color: {
        background: {
          light: '#f0f0f0',
          dark: '#111111',
        },
        // background5: {
        //   light: '#dddddd',
        //   dark: '#111111',
        // }

        // backgroundDark: {
        //   light: '#dddddd',
        //   dark: '#151515'
        // }
      },
    },
  },
})
