$(function() {
    //获取用户信息
    Agettouxuanran()


})

function Agettouxuanran() {
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        // headers: {
        //     Authorization:
        // },
        success: function(res) {
            // console.log(res);
            checkName(res.data)
        }
    });
}

//封装判断名字的函数
function checkName(user) {
    // console.log(user);
    let name = user.nickname || user.username
    let T = name[0].toUpperCase()
    if (user.user_pic === 'null') {
        $('.avater').html(T).show()
        $('.layui-nav-img').hide()
    } else {
        $('.avater').hide()
        $('.layui-nav-img').attr('src', user.user_pic).show()
    }
    $('#welcome').html('欢迎' + name)
}