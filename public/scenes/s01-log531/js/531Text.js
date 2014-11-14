function add531Meshes(){
    var text1, text2, text3;

    var options = {
        size: 90,
        height: 90,
        font: "youyuan",
        bevelThickness: 2,
        bevelSize: 0.5,
        bevelSegments: 3,
        bevelEnabled: true,
        curveSegments: 12,
        steps: 1
    };
    text1 = createMesh(new THREE.TextGeometry("五", options));
    text1.position.z = 90;
    text1.position.y = 0;
    text1.position.x = -150;

    text1.rotation.z = 0.71;
    text1.scale.x = 1.5;
    text1.scale.y = 0.2;

    //text1.scale.x = 5; //1.5;
    //text1.scale.y = 200;  //0.2;
    text1.name = 'number-five';

    scene.add(text1);

    text2 = createMesh(new THREE.TextGeometry("三", options));
    text2.position.x = text1.position.x + 200;
    text2.position.z = text1.position.z;
    text2.position.y = text1.position.y + 100;

    text2.scale.x = 1.5;
    text2.scale.y = 0.2;
    text2.rotation.z = -0.91;
    text2.rotation.y = 0.43;

    scene.add(text2);

    text3 = createMesh(new THREE.TextGeometry("一", options));
    text3.position.x = text1.position.x + 50;
    text3.position.z = text1.position.z;
    text3.position.y = text1.position.y-200;
    text3.scale.x = 2;
    text3.name = 'number-one';
    scene.add(text3);
    //return 
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

