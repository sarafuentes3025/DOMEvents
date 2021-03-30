let ball = document.getElementById('float-circle');

// events
function up(){
  ball.style.bottom = '1600px';
};

function down(){
  ball.style.bottom = '50px'
}

document.addEventListener('keydown', up); 
document.addEventListener('keyup', down); 