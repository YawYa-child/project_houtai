$(function() {
    applyF() //一进来获取表单的值
    function applyF() {
        $.ajax({
            type: "GET",
            url: "/my/userinfo",
            data: "data",
            success: function(res) {
                // console.log(res);
                layui.form.val('fui', res.data)
            }
        });
    }

    // 给表单注册一个提交事件
    $('.layui-form').on('submit', function(e) {
            e.preventDefault()
            $.ajax({
                type: "POST",
                url: "/my/userinfo",
                data: $(this).serialize(),
                success: function(res) {
                    console.log(res);
                    window.parent.Agettouxuanran()
                }
            });

        })
        //重置按钮
    $('.bi').click(function(e) {
        e.preventDefault()
            // console.log(1);
        applyF();
    })
})