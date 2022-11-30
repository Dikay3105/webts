function login_popup() {
    document.getElementById('login').classList.remove('hide');
    document.getElementById('wrapper').style.filter='blur(10px)';
    document.getElementById('login_container').classList.remove('hide');
}

function login_exit() {
    document.getElementById('login').classList.add('hide');
    document.getElementById('wrapper').style.filter='blur(0px)';
    document.getElementById('login_container').classList.add('hide');
    document.getElementById('login_error').classList.add('hide');
}

function signup_popup() {
    login_exit();
    document.getElementById('signup').classList.remove('hide');
    document.getElementById('wrapper').style.filter='blur(10px)';
    document.getElementById('signup_container').classList.remove('hide');
    
}

function signup_exit() {
    document.getElementById('signup').classList.add('hide');
    document.getElementById('wrapper').style.filter='blur(0px)';
    document.getElementById('signup_container').classList.add('hide');
}

