var planeMesh;

function  getPlaneMesh(imageUrl, width, height){
    var material = new THREE.MeshBasicMaterial({
            map : THREE.ImageUtils.loadTexture(imageUrl), 
            transparent: true, opacity: 0.5
        });


        // plane
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
       return plane;
}

function getPlaneObject(imageUrl, width, height, x, y, z){
    planeMesh= getPlaneMesh(imageUrl, width, height); 
    planeMesh.x = x;
    planeMesh.y = y;
    planeMesh.z = z;
    return planeMesh;
}

function updatePlaneImage(imageUrl){
    planeMesh.material.map = THREE.ImageUtils.loadTexture( imageUrl); 
    planeMesh.material.needsUpdate = true;   
}