var tabTop =`<table> 
<thead>
    <tr> 
    <th>Name </th> <th> Product </th> <th> Quantity </th> <th> Sub Total </th> <th> Total </th>
    </tr>
    </thead>
    <tbody>`
    var tabCt = ``
    var tabBot = `</tbody></table>`


function getPrice(type){
  var price = 0;

  type = type.trim().toLowerCase();

  if (type == "laptop"){
    price = 1000;
  } else if (type == "tablet"){
    price = 600;
  } else{
    price = 400;
  }

  return price;
}

function calculateDiscount(subTotal, promoCode){
  if(promoCode == "SAVE20"){
    subTotal -= 20;
  }

  return subTotal;
}

function claculateFinalTotal(subTotal, taxes){

  return subTotal*(1+taxes/100);
}




function regTest(value, regEx){
  
  return regEx.test(value);
}

function processForm(){

  var subTotal = 0
  var total = 0;

  var errors=""
  var postPattern = /^[a-zA-Z]\d[a-zA-Z]\s\d[a-zA-Z]\d$/
  var phonePattern = /^\d{3}(\s|-)\d{3}(\s|-)\d{4}$/
  var fm = document.forms["custform"];
  var name = fm["cname"].value;
  var type = fm["prod"].value;
  var qty = fm["qty"].value;
  var promo = fm["promo"].value;
  var postal = fm["postal"].value;
  var phone = fm["phone"].value;


  if(name.length < 2){
    errors+=`<h3>Name should be atleast 2 Characters </h3>`
  }

  if(qty < 1){
    errors+=`<h3>Quantity should be atleast 1 </h3>`
  }

  if(!regTest(postal, postPattern)){
    errors+=`<h3>Postal Code is incorrect, the format should be A1B 3X4 </h3>`
  }

  if(!regTest(phone, phonePattern)){
    errors+=`<h3>Phone Number is incorrect, the format should be 123 456 7890 </h3>`
  }

  if(errors !=""){
    document.getElementById("right").innerHTML = errors;
  } else {
    document.getElementById("right").innerHTML = ""

    subTotal = getPrice(type) * qty;
    subTotal = calculateDiscount(subTotal, promo).toFixed(2);
    total = claculateFinalTotal(subTotal, 13).toFixed(2);

    tabCt = tabCt + `<tr> 
      <td> ${name} </td>
      <td> ${type} </td>
      <td> ${qty} </td>
      <td> ${subTotal} </td>
      <td> ${total} </td>
    </tr>`

    document.getElementById("right").innerHTML = tabTop + tabCt + tabBot;
  }


  return false;
}