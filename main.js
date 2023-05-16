let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString(' <span style="color:#A19BBF"> Estudio ingeniería en biotecnología y soy desarrolladora Frontend.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
