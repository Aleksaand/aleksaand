"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('.namebox__cell');
    const surname = document.querySelector('.surname__cell');
    const email = document.querySelector('.emailbox__cell');
    const form = document.querySelector('.form__body');
    const modal__link = document.querySelectorAll('.modal__link');
    const modal__body = document.querySelector('.modal__windows');
    const close__but = document.querySelectorAll('.close__but');
    const all__popaps = document.querySelectorAll('.popap');
    const main = document.querySelector('.main');

    form.addEventListener('submit', formSend); 
    function formSend(e) {
        e.preventDefault();
        let arr=[];
        let formReq = document.querySelectorAll('._req');
        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            if (input.classList.contains('surname__input') && input.value === '' || input.value.length < 3) {
                arr.push(i);
            } else if (input.classList.contains('firstname__input') && input.value === '' || input.value.length < 3) {
                arr.push(i);
            } else if (input.classList.contains('email__input')) {
                if(!emailTest(input)) {
                    arr.push(i);
                }
            }

        }
        name.classList.remove('__error');
        surname.classList.remove('__error');
        email.classList.remove('__error');

        for(let j=0; j < arr.length; j++) {
            switch (arr[j]) {
                case 0:
                    name.classList.add('__error');
                  break;
                case 1:
                    surname.classList.add('__error');
                  break;
                case 2:
                    email.classList.add('__error');
                  break;
              }
        }

        function emailTest(input) {
            let res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return res.test(input.value);
        }
    }

    modal__link.forEach(el => {
        el.addEventListener('click', (e) => {  
            let link = e.currentTarget.getAttribute('data-path');  
            console.log(all__popaps);         
            all__popaps.forEach(el => {  
                el.classList.remove('show__popap');
            });
            main.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
            document.querySelector(`[data-target="${link}"]`).classList.add('show__popap');
            modal__body.classList.add('show__modal__windows');
   
            

        });
    });

    close__but.forEach(el => {
        el.addEventListener('click', (e) => {  
            document.body.style.overflow = '';
            main.classList.remove('modal-open');
            e.target.classList.remove('show__popap');        
            all__popaps.forEach(el => {               
                el.classList.remove('show__popap');
            });
            modal__body.classList.remove('show__modal__windows');

        });
    });        
 
});