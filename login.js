    var userAdmin = [];
    function check_login() {
        var userArray = JSON.parse(localStorage.getItem('user'));
        //var userSearch = JSON.parse(localStorage.getItem('user'));
        var userSearch = [];
        var x=document.getElementById("tk").value;
        var y=document.getElementById("mk").value;
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].username==x && userArray[i].password==y){
                alert("Đăng Nhập Thành Công");
                remember_tkmk();
                avt_fill();    
                login_exit();
                document.getElementById('dn_btn').classList.add('hide');
                document.querySelector('.logouser').classList.remove('hide');
                localStorage.setItem('login_status','true');
                if(userArray[i].admin=="true") document.querySelector('.setting_zone').classList.remove('hide');
                return;
            }
        }
        document.getElementById('login_error').classList.remove('hide');
    }
    


    var userArray = [];
    function create_admin(){
        if(localStorage.getItem('user')==null){		
            alert("co vao day k!!!!!!!!!!!");
            var user1 = {username:"khoa", password:"3105", fullname: "khoa", sdt:"", mail:"", admin:"true"};
            userArray.push(user1);
            localStorage.setItem('user',JSON.stringify(userArray));
        }
    }

    function createnewuser()
    {
        var userArray = JSON.parse(localStorage.getItem('user'));
        var user1 = {username:"", password:"", fullname: "", sdt:"", mail:"", admin:"false", avt:""};
        user1.username=document.getElementById('tk_new').value;
        user1.password=document.getElementById('mk_new').value;
        user1.sdt=document.getElementById('sdt').value;
        user1.mail=document.getElementById('mail').value;
        user1.diachi=document.getElementById('diachi').value;
        if(document.getElementById('mk_new').value!=document.getElementById('mk_check').value) alert('Sai mật khẩu xác nhận')
        else userArray.push(user1);
        
        localStorage.setItem('user',JSON.stringify(userArray));
    }

    function check_duplicate() {
        var userArray = JSON.parse(localStorage.getItem('user'));
        var x=document.getElementById("tk_new").value;
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].username==x){
                alert("sai");
                return;
            }
        }
        createnewuser();
        alert("ĐĂNG KÍ THÀNH CÔNG")
        login_popup();
        signup_exit();
    }

    
    function remember_tick()
    {
        if(document.getElementById('nhodn').checked) localStorage.setItem('nhodn','true');
        else localStorage.setItem('nhodn','false');
    }

    function remember_tkmk()
    {
            var x=document.getElementById("tk").value;
            var y=document.getElementById("mk").value;
            var usertmp = {username:x, password:y};
            localStorage.setItem('nhotkmk',JSON.stringify(usertmp));
    }

    function autofill() {
        var userArray = JSON.parse(localStorage.getItem('user'));
        var usertmp = JSON.parse(localStorage.getItem('nhotkmk'));
        var status = JSON.parse(localStorage.getItem("nhodn"));
        if (status) {
            document.getElementById('tk').value=usertmp.username;
            document.getElementById('mk').value=usertmp.password;
            document.getElementById('nhodn').checked='true';
        }
        
        
        
    }
    
    
      
    function avt_fill() {
        var userArray = JSON.parse(localStorage.getItem('user'));
        var x=JSON.parse(localStorage.getItem('nhotkmk'));
        var s='<img src="./img/avt/default.jpg"/>';
        for(var i=0;i<userArray.length;i++){
            if(userArray[i].username==x.username){
                if(userArray[i].avt!="") {
                    s='';
                    s+='<img src="'+userArray[i].avt+'"/>';
                }
                
                break;
        }
        
        }
        document.querySelector('.logouser').innerHTML=s;
    }

    function logout() {
        if(confirm('Bạn có muốn đăng xuất?')){
            document.getElementById('dn_btn').classList.remove('hide');
            document.querySelector('.logouser').classList.add('hide');
            localStorage.setItem('login_status','false');
        }
    }


        