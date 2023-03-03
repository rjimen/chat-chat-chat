
const firebaseConfig = {
      apiKey: "AIzaSyBtm-kDXmoDOf0ai9zikA0C8IG1UqYsbxA",
      authDomain: "base-de-datos-kwitter-fc7bd.firebaseapp.com",
      databaseURL: "https://base-de-datos-kwitter-fc7bd-default-rtdb.firebaseio.com",
      projectId: "base-de-datos-kwitter-fc7bd",
      storageBucket: "base-de-datos-kwitter-fc7bd.appspot.com",
      messagingSenderId: "929388580504",
      appId: "1:929388580504:web:505369ee2a16b953b0caed"
    };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'"+Room_names+"</div>"
document.getElementById("output").innerHTML+=row; 
      //Final del código
      });});}
getData();
function addRoom(){
      room_name = document.getElementById ("room_name").value;
      firebase.database ().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}