browser.runtime.onMessage.addListener((request) => {
    if ('clicked' in request) {
        injectScript()
    }
})

function injectScript() {
    window.eval(
        'console.warn("mark all as read"); SESSION.buffers.each(function (b) { b.setLastSeen(b.messages.last()) })'
    )
}
