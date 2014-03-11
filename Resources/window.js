var win2 = Ti.UI.createWindow({
	backgroundColor: 'black'
});

/*var button = Ti.UI.createButton();

button.addEventListener('click',function(e){
    var window = Ti.UI.createWindow({
            url:"window.js",
            title:"newWindow"
    });

    Titanium.UI.currentWindow.open(window,{animated:true});
});

win2.add(button);
*/

var title = Ti.UI.createLabel({
	text: 'Hello'
});

win2.open();
