document.write("<h1>九九乘法表</h1>");

for(let i=1;i<=9;i++){
    for(let j=1;j<=i;j++)
        document.write(j+"*"+i+"="+j*i+" ");
    document.write("<br>");
}