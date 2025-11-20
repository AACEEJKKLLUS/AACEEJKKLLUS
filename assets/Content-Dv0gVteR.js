const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/Tabs-_zuimbHQ.js',
            'assets/index-DdFBsOwr.js',
            'assets/index-BO9A5s5s.css',
            'assets/Tabs-DigREulQ.css',
            'assets/Match-BXDP_x7K.js',
            'assets/Match-C_cMdWU4.css',
            'assets/YouSearch-Bak2l5wl.js',
            'assets/YouSearch-C4INm2b_.css',
        ])
) => i.map((i) => d[i])
import { j as t, r as o, _ as e } from './index-DdFBsOwr.js'
const a = o.lazy(() => e(() => import('./Tabs-_zuimbHQ.js'), __vite__mapDeps([0, 1, 2, 3]))),
    s = o.lazy(() => e(() => import('./Match-BXDP_x7K.js'), __vite__mapDeps([4, 1, 2, 5]))),
    r = o.lazy(() => e(() => import('./YouSearch-Bak2l5wl.js'), __vite__mapDeps([6, 1, 2, 7])))
function n() {
    return t.jsx('div', {
        id: 'content',
        children: t.jsx(a, {
            tabs: [
                { tabTitle: 'Sie suchen', tabContent: t.jsx(r, {}) },
                { tabTitle: 'Passt?', tabContent: t.jsx(s, {}) },
            ],
        }),
    })
}
export { n as default }
