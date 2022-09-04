
const newsLoad = async() =>{
    //  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;  
    toggleSpinner(true);
     const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
     const data = await res.json();
     toggleSpinner(false);
    return data;
    }

    // show all news 

    const newsDetails = async(id) =>{
        toggleSpinner(true);
         const url = `https://openapi.programming-hero.com/api/news/category/${id}`;  
         const res = await fetch(url);
    
         const data = await res.json();
         toggleSpinner(false);
         console.log(data)
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
                // console.log(news);
                const li = document.createElement('li');
                li.classList.add('col');
                // li.classList.add('itemsList');
                li.innerHTML = `
            
              <a class="all_list_btn " onclick="getDetails('${news.category_name}, ${news.category_id}')">${news.category_name}</a> `
                allMenu.appendChild(li);
            }
          


}

//  show all news 

const getDetails = async(news) => {

    // const allMenu = document.getElementById('all_menu');
   const list = document.getElementsByClassName("all_list_btn")
   list.forEach(nav =>nav.classList.remove("active"))
    this.classList.add("active")

    const displayNewsDefult =  document.getElementById('defultnews_card');
    //    const data = newsDetails(id);
       displayNewsDefult.innerHTML = '';

    toggleSpinner(true);
    // console.log(news)
 const id = news.split(",")[1].split(" ")[1]
 const name = news.split(",")[0]
    // console.log(id)
    const displayNews =  document.getElementById('news_card');
    const data = await newsDetails(id);
    displayNews.innerHTML = '';
    toggleSpinner(false);
//  console.log(data.data);
    const itemNews = document.getElementById('count_news');
    itemNews.innerHTML = `

    ${data.data.length} items found of category ${name}

   `
 console.log( news.split(","))



    if (data.data.length === 0){
       displayNews.innerHTML = `
        <p class="found">No Data Found</p>
       `
    }
    else{

        data.data.forEach(news => {
            console.log(news)
            const newsDiv = document.createElement('div');
            newsDiv.classList.add('row');
            newsDiv.innerHTML =  `
                <div  class="col-md-4">
                <img src="${news.image_url}" class="img-fluid rounded-start news_img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.details.slice(0, 250)}...</p>
                <div class="card-text">
               <div>
               <img src="${news.author.img}" class="img-fluid rounded-start author_img " alt="..." >
               <small class="text-muted">${news.author.name}</small>
               </div>
                <p class="views"><i class="fa-solid fa-eye"></i> ${news.total_view}</p>
                <button class="btn btn-primary" onclick="loadDtials('${news._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>
                </div>
                
                </div>
            </div>
            `;
            displayNews.appendChild(newsDiv);
        });
        

    }








 
 toggleSpinner(false);
 }



 const loadDtials = id => {
     
 toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
console.log(id, url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsDetalis(data));
     
 toggleSpinner(false);
    // .then(data => console.log((data));
}

//  display phone detalis 

const displayNewsDetalis = news => {
    console.log(news.data);
    const modalTitel = document.getElementById('exampleModalLabel');
    modalTitel.innerText = news.data[0].title;

    const newsDetailsadd = document.getElementById('newsview_details');
    const newsDetailsDiv = document.createElement('div');
    newsDetailsadd.innerHTML = `

    <img src="${news.data[0].image_url}" class="img-fluid rounded-start" alt="...">
   
    <div>
    <img src="${news.data[0].author.img}" class="img-fluid rounded-start author_img " alt="..." >
    <small class="text-muted">${news.data[0].author ? news.data[0].author.name : 'Not Found'}</small>
    </div>
     <p class="views">${news.data[0].total_view}</p>

    `;

    // modalTitel.appendChild(newsDetailsDiv);
}



// Spinner


const toggleSpinner = isLoading => {
    const lodeerSpinner = document.getElementById('loader');
    if(isLoading){
        lodeerSpinner.classList.remove('d-none');
    }
    else{
        lodeerSpinner.classList.add('d-none');
    }
    }





    const loadDtialsTwo = async() => {
     
        toggleSpinner(true);
           const url = `https://openapi.programming-hero.com/api/news/category/01`;
    //    console.log(id, url)
           fetch(url)
           .then(res => res.json())
           .then(data =>{

          
            
            toggleSpinner(false);
        console.log(url)
           // .then(data => console.log((data));




           const displayNewsDefult =  document.getElementById('defultnews_card');
        //    const data = newsDetails(id);
           displayNewsDefult.innerHTML = '';
           toggleSpinner(false);
       //  console.log(data.data);
           const itemNews = document.getElementById('count_news');
           itemNews.innerHTML = `
       
           ${data.data.length} items found of category ${name}
       
          `
        console.log( data.data)
       
       
       
           if (data.data.length === 0){
              displayNewsDefult.innerHTML = `
               <p class="found">No Data Found</p>
              `
           }
           else{
       
               data.data.forEach(news => {
                   console.log(news)
                   const newsDiv = document.createElement('div');
                   newsDiv.classList.add('row');
                   newsDiv.innerHTML =  `
                       <div  class="col-md-4">
                       <img src="${news.image_url}" class="img-fluid rounded-start news_img" alt="...">
                   </div>
                   <div class="col-md-8">
                       <div class="card-body">
                       <h5 class="card-title">${news.title}</h5>
                       <p class="card-text">${news.details.slice(0, 250)}...</p>
                       <div class="card-text">
                      <div>
                      <img src="${news.author.img}" class="img-fluid rounded-start author_img " alt="..." >
                      <small class="text-muted">${news.author.name}</small>
                      </div>
                       <p class="views"><i class="fa-solid fa-eye"></i> ${news.total_view}</p>
                       <button class="btn btn-primary" onclick="loadDtials('${news._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>
                       </div>
                       
                       </div>
                   </div>
                   `;
                   displayNewsDefult.appendChild(newsDiv);
               });
               
       

            }

            
         } )}
       



       

       loadDtialsTwo();

    loadDtials();
-        setAllNews ();

// newsLoad();

