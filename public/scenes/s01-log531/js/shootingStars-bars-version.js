// creates a random field of Particle objects
// to keep track of the mouse position
var mouseX = 0, mouseY = 0;
var thisScene; //for debug purpose;
// an array to store our particles in
var particles=[];

function makeParticles(scene) { 
    thisScene = scene;
    var particle, material; 

    // we're gonna move from z position -1000 (far away) 
    // to 1000 (where the camera is) and add a random particle at every pos. 
    for ( var zpos= -1000; zpos < 1000; zpos+=10 ) {

        // we make a particle material and pass through the 
        // colour and custom particle render function we defined. 
        material = new THREE.ParticleCanvasMaterial( { color: 0xffffff, program: particleRender } );
        // make the particle
        particle = new THREE.Particle(material);

        // give it a random x and y position between -500 and 500
        particle.position.x = Math.random() * 1000 - 500;
        particle.position.y = Math.random() * 1000 - 500;

        // set its z position
        particle.position.z = zpos;

        // scale it up a bit
        particle.scale.x = particle.scale.y = 10;

        // add it to the scene
        scene.add( particle );

        // and to the array of particles. 
        particles.push(particle); 
    }

}


// moves all the particles dependent on mouse position

function updateParticles() { 

    // iterate through every particle
    for(var i=0; i<particles.length; i++) {

        particle = particles[i]; 

        // and move it forward dependent on the mouseY position. 
        particle.position.z +=  mouseY * 0.1;

        // if the particle is too close move it to the back
        if(particle.position.z>1000) particle.position.z-=2000; 
    }
}

// called when the mouse moves
function onMouseMove( event ) {
    // store the mouseX and mouseY position 
    mouseX = event.clientX;
    mouseY = event.clientY;
    
    console.log('scene, mouseX, mouseY', thisScene, mouseX, mouseY);
}

function particleRender( context ) {
				
				// we get passed a reference to the canvas context
				context.beginPath();
				// and we just have to draw our shape at 0,0 - in this
				// case an arc from 0 to 2Pi radians or 360º - a full circle!
				//context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
                context.rect(0,0,1,.1);
				context.fill();
			};


