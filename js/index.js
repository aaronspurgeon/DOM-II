// Your code goes here

// selectors
const allLinks = document.querySelectorAll('.nav .nav-link');
const headerText = document.querySelector('.logo-heading');
const introImg = document.querySelector('.intro-img');
const container = document.querySelector('.home');
const firstImg = document.querySelector('.img-content');
const content = document.querySelector('.content-section');
const inverse = document.querySelector('.inverse-content .img-content');
const pTag = document.querySelectorAll('p');
const btn = document.querySelectorAll('.btn');




// events
pTag.forEach(item => item.addEventListener('select', () => {
    pTag.style.color = 'orange';
}));

btn.forEach(item => item.addEventListener('click', (e) => {
    alert('404 page not found');
}));

allLinks.forEach(item => item.addEventListener('focus', () => {
    item.style.color = 'red';
}));

allLinks.forEach(item => item.addEventListener('click', prevent));

headerText.addEventListener('mouseover', (e) => {
    headerText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        headerText.style.transform = '';
    }, 500)
}, false);

introImg.addEventListener('dblclick', displayNone);

container.addEventListener('click', (event) => {
    container.style.background = 'salmon';
});

firstImg.addEventListener('click', bigger);

content.addEventListener('click', lightBlue);

window.onload = (event) => {
    console.log('hi');
};


// functions
function bigger(event) {
    event.stopPropagation();
    event.currentTarget.style.transform = 'scale(1.1)';
};

function lightBlue(event) {
    event.stopPropagation();
    event.currentTarget.style.background = 'lightblue';
};

function prevent(event) {
    event.preventDefault();
    alert('preventDefault stopped this page from reloading');
};

function displayNone(event) {
    event.stopPropagation();
    event.currentTarget.style.display = 'none';
};


// GSAP animations

TweenMax.staggerTo('nav a', 1, {
    delay: .5,
    opacity: 1,
    y: -5,
    ease: Expo.easeInOut
}, 0.3);

TweenMax.from('.intro-img', 2, {
    delay: 1,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
});

TweenMax.from('.intro h2', 2, {
    delay: 1.2,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from('.intro p', 2, {
    delay: 1.4,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from('.logo-heading', 1, {
    opacity: 0,
    y: 5,
    ease: Expo.easeInOut
});

TweenMax.from('.content-section', 2, {
    delay: 2,
    opacity: 0,
    y: 10,
    ease: Expo.easeInOut,
});
