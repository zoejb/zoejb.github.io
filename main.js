let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #DD1155;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #DD1155;">Biomedical engineer in the making.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
