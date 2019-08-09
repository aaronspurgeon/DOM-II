// Your code goes here
const allLinks = document.querySelectorAll('.nav .nav-link');
const headerText = document.querySelector('.logo-heading');
const introImg = document.querySelector('.intro-img');




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
})















