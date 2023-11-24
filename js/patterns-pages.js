/******************************************************************
 * Set of utility functions used in pattern web pages.
 * They contain functions to perform tasks such as...
 * - Validate data collection forms.
 * - Show error messages to the user.
 * - Define the functions that start the pattern drawing process.
 ******************************************************************/



/**
 * Validates the data entered the pattern creation forms.
 * If blank spaces are entered, they are eliminated, and it is verified that the type of data
 * entered in a text field is numeric.
 * In the event that no numbers are entered or if the field is left empty (after removing blanks),
 * validation will fail.
 *
 * @param formToValidate the from to validate
 * @returns {boolean} true if the validation were OK
 */
function validateForm(formToValidate) {
    const formElements = formToValidate.elements;

    let inputValue = '';
    let isValid = true;
    for(let i = 0; i < formElements.length; i++) {
        if (formElements[i].tagName === "INPUT" && formElements[i].type === 'text') {
            formElements[i].value = formElements[i].value.trim();
            inputValue = formElements[i].value;
            if (inputValue.length === 0  || isNaN(inputValue)) {
                formElements[i].value = '';
                isValid = false;
                break;
            }
        }
    }

    return isValid;
}

/**
 * Operations that are performed by clicking on the metric unit selector.
 * When changing units, both the canvas and the data entered in the form must be reset.
 * The value is saved in a hidden variable named: units + patternType. (example: unitsTrousers)
 * @param patternType can be one of three types of pattern
 */
function setMeasurementUnit(patternType) {
    let checkUnits = document.getElementById('checkUnits' + patternType);
    let unitsTxt = document.getElementById('unitsTxt' + patternType);
    unitsTxt.innerHTML = '';

    let units = document.getElementById('units' + patternType);

    if (checkUnits.checked) {
        unitsTxt.innerHTML = '(millimeters)';
        units.value = 'mm';
    } else {
        unitsTxt.innerHTML = '(inches)';
        units.value = 'in';
    }

    // reset form and canvas
    document.getElementById('form' + patternType).reset();
    clearDrawing(patternType);
}

/**
 * Gets the value saved in the hidden variable named: units + patternType. (example: unitsTrousers)
 * @param patternType can be one of three types of pattern
 * @returns the value of the hidden variable
 */
function getMeasurementUnit(patternType) {
    // we establish the units of measurement (it will affect the DPI of the canvas)
    return document.getElementById('units' + patternType).value;
}

/**
 * Based on the name of the pattern we want to draw, the corresponding drawing method is invoked.
 * A pattern will only be painted if all the measurement information is available.
 * @param patternType can be one of three types of pattern (Shirt, Skirt or Trousers)
 */
function draw(patternType) {
    const form = document.getElementById('form' + patternType);
    const isValidForm = validateForm(form);
    if (!isValidForm) {
        showAlertModal('Verify that all fields contain valid measurement data before building the pattern.');
    } else {
        // To unify concepts and simplify calculations, it was decided to use a single unit of measurement behind the scenes (millimeters)
        convertMeasurementsToMillimeters(patternType);

        const canvas = document.getElementById('canvas' + patternType);
        const zoom = parseFloat(document.getElementById('zoom' + patternType).value);


        if (patternType === 'Shirt') {
            drawShirt(canvas, zoom);
        } else if (patternType === 'Skirt') {
            drawSkirt(canvas, zoom);
        } else if (patternType === 'Trousers') {
            drawTrousers(canvas, zoom);
        }

        // Since the calculations were done in millimeters, if the user selected 'inches' we converted back to inches.
        if (getMeasurementUnit(patternType) === 'in') {
            convertMeasurementsToInches(patternType);
        }

    }

}

/**
 * Converts the measurements of a pattern to millimeters, that is, it transforms the values of the text boxes.
 * @param patternType can be one of three types of pattern (Shirt, Skirt or Trousers)
 */
function convertMeasurementsToMillimeters(patternType) {
    let measurementUnit = getMeasurementUnit(patternType);
    let factorConversion = 1;

    if (measurementUnit === 'in') {
        factorConversion = 25.4;
    }

    const form = document.getElementById('form' + patternType);
    const formElements = form.elements;

    for(let i = 0; i < formElements.length; i++) {
        if (formElements[i].tagName === "INPUT" && formElements[i].type === 'text') {
            formElements[i].value = roundNumber(formElements[i].value * factorConversion, 2);
        }
    }
}

/**
 * Converts the measurements of a pattern to inches, that is, it transforms the values of the text boxes.
 * @param patternType can be one of three types of pattern (Shirt, Skirt or Trousers)
 */
function convertMeasurementsToInches(patternType) {
    const form = document.getElementById('form' + patternType);
    const formElements = form.elements;

    for(let i = 0; i < formElements.length; i++) {
        if (formElements[i].tagName === "INPUT" && formElements[i].type === 'text') {
            formElements[i].value = roundNumber(formElements[i].value / 25.4, 2);
        }
    }
}

/**
 * We collect the values entered by the user in the text boxes and with this data we create the JavaScript
 * object that represents the pattern. Finally, we pass it to the Painter object to draw it on the canvas.
 * @param canvas the HTML canvas object
 * @param zoom the value of the <select> (zoom) of the pattern creation form
 */
function drawShirt(canvas, zoom) {
        // Body measurements
        const bustCircumference = parseFloat(document.getElementById("bust-circumference").value);
        const backLength = parseFloat(document.getElementById("back-length").value);
        const frontLength = parseFloat(document.getElementById("front-length").value);
        const shoulderLength = parseFloat(document.getElementById("shoulder-length").value);
        const shoulderDrop = parseFloat(document.getElementById("shoulder-drop").value);
        const necklineWidth = parseFloat(document.getElementById("neckline-width").value);
        const apexToApex = parseFloat(document.getElementById("apex-to-apex").value);
        const waist = parseFloat(document.getElementById("waist").value);
        const apexToWaist = parseFloat(document.getElementById("apex-to-waist").value);

        // Measurements for sleeve
        const overarmLength = parseFloat(document.getElementById("overarm-length").value);
        const underarmLength = parseFloat(document.getElementById("underarm-length").value) - 30; // 30 is subtracted as a correction for the armhole
        const armCircumference = parseFloat(document.getElementById("arm-circumference").value);
        const wristCircumference = parseFloat(document.getElementById("wrist-circumference").value);

        setCanvasDimensions(canvas, zoom, bustCircumference, overarmLength);

        // Cleaning the canvas before starting to paint.
        const painter = new Painter(canvas, zoom);
        painter.clearAll();

        const shirt = new Shirt(bustCircumference, backLength, frontLength, shoulderLength, shoulderDrop,
            necklineWidth, apexToApex, waist, apexToWaist, overarmLength,
            underarmLength, armCircumference, wristCircumference,);

        painter.drawObject(shirt);
}

/**
 * We collect the values entered by the user in the text boxes and with this data we create the JavaScript
 * object that represents the pattern. Finally, we pass it to the Painter object to draw it on the canvas.
 * @param canvas the HTML canvas object
 * @param zoom the value of the <select> (zoom) of the pattern creation form
 */
function drawSkirt(canvas, zoom) {
    const waist = parseFloat(document.getElementById("waist").value);
    const lowHip = parseFloat(document.getElementById("low-hip").value);
    const waistToHip = parseFloat(document.getElementById("waist-to-hip").value);
    const skirtLength = parseFloat(document.getElementById("skirt-length").value);
    const apexToApex = parseFloat(document.getElementById("apex-to-apex").value);

    setCanvasDimensions(canvas, zoom, lowHip / 1.5, skirtLength);

    // Cleaning the canvas before starting to paint.
    const painter = new Painter(canvas, zoom);
    painter.clearAll();

    const skirt = new Skirt(waist, lowHip, waistToHip, skirtLength, apexToApex);

    painter.drawObject(skirt);
}

/**
 * We collect the values entered by the user in the text boxes and with this data we create the JavaScript
 * object that represents the pattern. Finally, we pass it to the Painter object to draw it on the canvas.
 * @param canvas the HTML canvas object
 * @param zoom the value of the <select> (zoom) of the pattern creation form
 */
function drawTrousers(canvas, zoom) {
    //Fixed distances (the rest of the distances are relative to these)
    const lowHip = parseFloat(document.getElementById("low-hip").value);
    const waistToHip = parseFloat(document.getElementById("waist-to-hip").value);
    const legLength = parseFloat(document.getElementById("leg-length").value);
    const ankleToKnee = parseFloat(document.getElementById("ankle-to-knee").value);
    const heightToHip = parseFloat(document.getElementById("height-to-hip").value);
    const inseam = parseFloat(document.getElementById("inseam").value);

    setCanvasDimensions(canvas, zoom, lowHip, heightToHip);

    // Cleaning the canvas before starting to paint.
    const painter = new Painter(canvas, zoom);
    painter.clearAll();

    const trousers = new Trousers(lowHip, waistToHip, legLength, ankleToKnee, heightToHip, inseam);
    painter.drawObject(trousers);
}

// Making INFO modals dynamic
const infoModal = document.getElementById('infoModal');

/**
 * The information that is loaded into the information modal is obtained from
 * the configuration JSON object named 'measurementData'.
 * The type of information that is loaded dynamically is: title of the modal
 * and body of the modal (description of how to take the measurement and reference image).
 */
infoModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const btnLauncher = button.getAttribute('data-bs-case');

    // Update the modal's content.
    const modalTitle = infoModal.querySelector('.modal-title');
    const modalBody = infoModal.querySelector('.modal-body');

    // clear all previous content
    modalBody.innerHTML = '';

    // create the help description for the modal
    const paragraph = document.createElement("p");

    // create the help image for the modal
    const image = document.createElement("img");
    image.classList.add("img-fluid");

    // read content from JSON
    const modalContent = getDataFromJSON(btnLauncher);
    modalTitle.textContent = modalContent[0];
    paragraph.textContent = modalContent[1];
    image.src = modalContent[2];

    // Add paragraph to modal's body
    modalBody.append(paragraph);

    // Add image to modal's body
    modalBody.append(image);
});

/**
 * Function that is launched when clicking on the image download button
 * @param patternType can be one of three types of pattern (Shirt, Skirt or Trousers)
 */
function downloadImage(patternType) {
    // Retrieve reference to canvas
    const canvas = document.getElementById('canvas' + patternType);

    if ((canvas.width === 0 && canvas.height === 0) || isCanvasBlank(canvas)) {
        showAlertModal('Build the pattern first, then click the "Download Pattern" button.');
    } else {
        convertToImage(canvas, patternType);
    }
}

/**
 * Function to show the modal with alert messages
 * @param msg message to show
 */
function showAlertModal(msg) {
    let alertModal =  new bootstrap.Modal(document.getElementById('alertModal'), {});
    const modalBody = document.getElementById('alertBody');
    modalBody.innerHTML = msg;
    alertModal.show();
}

/**
 * Function that is invoked when clicking on the "Load Example" button. The information
 * is taken from the 'measurementData' configuration JSON object.
 * @param patternType can be one of three types of pattern (Shirt, Skirt or Trousers)
 */
function loadExample(patternType) {
    let unit = getMeasurementUnit(patternType);

    const data = measurementData.measurements;
    let caseName = '';
    let patternName = '';
    for(let i = 0; i < data.length; i++) {
        caseName = data[i].caseName;
        for(let z = 0; z < data[i].patterns.length; z++) {
            patternName = data[i].patterns[z];
            if (patternName === patternType) {
                if (unit === "mm") {
                    document.getElementById(caseName).value = data[i].examples.mm;
                } else {
                    document.getElementById(caseName).value = data[i].examples.in;
                }

            }
        }
    }
}

/**
 * Cleaning the canvas of a pattern, in order to update the drawing.
 * @param patternType can be one of three types of pattern (Shirt, Skirt or Trousers)
 */
function clearDrawing(patternType) {
    const canvas = document.getElementById('canvas' + patternType);
    const zoom = parseFloat(document.getElementById('zoom' + patternType).value);

    const context = canvas.getContext('2d' , { willReadFrequently: true});
    // Store the current transformation matrix
    context.save();

    // Use the identity matrix while clearing the canvas
    context.setTransform(2.832 / zoom, 0, 0, 2.832 / zoom, 0, 0);
    // context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Restore the transform
    context.restore();
    canvas.width = 0;
    canvas.height = 0;
}
