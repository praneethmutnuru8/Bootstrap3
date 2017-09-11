
function validateForm(){

 alert('Thank you for your response.');
}

function userid_validation(inputName)  
{  
  var inputName_len = inputName.value.length;  
 if (inputName_len == 0 || inputName_len >= 6 || inputName_len < 12)  
  {  
	alert("User Id should not be empty / length be between "+6+" to "+12);  
	uid.focus();  
	return false;  
   }  
  return true;  
} 