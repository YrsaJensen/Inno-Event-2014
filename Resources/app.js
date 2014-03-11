var win1 = Titanium.UI.createWindow({
	backgroundColor : 'white'
});

var username = Titanium.UI.createTextField({
	color : '#336699',
	top : 60,
	left : 10,
	width : 300,
	height : 40,
	hintText : 'Username',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win1.add(username);

var password = Titanium.UI.createTextField({
	color : '#336699',
	top : 110,
	left : 10,
	width : 300,
	height : 40,
	hintText : 'Password',
	passwordMask : true,
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win1.add(password);

var loginBtn = Titanium.UI.createButton({
	title : 'Login',
	top : 160,
	width : 90,
	height : 35,
	borderRadius : 1,
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 14
	}
});

var credentials = [{
	username : "nurse1",
	password : "password1"
}, {
	username : "nurse2",
	password : "password2"
}, {
	username : "nurse3",
	password : "password3"
}];

//credentials[++i] = [{}];
//alert(credentials.length);
//alert(credentials[0].username);
//var user = 'one';
//var pass = 'two';

loginBtn.addEventListener('click', function(e) {
	if (username.value != '' && password.value != '') {
		for (var i = 0; i < 3; i++) {
			if (username.value == credentials[i].username && password.value == credentials[i].password) {
				alert("Welcome " + credentials[i].username + ". Your password is: " + credentials[i].password);
				var win3 = Ti.UI.createWindow({
					url : "window.js",
					title : "newWindow"
				});

				Titanium.UI.currentWindow.open(win3, {
					animated : true
				});
			}
		}
	} else {
		alert("Username/Password are required");
	}
});

win1.add(loginBtn);
win1.open();
