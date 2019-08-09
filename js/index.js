// Your code goes here
const allLinks = document.querySelectorAll('.nav .nav-link');
console.log(allLinks);
allLinks.forEach(item => item.addEventListener('click', (e) => {
    alert('404 page not found');
}));














