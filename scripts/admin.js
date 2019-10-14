

$(document).ready(function(){
var rootRef=firebase.database().ref.child("messages");
rootRef.on("child_added",snap =>{
    var name=snap.child("name").val();
    var message=snap.child("message").val();
    $("#table-places-tbody").append("<tr><td>"+  name +"</td><td>"+   message  +"</td></tr>");
});



});
