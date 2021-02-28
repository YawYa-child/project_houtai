$(function() {
    //获取用户信息
    gettouxuanran()

    function gettouxuanran() {
        $.ajax({
            type: "GET",
            url: "/my/userinfo",
            // headers: {
            //     Authorization:
            // },
            success: function(res) {

            }
        });
    }
})