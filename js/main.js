var instance = new vidbg('.video', {
 mp4: 'video/world.mp4', // URL or relative path to MP4 video
 webm: 'video/world.webm', // URL or relative path to webm video
 poster: 'video/poster.jpg', // URL or relative path to fallback image
 overlay: false, // Boolean to display the overlay or not наложить фон
});
var rellax = new Rellax('.rocket');
if (document.body.clientWidth < 576) {//условие если в нашем документе если у бади будет параметр ширина клиента чем 576 то мы будем отключать релакс
rellax.destroy();
}

AOS.init(); /*инициализируем анимацию */