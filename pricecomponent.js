let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');
let switchbutton=document.querySelector('.sw')
let basic_p=document.getElementById('category-h1')
let professional_p=document.getElementById('category-h2')
let master_p=document.getElementById('category-h3')

btn2.addEventListener('mousedown',()=>{
    btn2.style.backgroundColor='#919fff';
    btn2.style.color='white';
    btn1.style.backgroundColor  = 'white';
    btn1.style.color  = '#919fff';
    btn3.style.backgroundColor  = 'white';
    btn3.style.color  = '#919fff';

})

btn2.addEventListener('mouseup',()=>{
    btn2.style.backgroundColor='white';
    btn2.style.color='#919fff';
    btn1.style.backgroundColor  = '#919fff';
    btn1.style.color  = 'white';
    btn3.style.backgroundColor  = '#919fff';
    btn3.style.color  = 'white';
})

switchbutton.addEventListener('click',()=>{
    if (basic_p.innerText==='$19.99' && professional_p.innerText==='$24.99'  && master_p.innerText==='$39.99' ) {
        basic_p.innerHTML=`$199.99`;
        professional_p.innerHTML=`$249.99`;
        master_p.innerHTML=`$399.99`;
    }

    else{
        basic_p.innerHTML=`$19.99`;
        professional_p.innerHTML=`$24.99`;
        master_p.innerHTML=`$39.99`;
    }
  
})