import { r as i, j as a } from './index-DdFBsOwr.js'
function l(s) {
    var b
    const [e, r] = i.useState(0)
    return a.jsxs('div', {
        className: 'tabs',
        children: [
            a.jsx('div', {
                className: 'tabs-bar',
                children: s.tabs.map((c, t) =>
                    a.jsx(
                        'div',
                        {
                            className: t === e ? 'tabs-bar-item tabs-bar-active' : 'tabs-bar-item',
                            onClick: () => r(t),
                            children: a.jsx('span', { className: 'tabs-bar-title', children: c.tabTitle }),
                        },
                        'tabs-bar-item-' + t
                    )
                ),
            }),
            a.jsx('div', { className: 'tabs-content', children: (b = s.tabs.at(e)) == null ? void 0 : b.tabContent }),
        ],
    })
}
export { l as default }
