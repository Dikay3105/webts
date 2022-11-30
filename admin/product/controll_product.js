let link="";
function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{productId:'GNPSĐC000008', loai:"nhẫn",     img:"./img/sanphambanchay/GNPSDDC000008-Nhan-Vang-18K-dinh-Southsea-Pearl-PNJ-Ngoc-Bien-1.png", name:'Nhẫn Vàng 18K đính Southsea Pearl PNJ Ngọc Biển PSDDC000008', price:13699000, quantity: 123},
			{productId:'GNĐ00W003597', loai:"nhẫn",      img:"./img/sanphambanchay/GNDD00W003597.png", name:'Nhẫn Kim cương Vàng trắng 14K Disney|PNJ Cinderella DD00W003597', price:12208000, quantity: 1234},
			{productId:'GN0000W002212', loai:"nhẫn",     img:'./img/sanphambanchay/gn0000w002212-nhan-nam-vang-trang-14k-disneypnj-cinderella-1.png', name:'Nhẫn nam Vàng trắng 14K Disney|PNJ Cinderella 0000W002212', price:6543000, quantity: 65},
			{productId:'GNDDDDW007498',  loai:"nhẫn",    img:'./img/sanphambanchay/gnddddw007498-nhan-kim-cuong-vang-trang-14k-disneypnj-sleeping-beauty-01.png', name:'Nhẫn Kim cương Vàng trắng 14K Disney|PNJ Sleeping Beauty DDDDW007498', price:17589000, quantity: 98},
			{productId:'GNDDDDW007929', loai:"nhẫn",    img:'./img/sanphambanchay/gnddddw007929-nhan-kim-cuong-vang-trang-14k-disneypnj-beauty-and-the-beast-01.png', name:'Nhẫn Kim cương Vàng trắng 14K Disney|PNJ Beauty & The Beast DDDDW007929', price:11744000, quantity: 123},
			{productId:'GNDD00X000287', loai:"nhẫn",    img:'./img/sanphambanchay/gndd00x000287-nhan-kim-cuong-vang-14k-disneypnj-snow-white-and-the-seven-dwarfs-01.png', name:'Nhẫn Kim cương Vàng 14K Disney|PNJ Snow White & the Seven Dwarfs DD00X000287', price:12084000, quantity: 28},
			{productId:'GNDDDDW007651', loai:"nhẫn",    img:'./img/sanphambanchay/gnddddw007651-nhan-kim-cuong-vang-trang-14k-pnj-timeless-diamond.png', name:'Nhẫn Kim Cương Vàng trắng 14K PNJ Timeless Diamond DDDDW007651', price:41992000, quantity: 25},
			{productId:'GNDDDDC001130', loai:"nhẫn",    img:'./img/sanphambanchay/gnddddc001130-nhan-kim-cuong-vang-14k-pnj-timeless-diamond.png', name:'Nhẫn Kim Cương Vàng 14K PNJ Timeless Diamond DDDDC001130', price:67128000, quantity: 12},
			{productId:'GNDD00W003328',  loai:"nhẫn",   img:'./img/sanphambanchay/gndd00w003328-nhan-kim-cuong-nam-vang-trang-14k-pnj-01.png', name:'Nhẫn Nam Kim Cương Vàng trắng 14K PNJ True Love DD00W003328', price:8640000, quantity: 29},
			{productId:'GNDDDDW007540', loai:"nhẫn",    img:'./img/sanphambanchay/gnddddw007540-nhan-kim-cuong-vang-trang-14k-pnj-1.png', name:'Nhẫn Nam Kim Cương Vàng trắng 14K PNJ DDDDW007540', price:100180000, quantity: 40},	
            {productId:'GMDD00W000134', loai:"dây chuyền",   img:'./img/sanphambanchay/gmdd00w000134-mat-day-chuyen-kim-cuong-vang-trang-14k-pnj-001.png', name:'Mặt dây chuyền Kim cương Vàng trắng 14K PNJ DD00W000134', price:10851000, quantity: 202 },
			{productId:'GD0000W000431', loai:"dây chuyền",   img:'./img/sanphambanchay/gd0000w000431-day-chuyen-vang-trang-18k-pnj-01.png', name:'Dây chuyền vàng trắng 18K PNJ 0000W000431', price:8625000, quantity: 55},
			{productId:'GD0000W000281', loai:"dây chuyền",  img:'./img/sanphambanchay/gd0000w000281-day-chuyen-vang-trang-18k-pnj-01.png', name:'Dây chuyền Vàng trắng 18K PNJ 0000W000281', price:12051000, quantity: 52},
			{productId:'GD0000W000268',  loai:"dây chuyền", img:'./img/sanphambanchay/gd0000w000268-day-chuyen-vang-trang-18k-pnj-01.png', name:'Dây chuyền Vàng trắng Ý 18K PNJ 0000W000268', price:7627000, quantity: 21},
			{productId:'GD0000W000233',  loai:"dây chuyền", img:'./img/sanphambanchay/gd0000w000233-day-chuyen-vang-trang-y-18k-pnj-kieu-day-bi-0001.png', name:'Dây chuyền Vàng trắng Ý 18K PNJ kiểu dây bi 0000W000233', price:18381000, quantity: 29},
			{productId:'SD0000K000023', loai:"dây chuyền",  img:'./img/sanphambanchay/gd0000w000233-day-chuyen-vang-trang-y-18k-pnj-kieu-day-bi-0001.png', name:'Dây chuyền bạc PNJSilver 0000K000023', price:325000, quantity: 89},
			{productId:'GD0000Y000711', loai:"dây chuyền",  img:'./img/sanphambanchay/gd0000y000711-day-chuyen-vang-18k-pnj-kieu-day-dan-dap-chu-s-xoan-suot.png', name:'Dây chuyền Vàng 18K PNJ kiểu dây đan dập chữ S xoắn suốt 0000Y000711', price:2384000, quantity:23},
			{productId:'GD0000W000582', loai:"dây chuyền",  img:'./img/sanphambanchay/gd0000w000582-day-chuyen-vang-trang-y-18k-pnj-001.png', name:'Dây chuyền Vàng trắng Ý 18K PNJ 0000W000582', price:23395000, quantity: 12},
			{productId:'GD0000W000583', loai:"dây chuyền",  img:'./img/sanphambanchay/gd0000w000583-day-chuyen-vang-trang-y-18k-pnj.png', name:'Dây chuyền Vàng trắng Ý 18K PNJ 0000W000583', price:14095000, quantity: 14},
			{productId:'GD0000W000101', loai:"dây chuyền",  img:'./img/sanphambanchay/gdmrwkfb140.006-day-chuyen-pnj-vang-trang-10k.png', name:'Dây chuyền Vàng trắng 10K PNJ 0000W000101', price:3647000, quantity: 76},
            {productId:'WTI00000105', loai:"đồng hồ",   img:'./img/sanphambanchay/wdp11k03191.000-t086.207.11.031.10-dong-ho-nu-day-thep-khong-gi-chong-nuoc-tissot.png', name:'Đồng Hồ Tissot Nữ T086.207.11.031.10 Dây Thép Không Gỉ 33mm', price:18697000, quantity: 123},
			{productId:'WTI00000177',  loai:"đồng hồ",  img:'./img/sanphambanchay/wdf32t03032.000-t103.110.22.033.00-dong-ho-thoi-trang-nu-day-thep-khong-gi-chong-nuoc-tissot.png', name:'Đồng Hồ Tissot Nữ T103.110.22.033.00 Dây Thép Không Gỉ 24.4mm x 27.2mm', price:16000000, quantity: 234},
			{productId:'WTI00000410',  loai:"đồng hồ",  img:'./img/sanphambanchay/T103.210.36.018.00_Desktop_1.png', name:'Đồng Hồ Tissot Nữ T103.210.36.018.00 Dây Da 38mm', price:9790000, quantity: 45},
			{productId:'WCI00000136',  loai:"đồng hồ",  img:'./img/sanphambanchay/wbe22p02105.000-em0335.51d-dong-ho-nu-day-thep-khong-gi-chong-nuoc-citizen-1.png', name:'Đồng Hồ Citizen Nữ EM0335-51D Dây Thép Không Gỉ 30mm', price:7480000, quantity: 45},
			{productId:'WTI00000018',  loai:"đồng hồ",  img:'./img/sanphambanchay/wda32t03278.000-t006.428.22.038.01-dong-ho-nam-day-thep-khong-gi-chong-nuoc-tissot_2r9k-g5.png', name:'Đồng Hồ Tissot Nam T006.428.22.038.01 Dây Thép Không Gỉ 39.3mm', price:21368000, quantity: 12},
			{productId:'WCI00000140',  loai:"đồng hồ",  img:'./img/sanphambanchay/wbe22p03493.000-em0556.87d-dong-ho-thoi-trang-nu-day-thep-khong-gi-chong-nuoc-citizen.png', name:'Đồng Hồ Citizen Nữ EM0556-87D Dây Thép Không Gỉ 32mm', price:10985000, quantity: 12},
			{productId:'WCK00000090',  loai:"đồng hồ",  img:'./img/sanphambanchay/wcf11t03441.000-k7e23146-dong-ho-thoi-trang-nu-day-thep-khong-gi-chong-nuoc-ck.png', name:'Đồng Hồ Calvin Klein Nữ K7E23146 Dây Thép Không Gỉ 36mm', price:3900000, quantity: 12},
			{productId:'WMI00000046',  loai:"đồng hồ",  img:'./img/sanphambanchay/wmf33v03338.000-mk3639-dong-ho-nu-day-thep-khong-gi-chong-nuoc-michael-kors.png', name:'Đồng Hồ Michael Kors Nữ MK3639 Dây Thép Không Gỉ 36mm', price:4284000, quantity: 12},
			{productId:'WCK00000082',  loai:"đồng hồ",  img:'./img/sanphambanchay/wcf11t03050.000-k6k31b46-dong-ho--nam-day-thep-khong-gi-chong-nuoc-ck.png', name:'Đồng Hồ Calvin Klein Nam K6K31B46 Dây Thép Không Gỉ 38mm', price:4050000, quantity: 12},
            {productId:'GBTPXMW000032',  loai:"bông tai",   img:'./img/sanphambanchay/gbtpxmw000032-bong-tai-vang-trang-14k-dinh-da-topaz-pnj.png', name:'Bông tai Vàng trắng 14K đính đá Topaz PNJ TPXMW000032', price:7146000, quantity: 15},
			{productId:'GBXMXMW000111',  loai:"bông tai",   img:'./img/sanphambanchay/gbxmxmw000111-bong-tai-vang-trang-10k-dinh-da-ecz-pnj-1.png', name:'Bông tai Vàng trắng 10K đính đá ECZ PNJ XMXMW000111', price:4419000, quantity: 19},
			{productId:'GBPAXMW000084',  loai:"bông tai",   img:'./img/sanphambanchay/gbpaxmw000084-bong-tai-vang-trang-14k-dinh-ngoc-trai-akoya-pnj-01.png', name:'Bông tai vàng trắng 14K đính ngọc trai Akoya PNJ PAXMW000084', price:9624000, quantity: 24},
			{productId:'GBXMXMW060275',  loai:"bông tai",   img:'./img/sanphambanchay/gbxmxmw060275-bong-tai-vang-trang-10k-dinh-da-ecz-swarovski-pnj-vu-dieu-tinh-te-001.png', name:'Bông tai Vàng trắng 10K đính đá ECZ PNJ Vũ điệu tinh tế XMXMW060275', price:4070000, quantity: 10},
			{productId:'GBXMXMW000110',  loai:"bông tai",   img:'./img/sanphambanchay/gbxmxmw000110-bong-ta-vang-trang-10k-dinh-da-ecz-swarovski-pnj-01.png', name:'Bông tai Vàng trắng 10K đính đá ECZ PNJ XMXMW000110', price:3032000, quantity: 11},
			{productId:'GBDDDDW060179',   loai:"bông tai",  img:'./img/sanphambanchay/gbddddw060179-bong-tai-kim-cuong-vang-trang-18k-pnj-1.png' , name:'Bông tai Kim cương Vàng trắng 18K PNJ DDDDW060179', price:54000000, quantity: 19 },
			{productId:'GBDD00W001145',   loai:"bông tai",  img:'./img/sanphambanchay/gbdd00w001145-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png', name:'Bông tai Kim cương Vàng trắng 14K PNJ DD00W001145', price:48320000, quantity: 111 },
			{productId:'GBDDDDW001967',  loai:"bông tai",   img:'./img/sanphambanchay/gbddddw001967-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png', name:'Bông tai Kim cương Vàng trắng 14K PNJ DDDDW001967', price:112394000, quantity: 23},
			{productId:'GBDDDDX000006',  loai:"bông tai",   img:'./img/sanphambanchay/gbddddx000006-bong-tai-kim-cuong-nau-vang-18k-pnj.png', name:'Bông tai Kim cương nâu Vàng 18k PNJ DDDDX000006', price:61640000, quantity: 18},
			{productId:'GBDDDDW001870',  loai:"bông tai",   img:'./img/sanphambanchay/gbddddw001870-bong-tai-kim-cuong-vang-trang-14k-pnj-001.png', name:'Bông tai Kim cương Vàng trắng 14K PNJ DDDDW001870', price:89573000, quantity: 36 },
		];
        localStorage.setItem('product',JSON.stringify(productArray));
	}
}


function showProductList(){
    var ar1 = JSON.parse(localStorage.getItem('product'));
	
    var tr='<tr><th>STT</th><th>ID</th><th>Ảnh</th><th>Tên SP</th><th>Giá</th><th>Số lượng</th><th>XÓA</th><th>SỬA</th></tr>';
	var j=0;
    for(var i=0; i<ar1.length;i++){
        j=i+1;
        if(String(ar1[i].img).slice(0,2)=="./")
        tr+='<tr><td>'+j+'</td><td>'+ar1[i].productId+'</td><td><img class="img" src=../../'+ar1[i].img+'></td><td>'+ar1[i].name+'</td><td>'+ar1[i].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})+'</td><td>'+ar1[i].quantity+'</td><td><button class="delete" onClick="deleteproduct(\''+ar1[i].name+'\')">&times;</button></td><td><button class="delete" onClick="load_infor(\''+ar1[i].name+'\'), custom_popup()">&times;</button></td></tr>';
        else 
        tr+='<tr><td>'+j+'</td><td>'+ar1[i].productId+'</td><td><img class="img" src='+ar1[i].img+'></td><td>'+ar1[i].name+'</td><td>'+ar1[i].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})+'</td><td>'+ar1[i].quantity+'</td><td><button class="delete" onClick="deleteproduct(\''+ar1[i].name+'\')">&times;</button></td><td><button class="delete" onClick="load_infor(\''+ar1[i].name+'\'), custom_popup()">&times;</button></td></tr>';

    }
    document.getElementById('list_user').innerHTML=tr;
}

    function deleteproduct(usernamedelete){
        var userArray = JSON.parse(localStorage.getItem('product'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].name == usernamedelete){
                if(confirm('Bạn có muốn xóa sản phẩm này?')){
                    userArray.splice(i, 1);
                    showProductList();
                }
                
            }
        }
        localStorage.setItem('product',JSON.stringify(userArray));
        showProductList();
    }

    function createnewproduct()
    {
        var userArray = JSON.parse(localStorage.getItem('product'));
        var user1 = {productId:"", name:"", img: "", price:"", quantity:"", loai:""};
        var x=document.getElementById('id').value;
        var y=document.getElementById('name').value;
        var z=document.getElementById('gia').value;
        var a=document.getElementById('sl').value;
        if(link!="") var b=link;
        var c=document.getElementById('loaisp').value;
        if((x=="")||(y=="" )||(z=="")||(a=="")) alert("Không được để thiếu");
        else {
            user1.productId=document.getElementById('id').value;
            user1.name=y;
            user1.img=b;
            user1.price=parseInt(z);
            user1.quantity=parseInt(a);
            user1.loai=c;
            userArray.push(user1);
        }


            localStorage.setItem('product',JSON.stringify(userArray));
            
            showProductList();
            custom_popout();
    }

   


function custom_popup() {
    document.getElementById('wrapper').classList.remove('hide');
}

function custom_popout() {
    document.getElementById('wrapper').classList.add('hide');
    //clear();
}

function load_infor(usernamecustom) {
    var userArray = JSON.parse(localStorage.getItem('product'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].name == usernamecustom){
                document.getElementById('id').value=userArray[i].productId;
                document.getElementById('name').value=userArray[i].name;
                document.getElementById('gia').value=userArray[i].price;
                document.getElementById('sl').value=userArray[i].quantity;
                if(String(userArray[i].img).slice(0,2)=="./")   var tr='<img class="img" src="../../'+userArray[i].img+'">';
                else var tr='<img class="img" src="'+userArray[i].img+'">';
                
                document.getElementById('img').innerHTML=tr;
                document.getElementById('loaisp').value=userArray[i].loai;
            }
        }
}

function custom_infor() {
    var userArray = JSON.parse(localStorage.getItem('product'));
    var x=document.getElementById('id').value;
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].productId == x){
                userArray[i].productId=document.getElementById('id').value;
                userArray[i].name=document.getElementById('name').value;
                userArray[i].price=document.getElementById('gia').value;
                userArray[i].quantity=document.getElementById('sl').value;
                userArray[i].loai=document.getElementById('loaisp').value;
                if(link!="") userArray[i].img=link;
                break;
            }
        }
        localStorage.setItem('product',JSON.stringify(userArray));
        
        showProductList();
        custom_popout();
}

function check_duplicate() {
    var userArray = JSON.parse(localStorage.getItem('product'));
    var x=document.getElementById("id").value;
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].productId==x){
            alert("Không được tạo trùng Mã sản phẩm");
            return;
        }
    }
    createnewproduct();
    alert("TẠO THÀNH CÔNG")
}








function clear(x) {
	var tr="";
    document.getElementById(x).innerHTML=tr;
}

function showSearchResult(){
    var userSearch = JSON.parse(localStorage.getItem('search'));
    if(userSearch.length!=0) {
		var tr='<tr><th>STT</th><th>ID</th><th>Ảnh</th><th>Tên SP</th><th>Giá</th><th>Số lượng</th><th>XÓA</th><th>SỬA</th></tr>';
    }
   
    for(var i=0; i<userSearch.length;i++){
        var j=i+1;
        if(String(userSearch[i].img).slice(0,2)=="./")
        tr+='<tr><td>'+j+'</td><td>'+userSearch[i].productId+'</td><td><img class="img" src=../../'+userSearch[i].img+'></td><td>'+userSearch[i].name+'</td><td>'+userSearch[i].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})+'</td><td>'+userSearch[i].quantity+'</td><td><button class="delete" onClick="deleteproduct(\''+userSearch[i].name+'\')">&times;</button></td><td><button class="delete" onClick="load_infor(\''+userSearch[i].name+'\'), custom_popup()">&times;</button></td></tr>';
        else 
        tr+='<tr><td>'+j+'</td><td>'+userSearch[i].productId+'</td><td><img class="img" src='+userSearch[i].img+'></td><td>'+userSearch[i].name+'</td><td>'+userSearch[i].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})+'</td><td>'+userSearch[i].quantity+'</td><td><button class="delete" onClick="deleteproduct(\''+userSearch[i].name+'\')">&times;</button></td><td><button class="delete" onClick="load_infor(\''+userSearch[i].name+'\'), custom_popup()">&times;</button></td></tr>';    }
    if(userSearch.length!=0) {
        document.getElementById('list_user').innerHTML=tr;
    } else document.getElementById('list_user').innerHTML='<tr><th>KO CÓ KQ</th></tr>';



}

function search() {
    var userArray = JSON.parse(localStorage.getItem('product'));
    //var userSearch = JSON.parse(localStorage.getItem('user'));
    var userSearch = [];
    var x=document.getElementById("timkiem").value.toLowerCase();
    var y=document.getElementById("search_choice").value;
    for(var i=0;i<userArray.length;i++){
        switch(y) {
            case "gia": {
                x=document.getElementById("timkiem").value;
                if(x.includes(String(userArray[i].price))){
                    userSearch.push(userArray[i]);
                }
                break;
            }
            case "sl": {
                x=parseInt(document.getElementById("timkiem").value);
                if(x==userArray[i].quantity){
                    userSearch.push(userArray[i]);
                }
                break;
            }
            case "id": {
                var tmp=userArray[i].productId.toLowerCase();
                if(tmp.includes(x)){
                    userSearch.push(userArray[i]);
                }
                break;
            }
            case "name": {
                var tmp=userArray[i].name.toLowerCase();
                if(tmp.includes(x)){
                    userSearch.push(userArray[i]);
                }
                break;
            }
            case "loai": {
                return;
            }
        }
    }
    localStorage.setItem('search',JSON.stringify(userSearch));
    if(userSearch.length==0) {
        alert("ko có");
    }
	clear("list_user");
    showSearchResult();
}

function show2ndchoice() {
    if(document.getElementById("search_choice").value=="loai") document.getElementById("hoadon").classList.remove('hide');
    else document.getElementById("hoadon").classList.add('hide');
}

function search2nd() {
    var userArray = JSON.parse(localStorage.getItem('product'));
    var userSearch = [];
    var y=document.getElementById("search_choice2").value;
    if(y!="macdinh")
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].loai==y){
            userSearch.push(userArray[i]);
    }
}
    else userSearch=userArray;
   
    localStorage.setItem('search',JSON.stringify(userSearch));
    if(userSearch.length==0) {
        alert("ko có");
    }
    showSearchResult();
}



    function clear_infor() {
        document.getElementById('name').value="";
        document.getElementById('tk').value="";
        document.getElementById('mk').value="";
        document.getElementById('sdt').value="";
        document.getElementById('mail').value="";
        document.getElementById('diachi').value="";
    }



window.onload=function() {
	createProduct();
	var input = document.getElementById("timkiem");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search();
        //document.getElementById('list_user').classList.add('hide');
    }
    
    });
	showProductList();
    
    const dndElement = document.querySelector('#dnd')
const resultElement = document.getElementById('img');
const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']

dndElement.addEventListener('dragover', function(e) {
  e.preventDefault()
  this.classList.add('drag-over')
})

dndElement.addEventListener('dragleave', function(e) {
  e.preventDefault()
  this.classList.remove('drag-over')
})

dndElement.addEventListener('drop', function(e) {
  e.preventDefault()
  this.classList.remove('drag-over')
  const files = e.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    const file = files[i]
    renderPreviewImage(file)
  }
})

function renderPreviewImage(file) {
  const fileType = file['type']

  if (!validImageTypes.includes(fileType)) {
    resultElement.insertAdjacentHTML(
      'beforeend',
      '<span class="preview-img">Chọn ảnh đi :3</span>'
    )
    return
  }

  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)

  fileReader.onload = function() {
    const url = fileReader.result
    clear("img");
    link=url;
    resultElement.insertAdjacentHTML(
      'beforeend',
      `<img src="${url}" alt="${file.name}" class="img" />`
    )
  }

}}

window.addEventListener("storage", handler);

function handler() {
    location.reload();
}
    