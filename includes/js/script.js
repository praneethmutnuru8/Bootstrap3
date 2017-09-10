/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(document).ready(function() {
    $("#contact-form").submit(function(e){
                 document.getElementById("ajax-response1").style.display = "none";
                 
                 var name= $("#inputEmail").val();
                 var email= $("#inputName").val();
                 var message= $("#inputMessage").val();
                 if (email == "" || name="" || email=" "){
                  document.getElementById("ajax-response2").style.display = "block";
                 }
                 else{
                  document.getElementById("ajax-response1").style.display = "block";
                  $("#inputEmail").val('');
                  $("#inputName").val('');
                  $("#inputMessage").val('');
                  
                 // $.ajax({
                  //     type: 'post',
                  //     url: 'process.php',
                  //    data: $('form').serialize(),
                  //      success: function () {
                  //       alert('form was submitted');
                  //            }
                  //       });


                }

               e.preventDefault();
});
}
function validateForm(){

 alert('Thank you for your response.');
}
