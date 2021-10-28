


// ----
    var cartBtn = document.querySelector("#cart-btn");
    var topCart = document.querySelector('.top-cart')
    var cartMenu = document.querySelector(".cart-menu");
    var msg = document.querySelector(".msg")
    var lodBtn = document.querySelector(".lod-btn")
    var appcode = document.querySelector(".appcode")
    var WX = document.querySelector(".wx")
    var WXimg = document.querySelector(".Fimg")

    var childrens = document.querySelector(".children")
    var categoryItem = document.querySelectorAll(".category-item")

    // 手机展示隐藏
    var navItems = document.querySelectorAll(".nav-item")
    var headerNav = document.querySelector(".header-nav-menu");

    // 搜索下拉列表
    var search = document.querySelector("#ccc")
    var searchID = document.querySelector("#search")
    var aS = document.querySelectorAll(".a")


    topCart.onmouseover = function () {
        console.log("移入");
        cartBtn.style.color = "#ff6700";
        cartBtn.style.backgroundColor = "#fff";
        // cartMenu.style.border="1px solid red";
        cartMenu.style.height = "100px";
        msg.style.display = 'block';
        cartMenu.style.boxShadow = "darkgrey 1px 1px 10px 1px"

    }
    topCart.onmouseout = function () {
        console.log("移出");
        cartBtn.style.color = "#b0b0b0";
        cartBtn.style.backgroundColor = "#424242";
        // cartMenu.style.border="none"
        cartMenu.style.height = "0px";
        msg.style.display = 'none';
        cartMenu.style.boxShadow = "none"
    }

    lodBtn.onmouseover = function () {
        appcode.style.height = "150px"
        lodBtn.setAttribute("class", "active")
    }
    lodBtn.onmouseout = function () {
        appcode.style.height = "0"
        lodBtn.removeAttribute("class", "active")
    }

    // 手机展示隐藏

    for (var i = 0; i < navItems.length; i++) {
        navItems[i].onmouseover = function () {
            // console.log("移入");
            headerNav.style.height = "230px"
            headerNav.style.boxShadow = "0 3px 4px rgba(0,0,0,.18)"
        }
        navItems[i].onmouseout = function () {
            // console.log("移除");
            headerNav.style.height = "0"
            headerNav.style.boxShadow = ""
        }
    }

    headerNav.onmouseover = function () {
        headerNav.style.height = "230px";
        headerNav.style.boxShadow = "0 3px 4px rgba(0,0,0,.18)"
    }
    headerNav.onmouseout = function () {
        headerNav.style.height = "0px";
        headerNav.style.boxShadow = ""
    }


    // 点击搜索下拉列表

    var bt = searchID.onclick = function () {
        search.removeAttribute("class", "hide")
        for (let i = 0; i < aS.length; i++) {
            aS[i].style.border = "1px solid #ff6700"
            setInterval(() => {
                search.setAttribute("class", "hide")
                aS[i].style.border = "1px solid #ccc"
            }, 3000);

        }

    }
    // 侧边导航展开
    
    // for (let i = 0; i < categoryItem.length; i++) {
    //     categoryItem[i].onmouseover = function () {
    //         childrens.style.display = "block"
    //     }
    //     categoryItem[i].onmouseout = function () {
    //         childrens.style.display = "none"
    //     }
    // }



    // 轮播
    // 首先获取到全部的li ，以及需要点击的按钮
    var items = document.getElementsByClassName('item'); // 图片
    var littleArr = document.getElementsByClassName('little')  // 点
    var leftBtn = document.getElementById('left');  // 
    var rightBtn = document.getElementById('right');

    var Box = document.getElementById('Swiper')

    // 在js编程当中index为索引，索引值从0开始
    var index = 0;  // index表示第几张在展示，表示第index张图片具有actives这个类

    // 第几个点在展示

    // 把li中的actives类清除掉
    var clearActive = function () {
        // 表示每个li的类名为item
        for (var i = 0; i < items.length; i++) {
            items[i].className = 'item'
        }

        // 表示每个点的类名为little
        for (var i = 0; i < littleArr.length; i++) {
            littleArr[i].className = 'little'
        }
    }

    // 声明一个函数，这个goindex函数需要实现当index为几的时候，第几个li就展示，也就是说这个li就有active这个类名
    var goIndex = function () {
        clearActive(); //在添加active类之前的时候，把所有的li中的active去除掉
        items[index].className = "item actives"
        littleArr[index].className = "little actives"
        // console.log(index);
    }

    // 这个函数表示要下一张图片展示  
    var goNext = function () {
        if (index < 3) {
            index++;
        } else {
            index = 0
        }
        goIndex();
    }
    // 这个函数表示要上一张图片展示  
    var goUp = function () {
        if (index == 0) {
            index = 3;
        } else {
            index--;
        }
        goIndex();
    }

    // 给rigth点击按钮，添加点击事件，调用匿名函数
    rightBtn.addEventListener('click', function () {
        goNext();/*  当点击第五次的时候，会出现 items[index] is undefined  undefined：未定义*/

    })

    leftBtn.addEventListener('click', function () {
        goUp();/*  当点击第五次的时候，会出现 items[index] is undefined  undefined：未定义*/

    })

    Box.addEventListener('mouseover', function () {

        clearInterval(timer)
        timer = null

    })
    Box.addEventListener('mouseout', function () {
        timer = setInterval(() => {
            goNext()
        }, 2000);

    })

    for (var i = 0; i < littleArr.length; i++) {
        littleArr[i].addEventListener('click', function () {
            console.log("点击啦");

            //  getAttribute() 方法通过名称获取属性的值。
            var point = this.getAttribute('data-index')
            console.log(point);
            index = point;
            goIndex();
        })

    }

    var timer = setInterval(() => {
        this.goNext()
    }, 2000);


    // 倒计时
    function countTime() {
        //获取当前时间  
        var date = new Date();
        var now = date.getTime();
        //设置截止时间  
        var str = "2021/7/6 22:00:00";
        var endDate = new Date(str);
        var end = endDate.getTime();

        //时间差  
        var leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间  
        var d, h, m, s;
        if (leftTime >= 0) {
            d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
        }
        //将倒计时赋值到div中  
        document.getElementById("_d").innerHTML = d;
        document.getElementById("_h").innerHTML = h;
        document.getElementById("_m").innerHTML = m;
        document.getElementById("_s").innerHTML = s;
        //递归每秒调用countTime方法，显示动态时间效果  
        setTimeout(countTime, 1000);

    }

    // 
    WX.onmouseover=function(){
        WXimg.style.display="block";
    }
    WX.onmouseout=function(){
        WXimg.style.display="none";
    }

