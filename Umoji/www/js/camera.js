
        var video, canvas, msg;
        var load = function () {
            video  = document.getElementById('video');
            canvas = document.getElementById('canvas');
            msg    = document.getElementById('error');
            if( navigator.getUserMedia ) {
                video.onclick = function () {
                    var context = canvas.getContext("2d");
                    context.drawImage(video, 0, 0, 240, 320);
                    var image = {"demo" : {
                        "type"  : "device",
                        "image" : canvas.toDataURL("image/png")
                    }};
                };

                var success = function ( stream ) {
                    video.src = stream;
                };

                var error = function ( err ) {
                    msg.innerHTML = "Error: " + err.code;
                };

                navigator.getUserMedia('video', success, error);

            } else {
                msg.innerHTML = "Native web camera not supported :(";
            }

        };

    
}

var selectedFile = document.getElementById('camerabutton').files[0];


function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

        window.addEventListener('DOMContentLoaded', load, false);
