function anagramCheck(str1,str2){
    //Remove spaces and convert all letters to the same case
    str1= str1.toLowerCase().replaceAll(" ","")
    str2= str2.toLowerCase().replaceAll(" ","")
   //Sort the Characters
    str1=str1.split("").sort().join()
    str2=str2.split("").sort().join()
    //Compare Sorted Strings
    if(str1===str2){     
        return true;
    }else{
        return false;
    }

}

console.log(anagramCheck("listen","silent"));
console.log(anagramCheck("hello","world"));