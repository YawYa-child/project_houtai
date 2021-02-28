$(function() {
    // 点击登录超链接跳转

    $('.links-a').on('click', function() {
            $(this).parent().parent().hide().siblings('.reg').show()
        })
        // 点击注册超链接跳转
    $('.regs a').on('click', function() {
            $(this).parent().parent().parent().hide().siblings('.login-g').show()
        })
        //layui 设置表单的验证,自定义]
        //要先调用layui里面的表单对象
    var form = layui.form
    form.verify({
        psd: [/^[\S]{6,12}$/,
            '密码必须6到12位'
        ],
        //通过函数形参的方法拿到表单的值进行比较
        repsd: function(value) {
            // console.log(value);
            // console.log();
            let pwd = $('.reg [name=password]').val()
            if (pwd !== value) {
                return '确认密码不一致'
            }
        }
    })

    //监听登录表单的提交时间AJAX
    // console.log($('.login-g'));

    $('.login-g').submit(function(e) {
        e.preventDefault()
            // console.log($(this).serialize());
        $.ajax({
            type: "POST",
            url: "/api/login",
            data: $(this).serialize(),
            success: function(res) {
                if (res.status != 0) return layui.layer.msg('登录失败')
                console.log(res.token);
                //跳转到后台主页
                location.href = 'index.html'
            }
        });
    })

    //监听注册成功页面

    // console.log($('.reg [name=username]'));

    $('.reg form').on('submit', function(e) {
        e.preventDefault()
        var data = {
                username: $('.reg [name=username]').val(),
                password: $('.reg [name=password').val()
            }
            // console.log($('.reg [name=password]').val());
        $.ajax({
            type: "POST",
            url: "/api/reguser",
            data: data,
            success: function(res) {
                console.log(res);
                if (res.status != 0) return layer.msg('注册失败')
                    //人为点击跳转到登录
                var time = setTimeout(function() {
                        $('.reg a').click()
                    }, 1000)
                    // clearTimeout(time)
            }
        });
    })

})