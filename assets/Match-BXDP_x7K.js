const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/Card-ughDP3uv.js',
            'assets/index-DdFBsOwr.js',
            'assets/index-BO9A5s5s.css',
            'assets/Card-DOyrODGk.css',
            'assets/Notification-DOoSjxvK.js',
            'assets/Notification-CL9gkfEi.css',
            'assets/MatchLinks-mGRw0o7q.js',
            'assets/MatchLinks-BlZ3Ddsn.css',
        ])
) => i.map((i) => d[i])
import { j as e, r as n, _ as r } from './index-DdFBsOwr.js'
const i = n.lazy(() => r(() => import('./Card-ughDP3uv.js'), __vite__mapDeps([0, 1, 2, 3]))),
    t = n.lazy(() => r(() => import('./Notification-DOoSjxvK.js'), __vite__mapDeps([4, 1, 2, 5]))),
    a = n.lazy(() => r(() => import('./MatchLinks-mGRw0o7q.js'), __vite__mapDeps([6, 1, 2, 7])))
function s() {
    return e.jsxs('div', {
        className: 'match',
        children: [
            e.jsx(t, {
                children: 'Kontaktieren Sie mich gerne. Ich freue mich darauf, ab Dezember 2025 neue Vollzeitaufträge anzunehmen.',
            }),
            e.jsx(i, {
                header: e.jsx('span', { children: 'Kontaktaufnahme' }),
                footer: e.jsx(a, {}),
                isExpanded: innerWidth >= 512,
                children:
                    'Sie können mich gerne über die nachfolgend verlinkten Plattformen sowie über die im Impressum angegebenen Adressen erreichen. Sollten Sie mich telefonisch kontaktieren, bitte ich um Ihr Verständnis, falls ich aufgrund von Terminen oder außerhalb der üblichen Arbeitszeiten nicht sofort verfügbar bin.',
            }),
        ],
    })
}
export { s as default }
