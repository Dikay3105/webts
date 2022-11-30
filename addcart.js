function addcart_popup() {
    document.getElementById('detail_container').classList.remove('hide');
    document.getElementById('wrapper').style.filter='blur(10px)';
    document.getElementById('detail').classList.remove('hide');
}

function addcart_exit() {
    document.getElementById('detail').classList.add('hide');
    document.getElementById('wrapper').style.filter='blur(0px)';
    document.getElementById('detail_container').classList.add('hide');
    //document.getElementById('login_error').classList.add('hide');
}
function fill(id) {
    var userArray = JSON.parse(localStorage.getItem('product'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].productId == id){
                document.getElementById('masp').innerHTML='Mã sản phẩm: '+userArray[i].productId;
                document.getElementById('tensp').innerText=userArray[i].name;
                document.getElementById('giasp').innerText=userArray[i].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                document.getElementById('paynowbtn').innerHTML='<button class="paynowbtn" onclick="addintocart(\''+userArray[i].productId+'\')">MUA NGAY</button><br><br>'
                document.getElementById('addcartbtn').innerHTML='<button class="addcartbtn" onclick="addintocart(\''+userArray[i].productId+'\')">THÊM VÀO GIỎ HÀNG</button>'
                document.getElementById('imgcart').innerHTML='<img src="'+userArray[i].img+'" style="height: 100%; width:100%;">'
                
            }
        }
}

function addintocart(id) {
    var userArray = JSON.parse(localStorage.getItem('product'));
    var cart = JSON.parse(localStorage.getItem('cart'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].productId == id){
                if(confirm('Bạn có muốn thêm sản phẩm này vào giỏ hàng?')){
                    for(var j=0;j<cart.length;j++){
                        if(cart[j].productId == id){
                            cart[j].quantity=parseInt(cart[j].quantity)+parseInt(document.getElementById('SL').value);
                            alert("Thêm vào giỏ hàng thành công");
                            addcart_exit();
                            localStorage.setItem('cart',JSON.stringify(cart));
                            return;
                        }
                    }
                
                    cart.push(userArray[i]);
                    cart[cart.length-1].quantity=document.getElementById('SL').value;
                    alert("Thêm vào giỏ hàng thành công");
                    addcart_exit();
                    localStorage.setItem('cart',JSON.stringify(cart));
                }
                
            }
        }
       
}

function load_cart() {
    var ar1 = JSON.parse(localStorage.getItem('cart'));
	
    var tr='<tr><th>STT</th><th>ID</th><th>Ảnh</th><th>Tên SP</th><th>Giá</th><th>Số lượng</th><th>XÓA</th></tr>';
	var j=0;
    
    if(ar1.length==0) {
        tr="Không có sản phẩm nào, hãy đi mua sắm thêm nhé!"
        document.getElementById('thanhtoanbtn').classList.add('hide');
    }
    else 
        {
            for(var i=0; i<ar1.length;i++){
                j=i+1;
                tr+='<tr><td>'+j+'</td><td>'+ar1[i].productId+'</td><td><img style="height:50px;width:50px" src='+ar1[i].img+'></td><td>'+ar1[i].name+'</td><td>'+ar1[i].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})+'</td><td><input onchange="chinhSL(\''+ar1[i].productId+'\',this)" type="number" style="border:none;color:red;font-size:20px;width: 50px" value='+ar1[i].quantity+'></td><td><button class="delete" onClick="deletecart(\''+ar1[i].productId+'\')">&times;</button></td></tr>';
            }
            document.getElementById('thanhtoanbtn').classList.remove('hide');
        }
    document.getElementById('list_cart').innerHTML=tr;
}

function chinhSL(id,value) {
    var ar1 = JSON.parse(localStorage.getItem('cart'));
    for(var i=0; i<ar1.length;i++){
        if(ar1[i].productId==id) ar1[i].quantity=value.value;
    }

    localStorage.setItem('cart',JSON.stringify(ar1));
    load_cart();
}

function cart_popup() {
    document.getElementById('cart').classList.remove('hide');
    document.getElementById('wrapper').style.filter='blur(10px)';
    document.getElementById('cart_container').classList.remove('hide');
    
}

function cart_exit() {
    document.getElementById('cart').classList.add('hide');
    document.getElementById('wrapper').style.filter='blur(0px)';
    document.getElementById('cart_container').classList.add('hide');
}

function deletecart(id){
    var userArray = JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].productId == id){
            if(confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?')){
                userArray.splice(i, 1);
            }
            
        }
    }
    localStorage.setItem('cart',JSON.stringify(userArray));
    load_cart();
}

function pay() {
    var login = JSON.parse(localStorage.getItem('login_status'));
    var tkmk = JSON.parse(localStorage.getItem('nhotkmk'));
    if(login==false) {
        alert("Bạn cần đăng nhập để thanh toán!");
    } else if(confirm('Bạn chắc chắn muốn mua hàng?')) {
        var productlist=[]
        var bill = JSON.parse(localStorage.getItem('bill'));
        var cart = JSON.parse(localStorage.getItem('cart'));
        var product = JSON.parse(localStorage.getItem('product'));
        for(var i=0;i<cart.length;i++){
            productlist.push(cart[i]);
            for(var j=0;j<product.length;j++){
                if(cart[i].productId==product[j].productId)
                if (cart[i].quantity<=product[j].quantity) product[j].quantity=parseInt(product[j].quantity)-parseInt(cart[i].quantity);
                else  {
                    alert("Xin lỗi, hiện tại chúng tôi không đủ số lượng mặt hàng "+product[j].name+" ,vui lòng chờ đợi vài ngày")
                    return;
                }
                
            }     
        }
                          
        var mhd="hd"
        for(var i=0;i<10;i++){
            var x=Math.floor(Math.random() * 10);
            mhd+=x;    
            }
        var tmp= {billId:mhd, productlist, date:"",time:"", account:"", status:"false"};
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        tmp.date=date;
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        tmp.time=time;
        tmp.account=tkmk.username;
        
        
        bill.push(tmp);
            localStorage.setItem('bill',JSON.stringify(bill));
            localStorage.setItem('product',JSON.stringify(product));
            localStorage.setItem('cart','[]');
            load_cart();
            cart_exit()
            alert("Mua hàng thành công, chúng tôi sẽ ship trong 2h")
    }
    

}



window.addEventListener("storage", handler);

function handler() {
    load_cart();
}