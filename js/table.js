//动态封装对象
var tdList = document.querySelectorAll('.td')
for(i=0;i<tdList.length; i++){
	item=tdList[i];
	item.addEventListener('click',showMsg)
}
function showMsg(event){
	alert('a')
}
//显示现在的时间
function showtime(t){
	var mytime=new Date();
	var month = mytime.getMonth()+1;
	var day = mytime.getDate();
	var nowDay = mytime.getFullYear() + "-" +  
	             (month<10?"0"+month:month) +"-"+(day<10?"0"+day:day)
	t.innerHTML=nowDay;
}