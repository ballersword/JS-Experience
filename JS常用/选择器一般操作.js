let element = document.querySelector('.my-class');

document.querySelectorAll('.my-class').forEach(function(element) {
    console.log(element);
});
// $(selector).each() 遍历选择的元素


let text = document.querySelector('#my-id').textContent;
document.querySelector('#my-id').textContent = 'New text';
//$(selector).text() 获取或设置文本内容


let html = document.querySelector('#my-id').innerHTML;
document.querySelector('#my-id').innerHTML = '<p>New HTML content</p>';
//$(selector).html() 获取或设置 HTML 内容


document.querySelectorAll('.my-class').forEach(function(element) {
    element.style.color = 'red';
});
let color = window.getComputedStyle(document.querySelector('.my-class')).color;
//$(selector).css() 获取或设置 CSS 样式


document.querySelector('#my-id').addEventListener('click', function() {
    alert('Clicked!');
});
//$(selector).on() 事件绑定


document.querySelectorAll('.my-class').forEach(function(element) {
    element.style.display = 'none'; // 隐藏
    element.style.display = 'block'; // 显示
});

//$(selector).hide() 和 $(selector).show() 显示或隐藏元素




let src = document.querySelector('#my-img').getAttribute('src');
document.querySelector('#my-img').setAttribute('src', 'new-image.png');

//$(selector).attr() 获取或设置属性






