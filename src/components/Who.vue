<template>
<div  class="flex_container"> 
    <h1 id="timeLine_Who">Covid 19 Timeline</h1>
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noopener">
    <p>Get the lastest infomation from the World Health organization about COVID 19</p>
      <img src="@/assets/who.png" alt="WHO logo">
    </a>
</div>
</template>
  <style scoped>
  /* .flex_container
  {
    display: flex;
    flex-wrap: wrap;
    background:#35393c;
    align-items: center;
  }
  h1{
  flex:1 ;
  color:white;
  padding-left: 25px;
  white-space: nowrap;
}
a{
    display: flex;
    height: 100px;
    width: 450px;
    justify-content: center;
    align-items: center;
    font-style: inherit;
    text-decoration: none;
    color: inherit;
    font-size: 1.1em;
    background: #c0d6df;
    padding-left: 25px;
}
p{
    flex: 1;
}
img{
    object-fit: contain;
    height: 100%;
    margin-left: 20px;
}
@media only screen and (max-width: 800px) {
    a{
        width: 100vw;
        font-size: 1em;
    }
} */
     .flex_container
    {
      background-color: #35393c;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    #timeLine_Who
    {
      color: white;
      flex:1;
      font-size: 40px;
      padding-left: 20px;
    }
    img
    {
      height: 115px;
      margin-left: 25px;
    }
    a{
      display: flex;
      text-decoration: none;
      background-color: #c0d6df;
      color:black;
      font-size: 21px;
      font-weight: 500;
      align-items: center;
      /* justify-content: center; */
      padding-left:25px ;
      width: 500px;
    }
    p{
      flex:1;
    } 
    @media only screen and (max-width: 900px) {
    a{
        width: 100vw;
        font-size: 20px;
    }
    #timeLine_Who
    {
      font-size: 25px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    }
  </style>