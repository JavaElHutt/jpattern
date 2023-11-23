

// Secondary measures. In most patterns, they tend to be somewhat random measurements, defined
// by the designers after years of experience and experimentation, which have been defined following
// aesthetic values. How deep should a dart be? In most cases this measure depends on the tailor's experience.
const SecondarySkirtMeasurements = {
    DART_WIDTH: 30,
    FRONT_DART_DEPTH: 120,
    WAIST_DROP: 20,
    LOWER_DART: 15,
    REAR_DART_DEPTH: 105,
    OFFSET_HIP_CURVE: 5,
    OFFSET_CURVE_WAIST: -3,
}

Object.freeze(SecondarySkirtMeasurements);


class PatternBackSkirt {
    curveLine_I_J;
    dart_J_K;
    curveLine_K_L;
    curveLine_L_M;
    line_M_N;
    line_N_O;
    line_O_I;
    line_O_P;
    dottedLine_P_M;


    get lineOP() {
        return this.line_O_P;
    }

    set lineOP(value) {
        this.line_O_P = value;
    }

    get dottedLinePM() {
        return this.dottedLine_P_M;
    }

    set dottedLinePM(value) {
        this.dottedLine_P_M = value;
    }

    get lineOI() {
        return this.line_O_I;
    }

    set lineOI(value) {
        this.line_O_I = value;
    }

    get lineNO() {
        return this.line_N_O;
    }

    set lineNO(value) {
        this.line_N_O = value;
    }

    get lineMN() {
        return this.line_M_N;
    }

    set lineMN(value) {
        this.line_M_N = value;
    }

    get curveLineLM() {
        return this.curveLine_L_M;
    }

    set curveLineLM(value) {
        this.curveLine_L_M = value;
    }

    get curveLineKL() {
        return this.curveLine_K_L;
    }

    set curveLineKL(value) {
        this.curveLine_K_L = value;
    }

    get dartJK() {
        return this.dart_J_K;
    }

    set dartJK(value) {
        this.dart_J_K = value;
    }

    get curveLineIJ() {
        return this.curveLine_I_J;
    }

    set curveLineIJ(value) {
        this.curveLine_I_J = value;
    }

}

class PatternFrontSkirt {
    line_A_B;
    dart_B_C;
    line_C_D;
    curveLine_D_E;
    line_E_F;
    line_F_G;
    line_G_A;
    line_G_H;
    dottedLine_H_E;


    get lineGH() {
        return this.line_G_H;
    }

    set lineGH(value) {
        this.line_G_H = value;
    }

    get dottedLineHE() {
        return this.dottedLine_H_E;
    }

    set dottedLineHE(value) {
        this.dottedLine_H_E = value;
    }

    get lineAB() {
        return this.line_A_B;
    }

    get dartBC() {
        return this.dart_B_C;
    }

    get lineCD() {
        return this.line_C_D;
    }

    get curveLineDE() {
        return this.curveLine_D_E;
    }

    get lineEF() {
        return this.line_E_F;
    }

    get lineFG() {
        return this.line_F_G;
    }

    get lineGA() {
        return this.line_G_A;
    }

    set lineAB(value) {
        this.line_A_B = value;
    }

    set dartBC(value) {
        this.dart_B_C = value;
    }

    set lineCD(value) {
        this.line_C_D = value;
    }

    set curveLineDE(value) {
        this.curveLine_D_E = value;
    }

    set lineEF(value) {
        this.line_E_F = value;
    }

    set lineFG(value) {
        this.line_F_G = value;
    }

    set lineGA(value) {
        this.line_G_A = value;
    }

}


class Skirt {
    patternFrontSkirt;
    patternBackSkirt;

    constructor(waist, lowHip, waistToHip, skirtLength, apexToApex) {
        this.waist = waist;
        this.lowHip = lowHip;
        this.waistToHip = waistToHip;
        this.skirtLength = skirtLength;
        this.apexToApex = apexToApex;

        this.patternFrontSkirt = new PatternFrontSkirt();
        this.patternBackSkirt = new PatternBackSkirt();

        this.createFrontPattern();
        this.createBackPattern();
    }

    static get SECONDARY_MEASUREMENTS() {
        return SecondarySkirtMeasurements;
    }

    createFrontPattern () {
        // lineAB
        const pointA = new Point(40, 50, 'A');
        const distAB = ((this.apexToApex / 2) - (Skirt.SECONDARY_MEASUREMENTS.DART_WIDTH / 2));
        this.patternFrontSkirt.lineAB = new Line(pointA, distAB);

        // dartBC
        const pointB = this.patternFrontSkirt.lineAB.getEndPoint();
        const dartBC = new Dart(pointB, Skirt.SECONDARY_MEASUREMENTS.DART_WIDTH, Skirt.SECONDARY_MEASUREMENTS.FRONT_DART_DEPTH, 0);
        this.patternFrontSkirt.dartBC = dartBC;

        // lineCD
        const pointC = dartBC.getEndPoint();
        const distAD = (this.waist / 4) + Skirt.SECONDARY_MEASUREMENTS.DART_WIDTH;
        const distAuxCD = getHorizontalDistance(pointA, pointC);
        const lineCD = new Line(pointC, distAD - distAuxCD);
        this.patternFrontSkirt.lineCD = lineCD;

        // curveLineDE
        // Because we have to draw a curve from D to E and this last point is calculated through point H,
        // we must first calculate H
        const distAH = this.waistToHip;
        const lineAH = new Line(pointA, distAH, 270);
        const distHE = this.lowHip / 4;
        const dottedLineHE = new Line(lineAH.getEndPoint(), distHE);
        this.patternFrontSkirt.dottedLineHE = dottedLineHE;

        const curveLineDE = new CurveLine(lineCD.getEndPoint(), dottedLineHE.getEndPoint(), Skirt.SECONDARY_MEASUREMENTS.OFFSET_HIP_CURVE);
        this.patternFrontSkirt.curveLineDE = curveLineDE;

        // lineEF
        const distEF = this.skirtLength - this.waistToHip;
        const lineEF = new Line(curveLineDE.getEndPoint(), distEF, 270);
        this.patternFrontSkirt.lineEF = lineEF;

        // lineFG
        const lineFG = new Line(lineEF.getEndPoint(), dottedLineHE.getLength(), 180);
        this.patternFrontSkirt.lineFG = lineFG;

        // lineGA
        this.patternFrontSkirt.lineGA = new Line(lineFG.getEndPoint(), this.skirtLength, 90);

        // lineGH
        this.patternFrontSkirt.lineGH = new Line(lineFG.getEndPoint(), dottedLineHE.getBeginPoint());
    }

    createBackPattern() {
        // To draw the line IJ we start from the position of point A.
        // Both point I and J depend on structural parameters.
        const pointA = this.patternFrontSkirt.lineAB.getBeginPoint();

        // So that the two patterns, the back one and the front one, are not drawn on top of each other,
        // they must be separated by a certain distance (offsetPattern)
        const offsetPattern = this.patternFrontSkirt.lineFG.getLength() + 80;
        const iX = pointA.x + offsetPattern;
        const iY = pointA.y + Skirt.SECONDARY_MEASUREMENTS.WAIST_DROP;
        const pointI = new Point(iX, iY);

        // curveLineIJ
        const jX = pointI.x + this.patternFrontSkirt.lineAB.getLength();
        const jY = pointI.y - (Skirt.SECONDARY_MEASUREMENTS.WAIST_DROP - Skirt.SECONDARY_MEASUREMENTS.LOWER_DART);
        const pointJ = new Point(jX, jY);
        this.patternBackSkirt.curveLineIJ = new CurveLine(pointI, pointJ, Skirt.SECONDARY_MEASUREMENTS.OFFSET_CURVE_WAIST);

        // dartJK
        const dartJK = new Dart(pointJ, Skirt.SECONDARY_MEASUREMENTS.DART_WIDTH, Skirt.SECONDARY_MEASUREMENTS.REAR_DART_DEPTH, 0);
        this.patternBackSkirt.dartJK = dartJK;

        // curveLineKL
        const distCD = this.patternFrontSkirt.lineCD.getLength();
        const lX = dartJK.getEndPoint().x + distCD;
        const lY = this.patternFrontSkirt.lineCD.getEndPoint().y;
        const pointL = new Point(lX, lY, 'L');
        this.patternBackSkirt.curveLineKL = new CurveLine(dartJK.getEndPoint(), pointL, Skirt.SECONDARY_MEASUREMENTS.OFFSET_CURVE_WAIST);

        // curveLineLM
        // Because we have to draw a curve from L to M and this last point is calculated through point P,
        // we must first calculate P and after that we'll calculate M
        const distIP = this.waistToHip - Skirt.SECONDARY_MEASUREMENTS.WAIST_DROP;
        const lineIP = new Line(pointI, distIP, 270);
        const pointP = lineIP.getEndPoint();
        const distPM = this.lowHip / 4;
        const dottedLinePM = new Line(pointP, distPM);
        this.patternBackSkirt.dottedLinePM = dottedLinePM;
        const pointM = dottedLinePM.getEndPoint();
        const curveLineLM = new CurveLine(pointL, pointM, Skirt.SECONDARY_MEASUREMENTS.OFFSET_HIP_CURVE);
        this.patternBackSkirt.curveLineLM = curveLineLM;

        // From this point we take advantage of some calculations previously made for the front pattern
        // lineMN
        const distMN = this.patternFrontSkirt.lineEF.getLength();
        const lineMN = new Line(curveLineLM.getEndPoint(), distMN, 270);
        this.patternBackSkirt.lineMN = lineMN;

        // lineNO
        const distNO = this.patternFrontSkirt.lineFG.getLength();
        const lineNO = new Line(lineMN.getEndPoint(), distNO, 180);
        this.patternBackSkirt.lineNO = lineNO;

        // lineOI
        this.patternBackSkirt.lineOI = new Line(lineNO.getEndPoint(), pointI);

        // lieOP
        this.patternBackSkirt.lineOP = new Line(lineNO.getEndPoint(), dottedLinePM.getBeginPoint());

    }

    get patternFrontSkirt() {
        return this.patternFrontSkirt;
    }

    get patternBackSkirt() {
        return this.patternBackSkirt;
    }

    getDrawableObjects() {
        return [this.patternFrontSkirt, this.patternBackSkirt];
    }

}