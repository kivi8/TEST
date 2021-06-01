$(function () {
    var body = 0

    for (var i = 0; i < 36; i++) {
        $('main').append('<div><img src="./moucha.png"></div>')
    }

    $('main div img').click(kliknutiNaMouchu)

    $('main').click(kliknutiDoTabulky)

    setInterval(ukazMouchu, 2000)
    
    function kliknutiDoTabulky(eventData) {
        var x = eventData.originalEvent.x
        var y = eventData.originalEvent.y

        var w = $('#pavouk').width()
        var h = $('#pavouk').height()

        $('#pavouk').show()

        $('#pavouk').css('left', x - w/2)
        $('#pavouk').css('top', y - h/2)

        setTimeout(function () {
            $('#pavouk').hide()
        }, 500)
    }

    function kliknutiNaMouchu() {
        $(this).hide()
        pridejBody(100)
    }

    function ukazMouchu () {
        var nahodny = generujNahodny()
        var obrazek = $('main div img').eq(nahodny)
        //obrazek.css('display', 'inline')
        obrazek.show(500)

        var nahodneZmizeni = Math.ceil(Math.random()*2000 + 1000)

        setTimeout(function () {
            if (obrazek.css('display') !== 'none') {
                pridejBody(-100)
                obrazek.hide(500)
            }

        }, nahodneZmizeni)
    }

    function generujNahodny () {
        var maximum = $('main div img').length
        return Math.ceil(Math.random()*maximum)
    }

    function pridejBody (hodnota) {
        body += hodnota
        $('h2 span').html(body)
    }
})
