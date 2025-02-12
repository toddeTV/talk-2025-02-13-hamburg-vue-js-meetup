# talk-2025-02-13-hamburg-vue-js-meetup

## project overview

This project contains the slides for my talk titled `3D or Not 3D? Vue and Beyond!` on 2025-02-13 at the [Hamburg Vue.js Meetup](https://www.meetup.com/de-DE/hamburg-vue-js-meetup/events/305791383/) in Hamburg.

The presented, repository and documentation language is `English`.

You can find pre deployed slides here, so that you can view them without the need of pulling the code and setting the project up yourself:<br>
[https://talk-2025-02-13-hamburg-vue-js-meetup.vercel.app/](https://talk-2025-02-13-hamburg-vue-js-meetup.vercel.app/)

## dev

### initial setup

#### VM ID

Development VM ID from Thorsten Seyschab for this project: `014`<br>
(Only interesting to him.)

#### project setup

1. execute a `git pull`
2. open project in VSCode
3. If you work with VSCode via remote software:
   - `{Ctrl}+{Shift}+{P}` -> `>Preferences: Open Settings (UI)` -> search for `keyboard.dispatch` and set it to `keyCode`
   - Restart or reload VSCode.
4. Install recommended extensions/ plugins:
   - Open Extensions menu in VSCode (`{Ctrl}+{Shift}+{X}`)
   - type in the search `@recommended`
   - install and enable the plugins
   - see file `.vscode/extensions.json` for configuring some of the extensions
   - Restart or reload VSCode.
5. In VSCode on the bottom left click your profile image and log in all services (GitHub due to VSCode extensions, ...)<br>
   If the browser to VSCode callback fails (e.g. due to remote working on a VM), wait for the login popup on the
   bottom right to timeout (ca. 5 minutes) and then on the upcoming popup question<br>
   `You have not yet finished authorizing [...] Would you like to try a different way? (local server)` click `Yes`
   and use this alternative login mechanic.
6. Duplicate `.env.example` as `.env` and set the environment variables:
   1. You must set the variable `VITE_ZLIG_DEMO_BASE_URL` with the base URL of the `zlig` demo branch
      [chore/demo-2025-02-13-hamburg-vue-js-meetup](https://github.com/toddeTV/zlig/tree/chore/demo-2025-02-13-hamburg-vue-js-meetup).
      Therefore, you can pull this branch and use it locally (recommended!), or use the pre-build dev demo URL
      from the `zlig` [PR #142](https://github.com/toddeTV/zlig/pull/142) (not recommended!).
7. Install dependencies: `pnpm i --frozen-lockfile`
8. Happy coding <3

### scripts / commands

```shell
# dev run
pnpm run dev[:network]
# you get (with set `:network` it will be open in your network; otherwise only local):
# - public slide show   > http://[localhost/IP]:3030/
# - presenter mode      > http://[localhost/IP]:3030/presenter/

# build
pnpm run build

# export
pnpm run export
```

### lint and prettier

This project uses [antfu/eslint-config](https://github.com/antfu/eslint-config) for eslint most of the files.
The following extend it:

- [antfu/eslint-plugin-format](https://github.com/antfu/eslint-plugin-format) for using external formatters like
  e.g. `prettier` for the file types that eslint cannot handle.
- [azat-io/eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist) for
  sorting object keys, imports, etc. - with auto-fix.

Keep in mind that the plugin names are renamed, see
[Plugins Rename](https://github.com/antfu/eslint-config?tab=readme-ov-file#plugins-renaming), e.g.:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

[Why I don't use Prettier for every file type](https://antfu.me/posts/why-not-prettier)

### Design

#### used icon collections

This project uses the following icon collections in descending order, try sticking to them and use from top to bottom.
Tipp: Favorite them and use the search over all item collections at once: https://icon-sets.iconify.design/?list=favorite

| full name               | shorthand      | license                                                         | note |
| ----------------------- | -------------- | --------------------------------------------------------------- | ---- |
| `Material Design Icons` | `mdi`          | Apache 2.0 (commercial use is allowed, no attribution required) |      |
| `Ant Design Icons`      | `ant-design`   | MIT                                                             |      |
| `Simple Icons`          | `simple-icons` | CC0 1.0                                                         |      |

### Docs and helper websites

- [Slidev](https://github.com/slidevjs/slidev)
  - [documentation](https://sli.dev/)
  - [themes](https://github.com/slidevjs/themes)

## prod

Will use the build command out of `/package.json`.<br>
Building, deploying and hosting is done via [Vercel](https://vercel.com/).

## Attribution/ Contribution

Project founder & head of project:

- [Thorsten Seyschab](https://todde.tv)

Honorable mentions to people that helped this project:

- \[currently none\]

Respectable mentions to projects that helped this project:

- My own talk titled `Your Own Vite Plugin? That's as easy as 1 2 3(D)` that was held on 2025-01-29 at the [Vue.js Nation](https://vuejsnation.com/) 2025 conference (online) was the foundation of this project. See the project code here: [https://github.com/toddeTV/talk_2025-01-29_vue-js-nation-conference](https://github.com/toddeTV/talk_2025-01-29_vue-js-nation-conference)
- My own talk titled `Playing with Nuxt in 3D` that was held on 2024-11-12 at the [NuxtNation](https://nuxtnation.com/) 2024 conference (online) was the foundation of this project. See the project code here: [https://github.com/toddeTV/talk_2024-11-12_NuxtNation-conference](https://github.com/toddeTV/talk_2024-11-12_NuxtNation-conference)
- My own talk titled `Playing with Vue in 3D` that was held on 2024-09-17 at the [PragVue]https://pragvue.com/) 2024 conference in Prag was the foundation of this project. See the project code here: [https://github.com/toddeTV/talk_2024-09-17_PragVue-conference](https://github.com/toddeTV/talk_2024-09-17_PragVue-conference)

Used programs/ softwares, services and dependencies - besides the ones in `./package.json`:

- [GitHub Copilot](https://github.com/features/copilot) was used in private mode for programming questions.
- [Slidev](https://github.com/slidevjs/slidev) used for creating the slides of the talk.
- [ChatGPT](https://chatgpt.com/) used for DALL-E image generation, text based questions and programming code generation.
- [Figma](https://www.figma.com/) used for SVG asset creations.

Used assets/ materials including images and 3D models:

- Game Project `zlig` hosted on [https://zlig.net/](https://zlig.net/) with source code on [https://github.com/toddeTV/zlig](https://github.com/toddeTV/zlig). Included materials in `zlig` are listed separately there as they are not part of this presentation project.
- Portrait from `Thorsten Seyschab` by [Franziska Kestel](https://franziskakestel.de/).
- Logo for `ThreeJS` from [https://discourse.threejs.org/t/three-js-svg-logo/21835](https://discourse.threejs.org/t/three-js-svg-logo/21835).
- Logo for `WebGL` from [https://en.m.wikipedia.org/wiki/File:WebGL_Logo.svg](https://en.m.wikipedia.org/wiki/File:WebGL_Logo.svg).
- ["Mini Cartoon Keyboard"](https://sketchfab.com/3d-models/mini-cartoon-keyboard-9d22365e37384b31b90dc9d5b3399ddc) by Rafael Dias, licensed under [Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/).

## License

Copyright (c) 2025-present, [Thorsten Seyschab](https://todde.tv)

This project, including original code and models, is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)). Under this license, others are allowed to remix, adapt, and build upon this work non-commercially, provided they credit the project founder and license any derivative works under the same terms.

Please note that this license applies only to the original content authored by the project’s creators. Third-party libraries, assets, 3D models, and other materials utilized in this project are listed under "Attribution/ Contribution" above and remain the property of their original creators, licensed under their respective terms.

The project founder reserves the right to modify the terms of this license or to offer different licensing arrangements for specific use cases.

For the full license text, please see the [LICENSE](./LICENSE) file.

### Need a Different License?

If you are interested in discussing a different licensing arrangement for individual use cases, please feel free to reach out. Custom licensing may be available, but it is not guaranteed.
