$(function() {
    // 点击登录超链接跳转
    $('.links-a').on('click', function() {
            $(this).parent().parent().hide().siblings('.reg').show()
        })
        // 点击注册超链接跳转
    $('.regs a').on('click', function() {
        $(this).parent().parent().parent().hide().siblings('.login-g').show()
    })
})