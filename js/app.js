$(document).ready(function(){
$('.slider-1').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots-1',
    dotsClass :'dots'
});


$('.slider-2').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots-2',
    dotsClass :'dots'
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobilenav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
    mobilenav.classList.add('open');
    hamberger.classList.add('close');
});

times.addEventListener('click',function(){
    mobilenav.classList.remove('open');
    hamberger.classList.remove('close');
});

document.getElementById('DownloadBtn').addEventListener('click',function(){
    console.log(" i m coming on click");
    const link = document.createElement('a');
    link.href = './assests/Jaykumar_Gupta.pdf'; // your actual file path
    link.download = 'Jaykumar_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})


});