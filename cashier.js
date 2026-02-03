var nasi_price = 2.00;
var roti_price = 1.50;
var drinks_price = 1.30;
var pizza_price = 15.00; 
var sushi_price = 12.50;
var sub = 0.0;

function init() {
  var customer = prompt("Please enter the customer's name");
  if (customer == null)
    customer = "valued guest";
  document.getElementById('username').innerHTML = "Welcome " + customer + " to<br/>" + "D'licious Food Stall";

  document.frmCashier.nasi_qty.focus();
  document.frmCashier.nasi_qty.select();
  document.frmCashier.nasi_price.value = nasi_price.toFixed(2);
  document.frmCashier.roti_price.value = roti_price.toFixed(2);
  document.frmCashier.drinks_price.value = drinks_price.toFixed(2);
  document.frmCashier.pizza_price.value = pizza_price.toFixed(2);
  document.frmCashier.sushi_price.value = sushi_price.toFixed(2);
  
  document.frmCashier.nasi_qty.value = "";
  document.frmCashier.roti_qty.value = "";
  document.frmCashier.drinks_qty.value = "";
  document.frmCashier.pizza_qty.value = "";
  document.frmCashier.sushi_qty.value = "";

  document.frmCashier.nasi_sub_total.value = sub.toFixed(2);
  document.frmCashier.roti_sub_total.value = sub.toFixed(2);
  document.frmCashier.drinks_sub_total.value = sub.toFixed(2);
  document.frmCashier.pizza_subTotal.value = sub.toFixed(2);
  document.frmCashier.sushi_subTotal.value = sub.toFixed(2);
  total();
}

function isAfloat(num) {
  var int_num;
  int_num = num - Math.floor(num);
  if (int_num != 0)
    return true;
  else
    return false;
}


function nasi_lemak() {
  var sub, qty;
  // get qty nasi lemak purchased
  qty = parseFloat(document.frmCashier.nasi_qty.value);
  // check user input whether it is a number
  if (isNaN(qty) || qty < 0 || isAfloat(qty)) {  // pop up an error message if user entered not a number
    alert("Error: Wrong user input");
    // clear the provious user input
    document.frmCashier.nasi_qty.value = "";
    document.frmCashier.nasi_qty.focus();
  } else {           // calculate the sub total for nasi lemak 
    sub = nasi_price * qty;
    document.frmCashier.nasi_sub_total.value = sub.toFixed(2);
    total();
    document.frmCashier.roti_qty.focus();
    document.frmCashier.roti_qty.select();
  }
}

function roti_canai() {
  var sub, qty;
  qty = parseFloat(document.frmCashier.roti_qty.value);
  if (isNaN(qty) || qty < 0 || isAfloat(qty)) {
    alert("Error: Wrong user input");
    // clear the provious user input
    document.frmCashier.roti_qty.value = "";
    document.frmCashier.roti_qty.focus();  
  } else {
    sub = roti_price * qty;
    document.frmCashier.roti_sub_total.value = sub.toFixed(2);
    total();
    document.frmCashier.drinks_qty.focus();
  }
}

function cold_drinks() {
  var sub, qty;
  qty = parseFloat(document.frmCashier.drinks_qty.value);
  if (isNaN(qty) || qty < 0 || isAfloat(qty)){
    alert("Error: Wrong user input");
    // clear the provious user input
    document.frmCashier.drinks_qty.value = "";
    document.frmCashier.drinks_qty.focus();      
  } else {
    sub = drinks_price * qty;
    document.frmCashier.drinks_sub_total.value = sub.toFixed(2);
    total();
    document.frmCashier.pizza_qty.focus();
  }
}

function pizza_item(){
  var qty = parseFloat(document.frmCashier.pizza_qty.value);
  if (isNaN(qty)|| qty < 0 || isAfloat(qty)){
    alert("Error: Wrong user innput");
    // clean the previous user input
    document.frmCashier.pizza_qty.value = "";
    document.frmCashier.pizza_qty.focus();
  }else{
    sub = pizza_price * qty;
    document.frmCashier.pizza_subTotal.value = sub.toFixed(2);
    total();
    document.frmCashier.sushi_qty.focus();
  }
}

function sushi_item(){
  var qty = parseFloat(document.frmCashier.sushi_qty.value);
  if (isNaN(qty)|| qty < 0 || isAfloat(qty)){
    alert("Error: Wrong user innput");
    // clean the previous user input
    document.frmCashier.sushi_qty.value = "";
    document.frmCashier.sushi_qty.focus();
  }else{
    sub = sushi_price * qty;
    document.frmCashier.sushi_subTotal.value = sub.toFixed(2);
    total();
    document.frmCashier.reset.focus();
  }
}

function total() {
  var sub_nasi, sub_roti, sub_drinks, sub_pizza, sub_sushi, grand_total;
  sub_nasi = parseFloat(document.frmCashier.nasi_sub_total.value);
  sub_roti = parseFloat(document.frmCashier.roti_sub_total.value);
  sub_drinks = parseFloat(document.frmCashier.drinks_sub_total.value);
  sub_pizza = parseFloat(document.frmCashier.pizza_subTotal.value);
  sub_sushi = parseFloat(document.frmCashier.sushi_subTotal.value); 
  grand_total = sub_nasi + sub_roti + sub_drinks + sub_pizza + sub_sushi; 
  document.frmCashier.g_total.value = "RM " + grand_total.toFixed(2);

}

