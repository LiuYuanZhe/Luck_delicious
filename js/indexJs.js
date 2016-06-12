/**
 * Created by Administrator on 2016/6/11.
 */
$(window).ready(function () {
    AllWidth();
    containerfly();
    //底部录播-----------------------------------------------------------------
    Scroll_vegetable();
    var aDiv_video_tool_pic_text = $('video_tool_pic_text');
    for(var i=0;i<aDiv_video_tool_pic_text.length;i++){
        video_tool_pic_text[i].timer = null;
    }
    //-------------------------------------------------------------------------

});
function AllWidth() {
    var width = $(document.body).width();
    var height = $(document).height;

}

function Scroll_vegetable(){
    var oUl = $('#vagetable_1_ul');
    var oDiv = $('#vagetable_1');
    var speed = 0;
    var timer = null;

    timer=setInterval(function(){

        if(oUl.position().left>=0){
            speed = -2;
        }
        if(oUl.position().left<-oUl.width()/2){
            speed = 2;
        }
        var Left = oUl.position().left + speed +'px';
        oUl.css("left",Left);
    },30);
}


function containerfly() {
    var flag = 0;
    $(document).scroll(function(){

        if($(document).scrollTop()>120&&flag==0){
            console.log('scrolltopresponse');
            $('#nr1').animate({right:'0'},2000).
            animate({right:'-2%'},300).
            animate({right:'0'},300);
            flag=1;
        }

    });
}