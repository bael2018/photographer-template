
// navbar

const navbar = document.querySelector('.navbar')
const navbar_upper = document.querySelector('.navbar_upper')

window.onscroll = () => {
    navbar.classList.toggle('active' , window.scrollY > 0)
    navbar_upper.classList.toggle('active' , window.scrollY > 0)
}

// PriceText

const container = document.querySelector('.change1')
const container1 = document.querySelector('.change2')
const container2 = document.querySelector('.change3')

const add1 = document.querySelector('.add1')
const add2 = document.querySelector('.add2')
const add3 = document.querySelector('.add3')

container.textContent = '100'
container1.textContent = '300'
container2.textContent = '200'

add1.textContent = 'YEARLY'
add2.textContent = 'YEARLY'
add3.textContent = 'YEARLY'

// PriceBtns

const priceBtnOne = document.querySelector('.priceBtnOne')
const priceBtnTwo = document.querySelector('.priceBtnTwo')

priceBtnOne.addEventListener('click' , e => {
    e.preventDefault()

    priceBtnOne.classList.remove('active')
    priceBtnTwo.classList.remove('active')

    add1.textContent = 'YEARLY'
    add2.textContent = 'YEARLY'
    add3.textContent = 'YEARLY'

    container.textContent = '100'
    container1.textContent = '300'
    container2.textContent = '200'
})

priceBtnTwo.addEventListener('click' , e => {
    e.preventDefault()

    priceBtnTwo.classList.toggle('active')
    priceBtnOne.classList.toggle('active')

    add1.textContent = 'MONTHLY'
    add2.textContent = 'MONTHLY'
    add3.textContent = 'MONTHLY'

    container.textContent = '10'
    container1.textContent = '30'
    container2.textContent = '20'
})


// DayInfoCollapse

const day1 = document.querySelector('.day1')
const day2 = document.querySelector('.day2')
const day3 = document.querySelector('.day3')
const day4 = document.querySelector('.day4')
const textAdd = document.querySelector('.textAdd')

day1.addEventListener('click' , e => {
    e.preventDefault();

    day1.classList.remove('show')
    day1.classList.remove('showing')
    day2.classList.remove('show')
    day3.classList.remove('show')
    day4.classList.remove('show')

    textAdd.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend enim sit amet lorem finibus auctor. Maecenas nulla tortor, interdum vitae magna ut, fermentum volutpat erat. Nam cursus aliquet ante a cursus. In blandit felis tincidunt suscipit auctor. Sed in elementum ex, ut gravida arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et dolor ut sem aliquet vulputate.'
})

day2.addEventListener('click' , e => {
    e.preventDefault();

    day2.classList.toggle('show')
    day1.classList.toggle('show')

    day3.classList.remove('show')
    day4.classList.remove('show')

    textAdd.textContent = 'Suspendisse potenti. Vestibulum vitae metus sit amet nulla dignissim viverra. Aenean sed bibendum felis. Sed commodo felis sit amet augue euismod, eget mollis felis pharetra. Praesent dignissim diam at neque placerat, quis condimentum dolor convallis. Vivamus vel venenatis nunc, ac mattis neque. Maecenas eu molestie est, ut suscipit ligula. Donec tempor, ex vel aliquet ultrices, tellus quam volutpat ante, non tincidunt nisi magna eget felis.'
})

day3.addEventListener('click' , e => {
    e.preventDefault();

    day3.classList.toggle('show')
    day1.classList.toggle('showing')
    
    day2.classList.remove('show')
    day4.classList.remove('show')

    textAdd.textContent = 'Nam ornare tortor quam, eget ultrices ex vulputate sit amet. Nulla ligula nisi, tincidunt nec fringilla tincidunt, dignissim in mi. Nullam sed enim faucibus, dictum sapien maximus, ultricies erat. Morbi et diam eu dui interdum egestas. Maecenas nisi turpis, varius ut ipsum at, dapibus tempor lectus. Aliquam convallis lectus libero. Nulla facilisi. Praesent nec pellentesque magna. Donec accumsan aliquam ultrices. Mauris quis auctor massa, ac eleifend justo. Integer in ante pharetra lectus eleifend posuere.'
})

day4.addEventListener('click' , e => {
    e.preventDefault();

    day1.classList.toggle('show')
    day4.classList.toggle('show')

    day3.classList.remove('show')
    day2.classList.remove('show')

    textAdd.textContent = 'Sed eleifend eleifend urna, mattis convallis nunc scelerisque eget. Mauris maximus nisl tortor, et facilisis dui hendrerit in. Vestibulum sit amet mollis ligula. Vivamus mattis efficitur efficitur. Donec sed dapibus dui. Proin a mollis neque. Quisque efficitur, risus vitae sodales commodo, arcu dui cursus metus, nec fringilla tortor dui non erat. Aliquam consequat purus sed interdum molestie. Nunc porta bibendum arcu in consectetur.'
})

const displayBar = document.querySelector('.displayBar')
const toggle = document.querySelector('.toggle')
toggle.addEventListener('click' , e => {
    e.preventDefault()
    
    displayBar.classList.toggle('appear')
    navbar.classList.toggle('removeM')
})


// live1

const live1 = document.querySelector('.live1')
const navbarSpan = document.querySelector('.navbar_span')
live1.addEventListener('click' , e => {
    e.preventDefault()
    navbarSpan.classList.toggle('appear')
    navbarSpan2.classList.remove('appear')
})

const live2 = document.querySelector('.live2')
const navbarSpan2 = document.querySelector('.navbar_span2')
live2.addEventListener('click' , e => {
    e.preventDefault()
    navbarSpan2.classList.toggle('appear')
    navbarSpan.classList.remove('appear')
})