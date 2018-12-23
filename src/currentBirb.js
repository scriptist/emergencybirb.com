import birbs from './birbs.js';

const MS_PER_HOUR = 1000 * 60 * 60;
const hour = Math.floor(Date.now() / MS_PER_HOUR);

export default birbs[hour % birbs.length];
