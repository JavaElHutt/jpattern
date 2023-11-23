

// Secondary measures. In most patterns, they tend to be somewhat random measurements, defined
// by the designers after years of experience and experimentation, which have been defined following
// aesthetic values. How deep should a clamp be? In most cases this measure depends on the tailor's experience.
const SecondaryShirtMeasurements = {
    TOLERANCE: 5,
    EASE: 15,
    EASE_SLEEVE: 50,
    WAIST_CLAMP_WIDTH: 30,
}

Object.freeze(SecondaryShirtMeasurements);

class PatternBackShirt {
    auxiliaryLine_A2_B2;
    auxiliaryLine_B2_I2;
    auxiliaryLine_H3_L2;
    auxiliaryLine_I2_H3;
    auxiliaryLine_J2_K2;
    auxiliaryLine_G2_A2;
    curveLine_G2_E2;
    line_E2_F2;
    curveLine_F2_I2;
    line_I2_L2;
    line_L2_J2;
    dart_J2_K2;
    line_K2_C3;
    line_C3_G2;


    get auxiliaryLineJ2K2() {
        return this.auxiliaryLine_J2_K2;
    }

    set auxiliaryLineJ2K2(value) {
        this.auxiliaryLine_J2_K2 = value;
    }

    get auxiliaryLineG2A2() {
        return this.auxiliaryLine_G2_A2;
    }

    set auxiliaryLineG2A2(value) {
        this.auxiliaryLine_G2_A2 = value;
    }

    get auxiliaryLineI2H3() {
        return this.auxiliaryLine_I2_H3;
    }

    set auxiliaryLineI2H3(value) {
        this.auxiliaryLine_I2_H3 = value;
    }

    get auxiliaryLineH3L2() {
        return this.auxiliaryLine_H3_L2;
    }

    set auxiliaryLineH3L2(value) {
        this.auxiliaryLine_H3_L2 = value;
    }

    get auxiliaryLineB2I2() {
        return this.auxiliaryLine_B2_I2;
    }

    set auxiliaryLineB2I2(value) {
        this.auxiliaryLine_B2_I2 = value;
    }

    get auxiliaryLineA2B2() {
        return this.auxiliaryLine_A2_B2;
    }

    set auxiliaryLineA2B2(value) {
        this.auxiliaryLine_A2_B2 = value;
    }

    get curveLineG2E2() {
        return this.curveLine_G2_E2;
    }

    set curveLineG2E2(value) {
        this.curveLine_G2_E2 = value;
    }

    get lineE2F2() {
        return this.line_E2_F2;
    }

    set lineE2F2(value) {
        this.line_E2_F2 = value;
    }

    get curveLineF2I2() {
        return this.curveLine_F2_I2;
    }

    set curveLineF2I2(value) {
        this.curveLine_F2_I2 = value;
    }

    get lineI2L2() {
        return this.line_I2_L2;
    }

    set lineI2L2(value) {
        this.line_I2_L2 = value;
    }

    get lineL2J2() {
        return this.line_L2_J2;
    }

    set lineL2J2(value) {
        this.line_L2_J2 = value;
    }

    get dartJ2K2() {
        return this.dart_J2_K2;
    }

    set dartJ2K2(value) {
        this.dart_J2_K2 = value;
    }

    get lineK2C3() {
        return this.line_K2_C3;
    }

    set lineK2C3(value) {
        this.line_K2_C3 = value;
    }

    get lineC3G2() {
        return this.line_C3_G2;
    }

    set lineC3G2(value) {
        this.line_C3_G2 = value;
    }
} // end class PatternBackShirt

class PatternFrontShirt {
    auxiliaryLine_A1_B1;
    auxiliaryLine_B1_H1;
    auxiliaryLine_H1_H2;
    auxiliaryLine_H2_L1;
    auxiliaryLine_J1_K1;
    auxiliaryLine_C2_A1;
    curveLine_G1_E1;
    line_E1_F1;
    curveLine_F1_I1;
    line_I1_D1;
    dart_D1_D2;
    line_D2_L1;
    line_L1_J1;
    dart_J1_K1;
    line_K1_C2;
    line_C2_G1;
    line_C2_C1;
    dottedLine_C1_H1;


    get auxiliaryLineJ1K1() {
        return this.auxiliaryLine_J1_K1;
    }

    set auxiliaryLineJ1K1(value) {
        this.auxiliaryLine_J1_K1 = value;
    }

    get lineC2C1() {
        return this.line_C2_C1;
    }

    set lineC2C1(value) {
        this.line_C2_C1 = value;
    }

    get auxiliaryLineH1H2() {
        return this.auxiliaryLine_H1_H2;
    }

    set auxiliaryLineH1H2(value) {
        this.auxiliaryLine_H1_H2 = value;
    }

    get dottedLineC1H1() {
        return this.dottedLine_C1_H1;
    }

    set dottedLineC1H1(value) {
        this.dottedLine_C1_H1 = value;
    }

    get auxiliaryLineA1B1() {
        return this.auxiliaryLine_A1_B1;
    }

    set auxiliaryLineA1B1(value) {
        this.auxiliaryLine_A1_B1 = value;
    }

    get auxiliaryLineB1H1() {
        return this.auxiliaryLine_B1_H1;
    }

    set auxiliaryLineB1H1(value) {
        this.auxiliaryLine_B1_H1 = value;
    }

    get auxiliaryLineH2L1() {
        return this.auxiliaryLine_H2_L1;
    }

    set auxiliaryLineH2L1(value) {
        this.auxiliaryLine_H2_L1 = value;
    }

    get auxiliaryLineC2A1() {
        return this.auxiliaryLine_C2_A1;
    }

    set auxiliaryLineC2A1(value) {
        this.auxiliaryLine_C2_A1 = value;
    }

    get curveLineG1E1() {
        return this.curveLine_G1_E1;
    }

    set curveLineG1E1(value) {
        this.curveLine_G1_E1 = value;
    }

    get lineE1F1() {
        return this.line_E1_F1;
    }

    set lineE1F1(value) {
        this.line_E1_F1 = value;
    }

    get curveLineF1I1() {
        return this.curveLine_F1_I1;
    }

    set curveLineF1I1(value) {
        this.curveLine_F1_I1 = value;
    }

    get lineI1D1() {
        return this.line_I1_D1;
    }

    set lineI1D1(value) {
        this.line_I1_D1 = value;
    }

    get dartD1D2() {
        return this.dart_D1_D2;
    }

    set dartD1D2(value) {
        this.dart_D1_D2 = value;
    }

    get lineD2L1() {
        return this.line_D2_L1;
    }

    set lineD2L1(value) {
        this.line_D2_L1 = value;
    }

    get lineL1J1() {
        return this.line_L1_J1;
    }

    set lineL1J1(value) {
        this.line_L1_J1 = value;
    }

    get dartJ1K1() {
        return this.dart_J1_K1;
    }

    set dartJ1K1(value) {
        this.dart_J1_K1 = value;
    }

    get lineK1C2() {
        return this.line_K1_C2;
    }

    set lineK1C2(value) {
        this.line_K1_C2 = value;
    }

    get lineC2G1() {
        return this.line_C2_G1;
    }

    set lineC2G1(value) {
        this.line_C2_G1 = value;
    }
} // end class PatternFrontShirt

class PatternSleeveShirt {
    line_C4_D3;
    dottedLine_D3_A3;
    line_D4_C5;
    auxiliaryLine_C5_B3;
    dottedLine_A3_B3;
    dottedLine_A3_D4;
    curveLine_D3_P2;
    curveLine_P2_A3;
    curveLine_D4_P12;
    curveLine_P12_A3;
    line_C5_C4;
    point_P11;
    point_P12;
    point_P13;
    point_P21;
    point_P22;
    point_P23;

    get pointP23() {
        return this.point_P23;
    }

    set pointP23(value) {
        this.point_P23 = value;
    }

    get pointP22() {
        return this.point_P22;
    }

    set pointP22(value) {
        this.point_P22 = value;
    }

    get pointP21() {
        return this.point_P21;
    }

    set pointP21(value) {
        this.point_P21 = value;
    }

    get pointP13() {
        return this.point_P13;
    }

    set pointP13(value) {
        this.point_P13 = value;
    }

    get pointP11() {
        return this.point_P11;
    }

    set pointP11(value) {
        this.point_P11 = value;
    }

    get pointP12() {
        return this.point_P12;
    }

    set pointP12(value) {
        this.point_P12 = value;
    }

    get auxiliaryLineC5B3() {
        return this.auxiliaryLine_C5_B3;
    }

    set auxiliaryLineC5B3(value) {
        this.auxiliaryLine_C5_B3 = value;
    }

    get dottedLineA3D4() {
        return this.dottedLine_A3_D4;
    }

    set dottedLineA3D4(value) {
        this.dottedLine_A3_D4 = value;
    }

    get curveLineP12A3() {
        return this.curveLine_P12_A3;
    }

    set curveLineP12A3(value) {
        this.curveLine_P12_A3 = value;
    }

    get curveLineD4P12() {
        return this.curveLine_D4_P12;
    }

    set curveLineD4P12(value) {
        this.curveLine_D4_P12 = value;
    }

    get curveLineD3P2() {
        return this.curveLine_D3_P2;
    }

    set curveLineD3P2(value) {
        this.curveLine_D3_P2 = value;
    }

    get curveLineP2A3() {
        return this.curveLine_P2_A3;
    }

    set curveLineP2A3(value) {
        this.curveLine_P2_A3 = value;
    }

    get lineD4C5() {
        return this.line_D4_C5;
    }

    set lineD4C5(value) {
        this.line_D4_C5 = value;
    }

    get lineC5C4() {
        return this.line_C5_C4;
    }

    set lineC5C4(value) {
        this.line_C5_C4 = value;
    }

    get lineC4D3() {
        return this.line_C4_D3;
    }

    set lineC4D3(value) {
        this.line_C4_D3 = value;
    }

    get dottedLineD3A3() {
        return this.dottedLine_D3_A3;
    }

    set dottedLineD3A3(value) {
        this.dottedLine_D3_A3 = value;
    }

    get dottedLineA3B3() {
        return this.dottedLine_A3_B3;
    }

    set dottedLineA3B3(value) {
        this.dottedLine_A3_B3 = value;
    }
} // end class PatternSleeveShirt

class Shirt {
    patternFrontShirt;
    patternBackShirt;
    patternSleeveShirt;

    constructor(bustCircumference, backLength, frontLength, shoulderLength, shoulderDrop,
                necklineWidth, apexToApex, waist, apexToWaist, overarmLength,
                underarmLength, armCircumference, wristCircumference,) {

        this.bustCircumference = bustCircumference;
        this.backLength = backLength;
        this.shoulderLength = shoulderLength;
        this.shoulderDrop = shoulderDrop;
        this.necklineWidth = necklineWidth;
        this.apexToApex = apexToApex;
        this.waist = waist;
        this.apexToWaist = apexToWaist;
        this.overarmLength = overarmLength;
        this.underarmLength = underarmLength;
        this.armCircumference = armCircumference;
        this.wristCircumference = wristCircumference;
        this.differenceFrontLengthBackLength = frontLength - backLength;

        this.patternFrontShirt = new PatternFrontShirt();
        this.patternBackShirt = new PatternBackShirt();
        this.patternSleeveShirt = new PatternSleeveShirt();

        this.createFrontPattern();
        this.createBackPattern();
        this.createSleevePattern();
    }

    static get SECONDARY_MEASUREMENTS() {
        return SecondaryShirtMeasurements;
    }

    createFrontPattern () {
        // Point A1
        const pointA1 = new Point(40, 50);

        // Point B1 --> 1/2 Semi-contour bust + 1,5 cm of ease (one finger)
        const distA1B1 = (this.bustCircumference + Shirt.SECONDARY_MEASUREMENTS.EASE) / 4;
        const lineA1B1 = new Line(pointA1, distA1B1);
        const pointB1 = lineA1B1.getEndPoint();

        // Point C1 --> Back Length
        const lineA1C1 = new Line(pointA1, this.backLength, 270);
        const pointC1 = lineA1C1.getEndPoint();

        // Point E1 --> Neckline width
        const lineA1E1 = new Line(pointA1, this.necklineWidth);
        const pointE1 = lineA1E1.getEndPoint();

        // Point F1 --> Shoulder transfer (taking into account shoulder drop)
        const angleE1F1 = fromRadiansToDegrees(Math.asin(this.shoulderDrop / this.shoulderLength));
        const lineE1F1 = new Line(pointE1, this.shoulderLength, -angleE1F1);
        const pointF1 = lineE1F1.getEndPoint();
        this.patternFrontShirt.lineE1F1 = lineE1F1;

        // Point G1 --> Lowered front neckline
        const distA1G1 = lineA1E1.getLength() + 30;
        const lineA1G1 = new Line(pointA1, distA1G1, 270);
        const pointG1 = lineA1G1.getEndPoint();

        // Point H1 --> opposite to point C1 (distA1B1 but from C1)
        const lineC1H1 = new Line(pointC1, distA1B1);
        const pointH1 = lineC1H1.getEndPoint();

        // Point I1 --> Side length (measured from bottom to top) - armhole drop
        const lineH1I1 = new Line(pointH1, this.apexToWaist, 90);
        const pointI1 = lineH1I1.getEndPoint();

        // Point C2 --> difference between front size and back size (the back is shorter)
        const lineC1C2 = new Line(pointC1, this.differenceFrontLengthBackLength, 270);
        const pointC2 = lineC1C2.getEndPoint();

        // Point H2
        const lineC2H2 = new Line(pointC2, distA1B1);
        const pointH2 = lineC2H2.getEndPoint();

        // Point J1 --> end of the waist dart
        const distC2J1 = (this.apexToApex / 2) + (Shirt.SECONDARY_MEASUREMENTS.WAIST_CLAMP_WIDTH / 2);
        const lineC2J1 = new Line(pointC2, distC2J1);
        const pointJ1 = lineC2J1.getEndPoint();

        // Point L1 --> 1/4 Waist Contour + waist dart width
        const distC2L1 = (this.waist / 4) + Shirt.SECONDARY_MEASUREMENTS.WAIST_CLAMP_WIDTH;
        const lineC2L1 = new Line(pointC2, distC2L1);
        const pointL1 = lineC2L1.getEndPoint();

        // Point M
        const distH2M = this.apexToWaist + (this.differenceFrontLengthBackLength / 2);
        const lineH2M = new Line(pointH2, distH2M, 90);
        const pointM = lineH2M.getEndPoint();

        // All-In-One Armhole
        const lineF1I1 = new Line(pointF1, pointI1);
        const offsetFrontArmhole = (lineF1I1.getLength() * 25) / 100;
        this.patternFrontShirt.curveLineF1I1 = new CurveLine(pointF1, pointI1, -offsetFrontArmhole, 'bottom');

        const lineG1E1 = new Line(pointG1, pointE1);
        const offsetG1E1 = (lineG1E1.getLength() * 25) / 100;
        this.patternFrontShirt.curveLineG1E1 = new CurveLine(pointG1, pointE1, -offsetG1E1);

        // Dart waist
        const dartJ1K1 = new Dart(pointJ1, Shirt.SECONDARY_MEASUREMENTS.WAIST_CLAMP_WIDTH, this.apexToWaist - 25, 180);
        this.patternFrontShirt.dartJ1K1 = dartJ1K1;

        // lineK1C2
        const pointK1 = dartJ1K1.getEndPoint();
        this.patternFrontShirt.lineK1C2 =  new Line(pointK1, pointC2);

        // lineL1J1
        this.patternFrontShirt.lineL1J1 = new Line(pointL1, pointJ1);

        // Side Dart
        const sideDartDepth = distA1B1 - (this.apexToApex / 2);
        const dartD1D2 = new Dart(pointM, this.differenceFrontLengthBackLength, sideDartDepth, 270);
        this.patternFrontShirt.dartD1D2 = dartD1D2;

        // lineI1D1
        this.patternFrontShirt.lineI1D1 = new Line(pointI1, dartD1D2.getBeginPoint());

        // lineD2L1
        this.patternFrontShirt.lineD2L1 = new Line(dartD1D2.getEndPoint(), pointL1);

        // lineC2G1
        this.patternFrontShirt.lineC2G1 = new Line(pointC2, pointG1);

        // Auxiliaries Lines
        this.patternFrontShirt.auxiliaryLineA1B1 = new Line(pointA1, pointB1);
        this.patternFrontShirt.auxiliaryLineB1H1 = new Line(pointB1, pointH1);
        this.patternFrontShirt.auxiliaryLineH1H2 = new Line(pointH1, pointH2);
        this.patternFrontShirt.auxiliaryLineH2L1 = new Line(pointH2, pointL1);
        this.patternFrontShirt.auxiliaryLineC2A1 = new Line(pointC2, pointA1);
        this.patternFrontShirt.auxiliaryLineJ1K1 =  new Line(pointJ1, pointK1);
        this.patternFrontShirt.lineC2C1 = new Line(pointC2, pointC1);
        this.patternFrontShirt.dottedLineC1H1 = new Line(pointC1, pointH1);
    } // end of createFrontPattern()

    createBackPattern() {
        // Point A2
        // Beginning of Back pattern. We begin by drawing the back pattern,
        // moving the starting point (A2) a few centimeters from the front pattern.
        // To do this we take point B1 of the front pattern as a reference.
        // Point A2 will be at the same height as point B1, so A2.y = B1.y
        const offsetBetweenPatterns = 70;
        const pointB1 = this.patternFrontShirt.auxiliaryLineA1B1.getEndPoint();
        const pointA2 = new Point(pointB1.x + offsetBetweenPatterns, pointB1.y);

        // Point B2 --> 1/2 Semi-contour bust + 1.5 cm clearance (one finger)
        const distA2B2 = (this.bustCircumference + Shirt.SECONDARY_MEASUREMENTS.EASE) / 4;
        const auxiliaryLineA2B2 = new Line(pointA2, distA2B2);
        const pointB2 = auxiliaryLineA2B2.getEndPoint();

        // Point C3 --> Back Length
        const distA2C3 = this.backLength;
        const lineA2C3 = new Line(pointA2, distA2C3, 270);
        const pointC3 = lineA2C3.getEndPoint();

        // Point pointE2 --> Neckline width
        const lineA2E2 = new Line(pointA2, this.necklineWidth);
        const pointE2 = lineA2E2.getEndPoint();

        // Point pointF2 --> Shoulder transfer (taking into account shoulder drop)
        const angleE2F2 = fromRadiansToDegrees(Math.asin(this.shoulderDrop / this.shoulderLength));
        const lineE2F2 = new Line(pointE2, this.shoulderLength, -angleE2F2);
        const pointF2 = lineE2F2.getEndPoint();

        // Point pointG2 --> Back neckline lowering
        const distA2G2 = this.shoulderDrop / 2;
        const lineA2G2 = new Line(pointA2, distA2G2, 270);
        const pointG2 = lineA2G2.getEndPoint();
        
        // Point pointH3 --> opposite to point c (distAB but from c)
        const lineC3H3 = new Line(pointC3, distA2B2);
        const pointH3 = lineC3H3.getEndPoint();

        // Point pointI2 --> Side length (measured from bottom to top) - armhole drop
        // const distH3I2 = apexToWaist;
        const lineH3I2 = new Line(pointH3, this.apexToWaist, 90);
        const pointI2 = lineH3I2.getEndPoint();

        // Point pointJ2 --> end of the waist dart
        const distC3J2 = (this.apexToApex / 2) + (Shirt.SECONDARY_MEASUREMENTS.WAIST_CLAMP_WIDTH / 2);
        const lineC3J2 = new Line(pointC3, distC3J2);
        const pointJ2 = lineC3J2.getEndPoint();

        const distC3L2 = (this.waist / 4) + Shirt.SECONDARY_MEASUREMENTS.WAIST_CLAMP_WIDTH;
        const lineC3L2 = new Line(pointC3, distC3L2);
        const pointL2 = lineC3L2.getEndPoint();

        // LineI2L2
        const lineI2L2 = new Line(pointI2, pointL2);

        // All-In-One Armhole
        const lineF2I2 = new Line(pointF2, pointI2);
        const offsetArmhole = (lineF2I2.getLength() * 20) / 100;
        const curveLineF2I2 = new CurveLine(pointF2, pointI2, -offsetArmhole, 'bottom');

        const lineG2E2 = new Line(pointG2, pointE2);
        const offsetG2E2 = (lineG2E2.getLength() * 9.375) / 100;
        const curveLineG2E2 = new CurveLine(pointG2, pointE2, -offsetG2E2);

        const lineL2J2 = new Line(pointL2, pointJ2);

        const dartJ2K2 = new Dart(pointJ2, Shirt.SECONDARY_MEASUREMENTS.WAIST_CLAMP_WIDTH, this.apexToWaist, 180);

        const lineK2C3 = new Line(dartJ2K2.getEndPoint(), pointC3);

        const lineC3G2 = new Line(pointC3, pointG2);

        const auxiliaryLineB2I2 = new Line(pointB2, pointI2);
        const auxiliaryLineH3L2 = new Line(pointH3, pointL2);
        const auxiliaryLineI2H3 = new Line(pointI2, pointH3);
        const auxiliaryLineG2A2 = new Line(pointG2, pointA2);
        const auxiliaryLineJ2K2 = new Line(pointJ2, dartJ2K2.getEndPoint());


        /***** After performing the calculations, we add the calculated elements to the back pattern. *****/
        this.patternBackShirt.auxiliaryLineA2B2 = auxiliaryLineA2B2;
        this.patternBackShirt.auxiliaryLineB2I2 = auxiliaryLineB2I2;
        this.patternBackShirt.auxiliaryLineH3L2 = auxiliaryLineH3L2;
        this.patternBackShirt.auxiliaryLineJ2K2 = auxiliaryLineJ2K2;
        this.patternBackShirt.auxiliaryLineI2H3 = auxiliaryLineI2H3;
        this.patternBackShirt.auxiliaryLineG2A2 = auxiliaryLineG2A2;

        this.patternBackShirt.curveLineG2E2 = curveLineG2E2;
        this.patternBackShirt.lineE2F2 = lineE2F2;
        this.patternBackShirt.curveLineF2I2 = curveLineF2I2;

        this.patternBackShirt.lineI2L2 = lineI2L2;
        this.patternBackShirt.lineL2J2 = lineL2J2;
        this.patternBackShirt.dartJ2K2 = dartJ2K2;
        this.patternBackShirt.lineK2C3 = lineK2C3;
        this.patternBackShirt.lineK2C3 = lineK2C3;
        this.patternBackShirt.lineC3G2 = lineC3G2;
    }

    createSleevePattern() {
        const tolerance = 5;

        const armholeBackLength = this.patternBackShirt.curveLineF2I2.getLength();
        const armholeFrontLength = this.patternFrontShirt.curveLineF1I1.getLength();

        /******************* SLEEVE - BACK ********************/
        const pointB2 = this.patternBackShirt.auxiliaryLineA2B2.getEndPoint();
        const pointS = new Point(pointB2.x + 80, pointB2.y);

        // Point pointA3
        const distSA3 = (this.armCircumference + Shirt.SECONDARY_MEASUREMENTS.EASE_SLEEVE) / 2;
        const lineSA3 = new Line(pointS, distSA3);
        const pointA3 = lineSA3.getEndPoint();

        // Point pointB3
        // const distA3B3 = overarmLength;
        const lineA3B3 = new Line(pointA3, this.overarmLength, 270);
        const pointB3 = lineA3B3.getEndPoint();

        // Point pointC4
        const distB3C4 = (this.wristCircumference + Shirt.SECONDARY_MEASUREMENTS.EASE) / 2;
        const lineB3C4 = new Line(pointB3, distB3C4, 180);
        const pointC4 = lineB3C4.getEndPoint();

        // Point pointD3 --> Transfer of underarm length
        // Must subtract the distances SA3 and C3B3:
        let hTriangle = distSA3 - distB3C4;
        let hypotenuse = this.underarmLength;
        let angleC4D3 = fromRadiansToDegrees(Math.asin(hTriangle / hypotenuse));
        let matchArmholeBack = false;
        let numAttemptsBack = 10; // Secondary condition, to avoid an infinite loop

        let curveLineD3P2;
        let curveLineP2A3;

        let lineC4D3;
        let pointD3;
        let pointP11;
        let pointP12;
        let pointP13;

        do {
            --numAttemptsBack;

            lineC4D3 = new Line(pointC4, this.underarmLength, angleC4D3 + 90);
            pointD3 = lineC4D3.getEndPoint();

            // Line D3A3
            var lineD3A3 = new Line(pointD3, pointA3);

            // Point One
            pointP11 = lineD3A3.getMiddlePoint();

            // Point Two
            var lineD3P1 = new Line(pointD3, pointP11);
            pointP12 = lineD3P1.getMiddlePoint();

            // Point Three
            var lineP1A3 = new Line(pointP11, pointA3);
            pointP13 = lineP1A3.getMiddlePoint();

            /********** Curve Lines ***********/
            curveLineD3P2 = new CurveLine(pointD3, pointP12, -5);
            curveLineP2A3 = new CurveLine(pointP12, pointA3, 20); // 15

            var armholeBackLengthSleeve = curveLineD3P2.getLength() + curveLineP2A3.getLength();

            if ((armholeBackLength - armholeBackLengthSleeve) > tolerance || (armholeBackLengthSleeve - armholeBackLength) > tolerance) {
                // we increase the angle
                if (armholeBackLength > armholeBackLengthSleeve) {
                    angleC4D3 = angleC4D3 + 1;
                }
                // we decrease the angle
                if (armholeBackLengthSleeve > armholeBackLength) {
                    angleC4D3 = angleC4D3 - 1;
                }
            } else {
                // end of search
                matchArmholeBack = true;
            }

            if (numAttemptsBack === 0) {
                break;
            }

        } while (!matchArmholeBack);

        /******************* SLEEVE - FRONT ********************/
        // Point pointC5
        let pointC5 = flipYPoint(pointB3, pointC4);


        // Point pointD4 --> Transfer of underarm length
        // Must subtract the distances A2S3 and B2C4:
        let distA3S3 = (this.armCircumference + Shirt.SECONDARY_MEASUREMENTS.EASE_SLEEVE) / 2;
        let hTriangleFront = distA3S3 - distB3C4;
        let angleC5D4 = fromRadiansToDegrees(Math.asin(hTriangleFront / hypotenuse));
        let matchArmholeFront = false;
        let numAttemptsFront = 10; // Secondary condition, to avoid an infinite loop

        let curveLineD4P12;
        let curveLineP12A3;
        let pointD4;
        let pointP21;
        let pointP22;

        do {
            --numAttemptsFront;

            var lineC5D4 = new Line(pointC5, this.underarmLength, 90 - angleC5D4);
            pointD4 = lineC5D4.getEndPoint();

            var lineD4A3 = new Line(pointD4, pointA3);

            // Point One-Two
            pointP21 = lineD4A3.getMiddlePoint();

            // Point Two-Two
            var lineD4P12 = new Line(pointD4, pointP21);
            pointP22 = lineD4P12.getMiddlePoint();

            // Point Three-Two
            var lineP12A3 = new Line(pointP21, pointA3);
            var pointP23 = lineP12A3.getMiddlePoint();


            /********** Curve Lines ***********/
            curveLineD4P12 = new CurveLine(pointD4, pointP21, -10);
            curveLineP12A3 = new CurveLine(pointP21, pointA3, 15); // 10

            var armholeFrontLengthSleeve = curveLineD4P12.getLength() + curveLineP12A3.getLength();

            if ((armholeFrontLength - armholeFrontLengthSleeve) > tolerance || (armholeFrontLengthSleeve - armholeFrontLength) > tolerance) {
                // we increase the angle
                if (armholeFrontLength > armholeFrontLengthSleeve) {
                    angleC5D4 = angleC5D4 + 1;
                }
                // we decrease the angle
                if (armholeFrontLengthSleeve > armholeFrontLength) {
                    angleC5D4 = angleC5D4 - 1;
                }
            } else {
                // end of search
                matchArmholeFront = true;
            }

            if (numAttemptsFront === 0) {
                break;
            }

        } while (!matchArmholeFront);


        /***** After performing the calculations, we add the calculated elements to the back pattern. *****/
        this.patternSleeveShirt.lineC4D3 = lineC4D3;
        this.patternSleeveShirt.dottedLineD3A3 = new Line(pointD3, pointA3);
        this.patternSleeveShirt.lineD4C5 = new Line(pointD4, pointC5);
        this.patternSleeveShirt.auxiliaryLineC5B3 = new Line(pointC5, pointB3);
        this.patternSleeveShirt.dottedLineA3B3 = new Line(pointA3, pointB3);
        this.patternSleeveShirt.dottedLineA3D4 = new Line(pointA3, pointD4);
        this.patternSleeveShirt.curveLineD3P2 = curveLineD3P2;
        this.patternSleeveShirt.curveLineP2A3 = curveLineP2A3;
        this.patternSleeveShirt.curveLineD4P12 = curveLineD4P12;
        this.patternSleeveShirt.curveLineP12A3 = curveLineP12A3;
        this.patternSleeveShirt.lineC5C4 = new Line(pointC5, pointC4);
        
        
        // Points
        this.patternSleeveShirt.pointP11 = pointP11;
        this.patternSleeveShirt.pointP12 = pointP12;
        this.patternSleeveShirt.pointP13 = pointP13;
        this.patternSleeveShirt.pointP21 = pointP21;
        this.patternSleeveShirt.pointP22 = pointP22;
        this.patternSleeveShirt.pointP23 = pointP23;
    }

    get patternFrontShirt() {
        return this.patternFrontShirt;
    }

    get patternBackShirt() {
        return this.patternBackShirt;
    }

    get patternSleeveShirt() {
        return this.patternSleeveShirt;
    }

    getDrawableObjects() {
        return [this.patternFrontShirt, this.patternBackShirt, this.patternSleeveShirt];
    }

} // end class Shirt