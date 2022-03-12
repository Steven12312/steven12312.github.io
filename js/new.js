var password = "Amolimerijaan"

function passcheck() {
  
  if (document.getElementById('pass1').value != password){
    alert('Passwort ist Falsh');
   return false;
}

if (document.getElementById('pass1').value == password){
  alert('Amoli du hast es geschafft')
}
}