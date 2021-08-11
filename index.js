  
var obj=[
    {
     countryName:"Germany",
    Population:"81,770,900",
    Region:"Europe",
    Capital:"Berlin", 
      flag:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
    },
    {
      countryName:"United States of America",
    Population:"323,947,000",
    Region:"Americas",
    Capital:"Washington.D.C",
      flag:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
    },
    {
     countryName:"Brazil",
    Population:"206,135,893",
    Region:"Americas",
     Capital:"Brasilia",
      flag:"https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"
    },
    {
      countryName:"Afghanistan",
    Population:"27,657,145",
    Region:"Europe",
     Capital:"kabul",
      flag:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg"
    },
    {
      countryName:"India",
         Population:"1,394,975,829",
      Region:"Asia",   
     Capital:"New Delhi",
      flag:"https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
    }];
  const container=document.createElement("div");
  container.setAttribute("class","container");
  for(i=0;i<5;i++){
    var htmlContents=``;
  const flag=document.createElement("img");
  flag.src=obj[i].flag;
  flag.className="flag";
  
  const info=document.createElement("div");
  info.setAttribute("class","info");
  
  
   
     htmlContents+=`
     
  <h2>${obj[i].countryName}</h2>
  <p><span class="side-heading">Population:</span>${obj[i].Population}</p>
  <p><span class="side-heading">Region:</span>${obj[i].Region}</p>
  <p><span class="side-heading">Capital:</span>${obj[i].Capital}</p>
  `;
  info.innerHTML=htmlContents;
  const flagDiv=document.createElement("div");
  flagDiv.setAttribute("class","flagDiv");
  flagDiv.append(flag,info);
  container.append(flagDiv);
     };
  document.body.append(container);