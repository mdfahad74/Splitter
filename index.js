var arrBill = [];
var arrTip = [];
var arrPeople = [];
var a="click";
// INPUT
function change(){
  a="change";
}
var bill = Number($('#bill').on('change', function() {
  bill = Number($(this).val());
  arrBill.push(bill);
}));

var tip = Number($('.tip').on(a, function() {
  tip = Number($(this).val());
  arrTip.push(tip);
}));

var people = Number($('#people').on('change', function() {
  people = Number($(this).val());
  arrPeople.push(people);
}));

// CALCULATE

var tipAmount = $('#tip-main').on('click', function() {
  if(a=="change"){
    tipAmount = Number(((arrBill[0] * arrTip[1]) / 100) / arrPeople[0]);
    $(this).text(tipAmount);
  }else{
  tipAmount = Number(((arrBill[0] * arrTip[0]) / 100) / arrPeople[0]);
  $(this).text(tipAmount);
}
})

var totalAmount = $('#total-main').on('click', function() {
  if(a=="change"){
    totalAmount = Number(((arrBill[0] / arrPeople[0]) + Number(((arrBill[0] * arrTip[1]) / 100) / arrPeople[0])));
    $(this).text(totalAmount);
  }else{
  totalAmount = Number(((arrBill[0] / arrPeople[0]) + Number(((arrBill[0] * arrTip[0]) / 100) / arrPeople[0])));
  $(this).text(totalAmount);
}
})

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
