function showUserList(){
        if(localStorage.getItem('user')===null){
            return false;
        }
        var userArray = JSON.parse(localStorage.getItem('user'));
        var tr='<tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>MẬT KHẨU</th><th>SĐT</th><th>Mail</th><th>Địa chỉ</th><th>Admin</th><th>XÓA</th><th>SỬA</th></tr>';
        for(var i=0; i<userArray.length;i++){
            var j=i+1;
            tr+='<tr><td>'+j+'</td><td>'+userArray[i].fullname+'</td><td>'+userArray[i].username+'</td><td>'+userArray[i].password+'</td><td>'+userArray[i].sdt+'</td><td>'+userArray[i].mail+'</td><td>'+userArray[i].diachi+'</td><td><label class="switch"><input id='+i+' type="checkbox" onclick="setadmin(\''+userArray[i].username+'\')"><span class="slider round"></span></label></td><td><button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td><td><button class="delete" onClick="load_infor(\''+userArray[i].username+'\'), custom_popup()">&times;</button></td></tr>';
        }
        document.getElementById('list_user').innerHTML=tr;
        
        for(var i=0; i<userArray.length;i++){
            if(userArray[i].admin=='true') {
                document.getElementById(i).checked=true;
                 document.getElementById(i).disabled=true;
            }
            else document.getElementById(i).checked=false;
        }
        
    }

    function deleteuser(usernamedelete){
        var userArray = JSON.parse(localStorage.getItem('user'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].username == usernamedelete){
                if(userArray[i].admin=="true") alert("Không thể xóa tài khoản admin");
                else {
                    if(confirm('Bạn có muốn xóa tài khoản này?')){
                        userArray.splice(i, 1);
                    }
                }
            }
        }
        localStorage.setItem('user',JSON.stringify(userArray));
        showUserList();
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
        if((x=="")||(y=="")||(z=="")||(a=="")||(b=="")||(c=="")) alert("Không được để thiếu thông tin");
        else {
            user1.username=y;   
            user1.password=z;
            user1.fullname=document.getElementById('name').value;
            user1.sdt=a;
            user1.mail=b;
            user1.diachi=c;
            userArray.push(user1);
        }


        localStorage.setItem('user',JSON.stringify(userArray));
        showUserList();
        custom_popout();
    }

    function clear() {
        document.getElementById('name').value="";
        document.getElementById('tk').value="";
        document.getElementById('mk').value="";
        document.getElementById('sdt').value="";
        document.getElementById('mail').value="";
        document.getElementById('diachi').value="";
        document.getElementById('admin').checked=false;
    }

function custom_popup() {
    document.getElementById('wrapper').classList.remove('hide');
}

function custom_popout() {
    document.getElementById('wrapper').classList.add('hide');
    clear();
}

function load_infor(usernamecustom) {
    var userArray = JSON.parse(localStorage.getItem('user'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].username == usernamecustom){
                document.getElementById('name').value=userArray[i].fullname;
                document.getElementById('tk').value=userArray[i].username;
                document.getElementById('mk').value=userArray[i].password;
                document.getElementById('sdt').value=userArray[i].sdt;
                document.getElementById('mail').value=userArray[i].mail;
                document.getElementById('diachi').value=userArray[i].diachi;
                if(userArray[i].admin=='true') {
                    document.getElementById('admin').checked=true;
                     document.getElementById('admin').disabled=true;
                }
                else document.getElementById('admin').checked=false;
            }
        }
}

function custom_infor() {
    var userArray = JSON.parse(localStorage.getItem('user'));
    var x=document.getElementById('tk').value;
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].username == x){
                userArray[i].fullname=document.getElementById('name').value;
                userArray[i].diachi=document.getElementById('diachi').value;
                userArray[i].password=document.getElementById('mk').value;
                userArray[i].sdt=document.getElementById('sdt').value;
                userArray[i].mail=document.getElementById('mail').value;
                if(document.getElementById('admin').checked) {
                    userArray[i].admin="true";
                }
                else {
                    userArray[i].admin="false";
                }
                break;
            }
        }
        localStorage.setItem('user',JSON.stringify(userArray));
        
        showUserList();
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


function search() {
    var userArray = JSON.parse(localStorage.getItem('user'));
    //var userSearch = JSON.parse(localStorage.getItem('user'));
    var userSearch = [];
    var x=document.getElementById("timkiem").value.trim().toLowerCase();
    var y=document.getElementById("search_choice").value;
    for(var i=0;i<userArray.length;i++){
        if(y=="tk") var tmp=userArray[i].username.trim().toLowerCase();
        else if(y=="mk") var tmp=userArray[i].password.trim().toLowerCase();
        else if(y=="sdt") var tmp=userArray[i].sdt.trim().toLowerCase();
        else if(y=="mail") var tmp=userArray[i].mail.trim().toLowerCase();
        else if(y=="name") var tmp=userArray[i].fullname.trim().toLowerCase();
        else if(y=="diachi") var tmp=userArray[i].diachi.trim().toLowerCase();
		
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

function cleartb(x) {
	var tr="";
    document.getElementById(x).innerHTML=tr;
}

function showSearchResult(){
    var userSearch = JSON.parse(localStorage.getItem('search'));
    if(userSearch.length!=0) {
        cleartb("list_user");
        var tr='<tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>MẬT KHẨU</th><th>SĐT</th><th>Mail</th><th>Địa chỉ</th><th>Admin</th><th>XÓA</th><th>SỬA</th></tr>';
        for(var i=0; i<userSearch.length;i++){
            var j=i+1;
            tr+='<tr><td>'+j+'</td><td>'+userSearch[i].fullname+'</td><td>'+userSearch[i].username+'</td><td>'+userSearch[i].password+'</td><td>'+userSearch[i].sdt+'</td><td>'+userSearch[i].mail+'</td><td>'+userSearch[i].diachi+'</td><td><label class="switch"><input id='+i+' type="checkbox" onclick="setadmin(\''+userSearch[i].username+'\')"><span class="slider round"></span></label></td><td><button class="delete" onClick="deleteuser(\''+userSearch[i].username+'\')">&times;</button></td><td><button class="delete" onClick="load_infor(\''+userSearch[i].username+'\'), custom_popup()">&times;</button></td></tr>';
        }
        document.getElementById('list_user').innerHTML=tr;
        for(var i=0; i<userSearch.length;i++){
            if(userSearch[i].admin=='true') {
                document.getElementById(i).checked=true;
                 document.getElementById(i).disabled=true;
            }
            else document.getElementById(i).checked=false;
        }

    } else document.getElementById('list_user').innerHTML='<tr><th>KO CÓ KQ</th></tr>';



}

function setadmin(admin) {
    var userArray = JSON.parse(localStorage.getItem('user'));
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].username == admin){
                if(document.getElementById(i).checked)
                if(confirm('Bạn có muốn thiết lập admin cho tài khoản này?')){
                    userArray[i].admin="true";

                }
            }
        }

        localStorage.setItem('user',JSON.stringify(userArray));
        showUserList();
}


window.onload=function() {
    showUserList();
    var input = document.getElementById("timkiem");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search();

    }
    
    });
}

window.addEventListener("storage", handler);

function handler() {
    location.reload();
}
    