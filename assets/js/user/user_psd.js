$(function() {
    // 设置验证方式
    layui.form.verify({
        chpsd: function(value) {
            if (value === $('[name=oldPwd]').val()) return '不可以和原密码一样'
        },
        psd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        rech: function(value) {
            if (value === $('[name=newPwd]').val()) return '两次密码必须一致'
        }
    })

    // 提交事件
    $('.layui-form').submit(function(e) {
        e.preventDefault()
        $.ajax({
            type: "POST",
            url: "/my/updatepwd",
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);
                window.parent.location.href = '/login.html'
                localStorage.removeItem('token')
            }
        });
    })
})