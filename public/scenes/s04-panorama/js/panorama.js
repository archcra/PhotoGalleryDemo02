var sceneImages = [
//"images/2654811054_1d4429d983_o.jpg",
/* */
//"images/hermit_crab.jpg", //人还少
//"images/hermit_crab.jpg", //人还少

"images/hill03.jpg",
"images/hill02.jpg",
"images/hill01.jpg",
"images/hill04.jpg",
"images/hill05.jpg",
"images/seaShore04.jpg",
"images/seaShore02.jpg",
"images/seaShore01.png",
"images/seaShore03.jpg", //waiting
 "images/eating02.jpg",
 "images/eating03.jpg",
    "images/hollow_restaurant.jpg",
       "images/food02.jpg",



    "images/eating_meat.jpg",
"images/531/18.jpg",
/* */
"images/looking.jpg",

        "images/why.jpg",

          "images/no.jpg",


    "images/food02.jpg",


    
"images/one_little_friend.jpg", //人还少
    "images/two_babies.jpg",//人还是少
    "images/hermit_crab.jpg",

    "images/autumn.jpg",
"images/spring.jpg",

    
]

var scene, camera, renderer, controls, mesh;

function init3D(mesh){
	scene = null;
	camera= null ; 
	renderer= null;
	controls = null;
	var webglEl = document.getElementById('sphere');

	var width  = window.innerWidth,
	height = window.innerHeight;

	scene= new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
	camera.position.x = 0.1;

	renderer =  new THREE.WebGLRenderer() ;
	renderer.setSize(width, height);
	scene.add(mesh);
	controls = new THREE.OrbitControls(camera);
	controls.noPan = true;
	controls.noZoom = true; 
	controls.autoRotate = true;
	controls.autoRotateSpeed = 0.9;
	webglEl.innerHTML="";
	webglEl.appendChild(renderer.domElement);

	render();
}

function createSphereMesh(image){
	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(100, 20, 20),
		new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture(image)
		})
		);

	sphere.scale.x = -1;
	sphere.name = 'meshMe';
	return sphere;
}

function render() {
	controls.update();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

function onMouseWheel(event) {
	event.preventDefault();
    //
			if (event.wheelDeltaY) { // WebKit
				camera.fov -= event.wheelDeltaY * 0.05;
			} else if (event.wheelDelta) { 	// Opera / IE9
				camera.fov -= event.wheelDelta * 0.05;
			} else if (event.detail) { // Firefox
				camera.fov += event.detail * 1.0;
			}

			camera.fov = Math.max(40, Math.min(100, camera.fov));
			camera.updateProjectionMatrix();
		}

		function changeScene(rotationAngle){
            var image = nextImage();
            mesh.material.map = THREE.ImageUtils.loadTexture( image); 
            mesh.material.needsUpdate = true;
            controls.reset();
            if(rotationAngle){
                controls.rotateLeft(rotationAngle);
            }   
            //controls.rotateLeft(-0.6); //for test only
    
		}

function onKeypress(event) {
    switch(event.keyCode){
        case 32:
            showDialog();
            break;
        case 72:
            hideDialog();
            break;
        // case 65:
        default:
			changeScene();
            break;
    }
}



//Add the mesh;
var nextImage = getNext();

mesh  = createSphereMesh(nextImage());
init3D(mesh);
document.addEventListener('mousewheel', onMouseWheel, false);
document.addEventListener('DOMMouseScroll', onMouseWheel, false);
document.addEventListener('keypress', onKeypress, false);



function getNext(){
  var index = -1;

  return function (){
  	index = index +1;
  	if (index == sceneImages.length)
  		index = 0
  	return sceneImages[index];
  }

}

