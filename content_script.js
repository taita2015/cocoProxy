// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);                    // Append <button> to <body>
// document.write('');

// var cssId = "coco_css";
// if (!document.getElementById(cssId)) {
// 	var head = document.getElementsByTagName('head')[0];
// 	var link = document.createElement('link');
// 	var url = chrome.extension.getURL("css/content_css.css");
// 	link.id = cssId;
// 	link.rel = 'stylesheet';
// 	link.type = 'text/css';
// 	link.href = url;
// 	link.media = 'all';
// 	head.appendChild(link);
// }

// var divId = "coco_div";
// if (!document.getElementById(divId)) {
// 	var html = document.getElementsByTagName('html')[0];
// 	var div = document.createElement('div');
// 	div.id = divId;
// 	html.appendChild(div);
// }

// document.write("hello world");
// chrome.runtime.sendMessage({fn:"stopTab"},function(){
// 	console.log("function call success...");
// });


console.log("Chrome cocoProxy Javascript injection start.");

var cssId = "coco_css";
if (!document.getElementById(cssId)) {
	var head = document.getElementsByTagName('html')[0];
	var link = document.createElement('link');
	var url = chrome.extension.getURL("css/content_css.css");
	link.id = cssId;
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = url;
	link.media = 'all';
	head.appendChild(link);
}

var divId = "coco_div";
if (!document.getElementById(divId)) {
	var html = document.getElementsByTagName('html')[0];
	var div = document.createElement('div');
	div.id = divId;
	html.appendChild(div);
	divId = div;
}

var round = document.createElement('div');
round.id = "coco_round";
divId.appendChild("round");
