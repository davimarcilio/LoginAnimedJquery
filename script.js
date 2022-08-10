$('.containerlogin').css({'left': '11vmin'})
$('#cadastrobtt').click(()=>{
    $('#login').css({'display': 'none'});
    $('#senha').css({'display': 'none'});
    $('#bttentrar').css({'display': 'none'});
    $('.cadas').css({'display': 'block'});
    $('.formtype').css({'margin': '2px'})
    $('.containerlogin').animate({
        right: '11vmin'
    }, 500)
    $('.containercadas').animate({
        left: '11vmin'
    }, 500, ()=>{

        
    })
})