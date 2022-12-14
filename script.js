$('#cadastrobtt').click(() => {
    if ($('#cadastrobtt').attr('data-action') == 'cadastro') {
        $('#cadastrobtt').fadeOut(250, () => {
            $('#cadastrobtt').text('Entrar')
        }).fadeIn(250)
        $('#h1cadas').fadeOut(250, () => {
            $('#h1cadas').text('Já possuo conta')
        }).fadeIn(250)
        $('.containercadas').animate({
            left: '0'
        }, 500, () => {
            $('#cadastrobtt').attr('data-action', 'login');
        })
    } else {
        $('#cadastrobtt').fadeOut(250, () => {
            $('#cadastrobtt').text('Cadastro')
        }).fadeIn(250)
        $('#h1cadas').fadeOut(250, () => {
            $('#h1cadas').text('Não possuo conta')
        }).fadeIn(250)
        $('.containercadas').animate({
            left: '500'
        }, 500, () => {
            $('#cadastrobtt').attr('data-action', 'cadastro');
        })
    }
})
$('.non').click((non) => {
    $(non.target).hide()
    $(non.target).next('.slash').show()
    $(non.target).nextAll('input').attr('type', 'text')
})
$('.slash').click((slash) => {
    $(slash.target).prev('.non').show()
    $(slash.target).hide()
    $(slash.target).nextAll('input').attr('type', 'password')
})