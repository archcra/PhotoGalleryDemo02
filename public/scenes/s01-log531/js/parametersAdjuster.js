var thisMesh ;

function addControlFor(mesh){
    return; //
 thisMesh = mesh;
 console.log("thisMesh",thisMesh);
//Add GUI to adjust parameters
    controls = new function() {
         
            this.rotation_x = 0.00;
            this.rotation_y = 0.00;
            this.rotation_z = 0.00;
        
        this.asChange = function () {
            thisMesh.rotation.x = controls.rotation_x;
            thisMesh.rotation.y = controls.rotation_y;
            thisMesh.rotation.z = controls.rotation_z;
         }
       
    }
     

    var gui = new dat.GUI();
    gui.add(controls, 'rotation_x',-15.00,15.00).step(0.01).onChange(controls.asChange);
    gui.add(controls, 'rotation_y',0,30).step(0.01).onChange(controls.asChange);
    gui.add(controls, 'rotation_z',0,30).step(0.01).onChange(controls.asChange);

     //GUI ends.
}
            
            