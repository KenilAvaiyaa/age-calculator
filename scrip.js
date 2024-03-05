const i_date = document.querySelector('#date');
const but = document.querySelector('.buttonn');
const result = document.querySelector('.age_result');

but.addEventListener('click',()=>{
    if(i_date.valu == ""){
        alert("Enter you Birthdate:::::");
    }
    else{
        console.log(i_date.value);

        // input date

        var birthdate = new Date(i_date.value); 

        var d=birthdate.getDate();  
        var m=birthdate.getMonth()+1;  
        var y=birthdate.getFullYear(); 
        
        // currant date

        var now = new Date(); 

        var nd=now.getDate();  
        var nm=now.getMonth()+1;  
        var ny=now.getFullYear();

        // calculate age

        let rd, rm, ry;

        ry = ny- y;

        if(nm>m){
            rm = nm - m;
        }
        else{
            ry--;
            rm = 12 + nm - m; 
        }

        if(nd>d){
            rd = nd - d;
        }
        else{
            rm--;
            rd = getdatenu(y,m) + nd - d
        }
        if (ry < 0){
            m3 = 11;
            ry--;
        }
        result.innerHTML=(`your age is ${ry} year ${rm} months and ${rd} days`)
        
        function getdatenu(year,month) {
            return new Date(year,month,0).getDate();
        }

    }
})
