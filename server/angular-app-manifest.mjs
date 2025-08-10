
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TETRAAC/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 672, hash: '75526bd835a67c6d008dd923e0849f5189577f5e2be8f0ef55486f626db0c4fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'eb22dfa001c1f12b0cac84392a941b885a6300751f32c969c8bee7934acf773d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MP2EYHU3.css': {size: 641, hash: '8iAdKU9TroM', text: () => import('./assets-chunks/styles-MP2EYHU3_css.mjs').then(m => m.default)}
  },
};
