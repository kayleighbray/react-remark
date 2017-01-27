# react-remark

React Remark is a light weight React component for embedding markdown into
react components using [Remarkable](https://github.com/jonschlinkert/remarkable).


## Installation

The easiest way to use react-remark is to install it from NPM and include it in your own React build process.

```
npm install react-remark --save
```

You can also use the standalone build by including `dist/react-remark.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.


## Usage

Import and use react remark like so:

```
import React from 'react';
import ReactRemark from 'react-remark';

class App extends React.Component {
  render() {
    return <ReactRemark source={'# This is markdown!'}>;
  }
}
```

### Properties

| Props     | Type    | Description                                             |
|-----------|---------|---------------------------------------------------------|
| source    | string  | String containing the markdown that needs to be parsed. |
| html      | bool    | Enable HTML tags in the source.                         |
| className | string  | CSS class name.                                         |


## Demo & Examples

Check out the live demo for [react-remark](http://www.aaronccwong.com/react-remark/).

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## Contributing

Fork this repo, add your proposed features and make a pull request. I will
review as soon as possible.

## License

This project is licensed under the terms of the MIT license. Check [LICENSE.txt](https://github.com/AaronCCWong/react-remark/blob/master/LICENSE.txt)
for more information.
