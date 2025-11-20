import { r as c, j as a } from './index-DW_7zADx.js'
function n(s) {
    const [e, b] = c.useState(0)
    return a.jsxs('div', {
        className: 'tabs',
        children: [
            a.jsx('div', {
                className: 'tabs-bar',
                children: s.tabs.map((r, t) =>
                    a.jsx(
                        'div',
                        {
                            className: t === e ? 'tabs-bar-item tabs-bar-active' : 'tabs-bar-item',
                            onClick: () => b(t),
                            children: a.jsx('span', { className: 'tabs-bar-title', children: r.tabTitle }),
                        },
                        'tabs-bar-item-' + t
                    )
                ),
            }),
            a.jsx('div', { className: 'tabs-content', children: s.tabs.at(e)?.tabContent }),
        ],
    })
}
export { n as default }
