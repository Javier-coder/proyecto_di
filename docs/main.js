(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_DAM2\Desarrollo de Interfaces\T3\PracticaFinal\src\main.ts */"zUnb");


/***/ }),

/***/ "3h0o":
/*!*********************************************************************!*\
  !*** ./src/app/components/ciclo-detalle/ciclo-detalle.component.ts ***!
  \*********************************************************************/
/*! exports provided: CicloDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloDetalleComponent", function() { return CicloDetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ciclos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/ciclos.service */ "KafX");
/* harmony import */ var _services_asignaturas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/asignaturas.service */ "Gnnx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CicloDetalleComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conocimiento_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conocimiento_r2);
} }
function CicloDetalleComponent_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conocimiento_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", conocimiento_r5.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CicloDetalleComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CicloDetalleComponent_div_14_div_12_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ver detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asignatura_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asignatura_r3.nombre.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Profesor: ", asignatura_r3.profesor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ciclo: ", asignatura_r3.ciclo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Curso: ", asignatura_r3.curso, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asignatura_r3.conocimientos);
} }
class CicloDetalleComponent {
    constructor(rutaActiva, servicioCiclos, servicioAsignaturas) {
        this.rutaActiva = rutaActiva;
        this.servicioCiclos = servicioCiclos;
        this.servicioAsignaturas = servicioAsignaturas;
        this.curso = 0;
        this.nombre = "";
        this.ciclo = { nombre: "", curso: 0, asignaturas: [], imagen: "" };
        this.conocimientos = [];
        this.asignaturas = [];
    }
    ngOnInit() {
        this.curso = this.rutaActiva.snapshot.params.curso;
        this.nombre = this.rutaActiva.snapshot.params.nombre;
        this.servicioCiclos.getCiclos().forEach(ciclo => {
            if (ciclo.curso == this.curso) {
                if (ciclo.nombre == this.nombre) {
                    this.ciclo = ciclo;
                }
            }
        });
        if (this.nombre == "DAM") {
            if (this.curso == 1) {
                this.asignaturas = this.servicioAsignaturas.getAsignaturasDam1();
                this.conocimientos = this.servicioAsignaturas.getConocimientosDam1();
            }
            else {
                this.asignaturas = this.servicioAsignaturas.getAsignaturasDam2();
                this.conocimientos = this.servicioAsignaturas.getConocimientosDam2();
            }
        }
        else {
            if (this.curso == 1) {
                this.asignaturas = this.servicioAsignaturas.getAsignaturasDaw1();
                this.conocimientos = this.servicioAsignaturas.getConocimientosDaw1();
            }
            else {
                this.asignaturas = this.servicioAsignaturas.getAsignaturasDaw2();
                this.conocimientos = this.servicioAsignaturas.getConocimientosDaw2();
            }
        }
        console.log(this.asignaturas[0].conocimientos);
    }
}
CicloDetalleComponent.ɵfac = function CicloDetalleComponent_Factory(t) { return new (t || CicloDetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ciclos_service__WEBPACK_IMPORTED_MODULE_2__["CiclosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asignaturas_service__WEBPACK_IMPORTED_MODULE_3__["AsignaturasService"])); };
CicloDetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CicloDetalleComponent, selectors: [["app-ciclo-detalle"]], decls: 15, vars: 5, consts: [[1, "row"], [1, "col-4"], [3, "src"], [4, "ngFor", "ngForOf"], [1, "col-8"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card", 2, "width", "18rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mt-4"], [1, "col-3"], ["alt", "...", 1, "card-img-top", 3, "src"]], template: function CicloDetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Conocimientos necesarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CicloDetalleComponent_li_9_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Las asignaturas del ciclo son:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CicloDetalleComponent_div_14_Template, 15, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ciclo.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.ciclo.nombre, " ", ctx.ciclo.curso, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conocimientos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asignaturas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaWNsby1kZXRhbGxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor(ruta) {
        this.ruta = ruta;
    }
    ngOnInit() {
    }
    navegarUno(input1) {
        this.ruta.navigate(["uno", input1]);
    }
    navegarDos(input2) {
        this.ruta.navigate(["dos", input2]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 33, vars: 0, consts: [[1, "list-group"], [1, "list-group-item"], [1, "btn", "btn-primary", "mt-4"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Grados T\u00E9cnicos CES Juan Pablo II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aplicacion WEB realizada por Javier Carrillo para el ciclo de Desarrollo de Aplicaciones Multiplataforma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Aplicacion realizada para el m\u00F3dulo de DI, hecha en ANGULAR que consta de:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Componente home: representa la entrega inicial de la aplicacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Componente Ciclos: representa tantas cartas como ciclos existan en el servicio CicloService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Componente Asignaturas: representa tantas cartas como asignaturas haya en el servicio AsignaturasService. Adicionalmente se cuenta con un filtro para poder ver asignaturas especificas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Componente Asignatura: representa el aspecto que tendra una carta de las de arriba mencionadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Componente DetalleCiclo: representa el detalle de un ciclo, donde se mostrar\u00E1n los conocimientos necesarios para poder aprobar el ciclo y todas las asignaturas que lo componen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Componente NavBar: representa la barra de navegaci\u00F3n superior, donde se muestra un men\u00FA con las siguientes posibilidades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inicio: llevar\u00E1 al componente Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ciclos: llevar\u00E1 al componente Ciclos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Asignaturas: llevar\u00E1 al componente Asignaturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Servicios: Se deber\u00E1 crear al menos dos servicios que provean de datos tanto para los ciclos como para las asignaturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pipes: se deber\u00E1 crear al menos dos directivas personalizadas que realicen alguna transformaci\u00F3n en la aplicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ir a la web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "GPNi":
/*!*******************************************************!*\
  !*** ./src/app/components/ciclos/ciclos.component.ts ***!
  \*******************************************************/
/*! exports provided: CiclosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiclosComponent", function() { return CiclosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_asignaturas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/asignaturas.service */ "Gnnx");
/* harmony import */ var _services_ciclos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/ciclos.service */ "KafX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CiclosComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asignatura_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", asignatura_r4.nombre, " ");
} }
function CiclosComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asignatura_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", asignatura_r5.nombre, " ");
} }
function CiclosComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CiclosComponent_div_24_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ciclo_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.navegar(ciclo_r6.curso, ciclo_r6.nombre); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ver detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ciclo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ciclo_r6.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ciclo_r6.curso, " ", ciclo_r6.nombre, "");
} }
function CiclosComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CiclosComponent_div_27_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ciclo_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.navegar(ciclo_r9.curso, ciclo_r9.nombre); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ver detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ciclo_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ciclo_r9.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ciclo_r9.curso, " ", ciclo_r9.nombre, "");
} }
class CiclosComponent {
    constructor(servicioAsignaturas, servicioCiclos, ruta) {
        this.servicioAsignaturas = servicioAsignaturas;
        this.servicioCiclos = servicioCiclos;
        this.ruta = ruta;
        this.asignaturasDam = [];
        this.asignaturasDaw = [];
        this.ciclosDam = [];
        this.ciclosDaw = [];
    }
    ngOnInit() {
        this.asignaturasDam = this.servicioAsignaturas.getAsignaturasDam();
        this.asignaturasDaw = this.servicioAsignaturas.getAsignaturasDaw();
        this.ciclosDam = this.servicioCiclos.getCiclosDam();
        this.ciclosDaw = this.servicioCiclos.getCiclosDaw();
    }
    navegar(curso, nombre) {
        this.ruta.navigate(["cicloDetalle", curso, nombre]);
    }
    navegarUno(input1) {
        this.ruta.navigate(["uno", input1]);
    }
}
CiclosComponent.ɵfac = function CiclosComponent_Factory(t) { return new (t || CiclosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asignaturas_service__WEBPACK_IMPORTED_MODULE_1__["AsignaturasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ciclos_service__WEBPACK_IMPORTED_MODULE_2__["CiclosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CiclosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CiclosComponent, selectors: [["app-ciclos"]], decls: 28, vars: 4, consts: [[1, "row"], [1, "col-6"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "col"], [1, "card", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-primary", 3, "click"]], template: function CiclosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Los ciclos tecnol\u00F3gicos son");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Asignaturas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CiclosComponent_li_11_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DAW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Asignaturas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CiclosComponent_li_20_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CiclosComponent_div_24_Template, 8, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CiclosComponent_div_27_Template, 8, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asignaturasDam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asignaturasDaw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ciclosDam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ciclosDaw);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaWNsb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Gnnx":
/*!*************************************************!*\
  !*** ./src/app/services/asignaturas.service.ts ***!
  \*************************************************/
/*! exports provided: AsignaturasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturasService", function() { return AsignaturasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AsignaturasService {
    constructor() {
        this.asignaturas = [
            {
                nombre: 'Sistemas informáticos',
                profesor: 'Isaac Sampedro',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'windows', imagen: 'assets/images/win.png' },
                    { nombre: 'linux', imagen: 'assets/images/linux.png' },
                    { nombre: 'virtualizacion', imagen: 'assets/images/virtual.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Programación',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Bases de datos',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                    { nombre: 'sqlserver', imagen: 'assets/images/sql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Lenguajes de Marcas',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'html', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'xml', imagen: 'assets/images/html.jpeg' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Entornos de desarrollo',
                profesor: 'Jesús Niño',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'scrum', imagen: 'assets/images/scrum.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Empresa e Iniciativa emprendedora',
                profesor: 'Marta Jimenez',
                conocimientos: [
                    { nombre: 'emprender', imagen: 'assets/images/empresa.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Inglés',
                profesor: 'Rocio',
                conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Programación Multimedia y Dispositivos Moviles',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'json', imagen: 'assets/images/json.png' },
                ],
                ciclo: 'DAM ',
                curso: 2,
            },
            {
                nombre: 'Desarrollo de interfaces',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'javafx', imagen: 'assets/images/javafx.jpg' },
                    { nombre: 'json', imagen: 'assets/images/json.png' },
                    { nombre: 'js', imagen: 'assets/images/js.jpg' },
                    { nombre: 'angular', imagen: 'assets/images/angular.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Acceso a Datos',
                profesor: 'Hector Alonso',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                    { nombre: 'mongo', imagen: 'assets/images/mongo.jpg' },
                    { nombre: 'php', imagen: 'assets/images/php.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Programacion de servicios y procesos',
                profesor: 'Jesús Niño',
                conocimientos: [
                    { nombre: 'seguridad', imagen: 'assets/images/seguridad.jpg' },
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Sistemas de gestión empresarial',
                profesor: 'Hector Alonso',
                conocimientos: [
                    { nombre: 'erp', imagen: 'assets/images/erp.jpg' },
                    { nombre: 'odoo', imagen: 'assets/images/odoo.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'js', imagen: 'assets/images/js.jpg' },
                    { nombre: 'react', imagen: 'assets/images/react.png' },
                    { nombre: 'webpack', imagen: 'assets/images/webpack.jpg' },
                    { nombre: 'node', imagen: 'assets/images/node.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
                profesor: 'David Ventura',
                conocimientos: [
                    { nombre: 'php', imagen: 'assets/images/php.png' },
                    { nombre: 'node', imagen: 'assets/images/node.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Despliegue de Aplicaciones',
                profesor: 'Jesus Nuño',
                conocimientos: [
                    { nombre: 'apache', imagen: 'assets/images/apache.jpeg' },
                    { nombre: 'tomcat', imagen: 'assets/images/tomcat.png' },
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Desarrollo de Interfaces Web',
                profesor: 'Victor Martín',
                conocimientos: [
                    { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'bootstrap', imagen: 'assets/images/boots.png' },
                    { nombre: 'diseño', imagen: 'assets/images/disenio.jpg' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
        ];
        this.asignaturasDam = this.getAsignaturasDam();
        this.asignaturasDaw = this.getAsignaturasDaw();
    }
    getAllAsignaturas() {
        return this.asignaturas;
    }
    getAsignaturasDam() {
        return this.asignaturas.filter((asignatura) => {
            return asignatura.ciclo.includes("DAM"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
        });
    }
    getAsignaturasDaw() {
        return this.asignaturas.filter((asignatura) => {
            return asignatura.ciclo.includes("DAW"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
        });
    }
    getAsignaturasDam1() {
        let asignaturasDam1 = [];
        this.asignaturasDam.forEach(asignatura => {
            if (asignatura.curso == 1) {
                asignaturasDam1.push(asignatura);
            }
        });
        return asignaturasDam1;
    }
    getAsignaturasDam2() {
        let asignaturasDam2 = [];
        this.asignaturasDam.forEach(asignatura => {
            if (asignatura.curso == 2) {
                asignaturasDam2.push(asignatura);
            }
        });
        return asignaturasDam2;
    }
    getAsignaturasDaw1() {
        let asignaturasDaw1 = [];
        this.asignaturasDaw.forEach(asignatura => {
            if (asignatura.curso == 1) {
                asignaturasDaw1.push(asignatura);
            }
        });
        return asignaturasDaw1;
    }
    getAsignaturasDaw2() {
        let asignaturasDaw2 = [];
        this.asignaturasDaw.forEach(asignatura => {
            if (asignatura.curso == 2) {
                asignaturasDaw2.push(asignatura);
            }
        });
        return asignaturasDaw2;
    }
    getConocimientosDam1() {
        let conocimientosDam1 = [];
        this.asignaturasDam.forEach(asignatura => {
            if (asignatura.ciclo.includes("DAM")) {
                if (asignatura.curso == 1) {
                    asignatura.conocimientos.forEach(conocimiento => {
                        if (conocimientosDam1.includes(conocimiento.nombre)) {
                            //YA ESTA DENTRO
                        }
                        else {
                            conocimientosDam1.push(conocimiento.nombre);
                        }
                    });
                }
            }
        });
        return conocimientosDam1;
    }
    getConocimientosDam2() {
        let conocimientosDam2 = [];
        this.asignaturasDam.forEach(asignatura => {
            if (asignatura.ciclo.includes("DAM")) {
                if (asignatura.curso == 2) {
                    asignatura.conocimientos.forEach(conocimiento => {
                        if (conocimientosDam2.includes(conocimiento.nombre)) {
                            //YA ESTA DENTRO
                        }
                        else {
                            conocimientosDam2.push(conocimiento.nombre);
                        }
                    });
                }
            }
        });
        return conocimientosDam2;
    }
    getConocimientosDaw1() {
        let conocimientosDaw1 = [];
        this.asignaturasDaw.forEach(asignatura => {
            if (asignatura.ciclo.includes("DAW")) {
                if (asignatura.curso == 1) {
                    asignatura.conocimientos.forEach(conocimiento => {
                        if (conocimientosDaw1.includes(conocimiento.nombre)) {
                            //YA ESTA DENTRO
                        }
                        else {
                            conocimientosDaw1.push(conocimiento.nombre);
                        }
                    });
                }
            }
        });
        //console.log(conocimientosDaw1);
        return conocimientosDaw1;
    }
    getConocimientosDaw2() {
        let conocimientosDaw2 = [];
        this.asignaturasDaw.forEach(asignatura => {
            if (asignatura.ciclo.includes("DAW")) {
                if (asignatura.curso == 2) {
                    asignatura.conocimientos.forEach(conocimiento => {
                        if (conocimientosDaw2.includes(conocimiento.nombre)) {
                            //YA ESTA DENTRO
                        }
                        else {
                            conocimientosDaw2.push(conocimiento.nombre);
                        }
                    });
                }
            }
        });
        return conocimientosDaw2;
    }
}
AsignaturasService.ɵfac = function AsignaturasService_Factory(t) { return new (t || AsignaturasService)(); };
AsignaturasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AsignaturasService, factory: AsignaturasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KafX":
/*!********************************************!*\
  !*** ./src/app/services/ciclos.service.ts ***!
  \********************************************/
/*! exports provided: CiclosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiclosService", function() { return CiclosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CiclosService {
    constructor() {
        this.ciclos = [
            {
                nombre: 'DAM',
                curso: 1,
                asignaturas: [],
                imagen: 'assets/images/dam.jpeg',
            },
            {
                nombre: 'DAM',
                curso: 2,
                asignaturas: [],
                imagen: 'assets/images/dam.jpeg',
            },
            {
                nombre: 'DAW',
                curso: 1,
                asignaturas: [],
                imagen: 'assets/images/daw.jpeg',
            },
            {
                nombre: 'DAW',
                curso: 2,
                asignaturas: [],
                imagen: 'assets/images/daw.jpeg',
            },
        ];
    }
    getCiclosDam() {
        return this.ciclos.filter((ciclo) => {
            return ciclo.nombre.includes("DAM"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
        });
    }
    getCiclosDaw() {
        return this.ciclos.filter((ciclo) => {
            return ciclo.nombre.includes("DAW"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
        });
    }
    getCiclos() {
        return this.ciclos;
    }
}
CiclosService.ɵfac = function CiclosService_Factory(t) { return new (t || CiclosService)(); };
CiclosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CiclosService, factory: CiclosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "P8Rv":
/*!*****************************************************************!*\
  !*** ./src/app/components/asignaturas/asignaturas.component.ts ***!
  \*****************************************************************/
/*! exports provided: AsignaturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturasComponent", function() { return AsignaturasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_asignaturas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/asignaturas.service */ "Gnnx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AsignaturasComponent_div_25_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conocimiento_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", conocimiento_r6.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AsignaturasComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AsignaturasComponent_div_25_div_13_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asignatura_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, asignatura_r4.nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Profesor: ", asignatura_r4.profesor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ciclo: ", asignatura_r4.ciclo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Curso: ", asignatura_r4.curso, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asignatura_r4.conocimientos);
} }
class AsignaturasComponent {
    constructor(servicioAsignaturas) {
        this.servicioAsignaturas = servicioAsignaturas;
        this.asignaturas = [];
        this.asignaturasFiltradas = [];
    }
    ngOnInit() {
        this.asignaturas = this.servicioAsignaturas.getAllAsignaturas();
        this.asignaturasFiltradas = this.asignaturas;
    }
    filtrar(nombre, ciclo, conocimiento) {
        this.asignaturasFiltradas = [];
        this.asignaturas.forEach(asignatura => {
            if (nombre == "") {
                if (ciclo == "") {
                    if (conocimiento == "") {
                        this.asignaturasFiltradas = this.asignaturas;
                    }
                    else {
                        let x = 0;
                        asignatura.conocimientos.forEach(conocimiento2 => {
                            if (conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())) {
                                x++;
                            }
                        });
                        if (x > 0) {
                            this.asignaturasFiltradas.push(asignatura);
                        }
                    }
                }
                else {
                    if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
                        if (conocimiento == "") {
                            this.asignaturasFiltradas.push(asignatura);
                        }
                        else {
                            let x = 0;
                            asignatura.conocimientos.forEach(conocimiento2 => {
                                if (conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())) {
                                    x++;
                                }
                            });
                            if (x > 0) {
                                this.asignaturasFiltradas.push(asignatura);
                            }
                        }
                    }
                }
            }
            else {
                if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                    if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
                        if (conocimiento == "") {
                            this.asignaturasFiltradas.push(asignatura);
                        }
                        else {
                            let x = 0;
                            asignatura.conocimientos.forEach(conocimiento2 => {
                                if (conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())) {
                                    x++;
                                }
                            });
                            if (x > 0) {
                                this.asignaturasFiltradas.push(asignatura);
                            }
                        }
                    }
                    else {
                        if (asignatura.ciclo == "") {
                            if (conocimiento == "") {
                                this.asignaturasFiltradas.push(asignatura);
                            }
                            else {
                                let x = 0;
                                asignatura.conocimientos.forEach(conocimiento2 => {
                                    if (conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())) {
                                        x++;
                                    }
                                });
                                if (x > 0) {
                                    this.asignaturasFiltradas.push(asignatura);
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}
AsignaturasComponent.ɵfac = function AsignaturasComponent_Factory(t) { return new (t || AsignaturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asignaturas_service__WEBPACK_IMPORTED_MODULE_1__["AsignaturasService"])); };
AsignaturasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsignaturasComponent, selectors: [["app-asignaturas"]], decls: 26, vars: 2, consts: [[1, "col"], [1, "row"], [1, "col-4"], [1, "centro"], ["type", "text", "placeholder", "introduce el nombre de la asignatura...", 1, "form-control"], ["filtroNombre", ""], ["type", "text", "placeholder", "introduce un ciclo...", 1, "form-control"], ["filtroCiclo", ""], ["type", "text", "placeholder", "introduce un conocimiento...", 1, "form-control"], ["filtroConocimiento", ""], [1, "btn", "btn-primary", "mt-4", "mb-4", 3, "click"], ["role", "alert", 1, "alert", "alert-primary", "mt-4"], [1, "row", "mt-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], ["alt", "...", 1, "card-img-top", 3, "src"]], template: function AsignaturasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filtrar por nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filtrar por ciclo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Filtrar por conocimiento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsignaturasComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.filtrar(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Filtrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Los resultados de b\u00FAsqueda son:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AsignaturasComponent_div_25_Template, 14, 7, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" El n\u00FAmero de asignaturas que cumplen el filtro es de: ", ctx.asignaturasFiltradas.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asignaturasFiltradas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".centro[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWduYXR1cmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXNpZ25hdHVyYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cm97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'PracticaFinal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container", "mt-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ciclos/ciclos.component */ "GPNi");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/asignaturas/asignaturas.component */ "P8Rv");
/* harmony import */ var _components_ciclo_detalle_ciclo_detalle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ciclo-detalle/ciclo-detalle.component */ "3h0o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_4__["CiclosComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_6__["AsignaturasComponent"],
        _components_ciclo_detalle_ciclo_detalle_component__WEBPACK_IMPORTED_MODULE_7__["CicloDetalleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/ciclos"]; };
const _c2 = function () { return ["/asignaturas"]; };
class NavBarComponent {
    constructor(rutas) {
        this.rutas = rutas;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 17, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], [1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLinkActive", "router-link-active", 1, "nav-link", "active", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ciclos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Asignaturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_ciclo_detalle_ciclo_detalle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ciclo-detalle/ciclo-detalle.component */ "3h0o");
/* harmony import */ var _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/asignaturas/asignaturas.component */ "P8Rv");
/* harmony import */ var _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ciclos/ciclos.component */ "GPNi");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "ciclos", component: _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_2__["CiclosComponent"] },
    { path: "asignaturas", component: _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_1__["AsignaturasComponent"] },
    { path: "cicloDetalle/:curso/:nombre", component: _components_ciclo_detalle_ciclo_detalle_component__WEBPACK_IMPORTED_MODULE_0__["CicloDetalleComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map