$(".woodfish .click").click(function (e) {
    run()
});

$(".list").click(function (e) { 
    var data = $(this).attr("data");
    if (data == "reset") {
        Merit = 0;
        $(".text .text_1").text("当前功德：" + Merit);
    } else if (data == "about") {
        alert("作者：b站可莉酱呀")
    } else if (data == "hide") {
        
    }
});

function run() {
    audio_play($(".woodfish").attr("data"))
    Data_control("click")
    animation()
    animation_text()
}


function audio_play(i) {
    if(i == "default") {
        var audio = new Audio("audio/default/muyu.mp3.mp3");
        audio.play();
    } else {
        var audio = new Audio("audio/" + i);
        audio.play();
    }
}

function animation() {
    $(".woodfish .click img").css("width", "150px");
    setTimeout(() => {
        $(".woodfish .click img").css("width", "200px");
    }, 100);
}

function animation_text() {
    var randomNum_1 = randomNum(0,100000)
    $(".woodfish").append("<div id=\"text_tips_" +randomNum_1+ "\" class=\"text_tips\">功德+1</div>");
    setTimeout(() => {
        $(".woodfish .text_tips").css("margin-bottom", "300px");
    }, 5);
    setTimeout(() => {
        $("#text_tips_" + randomNum_1).css("opacity", "0");
    }, 15);
    setTimeout(() => {
        $("#text_tips_" + randomNum_1).remove();
    }, 500);
}

if ($.cookie("Merit") == undefined) $.cookie("Merit", "0", { expires: 30 })
var Merit = 0;
Merit = $.cookie("Merit")
Data_control("null")
function Data_control(Merit_data) {
    if(Merit_data == "click") {
        Merit++;
        $.cookie("Merit", Merit, { expires: 30 })
        $(".text .text_1").text("当前功德：" + Merit);
    } else {
        $(".text .text_1").text("当前功德：" + Merit);
    }
}

var auto_run_data = false;
var auto_run_speed = 150;
function auto_run() {
    setTimeout(() => {
        if(auto_run_data != false) {
            auto_run()
        }
        run()
    }, auto_run_speed);
}

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 


