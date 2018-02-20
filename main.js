window.addEventListener('load', init);
function init() {
    var video = document.getElementById('video')
    navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
    );
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            var canvas = document.getElementById("canvas");
            var contexto = canvas.getContext('2d');
            var downloadBtn = document.getElementById('snap');
            setInterval(function () {
                contexto.drawImage(this.video,0,0)
            },1000 / 30)

            downloadBtn.addEventListener('click', function() {
                var imageUrl =  canvas.toDataURL('image/png');
                var link = document.getElementById('download-link')
                link.href = imageUrl;
                link.download = "photo.png"; // con el atributo download puedes descargarlo con el nombre que le pongas

                link.click();
            })
        },
        function(e) {
            console.log(e);
        })
    }else{
        alert('no soporta')
    }
};