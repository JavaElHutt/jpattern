// JSON object
const measurementData = {
    "measurements": [
        {
            "caseName": "bust-circumference",
            "title": "Bust Circumference",
            "description" : "This measurement is taken around the back, under the arms, and at the widest part of the bust. Horizontal measurement.",
            "image": "../assets/img/measurements/bust-circumference.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 924,
                "in": 36.38,
            },
        },
        {
            "caseName": "back-length",
            "title": "Back Length",
            "description" : "Measure the length of the back from the seventh vertebra (the most prominent vertebra at the nape of the neck), following the shape of the back to the Waistline.",
            "image": "../assets/img/measurements/back-length.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 404,
                "in": 16,
            },
        },
        {
            "caseName": "front-length",
            "title": "Front Length",
            "description" : "Measure from the shoulder/neck point (HPS, highest point of the shoulder) to the Waistline. This is a vertical measurement that goes over the bust.\n" +
                "Find the shoulder/neck point by wearing a simple chain necklace.",
            "image": "../assets/img/measurements/front-length.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 466,
                "in": 18.34,
            },
        },
        {
            "caseName": "shoulder-length",
            "title": "Shoulder Length",
            "description" : "Measure the shoulder length from neck base to shoulder joint.",
            "image": "../assets/img/measurements/shoulder-length.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 78.3,
                "in": 3.08,
            },
        },
        {
            "caseName": "shoulder-drop",
            "title": "Shoulder Drop",
            "description" : "Vertical measurement between the shoulder/neck point (HPS, highest point of the shoulder) to the shoulder joint. " +
                "Place a ruler horizontally at the level of the shoulder/neck point (HPS, highest point of the shoulder) and measure the " +
                "vertical distance from the point of the shoulder. (See Shoulder Length measurement)",
            "image": "../assets/img/measurements/shoulder-drop.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 40,
                "in": 1.57,
            },
        },
        {
            "caseName": "neckline-width",
            "title": "Neckline width",
            "description" : "Distance from 'Center line' (line of symmetry of the body) to 'Front Length' line. (See Front Length measurement).",
            "image": "../assets/img/measurements/neckline-width.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 80,
                "in": 3.15,
            },
        },
        {
            "caseName": "apex-to-apex",
            "title": "Apex to apex",
            "description" : "Measure in between the two highest points of the bust (from nipple to nipple).",
            "image": "../assets/img/measurements/apex-to-apex.jpg",
            "patterns": ["Shirt", "Skirt", ],
            "examples": {
                "mm": 183,
                "in": 7.2,
            },
        },
        {
            "caseName": "waist",
            "title": "Waist",
            "description" : "Measure around the narrowest part of your torso at your natural waistline.",
            "image": "../assets/img/measurements/waist.jpg",
            "patterns": ["Shirt", "Skirt", ],
            "examples": {
                "mm": 669,
                "in": 26.34,
            },
        },
        {
            "caseName": "apex-to-waist",
            "title": "Apex to waist",
            "description" : "The distance from the highest point of the chest to the Waistline, following the 'Front Length' line. (See Front Length)",
            "image": "../assets/img/measurements/apex-to-waist.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 179,
                "in": 7.04,
            },
        },
        {
            "caseName": "overarm-length",
            "title": "Overarm Length",
            "description" : "With your arm slightly bent, measure from the shoulder joint to below the wrist bone, passing through the elbow.",
            "image": "../assets/img/measurements/overarm-length.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 565,
                "in": 22.24,
            },
        },
        {
            "caseName": "underarm-length",
            "title": "Underarm Length",
            "description" : "From the armpit to the inside of the wrist.",
            "image": "../assets/img/measurements/underarm-length.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 468,
                "in": 18.42,
            },
        },
        {
            "caseName": "arm-circumference",
            "title": "Upper Arm Circumference",
            "description" : "Measure around the widest part of the upper arm, the bicep.",
            "image": "../assets/img/measurements/arm-circumference.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 268,
                "in": 10.55,
            }
        },
        {
            "caseName": "wrist-circumference",
            "title": "Wrist Circumference",
            "description" : "Measure the narrowest point of the wrist.",
            "image": "../assets/img/measurements/wrist-circumference.jpg",
            "patterns": ["Shirt", ],
            "examples": {
                "mm": 157,
                "in": 6.18,
            },
        },
        {
            "caseName": "low-hip",
            "title": "Low Hip",
            "description" : "Horizontal circumference around the widest part of the hip area.",
            "image": "../assets/img/measurements/low-hip.jpg",
            "patterns": ["Skirt", "Trousers", ],
            "examples": {
                "mm": 987.8,
                "in": 38.89,
            },
        },
        {
            "caseName": "waist-to-hip",
            "title": "Waist to Hip",
            "description" : "Side Waist Point to Side Hip Point, this is a vertical measurement.",
            "image": "../assets/img/measurements/waist-to-hip.jpg",
            "patterns": ["Skirt", "Trousers", ],
            "examples": {
                "mm": 218,
                "in": 8.58,
            },
        },
        {
            "caseName": "skirt-length",
            "title": "Skirt length",
            "description" : "Skirt length measurement will depend on the type of skirt we want to make.",
            "image": "../assets/img/measurements/skirt-length.jpg",
            "patterns": ["Skirt", ],
            "examples": {
                "mm": 500,
                "in": 19.68,
            },
        },
        {
            "caseName": "leg-length",
            "title": "Leg Length ",
            "description" : "Vertical measurement from waist to ankle. The measuring tape should be attached to the body and along the central side of the leg.",
            "image": "../assets/img/measurements/leg-length.jpg",
            "patterns": ["Trousers", ],
            "examples": {
                "mm": 1079,
                "in": 42.48,
            },
        },
        {
            "caseName": "ankle-to-knee",
            "title": "Ankle to Knee",
            "description" : "Vertical measurement from ankle to knee. The measuring tape should be attached to the body and along the central side of the leg.",
            "image": "../assets/img/measurements/ankle-to-knee.jpg",
            "patterns": ["Trousers", ],
            "examples": {
                "mm": 428,
                "in": 16.85,
            },
        },
        {
            "caseName": "height-to-hip",
            "title": "Height to hip",
            "description" : "Vertical measurement from the floor to the hip. The measurement is preferably done with a measuring stick.",
            "image": "../assets/img/measurements/height-to-hip.jpg",
            "patterns": ["Trousers", ],
            "examples": {
                "mm": 1152,
                "in": 45.35,
            },
        },
        {
            "caseName": "inseam",
            "title": "Inseam",
            "description" : "Inseam: Vertical measurement from the floor to the crotch. The measurement is preferably done with a measuring stick.",
            "image": "../assets/img/measurements/inseam.jpg",
            "patterns": ["Trousers", ],
            "examples": {
                "mm": 879,
                "in": 34.6,
            },
        },
    ],
}


//Height to hip: Vertical measurement from the floor to the hip. The measurement is preferably done with a measuring stick.

function getHorizontalDistance(fromPoint, toPoint) {
    let distance;

    // toPoint is to the right of fromPoint
    if (toPoint.x >= fromPoint.x) {
        distance = toPoint.x - fromPoint.x;
    } else {
        distance = fromPoint.x - toPoint.x;
    }

    return distance;
}

function flipYPoint(pointOfSymmetry, point) {
    let offset;

    offset = getHorizontalDistance(pointOfSymmetry, point);
    return new Point(pointOfSymmetry.x + offset, point.y);
}

function flipYLine(pointOfSymmetry, line) {
    let offset;

    let symBeginPoint = line.getBeginPoint();
    offset = getHorizontalDistance(pointOfSymmetry, symBeginPoint);
    symBeginPoint = new Point(pointOfSymmetry.x + offset, symBeginPoint.y);

    let symEndPoint = line.getEndPoint();
    offset = getHorizontalDistance(pointOfSymmetry, symEndPoint);
    symEndPoint = new Point(pointOfSymmetry.x + offset, symEndPoint.y);

    return new Line(symBeginPoint, symEndPoint);
}


/**
 * http://www.linuxhispano.net/2013/06/12/redondear-numeros-decimales-en-javascript/
 */
function roundNumber(number, decimals = 3) {
    const aux = parseFloat(number);
    return  Math.round(aux * Math.pow(10, decimals)) / Math.pow(10, decimals);
}


/**
 * https://stackoverflow.com/questions/14488849/higher-dpi-graphics-with-html5-canvas
 */
function setDPI(canvas, dpi) {
    // Set up CSS size.
    canvas.style.width = canvas.style.width || canvas.width + 'px';
    canvas.style.height = canvas.style.height || canvas.height + 'px';

    // Resize canvas and scale future draws.
    const scaleFactor = dpi / 96;
    canvas.width = Math.ceil(canvas.width * scaleFactor);
    canvas.height = Math.ceil(canvas.height * scaleFactor);
    const ctx = canvas.getContext('2d', {willReadFrequently: true});
    ctx.scale(scaleFactor, scaleFactor);

    return ctx;
}

// http://w3.unpocodetodo.info/lab/angulos.php
function fromDegreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function fromRadiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

function getPointName(objName, num_case= 1) {
    let name = '';
    const typeOfObjName = typeof objName;

    if (objName != null && typeOfObjName === 'string' && objName.length > 0) {
        let arraySubstrings = objName.split('_');
        let numOfUnderscores = arraySubstrings.length -1;

        if (numOfUnderscores === 1 || numOfUnderscores === 2) {
            switch (num_case) {
                case 1: // a simple point or first point of a line
                    name = arraySubstrings[1];
                    break;
                case 2: // last point of a line
                    name = arraySubstrings[2];
                    break;
            }

        }

    }

    return name;
}

function getBeginPointName(objName) {
    return getPointName(objName, 1);
}

function getEndPointName(objName) {
    return getPointName(objName, 2);
}

function normalizeDegree(degree= 0.0) {
    let isNegative = degree < 0;
    let absDegree = Math.abs(degree);
    let result;

    while (absDegree >= 360) {
        absDegree = absDegree - 360;
    }

    if (isNegative) {
        result = 360 - absDegree;
    } else {
        result = absDegree;
    }

    return result;
}

function getOrientation(degree= 0.0) {
    let orientation = 't'; // default

    degree = roundNumber(normalizeDegree(degree));

    // r --> right
    // t --> top
    // l --> left
    // b --> bottom

    if (degree != null && !isNaN(degree)) {
        if (degree >= 0 && degree < 90) {
            orientation = "tl";
            if (degree === 0) {
                orientation = "t";
            }
        } else if (degree >= 90 && degree < 180) {
            orientation = "bl";
            if (degree === 90) {
                orientation = "l";
            }
        } else if (degree >= 180 && degree < 270) {
            orientation = "br";
            if (degree === 180) {
                orientation = "b";
            }
        } else if (degree >= 270 && degree < 360) {
            orientation = "tr";
            if (degree === 270) {
                orientation = "r";
            }
        }
    }

    return orientation;
}

function getLineOrientation(line) {
    let middlePoint = line.getMiddlePoint();
    let beginPoint = line.getBeginPoint();
    let orientation = '';

    if (middlePoint.x > beginPoint.x) { // RIGHT
        if (middlePoint.y > beginPoint.y) {
            orientation = 't'; // IV QUADRANT
        } else if (middlePoint.y > beginPoint.y) {
            orientation = 'r'; // I QUADRANT
        } else {
            orientation = 't'; // zero degrees
        }
    } else if (middlePoint.x < beginPoint.x) { // LEFT
        if (middlePoint.y > beginPoint.y) {
            orientation = "r"; // III QUADRANT
        } else if (middlePoint.y < beginPoint.y) {
            orientation = "l"; // II QUADRANT
        }else {
            orientation = "b"; // 180 degrees
        }
    } else if (middlePoint.x === beginPoint.x) {
        if (middlePoint.y > beginPoint.y) { // UPPER --> 90 degrees
            orientation = 'r';
        } else { // LOWER --> 270 degrees
            orientation = 'l';
        }
    }

    return orientation;
}

function setCanvasDimensions(canvas, zoom, maxWidth, maxHeight) {
    let factor = 0;
    if (zoom === 4) {
        factor = 1;
    } else if (zoom === 2) {
        factor = 1.7;
    } else if (zoom === 1) {
        factor = 3.5;
    }

    canvas.width = maxWidth * factor;
    canvas.height = maxHeight * factor;
}

function getDataFromJSON(btnLauncher) {
    let modalContent = ['', '', ''];
    for (let i = 0; i < measurementData.measurements.length; i++) {
        if (measurementData.measurements[i].caseName === btnLauncher) {
            modalContent[0] = measurementData.measurements[i].title;
            modalContent[1] = measurementData.measurements[i].description;
            modalContent[2] = measurementData.measurements[i].image;
            break;
        }
    }

    return modalContent;
}

/**
 * from: https://www.tutorialspoint.com/how-to-convert-canvas-graphics-to-image
 * Some little changes were made.
 */
function convertToImage(canvas, patternType) {
    // Create an image element
    const image = new Image();

    // Assign the canvas content as the source of the image
    image.src = canvas.toDataURL();

    // Create a temporary link element to download the image
    const link = document.createElement('a');
    link.href = image.src;
    link.download = patternType + '.png';

    // Trigger the link programmatically to start the download
    link.click();
}

/**
 * Returns true if every pixel's uint32 representation is 0 (or "blank")
 * from: https://stackoverflow.com/questions/17386707/how-to-check-if-a-canvas-is-blank
 * @param canvas
 * @returns {boolean}
 */
function isCanvasBlank(canvas) {
    const context = canvas.getContext('2d', {willReadFrequently: true});

    const pixelBuffer = new Uint32Array(
        context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
    );

    return !pixelBuffer.some(color => color !== 0);
}


const LEVELS = {
    ALL: 5,
    DEBUG: 4,
    INFO: 3,
    WARN: 2,
    ERROR: 1,
};

Object.freeze(LEVELS);

const levelConfig = LEVELS.ERROR;

class Logger {
    #level;
    constructor() {
        if (Logger._instance) {
            return Logger._instance;
        }
        Logger._instance = this;
        this.#level = levelConfig;
    }

    debug (msg='') {
        if (this.#level >= LEVELS.DEBUG) {
            console.log(msg);
        }
    }

    info (msg='') {
        if (this.#level >= LEVELS.INFO) {
            console.log(msg);
        }
    }

    warn (msg='') {
        if (this.#level >= LEVELS.WARN) {
            console.log(msg);
        }
    }

    error (msg='') {
        if (this.#level >= LEVELS.ERROR) {
            console.log(msg);
        }
    }

}