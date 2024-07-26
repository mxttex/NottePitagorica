class Epiciclo{
    constructor(scene){
        this.circles = [];
        this.centre = BABYLON.MeshBuilder.CreateSphere("sphere", {
            segment: 32, diameter: radius1
        }, scene);
        this.InitializeEpicycle()
    }

    InitializeEpicycle(){

        for(let i=0; i<3; i++){
            this.circles.push(BABYLON.Mesh.CreateLines("baseCircle" + i, new circle(radiuses[i]).GetPoints(), scene));
        }
        
    }
}
class circle {
    constructor(radius) {
        this.radius = radius
        this.points = this.InitializeCircle();
    }

    InitializeCircle() {
        let points = [];
        for (let i = -Math.PI; i <= Math.PI; i += Math.PI / 360) {
            points.push(new BABYLON.Vector3(this.radius * Math.cos(i), 0, this.radius * Math.sin(i)));
        }
        return points;
    }

    GetPoints() {
        return this.points
    }
}