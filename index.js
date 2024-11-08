let calculation = document.querySelector('.calculation');
let result = document.querySelector('.result');
let button = document.querySelectorAll('.btn');

button.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const btnText = btn.innerText;

        if(btnText === 'Del'){
            calculation.innerText = calculation.innerText.slice(0,-1);
        }else if(btnText === 'Clear'){
            calculation.innerText = " ";
            result.innerText = " ";
        }else if(btnText === 'Result'){
            const resCal = eval(calculation.innerText); 
            result.innerText = resCal;
        }else{
            calculation.innerText += btnText; 
        }
    });
} );


