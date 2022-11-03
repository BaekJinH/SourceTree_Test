$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "공무원" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
        .done(function(txt) {
          var books = $('.info > .book');
          for(var i = 0; i < books.length; i++) {
            $('.info > .book').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
            var sliceTxt = txt.documents[i].contents;
            var sliceTxt2 = sliceTxt.slice(0,20)
            $('.info > .book').eq(i).append('<p>' + sliceTxt2 + '</p>')

            var sliceTitle = txt.documents[i].title;
            var sliceTitle2 = sliceTitle.slice(0,17)
            $('.info > .book').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

            var sliceauthors = txt.documents[i].authors;
            var sliceauthors2 = sliceauthors.slice(0,2)
            $('.info > .book').eq(i).append('<span>' + sliceauthors2 + '</span>')
          }
        });

        
    $(function(){
      
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "미술" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
        .done(function(txt) {
          var main3Book = $('.mainWrap3 > .main3Book > div > .main3Img');
          for(var i = 0; i < main3Book.length; i++) {
            $('.mainWrap3 > .main3Book  .main3Img').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


            var sliceTitle = txt.documents[i].title;
            var sliceTitle2 = sliceTitle.slice(0,17)
            $('.txtWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

            var sliceauthors = txt.documents[i].authors;
            var sliceauthors2 = sliceauthors.slice(0,2)
            $('.txtWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')
          }
        });
    })
    $(function(){
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "잡화" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
        .done(function(txt) {
          var main6Book = $('.main6Item > div > .main6Img');
          for(var i = 0; i < main6Book.length; i++) {
            $('.main6Item > div > .main6Img').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


            var sliceTitle = txt.documents[i].title;
            var sliceTitle2 = sliceTitle.slice(0,17)
            $('.main6Item > div > .main6Text > .txtWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

            var sliceauthors = txt.documents[i].authors;
            var sliceauthors2 = sliceauthors.slice(0,2)
            $('.main6Item > div > .main6Text > .txtWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')
          }
        });
    })
        
    $(function(){
      
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "요리" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
        .done(function(txt) {
          var main4Book = $('.mainWrap4 > .main3Book > div > .main3Img');
          for(var i = 0; i < main4Book.length; i++) {
            $('.mainWrap4 > .main3Book  .main3Img').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


            var sliceTitle = txt.documents[i].title;
            var sliceTitle2 = sliceTitle.slice(0,17)
            $('.mainWrap4 > .main3Book  .main3Text > .txtWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

            var sliceauthors = txt.documents[i].authors;
            var sliceauthors2 = sliceauthors.slice(0,2)
            $('.mainWrap4 > .main3Book  .main3Text > .txtWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')
          }
        });
    })

    $(function(){
      
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "소설" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
        .done(function(txt) {
          var main4Book = $('.slide');
          for(var i = 0; i < main4Book.length; i++) {
            // $('.upBg').css({'background':'url(txt.documents[i].thumbnail)',backgroundSize:'cover'})
            $('.slide  .upBg > .upBgRight').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

            
            var sliceContents = txt.documents[i].contents;
            var sliceContents2 = sliceContents.slice(0,40)
            $('.upBgLeft').eq(i).append('<h3>' + sliceContents2 + '</h3>')

            var sliceTitle = txt.documents[i].title;
            var sliceTitle2 = sliceTitle.slice(0,17)
            $('.slide  .downTxt').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

            var sliceauthors = txt.documents[i].authors;
            var sliceauthors2 = sliceauthors.slice(0,2)
            $('.slide  .downTxt').eq(i).append('<span>' + sliceauthors2 + '</span>')
          }
        });
    })
    // $(function(){
      
    //   $.ajax({
    //     method: "GET",
    //     url: "https://dapi.kakao.com/v3/search/book?target=title",
    //     data: { query : "코딩" },
    //     headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
    //   })
    //     .done(function(txt) {
    //       var main4Book = $('.imgInfo');
    //       for(var i = 0; i < main4Book.length; i++) {
    //         $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


    //         var sliceTitle = txt.documents[i].title;
    //         var sliceTitle2 = sliceTitle.slice(0,17)
    //         $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

    //         var sliceauthors = txt.documents[i].authors;
    //         var sliceauthors2 = sliceauthors.slice(0,2)
    //         $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
    //       }
    //     });
    // })
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query : "코딩" },
      headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
    })
    .done(function(txt) {
      var main4Book = $('.imgInfo');
      for(var i = 0; i < main4Book.length; i++) {
        $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


        var sliceTitle = txt.documents[i].title;
        var sliceTitle2 = sliceTitle.slice(0,17)
        $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

        var sliceauthors = txt.documents[i].authors;
        var sliceauthors2 = sliceauthors.slice(0,2)
        $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
      }
    });
  
    $(function(){
      $('.leftMenu > div').on({click:function(){
        $(this).addClass('on');
        $('.leftMenu > div').siblings().not(this).removeClass('on')
    
        var index = $('.leftMenu > div').index(this)
    
        if(index == 0) {
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "코딩" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
          .done(function(txt) {
            var main4Book = $('.imgInfo');
            for(var i = 0; i < main4Book.length; i++) {
              $('.upImg').eq(i).empty();
              $('.downText').eq(i).empty();
              $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
    
    
              var sliceTitle = txt.documents[i].title;
              var sliceTitle2 = sliceTitle.slice(0,17)
              $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')
    
              var sliceauthors = txt.documents[i].authors;
              var sliceauthors2 = sliceauthors.slice(0,2)
              $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
            }
          });
        }
        else if (index == 1) {
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "문학" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
          .done(function(txt) {
            var main4Book = $('.imgInfo');
            for(var i = 0; i < main4Book.length; i++) {
              $('.upImg').eq(i).empty();
              $('.downText').eq(i).empty();
    
              $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
    
    
              var sliceTitle = txt.documents[i].title;
              var sliceTitle2 = sliceTitle.slice(0,17)
              $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')
    
              var sliceauthors = txt.documents[i].authors;
              var sliceauthors2 = sliceauthors.slice(0,2)
              $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
            }
          });
        }
    
        else if (index == 2) {
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "교양" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
          .done(function(txt) {
            var main4Book = $('.imgInfo');
            for(var i = 0; i < main4Book.length; i++) {
              $('.upImg').eq(i).empty();
              $('.downText').eq(i).empty();
              $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
    
    
              var sliceTitle = txt.documents[i].title;
              var sliceTitle2 = sliceTitle.slice(0,17)
              $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')
    
              var sliceauthors = txt.documents[i].authors;
              var sliceauthors2 = sliceauthors.slice(0,2)
              $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
            }
          });
        }
    
        else if (index == 3) {
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "경제" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
          .done(function(txt) {
            var main4Book = $('.imgInfo');
            for(var i = 0; i < main4Book.length; i++) {
              $('.upImg').eq(i).empty();
              $('.downText').eq(i).empty();
              $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
    
    
              var sliceTitle = txt.documents[i].title;
              var sliceTitle2 = sliceTitle.slice(0,17)
              $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')
    
              var sliceauthors = txt.documents[i].authors;
              var sliceauthors2 = sliceauthors.slice(0,2)
              $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
            }
          });
        }
    
        else if (index == 4) {
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "자기계발" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
          .done(function(txt) {
            var main4Book = $('.imgInfo');
            for(var i = 0; i < main4Book.length; i++) {
              $('.upImg').eq(i).empty();
              $('.downText').eq(i).empty();
              $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
    
    
              var sliceTitle = txt.documents[i].title;
              var sliceTitle2 = sliceTitle.slice(0,17)
              $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')
    
              var sliceauthors = txt.documents[i].authors;
              var sliceauthors2 = sliceauthors.slice(0,2)
              $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
            }
          });
        }
    
        else if (index == 5) {
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "어린이" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
          .done(function(txt) {
            var main4Book = $('.imgInfo');
            for(var i = 0; i < main4Book.length; i++) {
              $('.upImg').eq(i).empty();
              $('.downText').eq(i).empty();
              $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
    
    
              var sliceTitle = txt.documents[i].title;
              var sliceTitle2 = sliceTitle.slice(0,17)
              $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')
    
              var sliceauthors = txt.documents[i].authors;
              var sliceauthors2 = sliceauthors.slice(0,2)
              $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
            }
          });
        }
    
        else if (index == 6) {
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "자격증" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
          .done(function(txt) {
            var main4Book = $('.imgInfo');
            for(var i = 0; i < main4Book.length; i++) {
              $('.upImg').eq(i).empty();
              $('.downText').eq(i).empty();
              $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')
    
    
              var sliceTitle = txt.documents[i].title;
              var sliceTitle2 = sliceTitle.slice(0,17)
              $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')
    
              var sliceauthors = txt.documents[i].authors;
              var sliceauthors2 = sliceauthors.slice(0,2)
              $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
            }
          });
        }
      }})
    })




$(function(){
  $('.main2Category > div').on({click:function(){
    $(this).addClass('on');
    $('.main2Category > div').siblings().not(this).removeClass('on')

    var index = $('.main2Category > div').index(this)

    if(index == 0) {
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "코딩" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
      .done(function(txt) {
        var main4Book = $('.imgInfo');
        for(var i = 0; i < main4Book.length; i++) {
          $('.upImg').eq(i).empty();
          $('.downText').eq(i).empty();
          $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,17)
          $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

          var sliceauthors = txt.documents[i].authors;
          var sliceauthors2 = sliceauthors.slice(0,2)
          $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
        }
      });
    }
    else if (index == 1) {
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "문학" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
      .done(function(txt) {
        var main4Book = $('.imgInfo');
        for(var i = 0; i < main4Book.length; i++) {
          $('.upImg').eq(i).empty();
          $('.downText').eq(i).empty();

          $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,17)
          $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

          var sliceauthors = txt.documents[i].authors;
          var sliceauthors2 = sliceauthors.slice(0,2)
          $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
        }
      });
    }

    else if (index == 2) {
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "교양" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
      .done(function(txt) {
        var main4Book = $('.imgInfo');
        for(var i = 0; i < main4Book.length; i++) {
          $('.upImg').eq(i).empty();
          $('.downText').eq(i).empty();
          $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,17)
          $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

          var sliceauthors = txt.documents[i].authors;
          var sliceauthors2 = sliceauthors.slice(0,2)
          $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
        }
      });
    }

    else if (index == 3) {
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "경제" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
      .done(function(txt) {
        var main4Book = $('.imgInfo');
        for(var i = 0; i < main4Book.length; i++) {
          $('.upImg').eq(i).empty();
          $('.downText').eq(i).empty();
          $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,17)
          $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

          var sliceauthors = txt.documents[i].authors;
          var sliceauthors2 = sliceauthors.slice(0,2)
          $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
        }
      });
    }

    else if (index == 4) {
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "수험서" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
      .done(function(txt) {
        var main4Book = $('.imgInfo');
        for(var i = 0; i < main4Book.length; i++) {
          $('.upImg').eq(i).empty();
          $('.downText').eq(i).empty();
          $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,17)
          $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

          var sliceauthors = txt.documents[i].authors;
          var sliceauthors2 = sliceauthors.slice(0,2)
          $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
        }
      });
    }

    else if (index == 5) {
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "자기계발" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
      .done(function(txt) {
        var main4Book = $('.imgInfo');
        for(var i = 0; i < main4Book.length; i++) {
          $('.upImg').eq(i).empty();
          $('.downText').eq(i).empty();
          $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,17)
          $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

          var sliceauthors = txt.documents[i].authors;
          var sliceauthors2 = sliceauthors.slice(0,2)
          $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
        }
      });
    }

    else if (index == 6) {
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query : "건강" },
        headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
      })
      .done(function(txt) {
        var main4Book = $('.imgInfo');
        for(var i = 0; i < main4Book.length; i++) {
          $('.upImg').eq(i).empty();
          $('.downText').eq(i).empty();
          $('.upImg').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')


          var sliceTitle = txt.documents[i].title;
          var sliceTitle2 = sliceTitle.slice(0,17)
          $('.downText').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

          var sliceauthors = txt.documents[i].authors;
          var sliceauthors2 = sliceauthors.slice(0,2)
          $('.downText').eq(i).append('<span>' + sliceauthors2 + '</span>')
        }
      });
    }
  }})
})
    


  $(function(){
    $('.slideWrap').hide()
    $(".subCategory ul li").mouseover(function(){
        $('#slideBanner').css({backgroundColor:'#4c4c4c'})
        $(".upSideCategory").hide()
        var index = $('.subCategory ul li').index(this)
        if(index == 0) {
          $('.slideWrap').show()

          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "수험서" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
            .done(function(txt) {
              var books = $('.slideWrap > div');
              for(var i = 0; i < books.length; i++) {
                $('.slideWrap > div .imgWrap').eq(i).empty();
                $('.slideWrap > div .textWrap').eq(i).empty();
                
                $('.slideWrap > div .imgWrap').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

                var sliceauthors = txt.documents[i].authors;
                var sliceauthors2 = sliceauthors.slice(0,10)
                $('.slideWrap > div .textWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')

                var sliceTitle = txt.documents[i].title;
                var sliceTitle2 = sliceTitle.slice(0,30)
                $('.slideWrap > div .textWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

              }
            });
        }

        else if(index == 1) {
          $('.slideWrap').show()
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "참고" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
            .done(function(txt) {
              var books = $('.slideWrap > div');
              for(var i = 0; i < books.length; i++) {
                $('.slideWrap > div .imgWrap').eq(i).empty();
                $('.slideWrap > div .textWrap').eq(i).empty();
                $('.slideWrap > div .imgWrap').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

                var sliceauthors = txt.documents[i].authors;
                var sliceauthors2 = sliceauthors.slice(0,10)
                $('.slideWrap > div .textWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')

                var sliceTitle = txt.documents[i].title;
                var sliceTitle2 = sliceTitle.slice(0,30)
                $('.slideWrap > div .textWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

              }
            });
        }
        else if(index == 2) {
          $('.slideWrap').show()
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "외국" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
            .done(function(txt) {
              var books = $('.slideWrap > div');
              for(var i = 0; i < books.length; i++) {
                $('.slideWrap > div .imgWrap').eq(i).empty();
                $('.slideWrap > div .textWrap').eq(i).empty();
                $('.slideWrap > div .imgWrap').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

                var sliceauthors = txt.documents[i].authors;
                var sliceauthors2 = sliceauthors.slice(0,10)
                $('.slideWrap > div .textWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')

                var sliceTitle = txt.documents[i].title;
                var sliceTitle2 = sliceTitle.slice(0,30)
                $('.slideWrap > div .textWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

              }
            });
        }
        else if(index == 3) {
          $('.slideWrap').show()
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "대학교재" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
            .done(function(txt) {
              var books = $('.slideWrap > div');
              for(var i = 0; i < books.length; i++) {
                $('.slideWrap > div .imgWrap').eq(i).empty();
                $('.slideWrap > div .textWrap').eq(i).empty();
                $('.slideWrap > div .imgWrap').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

                var sliceauthors = txt.documents[i].authors;
                var sliceauthors2 = sliceauthors.slice(0,10)
                $('.slideWrap > div .textWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')

                var sliceTitle = txt.documents[i].title;
                var sliceTitle2 = sliceTitle.slice(0,30)
                $('.slideWrap > div .textWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

              }
            });
        }
        else if(index == 4) {
          $('.slideWrap').show()
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "에세이" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
            .done(function(txt) {
              var books = $('.slideWrap > div');
              for(var i = 0; i < books.length; i++) {
                $('.slideWrap > div .imgWrap').eq(i).empty();
                $('.slideWrap > div .textWrap').eq(i).empty();
                $('.slideWrap > div .imgWrap').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

                var sliceauthors = txt.documents[i].authors;
                var sliceauthors2 = sliceauthors.slice(0,10)
                $('.slideWrap > div .textWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')

                var sliceTitle = txt.documents[i].title;
                var sliceTitle2 = sliceTitle.slice(0,30)
                $('.slideWrap > div .textWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

              }
            });
        }
        else if(index == 5) {
          $('.slideWrap').show()
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "자기계발" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
            .done(function(txt) {
              var books = $('.slideWrap > div');
              for(var i = 0; i < books.length; i++) {
                $('.slideWrap > div .imgWrap').eq(i).empty();
                $('.slideWrap > div .textWrap').eq(i).empty();
                $('.slideWrap > div .imgWrap').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

                var sliceauthors = txt.documents[i].authors;
                var sliceauthors2 = sliceauthors.slice(0,10)
                $('.slideWrap > div .textWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')

                var sliceTitle = txt.documents[i].title;
                var sliceTitle2 = sliceTitle.slice(0,30)
                $('.slideWrap > div .textWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

              }
            });
        }
        else if(index == 6) {
          $('.slideWrap').show()
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query : "문구" },
            headers : {Authorization: "KakaoAK 123519ce80c0562e620a7941685cbb9e"}
          })
            .done(function(txt) {
              var books = $('.slideWrap > div');
              for(var i = 0; i < books.length; i++) {
                $('.slideWrap > div .imgWrap').eq(i).empty();
                $('.slideWrap > div .textWrap').eq(i).empty();
                $('.slideWrap > div .imgWrap').eq(i).append('<img src=' + txt.documents[i].thumbnail + '/>')

                var sliceauthors = txt.documents[i].authors;
                var sliceauthors2 = sliceauthors.slice(0,10)
                $('.slideWrap > div .textWrap').eq(i).append('<span>' + sliceauthors2 + '</span>')

                var sliceTitle = txt.documents[i].title;
                var sliceTitle2 = sliceTitle.slice(0,30)
                $('.slideWrap > div .textWrap').eq(i).append('<h3>' + sliceTitle2 + '</h3>')

              }
            });
        }
    })
})

//  헤더 슬라이드


$(function(){
  var bannerLeft = 0;
  var imgCnt = 0;
  var first = 1;
  var last;
  var interval;

  $('.containerSlide').each(function(){
      $(this).css('left',bannerLeft);
      bannerLeft += $(this).width() +50;
      $(this).attr('id','content'+(++imgCnt));
  })
  last = imgCnt;
  startAction();

  $('.content').hover(function(){
      stopAction();
  },function(){
      startAction();
  })

  function startAction() {
      interval = setInterval(function(){
          $('.containerSlide').each(function(){
              $(this).css('left',$(this).position().left-1);
          });

          var firstContent = $('#content' + first);
          var lastContent = $('#content' + last);

          if(firstContent.position().left < '-' + $(firstContent).width()) {
              firstContent.css('left',lastContent.position().left+lastContent.width()+50);
              first++;
              last++;
              if(last > imgCnt) {last =1};
              if(first > imgCnt) {first = 1};
          }
      },15)
  }
  function stopAction(){
      clearInterval(interval)
  }
})

$(function(){
  var bannerLeft = 0;
  var imgCnt = 0;
  var first = 1;
  var last;
  var interval;

  $('.containerSlide').each(function(){
      $(this).css('left',bannerLeft);
      bannerLeft += $(this).width() +50;
      $(this).attr('id','content'+(++imgCnt));
  })
  last = imgCnt;
  startAction();

  $('.content').hover(function(){
      stopAction();
  },function(){
      startAction();
  })

  function startAction() {
      interval = setInterval(function(){
          $('.containerSlide').each(function(){
              $(this).css('left',$(this).position().left-1);
          });

          var firstContent = $('#content' + first);
          var lastContent = $('#content' + last);

          if(firstContent.position().left < '-' + $(firstContent).width()) {
              firstContent.css('left',lastContent.position().left+lastContent.width()+50);
              first++;
              last++;
              if(last > imgCnt) {last =1};
              if(first > imgCnt) {first = 1};
          }
      },5000)
  }
  function stopAction(){
      clearInterval(interval)
  }
})


$(function(){
  $('.prev').click(function(){
      $('.slide_cont li:last').prependTo('.slide_cont');
      $('.slide_cont').css('margin-left',-557);
      $('.slide_cont').stop().animate({marginLeft:0},800);
    });
    
    $('.next').click(function(){
      $('.slide_cont').stop().animate({marginLeft:-557},800, function(){
      $('.slide_cont li:first').appendTo('.slide_cont');
      $('.slide_cont').css({marginLeft:0});
      });
    });
})

// main5 인물 슬라이드



// $(function(){
//   var bannerLeft = 0;
//   var imgCnt = 0;
//   var first = 1;
//   var last;
//   var interval;

//   $('.main5Banner > ul > li').each(function(){
//       $(this).css('left',bannerLeft);
//       bannerLeft += $(this).width() +50;
//       $(this).attr('id','content'+(++imgCnt));
//   })
//   last = imgCnt;
//   startAction();

//   $('.content').hover(function(){
//       stopAction();
//   },function(){
//       startAction();
//   })

//   function startAction() {
//       interval = setInterval(function(){
//           $('.main5Banner > ul > li').each(function(){
//               $(this).css('left',$(this).position().left-1);
//           });

//           var firstContent = $('#content' + first);
//           var lastContent = $('#content' + last);

//           if(firstContent.position().left < '-' + $(firstContent).width()) {
//               firstContent.css('left',lastContent.position().left+lastContent.width()+50);
//               first++;
//               last++;
//               if(last > imgCnt) {last =1};
//               if(first > imgCnt) {first = 1};
//           }
//       },15)
//   }
//   function stopAction(){
//       clearInterval(interval)
//   }
// })

// $(function(){
//   var bannerLeft = 0;
//   var imgCnt = 0;
//   var first = 1;
//   var last;
//   var interval;

//   $('.main5Banner > ul > li').each(function(){
//       $(this).css('left',bannerLeft);
//       bannerLeft += $(this).width() +50;
//       $(this).attr('id','content'+(++imgCnt));
//   })
//   last = imgCnt;
//   startAction();

//   $('.content').hover(function(){
//       stopAction();
//   },function(){
//       startAction();
//   })

//   function startAction() {
//       interval = setInterval(function(){
//           $('.main5Banner > ul > li').each(function(){
//               $(this).css('left',$(this).position().left-1);
//           });

//           var firstContent = $('#content' + first);
//           var lastContent = $('#content' + last);

//           if(firstContent.position().left < '-' + $(firstContent).width()) {
//               firstContent.css('left',lastContent.position().left+lastContent.width()+50);
//               first++;
//               last++;
//               if(last > imgCnt) {last =1};
//               if(first > imgCnt) {first = 1};
//           }
//       },5000)
//   }
//   function stopAction(){
//       clearInterval(interval)
//   }
// })

// $(function(){
//   $('.main8Slide > .btnControlWrap > i').on({click:function(){
//     var btnInd = $('.main8Slide > .btnControlWrap > i').index(this);
//     var btnArr = $('.arrayBtn > div').index();
//     if(btnInd == 0) {
//       $('.arrayBtn > div')
//     }
//   }})
// })






// main6 슬라이드

// $(function(){
//   $('.prev').click(function(){
//     $('.slide_Cont li:last').prependTo('.slide_Cont');
//     $('.slide_Cont').css({marginLeft:-525});
//     $('.slide_Cont').stop().animate({marginLeft:0},800)
//   })
//   $('.next').click(function(){
//     $('.slide_Cont').stop().animate({marginLeft:-1000},800,function(){
//       $('.slide_Cont li:first').appendTo('.slide_Cont');
//       $('.slide_Cont').css({marginLeft:0})
//     })
//   })
// })




// $(function(){
//   var slides = document.querySelector('.slide_cont'),
//       slide = document.querySelectorAll('.slide_cont li'),
//       currentIdx = 0,
//       slideCount = slide.length,
//       slideWidth = $('.slide_cont li').width(),
//       slideMargin = 10,
//       prevBtn = document.querySelector('.prev'),
//       nextBtn = document.querySelector('.next');

//   makeClone();

//   function makeClone(){
//       for(var i = 0; i <slideCount; i++){
//           var cloneSlide = slide[i].cloneNode(true);
//           cloneSlide.classList.add('clone');
//           slides.appendChild(cloneSlide);
//       }
//       for(var i = slideCount -1; i >=0; i--){
//           var cloneSlide = slide[i].cloneNode(true);
//           cloneSlide.classList.add('clone');
//           slides.prepend(cloneSlide);
//       }
//           ubdateWidth();
//           setInitialPos();
          
//           setTimeout(function(){
//               slides.classList.add('animated');
//           },100)
//   }

//   function ubdateWidth(){
//       var currentSlides = document.querySelectorAll('.slide_cont li');
//       var newSlideCount = currentSlides.length;
      
//       var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//       slides.style.width = newWidth;
//   }
//   function setInitialPos(){
//       var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//       slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
//   }

//   nextBtn.addEventListener('click',function(){
//       moveSlide(currentIdx +1 )
//   })
//   prevBtn.addEventListener('click',function(){
//       moveSlide(currentIdx -1 )
//   })

//   var timer = undefined;



//   function moveSlide(num){
//       slides.style.left = -num * (slideWidth + slideMargin) + 'px';
//       currentIdx = num;
//       console.log(currentIdx,slideCount);
      
//       if(currentIdx == slideCount || currentIdx == -slideCount){
//           setTimeout(function(){
//               slides.classList.remove('animated');
//               slides.style.left = '0px';
//               currentIdx = 0;
//           },500);
//           setTimeout(function(){
//               slides.classList.add('animated');
//           },600);
//       }
//   }
//   prevBtn.addEventListener('click',function(){
//       stopSlide()
//   })
//   prevBtn.addEventListener('mouseleave',function(){
//       autoSlide()
//   })
//   nextBtn.addEventListener('click',function(){
//       stopSlide()
//   })
//   nextBtn.addEventListener('mouseleave',function(){
//       autoSlide();
//   })
// })




  
    $('.subNav > div').on({click:function(){
      $(this).addClass('subOn');
      $(this).find('span').addClass('subOn')
      $('.subNav > div').siblings().not(this).removeClass('subOn')
      $('.subNav > div span').siblings().not(this).removeClass('subOn')
    }})


    $('.globalOpen').on({click:function(){
      $('.globalWrap').stop().toggleClass('toggleOpen')
        // $('.globalWrap').stop().css({left:0})
    }})


    $('.headEvent > div > .rightText').on({click:function(){
      $(this).addClass('weightOn');
      $('.headEvent  > div > .rightText').siblings().not(this).removeClass('weightOn')
    }})

    $('.leftMenu > div').on({click:function(){
      $(this).addClass('onBorder');
      $('.leftMenu > div').siblings().not(this).removeClass('onBorder')
    }})
    $('.arrayBtn > div').on({click:function(){
      $(this).addClass('btnOn');
      $('.arrayBtn > div').siblings().not(this).removeClass('btnOn')
    }})

    $('.main8Slide').on({mouseover:function(){
      $('.btnControlWrap > i').stop().fadeIn()
    },mouseout:function(){
      $('.btnControlWrap > i').stop().fadeOut()
    }})
  })

  $(function(){
    $('.headEvent > div').on({click:function(){
      var ind = $(".headEvent > div").index(this)
      if(ind == 0) {
        $('#slideBanner').css({backgroundColor : '#ED4901'})
        $('.upSideCategory1').show()
        $('.subCategory > div').not('.upSideCategory1').hide()
        $('.slideWrap').hide()
      }
      else if(ind == 1) {
        $('#slideBanner').css({backgroundColor : '#7DDBFF'})
        $('.upSideCategory2').show()
        $('.subCategory > div').not('.upSideCategory2').hide()
        $('.slideWrap').hide()

      }
      else if(ind == 2) {
        $('#slideBanner').css({backgroundColor : '#2183FF'})
        $('.upSideCategory3').show()
        $('.subCategory > div').not('.upSideCategory3').hide()
        $('.slideWrap').hide()

      }
      else if(ind == 3) {
        $('#slideBanner').css({backgroundColor : '#FFCE50'})
        $('.upSideCategory4').show()
        $('.subCategory > div').not('.upSideCategory4').hide()
        $('.slideWrap').hide()
      }
      else if(ind == 4) {
        $('#slideBanner').css({backgroundColor : '#FFFEFB'})
        $('.upSideCategory5').show()
        $('.subCategory > div').not('.upSideCategory5').hide()
        $('.slideWrap').hide()
      }
    }})
  })

$(function(){
  $(".subCategory > ul > li").mouseover(function(){
    $('.headEvent  > div .rightText').removeClass('weightOn')
  })
})