
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TETRAAC/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 672, hash: '50d862c0f3a63f881d103b83a234bee55ce4d1aba62d2d9cd537557f562621ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '63f81f7bc5506de16e23992a4c0b5a2d5f0bc4f0cc9e6bae5062b64b05d53464', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MP2EYHU3.css': {size: 641, hash: '8iAdKU9TroM', text: () => import('./assets-chunks/styles-MP2EYHU3_css.mjs').then(m => m.default)}
  },
};
