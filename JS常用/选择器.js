document.getElementById('my-id');
//ID 选择器

document.querySelectorAll('.my-class');
//类选择器

document.querySelectorAll('div');
//标签选择器

document.querySelectorAll('input[name="my-name"]');
//属性选择器

document.querySelectorAll('ul > li');
//子元素选择器

document.querySelectorAll('div span');
//后代选择器

document.querySelectorAll('*');
//通用选择器

document.querySelectorAll('li:first-child');
//第一个子元素选择器

document.querySelectorAll('li:last-child');
//最后一个子元素选择器

document.querySelectorAll('li')[2];
//特定索引的子元素选择器

Array.from(document.querySelectorAll('li')).filter((el, i) => i % 2 === 0);
//偶数索引子元素选择器 建议css选择器

Array.from(document.querySelectorAll('li')).filter((el, i) => i % 2 !== 0);
//奇数索引子元素选择器

Array.from(document.querySelectorAll('*')).filter(el => el.style.display === 'none' || el.type === 'hidden');
//隐藏元素选择器

Array.from(document.querySelectorAll('*')).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0);
//可见元素选择器

Array.from(document.querySelectorAll('div')).filter(el => el.textContent.includes('text'));
//含有某个文本的元素选择器

document.querySelectorAll('input, select, textarea, button');
//表单元素选择器

Array.from(document.querySelectorAll('div')).filter(el => el.children.length === 0 && el.textContent.trim() === '');
//空元素选择器

Array.from(document.querySelectorAll('div')).filter(el => el.children.length > 0 || el.textContent.trim() !== '');
//父元素选择器

document.querySelectorAll('input[type="text"]');
//表单输入类型选择器

//querySelector 和 querySelectorAll 是非常强大的工具，可以用于几乎所有的 CSS 选择器。对于更复杂的过滤条件，你可以结合使用 Array.from 和 filter 函数。






