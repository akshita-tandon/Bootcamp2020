
//Questin 2

let newArrays=[];
let list=document.getElementById("ListName").getElementsByTagName("li");
for(var i=0;i < list.length; i++) {
    newArrays.push(list[i].innerHTML);
}

console.log("Array containing only Flexbox Video")
let onlyflexBox=newArrays.filter((a) => a.toLowerCase().includes("flexbox"));
// console.log(onlyflexBox);

console.log("List of time ");
let arrayTime=[];
for(var i=0;i < list.length; i++) {
    arrayTime.push(list[i].getAttribute("data-time"));
}
//console.log(arrayTime);

console.log("Time converted to seconds");
let arrayTimeSeconds=[];
arrayTimeSeconds=arrayTime.map((a)=>a.split(":")).map((a)=> ((a[0]*60)+(+a[1])));
//console.log(arrayTimeSeconds);

console.log("Total time");
let totalTime;
totalTime=arrayTimeSeconds.reduce((a,b)=>a+b,0);
//console.log(totalTime);


export {newArrays,onlyflexBox,arrayTime,arrayTimeSeconds,totalTime}