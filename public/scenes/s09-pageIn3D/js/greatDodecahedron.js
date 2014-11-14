
//5 Convex regular polyhedra/platoni solids
var TETRAHEDRON=0;
var CUBE=1;
var OCTAHEDRON=2;
var DODECAHEDRON=3;
var ICOSAHEDRON=4;

var SmallStellatedDodecahedron = 21;
var GreatDodecahedron = 22;
var SmallTriambicIcosahedron = 23;
var GreatStellatedDodecahedron = 24;
//4 regular star phlyhedra

var GREAT_DODECAHEDRON = 22;


function getPolyhedron(id){
   return GenerateShape(id);//Greate 
   //return GenerateShape(1); 
}

function GenerateShape (currentShape)
{
	var shapeNames = [
		'Tetrahedron',
		'Hexahedron',
		'Octahedron',
		'Dodecahedron',
		'Icosahedron',
		'TruncatedTetrahedron',
		'Cuboctahedron',
		'TruncatedCube',
		'TruncatedOctahedron',
		'Rhombicuboctahedron',
		'TruncatedCuboctahedron',
		'SnubCube',
		'Icosidodecahedron',
		'TruncatedDodecahedron',
		'TruncatedIcosahedron',
		'Rhombicosidodecahedron',
		'TruncatedIcosidodecahedron',
		'SnubDodecahedron',
		'TetrakisHexahedron',
		'RhombicDodecahedron',
		'PentakisDodecahedron',
		'SmallStellatedDodecahedron',
		'GreatDodecahedron',
		'SmallTriambicIcosahedron',
		'GreatStellatedDodecahedron',
		'SmallTriakisOctahedron',
		'StellaOctangula',
		'TriakisTetrahedron'
	];


	var body = JSM.GenerateSolidWithRadius (shapeNames[currentShape], 1.0);
	
	var materials = new JSM.Materials ();
	//materials.AddMaterial (new JSM.Material (0x008ab8, 0x008ab8));
	materials.AddMaterial (new JSM.Material (0xff0000, 0xff0000));
    //materials.AddMaterial (new JSM.Material (0xcccccc, 0xcccccc));

    materials.AddMaterial (new JSM.Material (0x279b61, 0x279b61));
	materials.AddMaterial (new JSM.Material (0xcc3333, 0xcc3333));

	var vertexCountToColor = [];
	var currentColor = 0;
		
	var i, polygon, vertexCount;
	for (i = 0; i < body.PolygonCount (); i++) {
		polygon = body.GetPolygon (i);
		vertexCount = polygon.VertexIndexCount ();
		if (vertexCountToColor[vertexCount] === undefined) {
			vertexCountToColor[vertexCount] = currentColor;
			currentColor++;
		}
		polygon.SetMaterialIndex (vertexCountToColor[vertexCount]);
	}

	var meshes = JSM.ConvertBodyToThreeMeshes (body, materials);
	//console.log('meshes', meshes);
    return meshes[0];
   
}
