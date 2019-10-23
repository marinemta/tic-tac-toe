var video

function setup() {
  video = createCapture(VIDEO)
  video.size(600,600);
  video.hide() //pour masquer la vidéo mais celle-ci reste allumée
}

function draw() {
  let v = 4
  copy(video, 0, (frameCount*v) % video.height, 600, v, 0, (frameCount*v)%video.height, 600, v);

}

// ce code permet de capture une image toutes les 4 secondes afin d'économiser de la mémoire et ménager le processeur. 
// ce programme sera utilisé pour analyser le comportement d'une personne devant un miroir (la caméra étant derrière le miroir) et afin de développer un objet (miroir) en AR et le faire intéragir avec la personne devant.
