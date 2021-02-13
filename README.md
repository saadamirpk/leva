<a href=""><img src="https://raw.githubusercontent.com/gsimone/leva/master/hero.png" /></a>

<div align="center">
    <img src="https://badgen.net/npm/v/leva?labelColor=181C20&color=181C20" alt="NPM Version" />
  <img src="https://badgen.net/bundlephobia/minzip/leva?labelColor=181C20&color=181C20" alt="minzipped size"/>
    <img src="https://github.com/gsimone/leva/workflows/CI/badge.svg" alt="Build Status" />
</a>
</div>
<br />
<div align="center"><strong>A GUI you are going to lava.</strong></div>
<div align="center"> Customizable, extensible and beautiful by default.</div>
<br />
<div align="center">
<a href="https://docs.pmnd.rs/leva">Documentation</a> 
</div>
<br />
<div align="center">
  <sub>by <a href="https://twitter.com/pmndrs">Poimandres</a></sub>
</div>

<br />

## Features

- ⭐️ Beautiful by default
- 🎚 More than 12 different kinds of inputs available
- 🧐 Smart input type recognition
- 🔌 Easy-to-make plugins
- ✅ Keyboard accessible
- ⚡️ No setup necessary

### Installation

```bash
npm i leva
```

### Quick start

Simply call the `useControls` hook from anywhere in your app:

```jsx
import { useControls } from "leva"

function MyComponent() {
  const { name, aNumber } = useControls({ name: "World", aNumber: 0 })
  
  return <div>Hey {name}, hello! {aNumber}</div>
}
```

### Documentation

- [Getting Started](docs/getting-started.md)
- [Inputs](docs/inputs.md)
- [Configuration](docs/configuration.md)
- [Styling](docs/styling.md)

- [Advanced: Controlled Inputs](docs/advanced/controlled-inputs.md)
- [Advanced: Creating Plugins](docs/advanced/creating-plugins.md)


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
  <td align="center"><a href="https://github.com/dbismut"><img src="https://avatars2.githubusercontent.com/u/5003380?v=4?s=80" width="80px;" alt=""/><br /><sub><b>David Bismut</b></sub></a><br /><a href="#ideas-dbismut" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gsimone/use-leva/commits?author=dbismut" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/ggsimm"><img src="https://avatars0.githubusercontent.com/u/1862172?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Gianmarco</b></sub></a><br /><a href="#ideas-gsimone" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gsimone/use-leva/commits?author=gsimone" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/AndrewPrifer"><img src="https://avatars1.githubusercontent.com/u/2991360?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Andrew Prifer</b></sub></a><br /><a href="#ideas-AndrewPrifer" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gsimone/use-leva/commits?author=AndrewPrifer" title="Code">💻</a></td>
    <td align="center"><a href="http://twitter.com/ariaminaei"><img src="https://avatars3.githubusercontent.com/u/593118?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Aria</b></sub></a><br /><a href="#ideas-AriaMinaei" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://iinf.in/"><img src="https://avatars0.githubusercontent.com/u/48106228?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Han</b></sub></a><br /><a href="#design-iinfin" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/ivanross"><img src="https://avatars1.githubusercontent.com/u/15856208?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Ivan Rossi</b></sub></a><br /><a href="https://github.com/gsimone/use-leva/issues?q=author%3Aivanross" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/marcofugaro"><img src="https://avatars3.githubusercontent.com/u/7217420?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Marco Fugaro</b></sub></a><br /><a href="#ideas-marcofugaro" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/emmelleppi"><img src="https://avatars2.githubusercontent.com/u/39760175?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Marco Ludovico Perego</b></sub></a><br /><a href="#ideas-emmelleppi" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/clementcassajus"><img src="https://avatars.githubusercontent.com/u/13033639?v=4?s=80" width="80px;" alt=""/><br /><sub><b>clementcassajus</b></sub></a><br /><a href="#design-clementcassajus" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/thephoenixofthevoid"><img src="https://avatars2.githubusercontent.com/u/49817252?v=4?s=80" width="80px;" alt=""/><br /><sub><b>thephoenixofthevoid</b></sub></a><br /><a href="https://github.com/gsimone/use-leva/issues?q=author%3Athephoenixofthevoid" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
