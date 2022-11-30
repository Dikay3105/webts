window.addEventListener("load", function () {
    var searchInput=document.querySelector(".searchbar");
    searchInput.addEventListener('input', function(e) {
        let txtsearch= e.target.value.trim().toLowerCase();
        let listProductDOM =document.querySelectorAll('.product');
        listProductDOM.forEach(item=>{
            if(item.innerText.toLowerCase().includes(txtsearch)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        })
        
        
    });

    searchInput.addEventListener('click', function(e) {
        document.querySelector('.search-result').classList.remove('hide');
        
        
    });

    searchInput.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            window.location.href = './detail.html?'+document.querySelector(".searchbar").value;
            this.localStorage.setItem('search',document.querySelector(".searchbar").value)
        }
    });



    function showproduct(){
        if(localStorage.getItem('product')===null){
            return false;
        }
        var product = JSON.parse(localStorage.getItem('product'));
        var tr='';
        for(var i=0; i<product.length;i++){
            tr+='<div class="product" onclick="fill(\''+product[i].productId+'\'),addcart_popup()"><img src="'+product[i].img+'"><div class="infor"><div class="name">'+product[i].name+'</div><div class="price-title">'+product[i].price+'</div></div></div>';
        }
        document.querySelector('.products').innerHTML=tr;
    }
    showproduct();
    
    

});




