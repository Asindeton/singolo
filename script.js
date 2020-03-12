let counter = -1;
let isFirst = true;

document.addEventListener('click', function(){
    if(document.querySelector('.nav-bar__text:hover')){
        document.querySelectorAll('.nav-bar__text').forEach((e) => e.classList.remove('active__header'))
        document.querySelector('.nav-bar__text:hover').classList.toggle('active__header')
    } else if(document.querySelector('.portfolio-filter-item:hover')) {
        document.querySelector('.portfolio-filter-item:hover').classList.length !== 2 ? mixImg(): false;
        document.querySelectorAll('.portfolio-filter-item').forEach((e) => e.classList.remove('portfolio-filter-active'))
        document.querySelector('.portfolio-filter-item:hover').classList.toggle('portfolio-filter-active')
    } else if(document.querySelector('.portfolio-image:hover')){
        document.querySelectorAll('.portfolio-image').forEach((e) => e.classList.remove('portfolio-images_active'))
        document.querySelector('.portfolio-image:hover').classList.toggle('portfolio-images_active')
    } else if(document.querySelector('.slider__phone-img:hover')){
        document.querySelector('.slider__phone-img:hover>.phone-img').classList.toggle('del-phone-img')
    } else if(document.querySelector('.slider__control_right:hover')){
        toRight()
    }if(document.querySelector('.slider__control_left:hover')){
        toLeft()
    }
})

function submitForm(){
    console.log(document.querySelectorAll('.input-text')[2].value)
    let subjectText = document.querySelectorAll('.input-text')[2].value ? `Тема: ${document.querySelectorAll('.input-text')[2].value}` : 'Без темы';
    let descriptionText = document.querySelectorAll('.input-text')[3].value ? `Описание: ${document.querySelectorAll('.input-text')[3].value}` : 'Без описания'
    let alertText =`Письмо отправлено
    ${subjectText}
    ${descriptionText}
    ` 
    alert(alertText)
}

function mixImg(){
    let arr3 = shuffle([
        "./assets/portfolio-images/row1/1.jpg",
        "./assets/portfolio-images/row2/1.jpg",
        "./assets/portfolio-images/row3/1.jpg",
        "./assets/portfolio-images/row1/2.jpg",
        "./assets/portfolio-images/row2/2.jpg",
        "./assets/portfolio-images/row3/2.jpg",
        "./assets/portfolio-images/row1/3.jpg",
        "./assets/portfolio-images/row2/3.jpg",
        "./assets/portfolio-images/row3/3.jpg",
        "./assets/portfolio-images/row1/4.jpg",
        "./assets/portfolio-images/row2/4.jpg",
        "./assets/portfolio-images/row3/4.jpg",
        ])
    for(let i = 0; i < document.querySelectorAll('.portfolio-images-column>li').length; i++){
        document.querySelectorAll('.portfolio-images-column>li')[i].firstChild.attributes.src.value = arr3[i];
    }

}

function shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function toRight(){
    if(isFirst){
        counter--
        document.querySelectorAll('.slider__item')[0].style.transform = `translateX(${counter * -100}%)`
        document.querySelector('.slider').style.transform = `translateX(${counter * 100}%)`;
        isFirst = false;
    } else {
        counter--
        document.querySelectorAll('.slider__item')[1].style.transform = `translateX(${(counter+1) * -100}%)`
        document.querySelector('.slider').style.transform = `translateX(${counter * 100}%)`;
        isFirst = true;
    }
}

function toLeft(){
    if(isFirst){
        counter++
        document.querySelectorAll('.slider__item')[0].style.transform = `translateX(${counter * -100}%)`
        document.querySelector('.slider').style.transform = `translateX(${counter * 100}%)`;
        isFirst = false;
    } else {
        counter++
        document.querySelectorAll('.slider__item')[1].style.transform = `translateX(${(counter+1) * -100}%)`
        document.querySelector('.slider').style.transform = `translateX(${counter * 100}%)`;
        isFirst = true;
    }
}

