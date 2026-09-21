function ClickHello(){
    alert("Hello");
}
function Calculate(){
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;
    const data = 11 * (end - start);
    if(data<0){
    alert('Please input the years in order');
    return;
    }
    alert('The ocean gained ' + data + ' million tonnes of microplastic between those 2 years'+((data>100)?'!':'.'));
}