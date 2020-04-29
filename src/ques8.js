const rectangle={
    length:5,
    width:7
};
const circle={
    radius:7
};
const cylinder={
    radius:6,
    height:8
}
function findArea() {
   console.log("Area of circle",areaCircle(circle));
   console.log("Area of reactangle",areaRectangle(rectangle));
   console.log("Area of cylinder",areaCylinder(cylinder));     
}
function areaCircle(circle) {
    var area=3.14*circle.radius*circle.radius;
    return area;
}
function areaRectangle(rectangle) {
    var area=rectangle.length*rectangle.width;
    return area;
}
function areaCylinder(cylinder) {
    var area=(2*3.14*cylinder.radius*cylinder.height) +(2*areaCircle(cylinder));
    return area;
}

export {findArea}