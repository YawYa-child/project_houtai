// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    // console.log(options.url);
    options.url = 'http://ajax.frontend.itheima.net' + options.url
        //添加token
        // options.headers = {
        //     Authorization: localStorage.getItem('token')
        // }
    if (options.url.indexOf('/my/') != -1) {
        options.headers = { Authorization: localStorage.getItem('token') }
    }
    options.complete = function(res) {
        // console.log(res.responseJSON);
        if (res.responseJSON.message === '身份认证失败！' && res.responseJSON.status === 1) {
            location.href = '/login.html'
            localStorage.removeItem('token')
        }
    }
})