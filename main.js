var firebaseConfig = {
    apiKey: "AIzaSyAtF7yZFZ18xzl_mz3PFu4mQrhXrXNL4Gs",
    authDomain: "contact-form-df695.firebaseapp.com",
    databaseURL: "https://contact-form-df695.firebaseio.com",
    projectId: "contact-form-df695",
    storageBucket: "contact-form-df695.appspot.com",
    messagingSenderId: "765685836411",
    appId: "1:765685836411:web:bcec69b2794b8e09b990de",
    measurementId: "G-Y8ZWF3HZRQ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref('message');


document.getElementById('contactform'),addEventListener('submit',submitForm);

function submitForm(e){

    e.preventDefault();


     var first_name = getinput('uname');
     var last_name = getinput('lname');
     var telephone = getinput('telephone');
     var Email = getinput('email');
     var comments = getinput('comments');

    savemsg(first_name ,last_name , telephone, Email, comments);

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

function savemsg(first_name,last_name,telephone,Email, Message){
    var newdb = db.push();
    newdb.set({

        NAME: Name,
        telephone: telephone,
        EMAIL: Email,
        comments: comments   
    });
}
