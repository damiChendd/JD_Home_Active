/**
 * Created by Dalle on 2017/8/30.
 */

window.onload = function () {
    var dropdpwnlist1 = document.getElementById("dropdownlist1");
    var dropdpwnlist2 = document.getElementById("dropdownlist2");
    var dropdpwnlist3 = document.getElementById("dropdownlist3");
    var dropdpwnlist4 = document.getElementById("dropdownlist4");
    show(dropdpwnlist1, "li-active");
    hide(dropdpwnlist1, "");
    show(dropdpwnlist2, "li-active");
    hide(dropdpwnlist2, "");
    show(dropdpwnlist3, "li-active");
    hide(dropdpwnlist3, "");
    show(dropdpwnlist4, "car-li-active");
    hide(dropdpwnlist4, "myjd");

    function show(ele, classname) {
        ele.onmouseover = function () {
            ele.className = classname;
        }
    }

    function hide(ele, classname) {
        ele.onmouseout = function () {
            ele.className = classname;
        }
    }


   // -------------------------------------------------------// 图片轮播-----------------------------------------------------
    var slide = document.getElementById("slide");
    var lipic = slide.children;
    var slidenum = document.getElementById("slidenum");
    var nums = slidenum.children;
    var btn = document.getElementById("move");
    var current_index = 0;
    var pic_index=0;
    var pic_timer=null;
    // btn.onclick = function () {
    //     for(var i=0;i<lipic.length;i++)
    //     {
    //         if(i%2==0){
    //             lipic[i].style.backgroundColor="black";
    //         }
    //     }
    // }
    for (var i = 0; i < nums.length; i++) {
        nums[i].onmouseover = function () {
            clearInterval(pic_timer);
            pic_index = i;
            for (var j = 0; j < lipic.length; j++) {
                nums[j].style.backgroundColor = "";
                if (nums[j] == this) {
                    lipic[j].className = "show";
                    // nums[j].className += "slide-foot-num-change";
                }
                else {
                    lipic[j].className = "hide";
                    // nums[j].className= "";
                }
            }
            // lipic[i].className="show";
            this.style.backgroundColor = "orange";
        }
        nums[i].onmouseout = function () {
            pic_timer = setInterval(pic_auto,2000);
        }
    }
    var pic_timer = setInterval(pic_auto,2000);
    function pic_auto() {
        if(pic_index==lipic.length)
        {
            pic_index=0;
        }
        for(var i=0;i<lipic.length;i++)
        {
            if(pic_index == i){
                lipic[i].className="show";
                nums[i].style.backgroundColor="orange";
            }
            else {
                lipic[i].className="hide";
                nums[i].style.backgroundColor="";
            }
        }
        pic_index++;
    }

    //--------------------------------------------------------------------// tab切换-----------------------------------------------------
    var current_index = 0;
    var timer = null;
    var tab_title = document.getElementById("tab-title");
    var tab_title_li = tab_title.children;
    var tab_content = document.getElementById("tab-content");
    var tab_content_div = tab_content.children;
    for(var i=0;i<tab_title_li.length;i++)
    {
        tab_title_li[i].index=i;
        tab_title_li[i].onmouseover = function () {
            clearInterval(timer);
            current_index =i;
            // alert(tab_content_div.length);
            for(var j=0;j<tab_content_div.length;j++)
            {
                tab_title_li[j].className="";
                if(this.index==j)
                {
                    tab_content_div[j].className="show";
                }
                else {
                    tab_content_div[j].className="hide";
                }
            }
            this.className="change";
        }
        tab_title_li[i].onmouseout = function () {
            timer = setInterval(auto,1000);
        }
    }


     function auto() {
        if(current_index==tab_title_li.length){
            current_index=0;
        }
        for(var i=0;i<tab_title_li.length;i++)
        {
            if(current_index == i){
                tab_title_li[i].className="change";
                tab_content_div[i].className="show";
                // alert(1);
            }
            else {
                tab_title_li[i].className="";
                tab_content_div[i].className="hide";
                // alert(2);
            }
        }
        current_index++;
    }
    timer = setInterval(auto,1000);




}