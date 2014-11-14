


function getGreatDodecahedron(){
                var materials = new JSM.Materials ();
            materials.AddMaterial (new JSM.Material (0xcccccc, 0xcccccc));
                var meshMaterial = new THREE.MeshNormalMaterial({color: 0x7777ff});
    var body = JSM.GenerateSolidWithRadius ('GreatDodecahedron', 15.0);
	var meshes = JSM.ConvertBodyToThreeMeshes (body, materials); 
                meshes[0].position.z = 80;
                meshes[0].position.x = 0;
                meshes[0].position.y = 0;
                meshes[0].material = meshMaterial;
    meshes[0].scale.x = 7;
    meshes[0].scale.y = 7;
    meshes[0].scale.z = 7;
    meshes[0].rotation.x = 12;
            return meshes[0];

}