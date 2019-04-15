window.chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});
window.chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});
function runApp() {
	console.log("asdas");
	window.chrome.app.window.create(
	'index.html',
	{'id': 'WebViewer', 'state': 'maximized'});
}
/*window.chrome.app.runtime.onLaunched.addListener(function() {
  window.chrome.app.window.create('index.html', { state: 'normal' });
});*/
