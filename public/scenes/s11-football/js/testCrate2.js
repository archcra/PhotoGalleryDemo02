// Constructor
EarthApp = function()
{
	Sim.App.call(this);
}

// Subclass Sim.App
EarthApp.prototype = new Sim.App();

// Our custom initializer
EarthApp.prototype.init = function(param)
{
	// Call superclass init code to set up scene, renderer, default camera
	Sim.App.prototype.init.call(this, param);
	
    // Create the Earth and add it to our sim
    var earth = new Earth();
    earth.init();
    this.addObject(earth);
}

// Custom Earth class
Earth = function()
{
	Sim.Object.call(this);
}

Earth.prototype = new Sim.Object();

Earth.prototype.init = function()
{
    var crate   = THREEx.Crates.createCrate2();
//crate.receiveShadow = true
crate.castShadow    = true
crate.scale.multiplyScalar(2.5)
//var mesh    = crate.clone()

crate.material.map = THREE.ImageUtils.loadTexture( "./images/0.png" );
crate.material.needsUpdate = true;
    // Tell the framework about our object
    this.setObject3D(crate);    
}

Earth.prototype.update = function()
{
	// "I feel the Earth move..."
	this.object3D.rotation.y += Earth.ROTATION_Y;
    this.object3D.rotation.z += Earth.ROTATION_Z;

}

Earth.ROTATION_Y = 0.1;
Earth.ROTATION_Z = 0.1;
