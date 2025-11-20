const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/Content-Dv0gVteR.js',
            'assets/index-DdFBsOwr.js',
            'assets/index-BO9A5s5s.css',
            'assets/Content-u7umtX99.css',
            'assets/Footer-Drtnneyw.js',
            'assets/Footer-D38HtTYe.css',
            'assets/Header-Br8j77Dz.js',
            'assets/Header-Cw9ccARf.css',
        ])
) => i.map((i) => d[i])
import { j as t, r as o, _ as r } from './index-DdFBsOwr.js'
const _ = o.lazy(() => r(() => import('./Content-Dv0gVteR.js'), __vite__mapDeps([0, 1, 2, 3]))),
    e = o.lazy(() => r(() => import('./Footer-Drtnneyw.js'), __vite__mapDeps([4, 1, 2, 5]))),
    s = o.lazy(() => r(() => import('./Header-Br8j77Dz.js'), __vite__mapDeps([6, 1, 2, 7])))
function a() {
    return t.jsxs('div', { id: 'app', children: [t.jsx(s, {}), t.jsx(_, {}), t.jsx(e, {})] })
}
export { a as default }
