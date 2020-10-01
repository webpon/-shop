window.onload=function(){
    var arr=new Array();
    var banner_li=document.querySelectorAll('.img_list li');
    var prev=document.querySelector('.prev');
    var next=document.querySelector('.next');
    var pointer=document.querySelectorAll('.pointer a');
    // 开启定时器，开启轮播
    let timer=setInterval(get_next,2000);
    // 初始化
    for(let i=0;i<banner_li.length;i++){
        arr.push(banner_li[i]);
        banner_li[i].style.zIndex=5-i;
        banner_li[i].style.opacity=0;
        banner_li[0].style.opacity=1;
        
        pointer[i].onclick=function(){
            console.log(pointer[i].id-arr[0].id);
            console.log(pointer[i].id);
            console.log(arr[0].id);
            if(pointer[i].id>arr[0].id){ 
               let nextsteps= pointer[i].id-arr[0].id;
               while(nextsteps--){
                   clearInterval(timer);
                   get_next();
                //    console.log('执行一次');
                   timer=setInterval(get_next,2000);
               }
            }else{
                let nextsteps= arr[0].id-pointer[i].id;
               while(nextsteps--){
                   clearInterval(timer);
                   get_prev();
                //    console.log('执行一次');
                   timer=setInterval(get_next,2000);
               }
            }
        }
    }
    //下一张图片
    let next_flag;
    function get_next(){
        next_flag=arr.shift();
        // console.log(next_flag);
        arr.push(next_flag);
        for(let i=0;i<banner_li.length;i++){
            arr[i].style.opacity=0;
            arr[0].style.opacity=1;
            pointer[i].className='';
            pointer[arr[0].id-1].className='active';
        }
    }
    //上一张图片
    let prev_flag
    function get_prev(){
        prev_flag=arr.pop();
        arr.unshift(prev_flag);
        for(let i=0;i<banner_li.length;i++){
            arr[i].style.opacity=0;
            arr[0].style.opacity=1;
            pointer[i].className='';
            pointer[arr[0].id-1].className='active';
        }
    }
    // 下一张按钮功能实现
    next.onclick=function(){
        clearInterval(timer)
        get_next();
        timer=setInterval(get_next,2000);
        // console.log("按钮的定时器执行了");
    }
     // 上一张按钮功能实现
    prev.onclick=function(){
        clearInterval(timer)
        get_prev();
        timer=setInterval(get_next,2000);
    }


    //钟表
    var span=document.querySelectorAll('.countdown span');
    var time=new Date;//获取当前时间
        var hour=time.getHours();//获取当前小时数
        var minutes=time.getMinutes();//获取当前分钟数
        var second=time.getSeconds();//获取当前秒数
        span[0].innerHTML=hour;
        span[1].innerHTML=minutes;
        span[2].innerHTML=second;
   
    // console.log(second);
    var clock=setInterval(function(){
        time=new Date();
        span[0].innerHTML=time.getHours();
        span[1].innerHTML=time.getMinutes();
        span[2].innerHTML=time.getSeconds();
        // console.log(time.getSeconds());
    },1000)
    

    //底部轮播图
    var footer_lis_arr=new Array();
    var footer_lis=document.querySelectorAll('.footer_banner_ul li');
    var con_left=document.querySelectorAll('.footer_title_control a')[0];
    var con_right=document.querySelectorAll('.footer_title_control a')[1];
   
    for(let i=0;i<footer_lis.length;i++){
        footer_lis_arr.push(footer_lis[i]);
        footer_lis_arr[i].style.left=(-8*249)+(249*i)+'px';
        if(i%4==0){
            footer_lis_arr[i].style.borderTop="1px solid red";
        }else if(i%4==1){
            footer_lis_arr[i].style.borderTop="1px solid blue";
        }else if(i%4==2){
            footer_lis_arr[i].style.borderTop="1px solid yellow";
        }else{
            footer_lis_arr[i].style.borderTop="1px solid purple";
        }
       
    }
    
    console.log(footer_lis_arr);
     let timer4=setInterval(footer_get_next,4000);
    let a=4;
    function footer_get_next(){
        clearInterval(timer4);
            while(a--){
                let footer_push=footer_lis_arr.shift();
                footer_lis_arr.push(footer_push);
                // footer_push.style.opacity=0;
            }
            // con_right.style.pointerEvents="none";
           
            for(let i=0;i<footer_lis_arr.length;i++){
                // footer_lis_arr.push(footer_lis[i]);
                footer_lis_arr[i].style.left=(-8*249)+(249*i)+'px';
                footer_lis_arr[i].style.transition="all 1.2s";
                for(let i=12;i<16;i++){
                    footer_lis_arr[i].style.transition="";
                    
                }   
                
                // con_right.style.cursor="not-allowed";
                    //监听动画是否执行完毕
                    // footer_lis_arr[i].addEventListener('transitionend', handle, false)
                    // function handle(){
                    //     //当动画执行结束后执行下面代码
                    //     footer_lis_arr[i].style.opacity=1;
                    //     con_right.style.pointerEvents="auto";
                    //     con_right.style.cursor="pointer";
                    // }
            }
            
            a=4;
            timer4=setInterval(footer_get_next,4000);
    }
    function footer_get_prev(){
        clearInterval(timer4);
            while(a--){
                let footer_pop=footer_lis_arr.pop();
                footer_lis_arr.unshift(footer_pop);
                // footer_pop.style.opacity=0;
            }
            // con_left.style.pointerEvents="none";
           console.log(footer_lis_arr);
            for(let i=0;i<footer_lis_arr.length;i++){
                footer_lis_arr[i].style.left=(-8*249)+(249*i)+'px';
                footer_lis_arr[i].style.transition="all 1.2s";
                for(let i=0;i<4;i++){
                    footer_lis_arr[i].style.transition="";
                }
                
                // con_right.style.cursor="not-allowed";
                //     // 监听动画是否执行完毕
                //     footer_lis_arr[i].addEventListener('transitionend', handle, false)
                //     function handle(){
                //         //当动画执行结束后执行下面代码
                //         footer_lis_arr[i].style.opacity=1;
                //         con_left.style.pointerEvents="auto";
                //         con_left.style.cursor="pointer";
                //     }
            }
            timer4=setInterval(footer_get_next,4000);
            a=4;
    }
    con_right.onclick=function(){
        footer_get_next();
    }
    con_left.onclick=function(){
        footer_get_prev();
        // alert(1);
    }
}