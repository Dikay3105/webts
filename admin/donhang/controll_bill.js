function showBillList(){
        if(localStorage.getItem('bill')===null){
            return false;
        }
        var userArray = JSON.parse(localStorage.getItem('bill'));
        var tr='<tr><th>STT</th><th>Mã hóa đơn</th><th>Tài khoản mua</th><th>Ngày mua</th><th>Thời gian</th><th>Tình trạng</th><th>Chi tiết</th></tr>';
        for(var i=0; i<userArray.length;i++){
            var j=i+1;
            tr+='<tr><td>'+j+'</td><td>'+userArray[i].billId+'</td><td>'+userArray[i].account+'</td><td>'+userArray[i].date+'</td><td>'+userArray[i].time+'</td><td><label class="switch"><input id='+i+' type="checkbox" onclick="duyet(\''+userArray[i].billId+'\')"><span class="slider round"></span></label></td><td><button class="delete" onClick="custom_popup(), load_infor(\''+userArray[i].billId+'\')">&times;</button></td></tr>';
        }
        document.getElementById('list_user').innerHTML=tr;
        
        for(var i=0; i<userArray.length;i++){
            if(userArray[i].status=='true') {
                document.getElementById(i).checked=true;
                 document.getElementById(i).disabled=true;
            }
            else document.getElementById(i).checked=false;
        }
        
    }

    

    function createnewuser()
    {
        var userArray = JSON.parse(localStorage.getItem('user'));
        var user1 = {username:"", password:"", fullname: "", sdt:"", mail:"", admin:"false",avt:""};
        var x=document.getElementById('name').value;
        var y=document.getElementById('tk').value;
        var z=document.getElementById('mk').value;
        var a=document.getElementById('sdt').value;
        var b=document.getElementById('mail').value;
        var c=document.getElementById('diachi').value;

        if((x="")||(y=="" )||(z=="")||(a=="")||(b=="")||(c=="")) alert("cc");
        else {
            user1.username=y;   
            user1.password=z;
            user1.fullname=x;
            user1.sdt=a;
            user1.mail=b;
            //user1.diachi=x;
            userArray.push(user1);
        }


        localStorage.setItem('user',JSON.stringify(userArray));
        showUserList();
        custom_popout();
    }

    

function custom_popup() {
    document.getElementById('wrapper').classList.remove('hide');
}

function custom_popout() {
    document.getElementById('wrapper').classList.add('hide');
}

function load_infor(id) {
    var userArray = JSON.parse(localStorage.getItem('bill'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].billId == id){
                document.getElementById('mahd').value=userArray[i].billId;
                document.getElementById('tk').value=userArray[i].account;
                document.getElementById('date').value=userArray[i].date;
                document.getElementById('time').value=userArray[i].time;
                if(userArray[i].status=='true') {
                    document.getElementById('duyet').checked=true;
                     document.getElementById('duyet').disabled=true;
                }
                else document.getElementById('duyet').checked=false;
                var tmp='<tr><th>STT</th><th>ID</th><th>Ảnh</th><th>Tên sản phẩm</th><th>Giá</th><th>Số lượng</th></tr>';

                for(var j=0;j<userArray[i].productlist.length;j++) {
                    var z=j+1;
                    tmp+='<tr><td>'+z+'</td><td>'+userArray[i].productlist[j].productId+'</td><td><img class="img" src=../../'+userArray[i].productlist[j].img+'></td><td>'+userArray[i].productlist[j].name+'</td><td>'+userArray[i].productlist[j].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})+'</td><td>'+userArray[i].productlist[j].quantity+'</td></tr>';

                }

                document.getElementById('billdetail').innerHTML=tmp;

            }
        }
}

function custom_infor() {
    var userArray = JSON.parse(localStorage.getItem('bill'));
    var x=document.getElementById('mahd').value;
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].billId == x){
                if(document.getElementById('duyet').checked) {
                    userArray[i].status="true";
                }
                else {
                    userArray[i].status="false";
                }
                break;
            }
        }
        localStorage.setItem('bill',JSON.stringify(userArray));
        
        showBillList();
        custom_popout();
}

function check_duplicate() {
    var userArray = JSON.parse(localStorage.getItem('user'));
    var x=document.getElementById("tk").value;
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].username==x){
            alert("sai");
            return;
        }
    }
    createnewuser();
    alert("TẠO THÀNH CÔNG")
}

var t="username";
function search() {
    var userArray = JSON.parse(localStorage.getItem('bill'));
    var userSearch = [];
    var x=document.getElementById("timkiem").value.trim().toLowerCase();
    var y=document.getElementById("search_choice").value;
    for(var i=0;i<userArray.length;i++){
        if(y=="mahd") var tmp=userArray[i].billId.trim().toLowerCase();
        else if(y=="tk") var tmp=userArray[i].account.trim().toLowerCase();
        else if(y=="status") {
            return;
        }
        
		
        if(tmp.includes(x)){
            userSearch.push(userArray[i]);
        }
    }
   
    localStorage.setItem('search',JSON.stringify(userSearch));
    if(userSearch.length==0) {
        alert("ko có");
    }
    showSearchResult();
}

function show2ndchoice() {
    if(document.getElementById("search_choice").value=="status") document.getElementById("hoadon").classList.remove('hide');
    else document.getElementById("hoadon").classList.add('hide');
}

function search2nd() {
    var userArray = JSON.parse(localStorage.getItem('bill'));
    var userSearch = [];
    var y=document.getElementById("search_choice2").value;
    if(y!="macdinh")
    for(var i=0;i<userArray.length;i++){
        if(y=="ok") var tmp="true";
        else if(y=="ko") var tmp="false";
    
		
        if(userArray[i].status==tmp){
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

function cleartb(x) {
	var tr="";
    document.getElementById(x).innerHTML=tr;
}

function showSearchResult(){
    var userSearch = JSON.parse(localStorage.getItem('search'));
    if(userSearch.length!=0) {
        cleartb("list_user");
        var tr='<tr><th>STT</th><th>Mã hóa đơn</th><th>Tài khoản mua</th><th>Ngày mua</th><th>Thời gian</th><th>Tình trạng</th><th>Chi tiết</th></tr>';
        for(var i=0; i<userSearch.length;i++){
            var j=i+1;
            tr+='<tr><td>'+j+'</td><td>'+userSearch[i].billId+'</td><td>'+userSearch[i].account+'</td><td>'+userSearch[i].date+'</td><td>'+userSearch[i].time+'</td><td><label class="switch"><input id='+i+' type="checkbox" onclick="duyet(\''+userSearch[i].billId+'\')"><span class="slider round"></span></label></td><td><button class="delete" onClick="custom_popup(), load_infor(\''+userSearch[i].billId+'\')">&times;</button></td></tr>';
        }
        document.getElementById('list_user').innerHTML=tr;
        for(var i=0; i<userSearch.length;i++){
            if(userSearch[i].status=='true') {
                document.getElementById(i).checked=true;
                 document.getElementById(i).disabled=true;
            }
            else document.getElementById(i).checked=false;
        }
    }
 else document.getElementById('list_user').innerHTML='<tr><th>KO CÓ KQ</th></tr>';


 
}

function duyet(id) {
    var userArray = JSON.parse(localStorage.getItem('bill'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].billId == id){
                if(document.getElementById(i).checked)
                if(confirm('Bạn có muốn duyệt hóa đơn này?')){
                    userArray[i].status="true";

                }
            }
        }

        localStorage.setItem('bill',JSON.stringify(userArray));
        showBillList();
}


window.onload=function() {
    showBillList();
    var input = document.getElementById("timkiem");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search();
    }
    
    });
}

window.addEventListener("storage", handler);

function handler() {
    showBillList();
}
    