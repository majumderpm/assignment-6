



const newsLoad = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;  
    const res = await fetch(url); 
    const data = await res.json();
    // console.log(data.data);
   //  displayNews(data.data)

 }

 const displayNews = () =>{
    const newsContainer = document.getElementById('news_card');
   
 } 


 newsLoad();