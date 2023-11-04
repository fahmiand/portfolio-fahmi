// event pada saat link di klik
$('.page-scroll').on('click', function (e) {


    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen 
    var elementujuan = $(tujuan);

    // pindah scroll
    $('html, body').animate({
        scrollTop: elementujuan.offset().top - 50
    }, 1000, 'easeInOutCirc');

    e.preventDefault();
});