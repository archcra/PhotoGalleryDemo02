var planeMesh;

function  getPlaneMesh(imageUrl){
    var material = new THREE.MeshBasicMaterial({
            map : THREE.ImageUtils.loadTexture(imageUrl),  // if I put only this, I see no mesh
            //color : 0x0000ff    // this draws blue mesh
        });


        // plane
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), material);
       return plane;
}

function addPlane(imageUrl){
     planeMesh= getPlaneMesh(imageUrl); //'images/赵伟-12.png');
        planeMesh.z = 100;
        planeMesh.x = 100;
        scene.add(planeMesh);
}

function updatePlaneImage(imageUrl){
    planeMesh.material.map = THREE.ImageUtils.loadTexture( imageUrl); 
    planeMesh.material.needsUpdate = true;   
}