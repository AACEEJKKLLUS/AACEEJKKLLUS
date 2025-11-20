import { r as c, j as l } from './index-DdFBsOwr.js'
function d(e) {
    const a = c.useRef(void 0)
    return (
        c.useEffect(() => {
            var o, s
            e.openModal ? (o = a.current) == null || o.showModal() : (s = a.current) == null || s.close()
        }, [e.openModal]),
        l.jsx('dialog', {
            className: 'modal',
            ref: a,
            onCancel: e.closeModal,
            children: l.jsxs('div', {
                className: 'modal-container',
                children: [
                    l.jsx('div', { className: 'modal-content', children: e.children }),
                    l.jsx('span', { className: 'modal-button-close', onClick: e.closeModal, children: '✘' }),
                ],
            }),
        })
    )
}
export { d as default }
