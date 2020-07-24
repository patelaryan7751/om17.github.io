var firebaseConfig = {
    apiKey: "AIzaSyDHLRZWpZaRoG0IZeqa-9S2ZREjgOlQKdg",
    authDomain: "contactform-41be0.firebaseapp.com",
    databaseURL: "https://contactform-41be0.firebaseio.com",
    projectId: "contactform-41be0",
    storageBucket: "contactform-41be0.appspot.com",
    messagingSenderId: "798127909563",
    appId: "1:798127909563:web:9661ffbc2526bb38fd979e",
    measurementId: "G-P21C4L8KV0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref('message');


document.getElementById('contactform'),addEventListener('submit',submitForm);

function submitForm(e){

    e.preventDefault();


     var Name = getinput('uname');
     var Phone = getinput('phone');
     var Gender = getinputg('gender');
     var Email = getinput('email');
     var Message = getinput('message');

    savemsg(Name, Phone, Gender, Email, Message);

    document.querySelector('.confirm').style.display = 'block';

    setTimeout(function(){

        document.querySelector('.confirm').style.display = 'none';
    },3500);

    document.getElementById('contactform').reset();
}

function getinput(id){
    return document.getElementById(id).value;
}

function getinputg(id){
    var g;
    if(gender[0].checked)
    {
        g = gender[0].value;
        return g;
    }
    else if(gender[1].checked)
    {
        g = gender[1].value;
        return g;
    }
    else if(gender[2].checked)
    {
        g = gender[2].value;
        return g;
    }
}

function savemsg(Name ,Phone, Gender ,Email, Message){
    var newdb = db.push();
    newdb.set({

        NAME: Name,
        PHONE: Phone,
        GENDER: Gender,
        EMAIL: Email,
        MESSAGE: Message   
    });
}
