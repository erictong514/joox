/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76417364-1', 'auto');
ga('send', 'pageview');


console.log("Loaded app.js");
*/


var wv = document.querySelector('webview');
console.log(wv);
var readlyListener = 0;
console.log("readlyListener1: "+readlyListener);

wv.addEventListener('loadstop', function() {
	/*$wv.insertCSS({
		code: 'body { background: red !important; }',
		runAt: 'document_start'
	});*/
	console.log("addEventListener");
	if(readlyListener === 0){
		window.chrome.commands.onCommand.addListener(function(command) {
			console.log("Combination KEY: "+command);
			if(command == "control_play_pause"){
				console.log("Click #playBtn");
				wv.executeScript({
					code: "document.getElementById('playBtn').click()",
					runAt: 'document_start'
				});
				console.log("Click Play/Pause");
			}
			if(command == "control_previous"){
				wv.executeScript({
					code: "document.getElementById('previousBtn').click()",
					runAt: 'document_start'
				});
				console.log("Click Previous");
			}
			if(command == "control_next"){
				wv.executeScript({
					code: "document.getElementById('nextBtn').click()",
					runAt: 'document_start'
				});
				console.log("Click Next");
			}
		});
		readlyListener = 1;
		console.log("readlyListener2: "+readlyListener);
	}
	console.log("loadstop");
});


$(function(){
	console.log('document ready');
	/*setTimeout(function(){
		$(".tips").fadeOut(1500);
	},5000);*/

	$(".tips .btn-close").mousedown(function(){
		$(this).parent().fadeOut(500);
	});
	//$("#text").text("2222");
	//console.log("text");

	//$("webview").attr("src","http://www.joox.com/hk/zh/");
	return;
	/*$("form").submit(function(){
		saveURL();

		return false;
	});
	chrome.storage.sync.get("myValue", function(val) {

		if(val.myValue){
			$("#myValue").val(val.myValue);
			$("webview").attr("src",val.myValue);
			$("#firstUse").hide();
		}else{
			$("#myValue").val("http://www.xxx.com/note");
			$("webview").attr("src","https://www.synology.com/en-us/dsm/mobile");
			$("#firstUse").show();
		}

	});*/
});

function saveURL(){
	//console.log("saveURL");
	//console.log($("#myValue").val());
	chrome.storage.sync.set({"myValue": $("#myValue").val()}, function() {
	//console.log("setting myValue to "+$("#myValue").val());
		if($("#myValue").val()){
			$("webview").attr("src",$("#myValue").val());
			$("#firstUse").hide();
		}else{
			$("#myValue").val("http://www.xxx.com/note");
			$("webview").attr("src","https://www.synology.com/en-us/dsm/mobile");
			$("#firstUse").show();
		}

	});
	/*chrome.storage.sync.set({"myValue": $("#url").val()}, function() {
      console.log("setting myValue to "+newValue);
    });*/
}