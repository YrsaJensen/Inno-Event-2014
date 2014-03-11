var win1 = Titanium.UI.createWindow({
	backgroundColor: 'white'
});
 
var username = Titanium.UI.createTextField({
    color:'#336699',
    top:60,
    left:10,
    width:300,
    height:40,
    hintText:'Username',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win1.add(username);
 
var password = Titanium.UI.createTextField({
    color:'#336699',
    top:110,
    left:10,
    width:300,
    height:40,
    hintText:'Password',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win1.add(password);
 
var loginBtn = Titanium.UI.createButton({
    title:'Login',
    top:160,
    width:90,
    height:35,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});


var user = 'one';
var pass = 'two';

loginBtn.addEventListener('click',function(e)
{
    if (username.value != '' && password.value != '')
    {
        if (username.value == user && password.value == pass)
        	alert("Welcome " + user + ". Your password is: " + pass);
    }
    else
    {
        alert("Username/Password are required");
    }
});

win1.add(loginBtn);
win1.open();
