function displaytime(){
var datetime=new Date()
var hrs=datetime.getHours()
var min=datetime.getMinutes()
var sec=datetime.getSeconds()
var session=document.getElementById('session')
if(hrs>=12){
    session.innerHTML='PM'
}
else{
session.innerHTML='AM'
}
if(hrs>12){
    hrs=hrs-12
}
if(sec<10){
    document.getElementById('second').innerHTML=`0${sec}`
}
else{

    document.getElementById('second').innerHTML=sec
}
if(min<10){
    document.getElementById('minutes').innerHTML=`0${min}`
}
else{

    document.getElementById('minutes').innerHTML=min
}

document.getElementById('hours').innerHTML=hrs

}

setInterval(displaytime,10);