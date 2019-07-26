// OnInstall handler
chrome.runtime.onInstalled.addListener(details => {
  console.log("onInstalled...")
  console.log(details)
})

chrome.app.runtime.onLaunched.addListener(function() {
  console.log("onLaunched...")

})
