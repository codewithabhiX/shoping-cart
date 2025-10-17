
let product = document.getElementsByClassName("products");


function fetchData() {
    let p = fetch("https://dummyjson.com/products");

    let p1=p.then(function (data){
        return data.json();
    })

    let p2=p1.then(function (data){
       display(data);
    })

}

fetchData();

function display(data) {
  
    for (let i = 0; i < data.products.length; i++) {
        let card = `<div   class="img_con"  class="card_footer">
        <button class="btn1left" ><<</button>
            <div   class="card_footer">
        <img  class="imgNice card_footer" src="${
          data.products[i].images[0]
        }" height="120px" width="200px" />
         <h3 style="height:150px; width:200px;" >${data.products[i].title}</h3>
         <p >${data.products[i].price}</p>
         <p >rating${data.products[i].rating}</p>
         
         <button class="addToCartBtn" style="height:50px; width:100px;">add to cart</button>
         </div>
         <button class="btn1rigth">>></button>
         </div>`;
        
        product[0].insertAdjacentHTML("beforeend", card);
        let btn1rigth = document.getElementsByClassName("btn1rigth");
        let btn1left = document.getElementsByClassName("btn1left");
         let imgNice = document.getElementsByClassName("imgNice");
        ImageContainer1(data, i, btn1rigth, imgNice);
        ImageContainer2(data, i,  btn1left,imgNice);
    }

  

}

  function ImageContainer1(data, i,btn1rigth,imgNice) {
        
        btn1rigth[i].addEventListener("click", function () {
            
                for (let j = 1; j < data.products[i].images.length; j++) {
                    
                    imgNice[i].setAttribute("src", data.products[i].images[j]);
                       
                }
            
        })
}

  function ImageContainer2(data, i, btn1left,imgNice) {
        
         btn1left[i].addEventListener("click", function () {
            
             for (let j = data.products[i].images.length - 1; j >= 0;j--) {
                    
                    imgNice[i].setAttribute("src", data.products[i].images[j]);
                       
                }
            
        })
    }