
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



        setAllNews ();

// newsLoad();

