$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "행성" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
        .done(function(txt) {
          var books = $('.leftBookInfo');
          for(var i = 0; i < books.length; i++) {
            
            
            
            
            // var sliceTxt = txt.documents[i].contents;
            // var sliceTxt2 = sliceTxt.slice(0,20)
            // $('.info > .book').eq(i).append('<p>' + sliceTxt2 + '</p>')

            // var sliceTitle = txt.documents[i].title;
            // var sliceTitle2 = sliceTitle.slice(0,17)
            // $('.info > .book').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

            // var sliceauthors = txt.documents[i].authors;
            // var sliceauthors2 = sliceauthors.slice(0,2)
            // $('.info > .book').eq(i).append('<span>' + sliceauthors2 + '</span>')
          }
        });

})
$(function(){
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query : "베르나르" },
      headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
    })
      .done(function(txt) {
        var books = $('.imageText');
        for(var i = 0; i < books.length; i++) {
          $('.seriseRightEle .imageText').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
          
          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,4)
          $('.seriseRightEle .imageText').eq(i).append('<h4>'+ sliceTitle2 +'</h4>')
          $('.seriseRightEle .imageText').eq(i).append('<p>'+ txt.documents[i].price +'</p>')
        }
      });
})


$(function(){
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query : "물건" },
      headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
    })
      .done(function(txt) {
        console.log(txt)
        var books = $('.imageText');
        for(var i = 0; i < books.length; i++) {
          $('.shopRightEle .imageText').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
          
          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,9)
          $('.shopRightEle .imageText').eq(i).append('<h4>'+ sliceTitle2 +'</h4>')
          $('.shopRightEle .imageText').eq(i).append('<p>'+ txt.documents[i].price +'</p>')
        }
      });

})

$(function(){
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query : "행성" },
      headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
    })
      .done(function(txt) {
          $('.contents').prepend('<p>'+ txt.documents[0].contents +'</p>')
      });
})


$(function(){
  $('.addOn > div').click(function(){
    var index = $('.addOn > div').index(this)
    $(this).addClass('bgOn');
    $('.addOn > div').siblings().not(this).removeClass('bgOn')
    
    if(index == 0) {
      $('.leftUp > p').html("이 책을 <br> 구입하신 분들이 <br> 함께 구매한 애드온")
    }
    else{
      $('.leftUp > p').html("이 책을 <br> 구입하신 분들이 <br> 많이 구매한 애드온")

    }
  })
})

$(function(){
  $('.upCategory > div').click(function(){
    var index = $('.upCategory > div').index(this);
    $(this).addClass('cateBgOn');
    $('.upCategory > div').siblings().not(this).removeClass('cateBgOn')
    if(index == 1) {
      var offset = $('.reviewUpTitle').offset();
      $('html').animate({scrollTop:offset.top},1200)
    }
  })
})

$(function(){
  $('.globalOpen').on({click:function(){
    $('.globalWrap').stop().toggleClass('toggleOpen')
      // $('.globalWrap').stop().css({left:0})
  }})
})

$(function(){
    $('.subNav > div').on({click:function(){
        $(this).addClass('subOn');
        $(this).find('span').addClass('subOn')
        $('.subNav > div').siblings().not(this).removeClass('subOn')
        $('.subNav > div span').siblings().not(this).removeClass('subOn')
      }})
    
    


  
      
    $('.headEvent > div > .rightText').on({click:function(){
      $(this).addClass('weightOn');
      $('.headEvent  > div > .rightText').siblings().not(this).removeClass('weightOn')
    }})

})

  function count(type)  {
    const resultElement = document.getElementById('upDownNum');
    
    let number = resultElement.innerText;
    
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
  
      if(number < 1) {
        return false;
      }
    }
    
    resultElement.innerText = number;
  }

$(function(){
  var valueNum = $('.upDownNum');
  if(valueNum == 1) {
    $('.total').innerHTML = "30,240"
  }
})



$(function(){
  $('#addonAllClick').click(function(){
    if($(this).is(':checked')) {
      $('.shopRightEle input').attr('checked',true)
    }
    else {
      $('.shopRightEle input').attr('checked',false)
    }
  })
})


$(function(){
  $('.slideToggle').hide()
  $('.slideBtn').click(function(){
    $(this).hide()
    $('.mask').toggleClass('maskOn')
    $('.slideToggle').slideDown('slow')
  })

  $('.upSlide').click(function(){
    $('.slideBtn').hide()
    $('.mask').toggleClass('maskOn')
    $('.slideToggle').slideUp('slow')
    $('.slideBtn').show();
  })
  
})


$(function(){
  $('#addonAllClick2').click(function(){
    if($(this).is(':checked')) {
      $('.seriseRightEle input').attr('checked',true)
    }
    else {
      $('.seriseRightEle input').attr('checked',false)
    }
  })
})





$( document ).ready( function() {
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 1000 ) {
      $( '.scrollTop' ).fadeIn();
    } else {
      $( '.scrollTop' ).fadeOut();
    }
  } );
  } 
);


$(function(){
  $('.scrollTop').click(function(){
      var offset = $('#headerGroup').offset();
      $('html').animate({scrollTop:offset.top},1200)
  })
})