let app = document.getElementById('typewriter');
 
app.classList.add('text-primary');
app.style.color = 'white';

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y estudio Ingeniería en Computación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
