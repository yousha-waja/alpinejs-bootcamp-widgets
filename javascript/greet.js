function greet(name){
  if(name.length == '' )
  {return '<span class="caution">No entry was made. Please enter name.</span'} 
  else if (!isNaN(name)) {
    return '<span class="errorMessage">Invalid input. Name should not be a number.</span>';
  }
   else
   {return "Hello, "+name;}
 }