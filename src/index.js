module.exports = function check(str, bracketsConfig) {
  let a=bracketsConfig.map(e=>e.join(""));
 while (true){
   let b=str
 for (i=0;i<a.length;i=i+1){
 str=str.replace(a[i],"")
}
if (b==str && b!=""){
  return false;
  break;
}
else if(b==str && b=="") {
 return true;
  break;
}

}
}

