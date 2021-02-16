let demo = document.querySelector('#demo');// HTML里面的文字展示
let demo2 = document.querySelector("#demo2");  // style里面的文字
let n = 0;
let m = 0;
let string0 = `/* 你好，我叫小欧
 * 接下来我演示一下我的前端功底
 * 首先我准备了一个div 如图
*/
#div1{
    width:200px;
    height:200px;
}
/* 接下来我要把div变成八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳组成的
 * 一白一黑
 */
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 紧接着是两个黑白球 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    top:50%;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = string0; //  给style标签使用的
let string = string0;
string = string.replace(/\n/g, '<br>');  // 利用正则表达式把回车替换成换行标签
string = string.replace(/ /g, '&nbsp;');  // 同理，空格替换为字符实体
let step = () => {     //HTML文字显示
    setTimeout(function () {
        if (n < string.length) {
            if (string[n] === '<') { // 如果是换行标签就直接四个字符一起显示，避免<出现
                n = n + 3;
                demo.innerHTML = string.substring(0, n);
                n++;
                step();
            } else if (string[n] === '&') {
                n = n + 5;
                demo.innerHTML = string.substring(0, n);
                n++;
                step(); 
            }
            else {
                demo.innerHTML = string.substring(0, n);
                n++;
                window.scrollTo(0, 9999); // 页面滚动到下面
                demo.scrollTo(0, 9999);   //  手机页面
                step(); 
            }
        }
        else {
            return;
        }
        
    },50);
};
let step2 = () => {  //CSS样式显示函数
    setTimeout(() => {
        if (m < string2.length) {
            demo2.innerHTML +=string2[m];
            m++;
            window.scrollTo(0, 9999); // 页面滚动到下面
            demo.scrollTo(0, 9999);   //  手机页面
            step2(); 
        }else{
            return;
        }
    },50)
}
step();    // 开启HTML文字显示
step2();   // 开启CSS样式显示
