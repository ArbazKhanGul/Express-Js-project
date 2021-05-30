const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp_real_val");
const data_hide=document.querySelector(".middle_layer");
const day=document.getElementById("day");
const today_date=document.getElementById("today_date");

async function request()
{   
    return users;
}

const getInfo=async (event)=>{
event.preventDefault();
    let cityNameValue=cityName.value;
if(cityNameValue==="")
{
city_name.innerText="Please write the city name before search";
data_hide.classList.add("data_hide");
}
else{

    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&units=metric&appid=a871ec341478cf7d0a0c7dff00f985c5`
    const respnse=await fetch(url);
    const users=await respnse.json();
    console.log(users);
    
    const arrData=[users];
     
    city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
    temp.innerText=arrData[0].main.temp;
    const tempStatus=arrData[0].weather[0].main;
    if(tempStatus=="Sunny")
{
    temp_status.innerHTML=`<i class="fas fa-sun" style="color: #f1c40f"></i>`;
}
else if(tempStatus=="Clouds")
{
    temp_status.innerHTML="<i class='fa fa-cloud' style='color: #f1f2f6'></i>";
}
else if(tempStatus=="Rainy")
{
// {<i class="fa fa-cloud"></i>
    temp_status.innerHTML=`<i class="fa fa-cloud-rain-o" style="color: #a4b0be"></i>`;
}
else
{
    temp_status.innerHTML=`<i class="fas fa-sun" style="color: #f1c40f"></i>`;
    
}
data_hide.classList.remove("data_hide");
    }
    catch{
        city_name.innerText="Please enter the city name properly";
        data_hide.classList.add("data_hide");
    }
}

}

submitBtn.addEventListener("click",getInfo);




const getCurrentDay=()=>{
    var weekDay=new Array(7);
    weekDay[0]="Sunday";
    weekDay[1]="Monday";
    weekDay[2]="Tuesday";
    weekDay[3]="Wednesday";
    weekDay[4]="Thursday";
    weekDay[5]="Friday";
    weekDay[6]="Saturday";
    
    let currentTime=new Date();
    let days=weekDay[currentTime.getDay()];
day.innerText=days;

var months=["Jan","Feb",'Mar',"Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
var month=months[currentTime.getMonth()];
var date=currentTime.getDate();

today_date.innerText=`${date} ${month}`;
}

getCurrentDay();
