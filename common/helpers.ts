export default function getCurrentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }


export function get10Days(){
  let dates=[];
  for(var i=0;i<10;i++){
    var today = new Date();
    today.setDate(today.getDate()-i);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    
    dates.push(dd + '/' + mm + '/' + yyyy);
  }
  return dates;
}
export function isPastQODTime(){
  var today = new Date();
  if(today.getHours() >= 22){
    if(today.getHours()=== 22 && today.getMinutes() < 30)
      return false;
    return true;
  }
  return false;
}

export  function getNextDate(){
  var today = new Date();
  var tomorrow=new Date(today);
  tomorrow.setDate(today.getDate() + 1)
  var dd = String(tomorrow.getDate()).padStart(2, '0');
  var mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = tomorrow.getFullYear();
  return dd + '/' + mm + '/' + yyyy;
}