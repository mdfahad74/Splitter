let arrBill = [];
let arrTip = [];
let arrPeople = [];
let a="blur";

function change(){
  a="keyup";
}

// INPUT

let bill = Number($('#bill').on('change', function() {
  bill = Number($(this).val());
  arrBill.push(bill);
}));

let tip = Number($('.tip').on(a, function() {
  tip = Number($(this).val());
  arrTip.push(tip);
}));

let people = Number($('#people').on('change', function() {
  people = Number($(this).val());
  arrPeople.push(people);
}));

// CALCULATE

let tipAmount1 = 1;
let totalAmount1 = 1;

$("#calculate").on("click", function(){
  ab();
  b();
  $('#tip-main').text(tipAmount1);
  $('#total-main').text(totalAmount1);
});

function ab() {
  if(a=="change"){
    tipAmount1 = Number(((arrBill[0] * arrTip[1]) / 100) / arrPeople[0]);
  }else{
  tipAmount1 = Number(((arrBill[0] * arrTip[0]) / 100) / arrPeople[0]);
  }
}

function b() {
  if(a=="change"){
    totalAmount1 = Number(((arrBill[0] / arrPeople[0]) + Number(((arrBill[0] * arrTip[1]) / 100) / arrPeople[0])));
  }else{
  totalAmount1 = Number(((arrBill[0] / arrPeople[0]) + Number(((arrBill[0] * arrTip[0]) / 100) / arrPeople[0])));
  }
}

// RESET

$('#reset').on('click', function() {
  bill = 0;
  $('#bill').val("");
  tip = 0;
  $('.custom-tip').val("");
  people = 0;
  $('#people').val("");
  arrBill = [];
  arrTip = [];
  arrPeople = [];
  a = "";
  $('#tip-main').text("0.00");
  $('#total-main').text("0.00");
});
