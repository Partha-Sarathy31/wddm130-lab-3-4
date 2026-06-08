function regTest(value, regEx){

  return regEx.test(vlaue);
}

function processForm() {

  var errors = ""
  var postPattern = /^[a-zA-Z]\d[a-zA-Z]\s\d[a-zA-Z]\d$/;
  var phonePattern = /^\d{3}(\s|-)\d{3}(\s|-)\d{4}$/;
  var fm = document.forms["custform"];
  var name = fm["cname"].value;
  var type = fm["prod"].value;
  var qty = fm["qty"].value;
  var promo = fm["promo"].value;
  var postal = fm["pstl"].value;
  var phone = fm["phone"].value;


  if(name.length < 2){
    errors+=
    '<h3>Name should be atleast 2 Characters </h3>'
  }

  if(qty < 1){
    errors+=
    '<h3>Quantity should be atleast 1 </h3>'
  }

  if(!regTest(postal, postPattern)){
    errors+= 
    '<h3>Postal Code is incorrect, the format should be A1B 3X4 </h3>'
  }

  if(!regTest(phone, phonePattern)){
    errors+= 
    '<h3>Phone Number is incorrect, the format should be 123 456 7890 </h3>'
  }

  if(errors !=""){
    errors+=
    document.getElementById("right").innerHTML = errors;
  }





  return false;
}