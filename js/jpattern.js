/* jshint esversion: 6 */


/**
 * Un punto por defecto tiene su origen en el origen de coordenadas
 */
function Point(x, y, name) {
    'use strict';
    this.x = roundNumber(x, 2);
    this.y = roundNumber(y, 2);
    this.name = name || '';
    this.label = {
        value: '',
        orientation: '',
    };

    this.setLabel = function(value, orientation) {
        this.label.value = value;
        this.label.orientation = orientation;
    };

    this.getLabel = function() {
        return this.label;
    }

    this.toString = function () {
        return 'x=' + roundNumber(x) + ', y=' + roundNumber(y);
    };

    this.getClass = function () {
        return 'Point';
    };

}


/**
 * Forma de dibujar una línea dado un ángulo. Referencia:
 * @author Floris (https://stackoverflow.com/users/1967396/floris)
 * https://stackoverflow.com/questions/23598547/draw-a-line-from-x-y-with-a-given-angle-and-length
 */
function Line(arg0, arg1, arg2, arg3) {
    let beginPoint, endPoint, length, degrees;
    switch (arguments.length) {
        case 0:
            throw new Error('InvalidArgumentException: empty constructor is not defined');
        case 2:
            beginPoint = arg0;
            if (typeof arg1 === 'number') {
                length = arg1;
                degrees = 0;
                endPoint = undefined;
            } else if (typeof arg1 === 'object') {
                endPoint = arg1;
                length = NaN;
                degrees = NaN;
            } else {
                throw new Error('InvalidArgumentException: typeof second argument must be a number or Point object');
            }

            break;
        case 3:
            beginPoint = arg0;
            length = arg1;
            degrees = arg2;
            endPoint = undefined;
            break;
        default:
            throw new Error('InvalidArgumentException: the number of passed parameters to the constructor is not valid');
    }


    this.findEndPoint = function () {
        const x1 = beginPoint.x;
        const y1 = beginPoint.y;
        const r = length;
        const theta = -1 * this.getDegrees();
        const x2 = x1 + r * Math.cos(Math.PI * theta / 180.0);
        const y2 = y1 + r * Math.sin(Math.PI * theta / 180.0);

        const resultPoint = new Point(x2, y2);
        return resultPoint;
    };


    this.getMiddlePoint = function () {
        const x = (beginPoint.x + this.getEndPoint().x) / 2;
        const y = (beginPoint.y + this.getEndPoint().y) / 2;

        return new Point(x, y);
    };

    this.getBeginPoint = function () {
        return beginPoint;
    };

    this.getEndPoint = function () {
        return endPoint;
    };

    this.getDegrees = function () {
        return normalizeDegree(degrees);
    };

    this.getLength = function () {
        return length;
    };


    // Cálculos de los elementos que me faltan
    if (endPoint === undefined) {
        const auxPoint = this.findEndPoint();
        endPoint = new Point(auxPoint.x, auxPoint.y);
    }

    if (isNaN(length)) {
        const a = this.getBeginPoint();
        const b = this.getEndPoint();

        length = Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2));
    }

    if (isNaN(degrees)) {
        const c = this.getBeginPoint();
        const d = this.getEndPoint();

        // Pendiente de la recta
        let m = (c.y - d.y) / (c.x - d.x);
        degrees = (Math.atan(m) * (180 / Math.PI));

        if (m < 0) {
            // degrees = 180 - degrees;
            console.log('m: ' + m);
            console.log('degrees: ' + degrees);
            console.log('calculo:' + (180 - degrees));
            console.log('degrees normalized: ' + normalizeDegree(degrees));
        }
    }

    this.getClass = function () {
        return 'Line';
    };

    this.toString = function (){
        let aux = 'Line from origin point at: ' + beginPoint.toString() + '\n';
        aux = aux.concat('and end point at: ' + endPoint.toString()) + '\n';
        aux = aux.concat('length: ' + roundNumber(this.getLength(), 2)) + '\n';
        aux = aux.concat('midpoint: ' + this.getMiddlePoint()) + '\n';
        aux = aux.concat('degrees: ' + roundNumber(this.getDegrees(), 0));
        return aux;
    };

} // end of Line


function CurveLine(beginPoint, endPoint, offset, position = 'middle') {
    const auxLine = new Line(beginPoint, endPoint);

    // Control Point Length
    const cpLength = offset * 2.25;

    // Control Point Line
    let cpStartPoint;
    if (position === 'top') {
        cpStartPoint = auxLine.getBeginPoint();
    } else if (position === 'bottom') {
        cpStartPoint = auxLine.getEndPoint();
    } else {
        cpStartPoint = auxLine.getMiddlePoint();
    }

    const cpLine = new Line(cpStartPoint, cpLength, 90 - auxLine.getDegrees());

    // Control Point
    const cp = cpLine.getEndPoint();

    this.getBeginPoint = function () {
        return auxLine.getBeginPoint();
    };

    this.getEndPoint = function () {
        return auxLine.getEndPoint();
    };

    this.getControlPoint = function () {
        return cp;
    };

    this.getDegrees = function() {
        return normalizeDegree(auxLine.getDegrees());
    };

    this.getOffset = function() {
        return offset;
    };

    this.getPosition = function () {
        return position;
    };

    /**
     * From the original: http://www.malczak.linuxpl.com/blog/quadratic-bezier-curve-length/g
     * Attribution: https://gist.github.com/tunght13488 AND https://gist.github.com/robinrodricks 
     * Cite: https://gist.github.com/tunght13488/6744e77c242cc7a94859
     * Other posibilities: https://riptutorial.com/es/html5-canvas/example/18923/longitud-de-una-curva-cuadratica
     */
    this.getLength = function () {
        let p0, p1, p2;
        p0 = this.getBeginPoint();
        p1 = this.getControlPoint();
        p2 = this.getEndPoint();

        const ax = p0.x - 2 * p1.x + p2.x;
        const ay = p0.y - 2 * p1.y + p2.y;
        const bx = 2 * p1.x - 2 * p0.x;
        const by = 2 * p1.y - 2 * p0.y;
        const A = 4 * (ax * ax + ay * ay);
        const B = 4 * (ax * bx + ay * by);
        const C = bx * bx + by * by;

        const Sabc = 2 * Math.sqrt(A + B + C);
        const A_2 = Math.sqrt(A);
        const A_32 = 2 * A * A_2;
        const C_2 = 2 * Math.sqrt(C);
        const BA = B / A_2;

        return (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * Math.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32);
    };

    this.getClass = function () {
        return 'CurveLine';
    };

    this.toString = function () {
        let aux = 'CurveLine from origin point at: ' + beginPoint.toString() + '\n';
        aux = aux.concat('and end point at: ' + endPoint.toString()) + '\n';
        aux = aux.concat('length: ' + roundNumber(this.getLength(), 2)) + '\n';
        aux = aux.concat('degrees: ' + roundNumber(this.getDegrees(), 0)) + '\n';
        aux = aux.concat('offset: ' + this.getOffset()) + '\n';
        aux = aux.concat('control point: ' + this.getControlPoint()) + '\n';
        aux = aux.concat('position: ' + this.getPosition());
        return aux;
    };

} // end of curveLine

function Dart(beginPoint, width, depth, degrees = 0) {
    const dartWidthLine = new Line(beginPoint, width, degrees);
    const middlePoint = dartWidthLine.getMiddlePoint();
    const dartDepthLine = new Line(middlePoint, depth, 270 + degrees);

    this.getBeginPoint = function() {
        return dartWidthLine.getBeginPoint();
    };

    this.getEndPoint = function() {
        return dartWidthLine.getEndPoint();
    };

    this.getDepthPoint = function() {
        return dartDepthLine.getEndPoint();
    };

    this.getWidth = function() {
        return dartWidthLine.getLength();
    };

    this.getDartWidthLine = function() {
        return dartWidthLine;
    };

    this.getMiddlePoint = function() {
        return dartWidthLine.getMiddlePoint();
    };

    this.getDepth = function () {
        return depth;
    };

    this.getDegrees = function () {
        return normalizeDegree(degrees);
    };

    this.getClass = function () {
        return 'Dart';
    };

    this.toString = function () {
        let aux = 'Dart from origin point at: ' + beginPoint.toString() + '\n';
        aux = aux.concat('and end point at: ' + dartWidthLine.getEndPoint().toString()) + '\n';
        aux = aux.concat('width: ' + this.getWidth()) + '\n';
        aux = aux.concat('depth: ' + this.getDepth()) + '\n';
        aux = aux.concat('degrees: ' + roundNumber(this.getDegrees(), 0));

        return aux;
    };

} // end of Dart


function Painter(canvasObj, zoom) {
    'use strict';
    const ctx = canvasObj.getContext('2d' , { willReadFrequently: true});
    let lastPoint = new Point(0, 0);
    let myStylizer = new ContextStylizer(ctx);
    let myStylizerText = new ContextStylizerText(ctx);
    let myStylizerPoint = new ContextStylizerPoint(ctx);

    // he convertido previamente a milímetros (si el usuario eligió pulgadas),
    // es decir, sólo se trabaja con milímetros
    ctx.setTransform(2.832 / zoom, 0, 0, 2.832 / zoom, 0, 0);

    this.clearAll = function () {
        // Prepare the canvas for paint
        ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);

        // We make a solid white background
        // ctx.fillStyle = "#FFFFFF";
        // ctx.fillRect(0, 0, canvasObj.width, canvasObj.height);
    };

    this.lineTo = function (point, style = '') {
        ctx.beginPath();

        // const stylizer = new ContextStylizer(ctx, style);

        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();

        lastPoint = point;

        return lastPoint;
    };


    this.drawPoint = function (point, style = '') {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);

        if (style.length !== 0) {
            myStylizerPoint = new ContextStylizerPoint(ctx, style);
        }

        ctx.fill();
    };

    this.drawLine = function (auxLine, style = '') {
        const A = auxLine.getBeginPoint();
        const B = auxLine.getEndPoint();

        ctx.beginPath();

        if (style.length !== 0) {
            myStylizer = new ContextStylizer(ctx, style);
        }

        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();

        lastPoint = B;

        return lastPoint;
    };

    this.drawLineTwoPoints = function (pointA, pointB, style = '') {
        const auxLine = new Line(pointA, pointB);

        return this.drawLine(auxLine, style);
    };

    this.drawRect = function (originPoint, width, height, style = '') {
        const x = originPoint.x;
        const y = originPoint.y;

        ctx.beginPath();

        if (style.length !== 0) {
            myStylizer = new ContextStylizer(ctx, style);
        }

        ctx.rect(x, y, width, height);
        ctx.stroke();

        lastPoint = originPoint;

        return lastPoint;
    };

    this.drawCurveLine = function (curveLine, style = '') {
        const beginPoint = curveLine.getBeginPoint();
        const endPoint = curveLine.getEndPoint();
        const controlPoint = curveLine.getControlPoint();

        ctx.beginPath();

        if (style.length !== 0) {
            myStylizer = new ContextStylizer(ctx, style);
        }

        ctx.moveTo(beginPoint.x, beginPoint.y);
        ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
        ctx.stroke();

        lastPoint = endPoint;

        return lastPoint;
    };


    this.drawDart = function (dart, style = '') {
        ctx.beginPath();

        if (style.length !== 0) {
            myStylizer = new ContextStylizer(ctx, style);
        }

        const beginnerPoint = dart.getBeginPoint();
        const depthPoint = dart.getDepthPoint();
        const dartWidthLine = dart.getDartWidthLine();

        ctx.moveTo(beginnerPoint.x, beginnerPoint.y);
        ctx.lineTo(depthPoint.x, depthPoint.y);

        // Because lineTo needs the x and y coordinates of a point we need to obtain
        // those coordinates of the point where the dart should end
        const x = dartWidthLine.getEndPoint().x;
        const y = dartWidthLine.getEndPoint().y;

        ctx.lineTo(x, y);
        ctx.stroke();

        // update the last drawn point
        lastPoint = dartWidthLine.getEndPoint();

        return lastPoint;
    };

    this.setLabelToPoint = function (label, point, position, style = '') {
        const dist = 8;
        let x = point.x;
        let y = point.y;

        if (style.length !== 0) {
            const stylizer = new ContextStylizerText(ctx, style);
            myStylizerText = stylizer;
        }

        const width = myStylizerText.getLabelWidth(label);
        const height = myStylizerText.getFontSize();


        if (position !== undefined) {
            if (position.startsWith('t')) {
                y = y - dist;
            } else if (position.startsWith('b')) {
                y = y + (dist * 1.8);
            } else if (position.startsWith('r')) {
                x = x + dist;
            } else if (position.startsWith('l')) {
                x = x - dist - width;
            }

            // Corrección para que la etiqueta quede centrada con el punto
            if (position.startsWith('t') || position.startsWith('b')) {
                x = x - (width / 2);
            } else if (position.startsWith('r') || position.startsWith('l')) {
                y = y + (height / 2);
            }

            // Corrección para orientaciones compuestas, es decir: top-lef (tl), top-right (tr),
            // bottom-left(bl), bottom-right (br)
            if (position.length === 2) {
                if (position.endsWith('l')) {
                    x = x - dist;
                } else if (position.endsWith('r')) {
                    x = x + dist;
                }

                y = y + 4;
            }

        }

        ctx.fillText(label, x, y);
    };


    this.moveTo = function (point) {
        const x = point.x;
        const y = point.y;

        ctx.moveTo(x, y);

        lastPoint = point;

        return lastPoint;
    };


    this.translate = function (x, y) {
        ctx.translate(x, y);
    };

    this.getLastPoint = function () {
        return lastPoint;
    };
    this.resetStyle = function () {
        myStylizer.reset();
    };

    this.getStylizer = function () {
        return myStylizer;
    };

    this.fill = function (style = '') {
        if (style.length !== 0) {
            ctx.fillStyle = style;
        }

        ctx.fill();
    };

    this.drawObject = function(objToDraw) {
        let allThatMustBeDrawn = objToDraw.getDrawableObjects();
        let style = '';
        let styleDottedLine = 'color:#99afbf;width:1;lineCap:round;pattern:[4,3]';
        let styleAuxiliaryLine = 'color:#99afbf;width:1;lineCap:round';
        let styleLine = 'color:#f4623a;width:3;lineCap:round';
        let stylePoint = 'color:#99afbf';
        let arrayOfPaintedPoints = new Array();
        let beginPointLabel = '';
        let endPointLabel = '';
        let orientationDegrees = '';
        let orientationLine = '';

        // Cada objeto puede estar formado por varios patrones.
        // Ejem: en el caso de una falda hay un patrón delantero y otro trasero, pero para una
        // camisa debemos incluir el patrón de la manga.
        for (let i = 0; i < allThatMustBeDrawn.length; i++) {

            for (const [key, value] of Object.entries(allThatMustBeDrawn[i])) {
                console.log(key);
                console.log(value.toString());
                if (value.getClass() === "Line") {
                    if (key.startsWith('dotted')) {
                        style = styleDottedLine;
                    } else if (key.startsWith('auxiliary')) {
                        style = styleAuxiliaryLine;
                    } else {
                        style = styleLine;
                    }

                    this.drawLine(value, style);
                    orientationDegrees = getOrientation(value.getDegrees());
                    orientationLine = getLineOrientation(value);

                    console.log('point' + getBeginPointName(key) + ', ' + value.getBeginPoint());
                    console.log('point' + getEndPointName(key) + ', ' + value.getEndPoint());
                    console.log('degrees: ' + value.getDegrees());
                    console.log('orientationDegrees: ' + orientationDegrees);
                    console.log('orientationLine: ' + orientationLine);
                    beginPointLabel = getBeginPointName(key);
                    endPointLabel = getEndPointName(key);

                    // Se lleva la cuenta de los puntos (iniciales y finales) de una línea a los que se les ha etiquetado
                    // Un punto que sale por primera vez, se etiqueta, si ya ha salido...no se le pone etiqueta
                    if (!arrayOfPaintedPoints.includes(beginPointLabel)) {
                        this.setLabelToPoint(beginPointLabel, value.getBeginPoint(), orientationLine, stylePoint);
                        arrayOfPaintedPoints.push(beginPointLabel);
                    }

                    if (!arrayOfPaintedPoints.includes(endPointLabel)) {
                        this.setLabelToPoint(endPointLabel, value.getEndPoint(), orientationLine, stylePoint);
                        arrayOfPaintedPoints.push(endPointLabel);
                    }

                } else if (value.getClass() === "CurveLine") {
                    this.drawCurveLine(value, styleLine);
                } else if (value.getClass() === "Dart") {
                    this.drawDart(value, styleLine);
                } else if (value.getClass() === "Point") {
                    this.drawPoint(value, stylePoint);
                    console.log(getPointName(key));
                    let orientation = value.label.orientation;
                    let labelValue = value.label.value;
                    this.setLabelToPoint(labelValue, value, orientation);
                }
            }
        }
    };


} // end of Painter


function ContextStylizer(ctx, styleStr = '') {
    const style = new StylistHelper(styleStr);

    const width = style.getWidth();
    const pattern = style.getPattern();
    const color = style.getColor();
    const lineCap = style.getLineCap();


    ctx.lineWidth = width;
    ctx.setLineDash(pattern);
    ctx.strokeStyle = color;
    ctx.lineCap = lineCap;

    this.reset = function () {
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.strokeStyle = 'black';
        ctx.lineCap = 'butt';
    };

}

function ContextStylizerText(ctx, styleStr = '') {
    const style = new StylistHelper(styleStr);

    ctx.font = style.getFont();
    ctx.fillStyle = style.getColor();

    this.reset = function () {
        ctx.font = '10px sans-serif';
        ctx.fillStyle = 'black';
    };

    this.getLabelWidth = function (label) {
        return ctx.measureText(label).width;
    };

    this.getFontSize = function () {
        return style.getFontSize();
    };

}

function ContextStylizerPoint(ctx, styleStr = '') {
    const style = new StylistHelper(styleStr);

    const color = style.getColor();

    ctx.fillStyle = color;

    this.reset = function () {
        ctx.fillStyle = 'black';
    };

}

// Example of Style --> 'width:3;color:aqua;pattern:[8,2];font:24px Georgia'
function StylistHelper(styleStr = '') {
    const style = {
        width: 1, // ctx.lineWith = number;
        pattern: [], // ctx.setLineDash(pattern);
        color: 'black', // ctx.strokeStyle or ctx.fillStyle;
        font: '10px sans-serif',
        lineCap: 'butt',
    };

    this.getValue = function (element) {
        let value = '';

        if (styleStr.length !== 0) {
            let lookForStr = element;

            const index = styleStr.indexOf(lookForStr);

            if (index !== -1) {
                const str = styleStr.substring(index + lookForStr.length);
                const indexOfSemicolon = str.indexOf(';');

                if (indexOfSemicolon !== -1) {
                    value = str.substring(1, indexOfSemicolon);
                } else {
                    value = str.substring(1);
                }
            }
        }

        return value;

    };


    this.getWidth = function () {
        let value = this.getValue('width');

        if (value.length === 0) {
            value = style.width;
        }

        style.width = parseInt(value);

        return style.width;
    };

    this.getColor = function () {
        let value = this.getValue('color');

        if (value.length === 0) {
            value = style.color;
        }

        style.color = value.toLowerCase();

        return style.color;

    };

    this.getFont = function () {
        let value = this.getValue('font');

        if (value.length === 0) {
            value = style.font;
        }

        style.font = value;

        return style.font;
    };

    this.getPattern = function () {
        const strPattern = this.getValue('pattern');
        let value = null;

        if (strPattern.length === 0) {
            value = style.pattern;
        } else {
            value = this.strToPattern(strPattern);
        }

        style.pattern = value;

        return style.pattern;
    };

    this.getLineCap = function () {
        let value = this.getValue('lineCap');

        if (value.length === 0) {
            value = style.lineCap;
        }

        style.lineCap = value;

        return style.lineCap;
    };


    this.strToPattern = function (str) {
        let array = null;
        const aux = '';
        const index = str.indexOf(',');
        let numElements = 0;

        if (index !== -1) {
            numElements = 2;
            const indexFirstClasp = str.indexOf('[');
            const indexLastClasp = str.indexOf(']');

            if (indexFirstClasp === -1 || indexLastClasp === -1) {
                throw new Error('StyleFormatException: found: ' + str + ' --> must be expressed something like: [valueOne,valueTwo]');
            }

            const firstValue = parseInt(str.substring(indexFirstClasp + 1, index).trim());
            const secondValue = parseInt(str.substring(index + 1, indexLastClasp).trim());

            array = [firstValue, secondValue];
        } else {
            array = [];
        }

        return array;
    };

    this.getFontSize = function () {
        let size = 0;
        const indexOfPX = style.font.indexOf('px');

        if (indexOfPX !== -1) {
            const strSize = style.font.substring(0, indexOfPX);
            size = parseInt(strSize);
        }

        return size;
    };

    this.toString = function () {
        let str = 'style = {\n';
        str = str.concat('\t\t' + 'width:' + style.width + ',\n');
        str = str.concat('\t\t' + 'pattern:' + style.pattern + ',\n');
        str = str.concat('\t\t' + 'color:' + style.color + ',\n');
        str = str.concat('\t\t' + 'font:' + style.font + ',\n');
        str = str.concat('\t\t' + 'lineCap:' + style.lineCap + ',\n');
        str = str.concat('}');
        return str;
    };


}

