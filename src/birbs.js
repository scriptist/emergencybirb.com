const context = require.context(
  '../public/birbs',
  true,
  /^.+\.(jpg)|(gif)|(mp4)$/,
);

const keys = context.keys().map(s => s.replace(/^\.\//, '/birbs/'));
export default keys;
