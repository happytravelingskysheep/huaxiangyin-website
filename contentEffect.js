// Description: 页面滚动特效
// 定义一个函数scrollHandler，用于处理滚动事件
function scrollHandler() {
    // 定义一个变量n，初始值为0
    var n;
    n = 0;
    // 给window对象添加一个滚动事件监听器
    window.addEventListener("scroll", function (e) {
        // 获取滚动距离
        var t = window.scrollY;
        // 获取窗口高度
        var o = window.innerHeight || document.documentElement.clientHeight;
        // 获取所有类名为slidein-item的元素，并转换为数组
        var i = Array.from(document.querySelectorAll(".slidein-item"));
        // 遍历数组中的每个元素
        i.forEach(function (e) {
            // 获取元素距离顶部的距离
            var i = e.offsetTop;
            // 判断元素是否在可视区域内，如果是则给元素添加slidein类名，否则移除slidein类名
            // i < t + o && i + e.offsetHeight > t
            i < t + o
                ? e.classList.add("slidein")
                : e.classList.remove("slidein");
        });
    });
}

// 在页面加载完成后调用scrollHandler函数
window.addEventListener("load", scrollHandler);

// 在页面卸载时移除滚动事件的监听器
window.addEventListener("unload", function() {
    // 使用和添加监听器时相同的参数
    window.removeEventListener("scroll", scrollHandler);
});
