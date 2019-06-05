/************************************
Inspired from the following dribble shot
https://dribbble.com/shots/4419357-Day-Night-Mode-Switcher?utm_source=Clipboard_Shot&utm_campaign=Mikhail-Gribkov&utm_content=Day%2FNight%20Mode%20Switcher&utm_medium=Social_Share
************************************/

const wrapper = document.querySelector('.wrapper');
const para = document.querySelector('p')

wrapper.addEventListener('change', function(e) {
  if(e.target.checked) {
    para.classList.add('morning');
    para.textContent = 'Morning, Sunshine!';
  } else {
    para.classList.remove('morning');
    para.textContent = 'Good Night!';
  }
})