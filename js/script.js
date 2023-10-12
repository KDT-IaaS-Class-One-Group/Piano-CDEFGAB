const root = document.getElementById('root');
const piano = document.getElementById('piano');
const context = piano.getContext('2d');

for ( let i = 0; i < 1; i++){
    context.fillRect((i-1)*50, 0, 100, 300);
}

piano.addEventListener('click',(e)=>{
    console.log(e.target);
})