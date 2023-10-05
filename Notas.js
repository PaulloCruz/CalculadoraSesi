document.getElementById('calculate').addEventListener('click', function(){

    const av1 =document.getElementById('av1').value; 
    const av2 =document.getElementById('av2').value;
    const av3 =document.getElementById('av3').value;
    const avt =document.getElementById('avt').value;

    const total= ((av1*25)+(av2*25)+(av3*20)+(avt*30))/100
   
    document.getElementById('total').innerHTML = (total)
});