document.querySelector('.output').innerHTML=`<p style="color:red">No record found</p>`
document.getElementById('btn3').addEventListener("click", ()=>{
    const aadhar=document.getElementById('find').value
    const output=document.querySelector('.output')
    let newArr=JSON.parse(localStorage.getItem("users"))
    console.log(aadhar)
    let filterArr = newArr.filter((res)=>{
        return res.aadhar === aadhar;
    })
    if(filterArr.length !== 0){
        output.innerHTML=""
        const p1=document.createElement('p')
            p1.innerHTML=`Name:-&nbsp &nbsp${filterArr[0].name}`
            output.appendChild(p1)
            const p2=document.createElement('p')
            p2.innerHTML=`Date of borth:-&nbsp &nbsp${filterArr[0].dob}`
            output.appendChild(p2)
            const p3=document.createElement('p')
            p3.innerHTML=`Aadhar Number:-&nbsp &nbsp${filterArr[0].aadhar}`
            output.appendChild(p3)
            const p4=document.createElement('p')
            p4.innerHTML=`Mobile Number:-&nbsp &nbsp${filterArr[0].mobile}`
            output.appendChild(p4)
            const p5=document.createElement('p')
            p5.innerHTML=`Age:-&nbsp &nbsp${filterArr[0].age}`
            output.appendChild(p5)

    }else{
        output.innerHTML=`<p style="color:red">No record found</p>`
    }
    
    console.log(filterArr)
});