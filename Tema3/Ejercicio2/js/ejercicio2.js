// 1
console.log(document.querySelector('#div1 p a').getAttribute('title'));
// 2
console.log(document.querySelector('div > a'));
// 3
console.log(document.querySelector('#div1>p>a'));
// 4
console.log(document.querySelector('.linkNormal:nth-of-type(2)'))
// 5
console.log(document.querySelector('.linkNormal[title^=Spider]').innerHTML)
// 6
console.log(document.querySelector('a+.linkNormal[title^=Spider]'))