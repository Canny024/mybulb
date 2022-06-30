console.log("hello");
let bulbon= document.getElementById('bulbon');
let bulboff= document.getElementById('bulboff');
let btn=document.getElementById('btn');
bulbon.style.display='none';
function hide(){
if(bulbon.style.display=='none'){
    bulboff.style.display='none';
    bulbon.style.display='block';
    btn.innerText="OFF";
    btn.style.backgroundColor='red'
}
else{
    bulbon.style.display='none';
    bulboff.style.display='block';
    btn.innerText="ON";
    btn.style.backgroundColor='green'
}

}