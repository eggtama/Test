document.write("<h3>找出1000-9999之间能够被17和13同时整除的整数的个数及累加和</h3>");
let counter=1;
let number=0;
let sum=0;
document.write("区间中符合条件的数有(输出格式：10个1行):<br>");
for(let i=1000;i<=9999;i++){
    if(i%13===0&&i%17===0){
        document.write(i.toString());
        number++;
        sum=sum+i;
        if(counter!==10){
            document.write(" ");
            counter++;
        }
        else{
            counter=1;
            document.write("<br>");
        }
    }
}
document.write("<br>");
document.write("区间中符合条件的数共有"+number+"个<br>");
document.write("区间中符合条件的数的累加和为"+sum);