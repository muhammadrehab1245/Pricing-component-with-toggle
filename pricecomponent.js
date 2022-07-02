let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');
let switchbutton1=document.querySelector('.sw-btn')
let switchbutton2=document.querySelector('.sw-btn2')

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

let color='green';

switchbutton1.addEventListener('click',function(){
    
        document.getElementById('category-h1').innerHTML="$19.99"
        document.getElementById('category-h2').innerHTML="$24.99"
        document.getElementById('category-h3').innerHTML="$39.99"

})

switchbutton2.addEventListener('click',function(){
    
    document.getElementById('category-h1').innerHTML="$199.99"
    document.getElementById('category-h2').innerHTML="$249.99"
    document.getElementById('category-h3').innerHTML="$399.99"

})