let income=0;
let expense=0;
function tabular(amount, type, description) {
   var tab = document.getElementById("table");
   var row = tab.insertRow();  

   row.insertCell(0).innerHTML = type === "income" ? "+" : "-";
   row.insertCell(1).innerHTML = amount;
   row.insertCell(2).innerHTML = description;
   row.insertCell(3).innerHTML = '<button class="del">🗑️</button>';
   row.querySelector(".del").addEventListener('click',function(){delet(row,amount,type)});
}
function delet(row,amount,type){
if(type==="income")income-=amount;
else expense-=amount;
document.getElementById("inc").innerHTML = income;
   document.getElementById("exp").innerHTML = expense;
   document.getElementById("bal").innerHTML = income-expense;
row.remove();
}
function alt(amount,type){
   if(type==="income")income+=amount;
   else expense+=amount;
   document.getElementById("inc").innerHTML = income;
   document.getElementById("exp").innerHTML = expense;
   document.getElementById("bal").innerHTML = income-expense;
}
function fun(){
   event.preventDefault();
   const amount=parseFloat(document.getElementById("amt").value);
   const type =document.getElementById("opt").value;
   const description =document.getElementById("des").value;
   if(amount<=0||isNaN(amount)||description===""){
       alert("Please check your input feilds 🚨");
       return;
   }
   alt(amount,type);
   tabular(amount,type,description);
   document.getElementById("amt").value = "";
   document.getElementById("des").value = "";
}
document.getElementById("add").addEventListener('click',fun);












// let income = 0;
// let expense = 0;

// function tabular(amount, type, description) {
//     var tab = document.getElementById("table");
//     var row = tab.insertRow();

//     row.insertCell(0).innerHTML = type === "income" ? "+" : "-";
//     row.insertCell(1).innerHTML = amount;
//     row.insertCell(2).innerHTML = description;
//     row.insertCell(3).innerHTML = '<button class="delete-btn">🗑️</button>';

    
//     row.querySelector('.delete-btn').addEventListener('click', function () {deleteRow(row, amount, type);});
// }

// function alt(amount, type) {
//     if (type === "income") {
//         income += amount;
//     } else {
//         expense += amount;
//     }
//     document.getElementById("inc").innerHTML = income;
//     document.getElementById("exp").innerHTML = expense;
//     document.getElementById("bal").innerHTML = income - expense;
// }

// function deleteRow(row, amount, type) {
//     if (type === "income") {
//         income -= amount;
//     } else {
//         expense -= amount;
//     }
//     document.getElementById("inc").innerHTML = income;
//     document.getElementById("exp").innerHTML = expense;
//     document.getElementById("bal").innerHTML = income - expense;

//     row.remove();
// }

// function fun(event) {
//     event.preventDefault();
//     const amount = parseFloat(document.getElementById("amt").value);
//     const type = document.getElementById("opt").value;
//     const description = document.getElementById("des").value;

//     if (amount <= 0 || isNaN(amount) || description === "") {
//         alert("Please check your input fields 🚨");
//         return;
//     }

//     alt(amount, type);
//     tabular(amount, type, description);

//     // Clear input fields
//     document.getElementById("amt").value = "";
//     document.getElementById("des").value = "";
// }

// document.getElementById("add").addEventListener('click', fun);
