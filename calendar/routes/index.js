var express = require('express');
var router = express.Router();
const moment = require('moment');

/* GET home page. */
router.get('/:year/:month', function(req, res, next) {
  // let year;
  // let month;
  // // console.log(req.query);
  // console.log(req.params);
  let datapage = req.params;
  // year = datapage.var1;
  // month = datapage.var2;
  console.log(datapage);
  
  // // console.log('>>>>>> GET >>>>>> !!!');
  // // console.log('>>>>>> YEAR >>>>>>: ', datapage.var1);
  // // console.log('>>>>>> MONTH >>>>>>: ', datapage.var2);
  // // console.log(typeof(datapage),datapage);
  // // console.log(year,month);
  
  // let tempMonth = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12

    
  //   let d = new Date(year, tempMonth); // получаем год и месяц из строки юрл
    
  //   console.log(next);
  //   monthindex = moment(d).format("MMM");
  //   datapage.monthindex = monthindex;
  //   console.log(`!!!!!!!!!!${d}!!!!!!!!!!!!!!`);
  //   daysInMonth = moment(d).daysInMonth();
  //   console.log(`!!!!!!!!!!${daysInMonth}!!!!!!!!!!!!!!`);
  //   md = moment(d).format("[Today is] dddd");
  //   mdn = moment(d).format("e");
  //   console.log(md,'день недели по номеру' ,mdn);
  //   let table = `<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;
  //   for (let i = 1; i < mdn; i++) {
  //     table += '<td></td>';
  //   }
  //   // <td> ячейки календаря с датами
  //   for (let i = 1; i <= daysInMonth; i++) {
  //     table += `<td>  ${i}  </td>`;
  //     // console.log(moment(d).day(i).format("e"));
  //     console.log(moment(d).year(year).month(month).date(i).format("d"));
  //     // if (moment(d).day(i))
  //     if (moment(d).date(i).format("d") == 0) { // вс, последний день - перевод строки
  //       table += `</tr><tr>`;
  //     }
  //   }
  //   table += '</tr></table>';
  //   datapage.table = table;
  //   console.log(datapage);


  //   quantityDaysInMonth = moment(d).format("DD");
  //   console.log('quantityDaysInMonth',quantityDaysInMonth);
 
  res.render('index', datapage);
});



module.exports = router;
