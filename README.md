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

| Props    | Type    | Description                                             |
|----------|---------|---------------------------------------------------------|
| source   | string  | String containing the markdown that needs to be parsed. |
| html     | bool    | Enable HTML tags in the source.                         |


## Demo & Examples

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

MIT License

Copyright (c) 2017 Aaron Wong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
