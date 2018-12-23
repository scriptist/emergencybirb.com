const context = require.context('../public/birbs', true, /^.+\.(jpg)|(gif)$/);

const keys = context.keys().map(s => s.replace(/^\.\//, '/birbs/'));
export default keys;
