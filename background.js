browser.pageAction.onClicked.addListener(handleClick)

function handleClick(tab, data) {
    if (data.button == 0) {
        browser.tabs.sendMessage(tab.id, { clicked: true }).then(console.debug).catch(console.error)
    }
}
