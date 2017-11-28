# rollup-plugin-strip-prop-types

Remove `propTypes` and `defaultProps` statements from ReactJs components, also removes the imported package. It expect you are using `prop-types` package.


## Installation

```bash
npm install --save-dev rollup-plugin-strip-prop-types
```


## Usage

```js
// rollup.config.js
import stripPropTypes from 'rollup-plugin-strip-prop-types';

export default {
  entry: 'src/index.js',
  dest: 'dist/my-lib.js',
  plugins: [
    stripPropTypes({
      // set this to `false` if you're not using sourcemaps –
      // defaults to `true`
      sourceMap: true
    })
  ]
};
```


## License

MIT
