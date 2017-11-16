$(function() {
    $(window).scroll(function() {
        var s_top = $(document).scrollTop();
        if (s_top > 40) {
            s_top = 40;
        }
        $('#dh').css('top', 40 - s_top);
    })

    var s_top = $(document).scrollTop();
    if (s_top > 40) {
        s_top = 40;
    }
    $('#dh').css('top', 40 - s_top);
    //
    $('#dh .search span').click(function() {
        $('#dh .search div').slideToggle(50);
    })
})

// function tb() {
//     var top = $(document.body).scrollTop() + $(document.documentElement).scrollTop();
//     if ($('html,body').scrollTop() > 20) { //窗口 srcolltop方法设置或返回被选元素的水平滚动条位置。
//         $("#db").css({
//             'display': 'none',

//         });
//     } else {
//         $("#db").css('display', 'block');
//     }
//     setTimeout(tb);
// }

// tb();
$(function() {
    var i = 0;
    var gou = null;
    var $LiWidth = $('#baner>.t>.ll').width();
    $('#baner>.t').width($LiWidth * 4);
    $('#baner').mouseout(function() {
        $(this).css('cursor', 'pointer')
        dong();
    })
    $('#baner').mouseover(function() {
            $(this).css('cursor', 'pointer')
            clearInterval(gou);
        })
        // $('#baner>.t').mouseover(function() {
        //     var index = $(this).index();
        //     show(index);
        // })


    $('#baner>.arrow_rg').click(function() {

        $('#anniu>.ann').css({ 'background-color': '#666', 'outline': 'none', });
        var Long = $('#baner>.t>.ll').length;
        if (i < Long - 1) {
            i++;
            show(i);
        } else {
            i = 0;
            show(i);
        }
    })

    $('#baner>.arrow_lf').click(function() {
        $(this).css({ 'background-color': '#666', 'outline': 'none', });
        var Long = $('#baner>.t>.ll').length;
        if (i > 0) {
            i--;
            show(i);
        } else {
            i = Long - 1;
            show(i);
        }
    })

    function dong() {
        clearInterval(gou);
        gou = setInterval(function() {
            i++;
            show(i);
            if (i == 3) {
                i = -1;
            }

        }, 3000)
    }
    dong();

    function show(t) {
        var Long = -$LiWidth * t + 'px';
        $('#baner>.t').stop(true).animate({
            left: Long
        }, 3000)

    }
})
$(function() {
    var li_len2 = $("#lstp div").length; //获取div的长度

    function next() {
        if (!$('#lstp div').is(':animated')) {
            var pli = $('#lstp div').first().clone();
            $('#lstp').append(pli) //向元素的内添加内容
            $('#lstp div').first().animate({ 'margin-left': -580 }, 500, function() {
                $('#lstp div').first().remove();
            })
        }
    }

    function before() {
        if (!$('#lstp div').is(':animated')) {
            var pli2 = $('#lstp div').last().clone();
            $('#lstp').prepend(pli2);
            $('#lstp div').first().css('margin-left', '-580px');
            $('#lstp div').first().animate({ 'margin-left': 0 }, 500, function() {
                $('#lstp div').last().remove();
            })
        }
    }
    $('#anniu>.li2_arrow.arrow_rg').click(function() {
        if (li_len2 > 1) {
            next();
        }
    })
    $('#anniu>.li2_arrow.arrow_lf').click(function() {
        if (li_len2 > 1) {
            before();
        }
    })
})

$(function() {
    $('  #dbdh_box>.dbdh_box_a>.huitp ').click(function() {
        var $lll = $('html,body'); // //平滑的滚到顶部//总距离
        var distance = $('body').scrollTop() + $('html').scrollTop(); //鼠标按下后交互开始前鼠标必须移动的距离，以像素计。该选项可用于防止点击在一个元素上时不必要的交互
        var time = 800; ////总时间
        var intervalTime = 10; ////间隔时间
        var itemDistance = distance / (time / intervalTime); ////每个小单元移动的距离
        var intervalId = setInterval(function() { ////使用循环定时器不断滚动
            distance -= itemDistance
            if (distance <= 0) {
                distance = 0;
                clearInterval(intervalId)
            }
            $lll.scrollTop(distance)
        }, intervalTime);
        //到达顶部，停止定时器
    })
})

$(function() {
    var li_lenc = $(".pp .pp_box li").length;

    function nextCase() {
        if (!$('.pp .pp_box li').is(':animated')) {
            var pli = $('.pp .pp_box li').first().clone();
            $('.pp .pp_box ').append(pli)
            $('.pp .pp_box li').first().animate({ 'margin-left': -390 }, 500, function() {
                $('.pp .pp_box li').first().remove();
            })
        }
    }

    function beforeCase() {
        if (!$('.pp .pp_box li').is(':animated')) {
            var pli2 = $('.pp .pp_box li').last().clone();
            $('.pp .pp_box').prepend(pli2);
            $('.pp .pp_box li ').first().css({ 'margin-left': '-390px' });
            $('.pp .pp_box li ').first().animate({ 'margin-left': 0 }, 500, function() {
                $('.pp .pp_box li ').last().remove();
            })
        }
    }
    $('.y_box .qqdj').click(function() {
        if (li_lenc > 3) {
            nextCase();
        }
    })
    $('.y_box .qqdjj').click(function() {
        if (li_lenc > 3) {
            beforeCase();
        }
    })
})


$(function() {
    var li_lenc = $("#qchz .qchz_box li").length;

    function nextCase() {
        if (!$('#qchz .qchz_box li').is(':animated')) {
            var pli = $('#qchz .qchz_box li').first().clone();
            $('#qchz .qchz_box').append(pli)
            $('#qchz .qchz_box li').first().animate({ 'margin-left': -500 }, 500, function() {
                $('#qchz .qchz_box li').first().remove();
            })
        }
    }

    function beforeCase() {
        if (!$('#qchz .qchz_box li').is(':animated')) {
            var pli2 = $('#qchz .qchz_box li').last().clone();
            $('#qchz .qchz_box').prepend(pli2);
            $('#qchz .qchz_box li ').first().css({ 'margin-left': '-500px' });
            $('#qchz .qchz_box li').first().animate({ 'margin-left': 0 }, 500, function() {
                $('#qchz .qchz_box li ').last().remove();
            })
        }
    }
    $('#qchz .qchz_a1').click(function() {
        if (li_lenc > 5) {
            nextCase();
        }
    })
    $('#qchz .qchz_a2').click(function() {
        if (li_lenc > 5) {
            beforeCase();
        }
    })
})


$(function() {
    // 验证中文名称
    function isChinaName(name) { 
        var pattern = /^[\u4E00-\u9FA5]{1,6}$/; 
        return pattern.test(name);
    } 
    // 验证手机号
    function isPhoneNo(dsj) { 
        var pattern = /^1[34578]\d{9}$/; 
        return pattern.test(dsj);
    } 
    // 验证邮箱 
    function ismailNo(ly) { 
        var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
        return pattern.test(ly);
    }
    $('.name input').blur(function() {
        if (isChinaName($('.name input').val()) == true) {
            $('.name .c').show();
            $('.name .cuo').hide();

        } else {
            $('.name .c').hide();
            $('.name .cuo').show();
        }
    })
    $('.dsj input').blur(function() {
        if (isPhoneNo($('.dsj input').val()) == true) {
            $('.dsj .c').show();
            $('.dsj .cuo').hide();

        } else {
            $('.dsj .c').hide();
            $('.dsj .cuo').show();
        }
    })
    $('.ly textarea').blur(function() {
        if (($('.ly textarea').val()).length == 0) {
            $('.ly.c').hide();
            $('.ly .cuo').show();
        } else {
            $('.ly .c').show();
            $('.ly .cuo').hide();
        }
    })
    $('#wt .lxfs .lxdj').click(function() {

        if (isChinaName($('.name input').val()) == false) {
            $('.name .c').hide();
            $('.name .cuo').show();
            return false;
        }
        if (isPhoneNo($('.dsj input').val()) == false) {
            $('.dsj .c').hide();
            $('.dsj .cuo').show();
            return false;
        }
        if (($('ly textarea').val()).length == 0) {
            $('ly textarea').hide();
            $('ly textarea').show();
            return false;
        }
        $('#formOrder').submit();
    })

    $('textarea').blur(function() {
        if (($('textarea').val()).length == 0) {
            $(this).siblings('.c').hide();
            $(this).siblings('.cuo').show();
        } else {
            $(this).siblings('.c').show();
            $(this).siblings('.cuo').hide();
        }
    })
    $('input').blur(function() {
        if (($('input').val()).length == 0) {
            $(this).siblings('.c').hide();
            $(this).siblings('.cuo').show();
        } else {
            $(this).siblings('.c').show();
            $(this).siblings('.cuo').hide();
        }
    })
})
$(function() {
    var $subnav = $(".submenu_bg");
    $("#dh .nav li").each(function(i) {
        $(this).hover(function() {
            $subnav.eq(i).stop().slideDown();
        }, function() {
            $subnav.eq(i).stop().slideUp();
        });
    });
    $subnav.each(function() {
        $(this).hover(function() {
            $(this).stop().slideDown();
        }, function() {
            $(this).stop().slideUp();
        });
    });
    // var num_li;
    // $('#dh .nav li').hover(function() {
    //     num_li = $(this).index();
    //     $("#submenu_bg").eq(num_li).stop().slideToggle().siblings('#submenu_bg').slideUp();
    // }, function() {
    //     $("#submenu_bg").slideUp();
    // }), $('#suspension_bootom_bg').hover(function() {
    //     $("#submenu_bg").eq(num_li).stop().slideToggle().siblings('#submenu_bg').slideUp();
    // }, function() {
    //     $("#submenu_bg").slideUp();
    // })


    $('#online_service .service_lf').click(function() {
        $(this).toggleClass('sq');
        $('#online_service .service_rg').toggleClass('sq');
    })
})


// var li_len = $('#baner .t li').length,
//     firstLi = $('#baner .t li').first().clone(),
//     lastLi = $('#baner .t li').last().clone(),
//     maxId = li_len - 1,
//     s = 0;
// $('#baner .t').append(firstLi);
// $('#baner .t').prepend(lastLi);
// $('#baner .t').css('left', '-100%');

// function move(a) {
//     if (a == 'before') {
//         if (s == 0) {
//             $("#baner .t").stop().animate({ 'left': 0 }, 500, function() {
//                 $('#baner .t').css('left', -li_len + '00%');
//             });
//             s = maxId;
//         } else {
//             s--;
//             $("#baner .t").stop().animate({ 'left': -(s + 1) + '00%' }, 500);
//         }
//     }
//     if (a == 'next') {
//         if (maxId == s) {
//             $('#baner .t').stop().animate({ 'left': -(li_len + 1) + '00%' }, 500, function() {
//                 $('#baner .t').css('left', '-100%');
//             })
//             s = 0;
//         } else {
//             s++;
//             $("#baner .t").stop().animate({ 'left': -(s + 1) + '00%' }, 500);

//         }
//     }
// }
// var time = setInterval(function() {
//     move('next')
// }, 2000)
// $('#baner>.t').hover(function() {
//     clearInterval(time);
// }, function() {
//     time = setInterval(function() {
//         move('next')
//     }, 2000)
// })