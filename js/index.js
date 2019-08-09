// Your code goes here
const allLinks = document.querySelectorAll('.nav .nav-link');
const headerText = document.querySelector('.logo-heading');
const introImg = document.querySelector('.intro-img');
const container = document.querySelector('.home');
const firstImg = document.querySelector('.img-content');
const content = document.querySelector('.content-section');



allLinks.forEach(item => item.addEventListener('click', (e) => {
    alert('404 page not found');
}));

headerText.addEventListener('mouseover', (e) => {
    headerText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        headerText.style.transform = '';
    }, 500)
}, false);

introImg.addEventListener('dblclick', (e) => {
    introImg.style.display = 'none';
});

container.addEventListener('click', (event) => {
    
    container.style.background = 'salmon';
    container.stopPropagation();
});

function bigger(event) {
    event.stopPropagation();
    event.currentTarget.style.transform = 'scale(1.1)';
}

firstImg.addEventListener('click', bigger);

content.addEventListener('click', () => {
    
    content.style.background = 'lightblue';
});

















