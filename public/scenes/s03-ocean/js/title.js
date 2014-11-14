
var titleMeshName = 'titleName';
function showTitle(){
    console.log('in showTitle');
    var titleMesh, titleText;
    titleText = '啊廿外传';

    var options = {
                    size: 90,
                    height: 50,
                    font: "youyuan",
                    bevelThickness: 0.1,
                    bevelSize: 0.1,
                    bevelSegments: 2,
                    //bevelEnabled: true,
                    curveSegments: 10,
                    steps: 1
                };
        titleMesh = createMesh(new THREE.TextGeometry(titleText, options));
        titleMesh.position.z = -2500;
        titleMesh.position.y = 500;
        titleMesh.position.x = -500;
        titleMesh.scale.x = 5; //1.5;
        titleMesh.scale.y = 5;  //0.2;
            titleMesh.name = titleMeshName;

    scene.add(titleMesh);
}

function hideTitle(){
    console.log('in hideTitle');

    var selectedObject = scene.getObjectByName(titleMeshName);
    scene.remove( selectedObject );

}

function createMesh(geom) {

    // assign two materials
    //            var meshMaterial = new THREE.MeshLambertMaterial({color: 0xff5555});
    var meshMaterial = new THREE.MeshNormalMaterial({color: 0x7777ff});            //var meshMaterial = new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xff5555, shininess: 100, metal: true});
    //            meshMaterial.side=THREE.DoubleSide;
    // create a multimaterial
    var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    return plane;
}

