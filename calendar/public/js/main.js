let objmonth = document.querySelector('.mon2');
let nmonth = document.querySelector('.mon3');
let objyear = document.querySelector('.year2');
let mainblock = document.querySelector('.mainblock');


let mainArr = [];
let str = '';
let tmonth = Number(objmonth.textContent);
let tyear = Number(objyear.textContent);
let tempMonth = tmonth - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12

let d = new Date(tyear, tempMonth); // получаем год и месяц из строки юрл
let temp = moment(d).format("MMM");
nmonth.innerHTML = `${temp}`; // выводим имя месяца в документ буквами
mdn = moment(d).format("e"); // первый день месяца(день недели 
daysInMonth = moment(d).daysInMonth(); // количество дней в месяце
for (let i = 1; i <= 7; i++ ) {
    mainArr.push(moment().date(`${i}`).format("ddd")); // заполняем первые 7 элементов 
}                                                      // именами дня недели
for (let i = 1; i < mdn; i++ ) {   // заполняем пустыми элементами начало недели
    mainArr.push("");
}
for (let i = 1; i <= daysInMonth; i++) { // заполняем количеством дней в месяце
    mainArr.push(i);
}
// mainArr.forEach(el, i => {
//     if(i) {
//         str += `${str}<div class = "str"></div>`;
//     }
//     if(el) {
//         str += `${str}<div class = "str">${el}</div>`;
//     }
// });
let lastDayMW = moment(d).date(`${daysInMonth}`).format("d");

if (lastDayMW != 0) {               // проверяем если последний день недели не вс
    for (let i = lastDayMW; i < 7; i++ ) {  // заполняем пустыми блоками до вс
        mainArr.push("");
    }
}

for (let i = 0; i < mainArr.length; i++ ) { // создаем стрингу
    str = str + `<div class="str">${mainArr[i]}</div>`;   
}
 mainblock.innerHTML = `${str}`; // пушим стрингу в элемент на страничку