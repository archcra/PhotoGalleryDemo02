
function addFactoryMesh(scene){
    var factoryMesh, factoryText;
    factoryText = '中国人民玖羚五三一电影制片厂';
    var factoryText2 = 'NINE ZERO FIVE THREE ONE FILM STUDIO ';

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
        factoryMesh = createMesh(new THREE.TextGeometry(factoryText, options));
        factoryMesh.position.z = -10;
        factoryMesh.position.y = -500;
        factoryMesh.position.x = -900;
        //factoryMesh.scale.x = 1; //1.5;
        //factoryMesh.scale.y = 1;  //0.2;
            factoryMesh.name = 'factoryName';

    scene.add(factoryMesh);
    
    
    var options2 = {
                    size: 60,
                    height: 30,
                    font: "helvetiker",
                    bevelThickness: 0.1,
                    bevelSize: 0.1,
                    bevelSegments: 2,
                    //bevelEnabled: true,
                    curveSegments: 2,
                    steps: 1
                };
     factoryMesh = createMesh(new THREE.TextGeometry(factoryText2, options2));
        factoryMesh.position.z = -10;
        factoryMesh.position.y = -700;
        factoryMesh.position.x = -800;
        //factoryMesh.scale.x = 1; //1.5;
        //factoryMesh.scale.y = 1;  //0.2;
            factoryMesh.name = 'factoryName2';
    scene.add(factoryMesh);
    
}