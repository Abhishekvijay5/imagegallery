const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay'); 
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
 'pic1.jpg': 'Closeup of a human eye',
 'pic2.jpg': 'Rock that looks like a wave',
 'pic3.jpg': 'Purple and white pansies',
 'pic4.jpg': "Section of wall from a pharaoh's tomb",
 'pic5.jpg': 'Large moth on a leaf'
}; 
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);} 
    thumbBar.addEventListener('click', e => {
        if (e.target.tagName === 'IMG') {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        }
       });
       btn.addEventListener('click', () => {
        const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
       });