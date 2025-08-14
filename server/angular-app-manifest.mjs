
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TETRAAC/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 672, hash: '1887cffd326b71007bf9bd702ce1778e4223da1e0d4e15f4a6f504f7cd0aa638', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '7c2a6adf9270084f17515e2c76b2a8a900b3cbabe243f7f801db062ffbfa1cf9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MP2EYHU3.css': {size: 641, hash: '8iAdKU9TroM', text: () => import('./assets-chunks/styles-MP2EYHU3_css.mjs').then(m => m.default)}
  },
};
