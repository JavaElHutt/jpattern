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

function getMeasurementUnit(patternType) {
    // establecemos las unidades de medida (afectará al DPI del canvas)
    return document.getElementById('units' + patternType).value;
}

function draw(patternType) {
    const form = document.getElementById('form' + patternType);
    const isValidForm = validateForm(form);
    if (!isValidForm) {
        showAlertModal('Verify that all fields contain valid measurement data before building the pattern.');
    } else {
        let measurementUnit = getMeasurementUnit(patternType);

        // To unify concepts and simplify calculations, it was decided to use a single unit of measurement behind the scenes (millimeters)
        convertMeasurementsToMillimeters(form, measurementUnit);

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

    return isValidForm;
}

function convertMeasurementsToMillimeters(form, measurementUnit) {
    let factorConversion = 1;

    if (measurementUnit === 'in') {
        factorConversion = 25.4;
    }

    const formElements = form.elements;

    for(let i = 0; i < formElements.length; i++) {
        if (formElements[i].tagName === "INPUT" && formElements[i].type === 'text') {
            formElements[i].value = roundNumber(formElements[i].value * factorConversion, 2);
        }
    }
}

function convertMeasurementsToInches(patternType) {
    const form = document.getElementById('form' + patternType);
    const formElements = form.elements;

    for(let i = 0; i < formElements.length; i++) {
        if (formElements[i].tagName === "INPUT" && formElements[i].type === 'text') {
            formElements[i].value = roundNumber(formElements[i].value / 25.4, 2);
        }
    }
}

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

function downloadImage(patternType) {
    // Retrieve reference to canvas
    const canvas = document.getElementById('canvas' + patternType);

    if ((canvas.width === 0 && canvas.height === 0) || isCanvasBlank(canvas)) {
        showAlertModal('Build the pattern first, then click the "Download Pattern" button.');
    } else {
        convertToImage(canvas, patternType);
    }
}

function showAlertModal(msg) {
    let alertModal =  new bootstrap.Modal(document.getElementById('alertModal'), {});
    const modalBody = document.getElementById('alertBody');
    modalBody.innerHTML = msg;
    alertModal.show();
}

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

const idPage = document.getElementsByClassName("pattern-page")[0].id;
const enlaces = document.getElementsByClassName('nav-link');
const brandText = document.getElementsByClassName('navbar-brand');
let casePage = -1;


document.addEventListener("DOMContentLoaded", function(event) {
    if (idPage === 'shirt-page') {
        casePage = 2; // position of links in navbar (firs element is 0)
    } else if (idPage === 'skirt-page') {
        casePage = 3;
    } else if (idPage === 'trousers-page') {
        casePage = 4;
    } else {
        casePage = 0;
    }

    resizeFunction();
})

window.onscroll = function() {
    changeNavBarSecondary();
};

window.onresize = function() {
    resizeFunction();
};

function resizeFunction() {
    let enlaces = document.getElementsByClassName('nav-link');
    let textColor = "#6e777f";
    let textPadding = "0.75rem 0";

    if (window.outerWidth < 992) {
        document.getElementById("secondaryNavBar").style.backgroundColor = "#fff";
        document.getElementsByClassName('navbar-brand')[0].style.color = "#212529";
    } else {
        document.getElementById("secondaryNavBar").style.backgroundColor = "#655a53";
        document.getElementsByClassName('navbar-brand')[0].style.color = "#cac6c4";
        textPadding  = "0 1rem";
        textColor = "#cac6c4";
    }

    for(let i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = textColor;
        enlaces[i].style.padding = textPadding;
    }

    enlaces[casePage].style.color = "#f4623a";
}

function changeNavBarSecondary() {
    let textColor;

    if (document.documentElement.scrollTop > 20 || window.outerWidth < 992) {
        document.getElementById("secondaryNavBar").style.backgroundColor = "#fff";
        textColor = "#212529";

        if (window.outerWidth < 992) {
            textColor = "#6e777f";
        }
    } else {
        document.getElementById("secondaryNavBar").style.backgroundColor = "#655a53";
        textColor = "#cac6c4";
    }

    for(let i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = textColor;
    }

    enlaces[casePage].style.color = "#f4623a";
    brandText[0].style.color = textColor;
}