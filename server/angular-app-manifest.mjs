
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1276, hash: 'd58b5e29662a9bffab49b172ccaa69fa3e1ff3c2a8143e9122858858a8b4fbbe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'a02940407a9236eeecc2c721eb0d1f3882649f10078d669520f45d9a9b299056', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-563RFOBF.css': {size: 660, hash: 'nGC3+ZUmMCw', text: () => import('./assets-chunks/styles-563RFOBF_css.mjs').then(m => m.default)}
  },
};
