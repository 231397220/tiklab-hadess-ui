import * as lodashEs from 'lodash-es';

const lodashCompat = {
    ...lodashEs,
};

Object.defineProperty(lodashCompat, 'default', {
    enumerable: false,
    value: lodashCompat,
});

Object.defineProperty(lodashCompat, '__esModule', {
    enumerable: false,
    value: true,
});

export default lodashCompat;
export * from 'lodash-es';
