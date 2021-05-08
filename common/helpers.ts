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