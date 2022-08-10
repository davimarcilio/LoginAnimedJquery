$('#cadastrobtt').click(()=>{
    if ($('#cadastrobtt').attr('data-action') == 'cadastro') {
        setTimeout(() => {
              $('#login').css({'display': 'none'});
        $('#senha').css({'display': 'none'});
        $('#bttentrar').css({'display': 'none'});
        $('.cadas').css({'display': 'block'});
        $('.formtype').css({'margin': '2px'})
        }, 250);
        $('#cadastrobtt').fadeOut(250, ()=>{
            $('#cadastrobtt').text('Entrar')
        }).fadeIn(250)
        $('#h1cadas').fadeOut(250, ()=>{
            $('#h1cadas').text('Já possuo conta')
        }).fadeIn(250)
        $('.containerlogin').animate({
            left: '500'
        }, 500)
        $('.containercadas').animate({
            left: '0'
        }, 500, ()=>{
            $('#cadastrobtt').attr('data-action', 'login');
        })
    }else{
        setTimeout(() => {
            $('#login').css({'display': 'block'});
      $('#senha').css({'display': 'block'});
      $('#bttentrar').css({'display': 'block'});
      $('.cadas').css({'display': 'none'});
      $('.formtype').css({'margin': '5px'})
      }, 250);
      $('#cadastrobtt').fadeOut(250, ()=>{
          $('#cadastrobtt').text('Cadastro')
      }).fadeIn(250)
      $('#h1cadas').fadeOut(250, ()=>{
          $('#h1cadas').text('Não possuo conta')
      }).fadeIn(250)
      $('.containerlogin').animate({
          left: '0'
      }, 500)
      $('.containercadas').animate({
          left: '500'
      }, 500, ()=>{
        $('#cadastrobtt').attr('data-action', 'cadastro');
      })
    }
    
    
})
