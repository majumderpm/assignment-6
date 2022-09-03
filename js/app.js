
const newsLoad = async() =>{
    //  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;  
     const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
     const data = await res.json();
    return data;
    }
    const newsDetails = async(id) =>{
        //  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;  
         const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
         console.log(id, )
         const data = await res.json();
        return data;
        }

    const setAllNews = async() =>{
        const data = await newsLoad();
        const allData = (data.data.news_category);
        // console.log(data.data.news_category);

        const allMenu = document.getElementById('all_menu');

        // const uniqueArray = [];

            for(const news of allData)
                {
                    // console.log(news)
                console.log(news.category_name);
                const li = document.createElement('li');
                li.classList.add('col');
                li.innerHTML = `
              <a onclick="getDetails('${news.category_id}')">${news.category_name}</a> `
                allMenu.appendChild(li);
            }
          


}

//  show all news 

const getDetails = async(id) => {
    const displayNews =  document.getElementById('news_card');
    const data = await newsDetails(id);
    displayNews.innerHTML = '';
 
 
 
 
    data.data.forEach(news => {
     console.log(news)
     const newsDiv = document.createElement('div');
     newsDiv.classList.add('row');
     newsDiv.innerHTML =  `
         <div  class="col-md-4">
         <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8">
         <div class="card-body">
         <h5 class="card-title">${news.title}</h5>
         <p class="card-text">${news.details.slice(0, 250)}...</p>
         <div class="card-text">
         <img src="${news.author.img}" class="img-fluid rounded-start author_img " alt="..." >
         <small class="text-muted">${news.author.name}</small>
         <p class="views">${news.total_view}</p>
         </div>
         <button class="btn btn-primary" onclick="details_btn('${news.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>
         </div>
     </div>
     `;
     displayNews.appendChild(newsDiv);
 });
 
 
 
 
 }

        setAllNews ();

// newsLoad();

