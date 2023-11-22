

// Medidas secundarias. En la mayoría de patrones suelen ser medidas un tanto aleatorias, definidas
// por los diseñadores tras años de experiencia y experimentación, que han sido definidas siguiendo
// valores estéticos. ¿Cuanto de profunda debe de ser una pinza? En la mayoría de los casos esta medida
// depende de la experiencia del sastre.
const SecondarySkirtMeasurements = {
    ANCHO_PINZA: 30,
    PROF_PINZA_DELANTERA: 120,
    CAIDA_CINTURA: 20,
    BAJADA_PINZA: 15,
    PROF_PINZA_TRASERA: 105,
    OFFSET_CURVA_CADERA: 5,
    OFFSET_CURVA_CINTURA: -3,
}

Object.freeze(SecondarySkirtMeasurements);

const visualAidFrontSkirtJSON = '{"data":{"points":{"style":"color:#B0C4DE","point":[{"label":"A","position":"t"},{"label":"B","position":"t"},{"label":"C","position":"t"},{"label":"D","position":"t"},{"label":"E","position":"r"},{"label":"F","position":"r"},{"label":"G","position":"l"},{"label":"H","position":"l"}]},"lines":{"style":"color:#B0C4DE;pattern:[4,2]","begin":"H","end":"E"}}}';

Object.freeze(visualAidFrontSkirtJSON);

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

    constructor(contornoCintura, contornoCadera, distCinturaCadera, largoFalda, distanciaSenos) {
        this.contornoCintura = contornoCintura;
        this.contornoCadera = contornoCadera;
        this.distCinturaCadera = distCinturaCadera;
        this.largoFalda = largoFalda;
        this.distanciaSenos = distanciaSenos;

        this.patternFrontSkirt = new PatternFrontSkirt();
        this.patternBackSkirt = new PatternBackSkirt();

        this.createFrontPattern();
        this.createBackPattern();
    }

    static get MEDIDAS_SECUNDARIAS() {
        return SecondarySkirtMeasurements;
    }

    static get VISUAL_AID_FRONT_PATTERN() {
        return visualAidFrontSkirtJSON;
    }

    createFrontPattern () {
        // lineAB
        const pointA = new Point(40, 50, 'A');
        const distAB = ((this.distanciaSenos / 2) - (Skirt.MEDIDAS_SECUNDARIAS.ANCHO_PINZA / 2));
        this.patternFrontSkirt.lineAB = new Line(pointA, distAB);

        // dartBC
        const pointB = this.patternFrontSkirt.lineAB.getEndPoint();
        const dartBC = new Dart(pointB, Skirt.MEDIDAS_SECUNDARIAS.ANCHO_PINZA, Skirt.MEDIDAS_SECUNDARIAS.PROF_PINZA_DELANTERA, 0);
        this.patternFrontSkirt.dartBC = dartBC;

        // lineCD
        const pointC = dartBC.getEndPoint();
        const distAD = (this.contornoCintura / 4) + Skirt.MEDIDAS_SECUNDARIAS.ANCHO_PINZA;
        const distAuxCD = getHorizontalDistance(pointA, pointC);
        const lineCD = new Line(pointC, distAD - distAuxCD);
        this.patternFrontSkirt.lineCD = lineCD;

        // curveLineDE
        // Because we have to draw a curve from D to E and this last point is calculated through point H,
        // we must first calculate H
        const distAH = this.distCinturaCadera;
        const lineAH = new Line(pointA, distAH, 270);
        const distHE = this.contornoCadera / 4;
        const dottedLineHE = new Line(lineAH.getEndPoint(), distHE);
        this.patternFrontSkirt.dottedLineHE = dottedLineHE;

        const curveLineDE = new CurveLine(lineCD.getEndPoint(), dottedLineHE.getEndPoint(), Skirt.MEDIDAS_SECUNDARIAS.OFFSET_CURVA_CADERA);
        this.patternFrontSkirt.curveLineDE = curveLineDE;

        // lineEF
        const distEF = this.largoFalda - this.distCinturaCadera;
        const lineEF = new Line(curveLineDE.getEndPoint(), distEF, 270);
        this.patternFrontSkirt.lineEF = lineEF;

        // lineFG
        const lineFG = new Line(lineEF.getEndPoint(), dottedLineHE.getLength(), 180);
        this.patternFrontSkirt.lineFG = lineFG;

        // lineGA
        const lineGA = new Line(lineFG.getEndPoint(), this.largoFalda, 90);
        this.patternFrontSkirt.lineGA = lineGA;

        // lineGH
        const lineGH = new Line(lineFG.getEndPoint(), dottedLineHE.getBeginPoint());
        this.patternFrontSkirt.lineGH = lineGH;
    }

    createBackPattern() {
        // To draw the line IJ we start from the position of point A.
        // Both point I and J depend on structural parameters.
        const pointA = this.patternFrontSkirt.lineAB.getBeginPoint();

        // So that the two patterns, the back one and the front one, are not drawn on top of each other,
        // they must be separated by a certain distance (offsetPattern)
        const offsetPattern = this.patternFrontSkirt.lineFG.getLength() + 80;
        const iX = pointA.x + offsetPattern;
        const iY = pointA.y + Skirt.MEDIDAS_SECUNDARIAS.CAIDA_CINTURA;
        const pointI = new Point(iX, iY);

        // curveLineIJ
        const jX = pointI.x + this.patternFrontSkirt.lineAB.getLength();
        const jY = pointI.y - (Skirt.MEDIDAS_SECUNDARIAS.CAIDA_CINTURA - Skirt.MEDIDAS_SECUNDARIAS.BAJADA_PINZA);
        const pointJ = new Point(jX, jY);
        const curveLineIJ = new CurveLine(pointI, pointJ, Skirt.MEDIDAS_SECUNDARIAS.OFFSET_CURVA_CINTURA);
        this.patternBackSkirt.curveLineIJ = curveLineIJ;

        // dartJK
        const dartJK = new Dart(pointJ, Skirt.MEDIDAS_SECUNDARIAS.ANCHO_PINZA, Skirt.MEDIDAS_SECUNDARIAS.PROF_PINZA_TRASERA, 0);
        this.patternBackSkirt.dartJK = dartJK;

        // curveLineKL
        const distCD = this.patternFrontSkirt.lineCD.getLength();
        const lX = dartJK.getEndPoint().x + distCD;
        const lY = this.patternFrontSkirt.lineCD.getEndPoint().y;
        const pointL = new Point(lX, lY, 'L');
        const curveLineKL = new CurveLine(dartJK.getEndPoint(), pointL, Skirt.MEDIDAS_SECUNDARIAS.OFFSET_CURVA_CINTURA);
        this.patternBackSkirt.curveLineKL = curveLineKL;

        // curveLineLM
        // Because we have to draw a curve from L to M and this last point is calculated through point P,
        // we must first calculate P and after that we'll calculate M
        const distIP = this.distCinturaCadera - Skirt.MEDIDAS_SECUNDARIAS.CAIDA_CINTURA;
        const lineIP = new Line(pointI, distIP, 270);
        const pointP = lineIP.getEndPoint();
        const distPM = this.contornoCadera / 4;
        const dottedLinePM = new Line(pointP, distPM);
        this.patternBackSkirt.dottedLinePM = dottedLinePM;
        const pointM = dottedLinePM.getEndPoint();
        const curveLineLM = new CurveLine(pointL, pointM, Skirt.MEDIDAS_SECUNDARIAS.OFFSET_CURVA_CADERA);
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
        const lineOI = new Line(lineNO.getEndPoint(), pointI);
        this.patternBackSkirt.lineOI = lineOI;

        // lieOP
        const lineOP = new Line(lineNO.getEndPoint(), dottedLinePM.getBeginPoint());
        this.patternBackSkirt.lineOP = lineOP;

    }

    get patternFrontSkirt() {
        return this.patternFrontSkirt;
    }

    get patternBackSkirt() {
        return this.patternBackSkirt;
    }

    getDrawableObjects() {
        return new Array(this.patternFrontSkirt, this.patternBackSkirt);
    }

    getVisualAid() {
        return new Array(Skirt.VISUAL_AID_FRONT_PATTERN);
    }

}