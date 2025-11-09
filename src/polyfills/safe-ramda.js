import * as rambda from 'rambda';

const ramdaCompat = {
    ...rambda,
};

Object.defineProperty(ramdaCompat, 'default', {
    enumerable: false,
    value: ramdaCompat,
});

Object.defineProperty(ramdaCompat, '__esModule', {
    enumerable: false,
    value: true,
});

export default ramdaCompat;
export * from 'rambda';
