function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"viewport\">\n  <app-sidebar></app-sidebar>\n  <div id=\"content\">\n  <app-navbar></app-navbar>\n  <app-container></app-container>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/client-list/client-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client-list/client-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientListClientListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">Home</li>\n  <li class=\"breadcrumb-item \">Clients</li>\n</ol>\n<div class=\"tab\" role=\"tabpanel\">\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li role=\"presentation\" routerLink=\"/listproduct\">\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Produit</a>\n    </li>\n    <li role=\"presentation\" routerLink=\"/listfornisseurs\" >\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Fornisseur</a>\n    </li>\n    <li role=\"presentation\" routerLink=\"/listclients\" [routerLinkActive]=\"['active']\">\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Client</a>\n    </li>\n  </ul>\n</div>\n<div id=\"panel\" class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4>List des clients</h4>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"text-right\">\n      <button id=\"addbtn\" routerLink=\"/addclient\" class=\"btn btn-primary\">Ajouter Client</button>\n    </div>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">nom</th>\n          <th scope=\"col\">prenom</th>\n          <th scope=\"col\">status</th>\n          <th scope=\"col\">Tel Client</th>\n          <th scope=\"col\">email</th>\n          <th scope=\"col\">ville</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let c of listData'>\n          <td scope=\"row\">{{ c.nom }}</td>\n          <td scope=\"col\">{{ c.prenom }}</td>\n          <td scope=\"col\">{{ c.status }} </td>\n          <td scope=\"col\">{{ c.telC }}</td>\n          <td scope=\"col\">{{ c.emailC }}</td>\n          <td scope=\"col\">{{ c.villeC }}</td>\n          <td>\n            <button id=\"editbutton\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"onEdit(c)\">Edit</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onDelete(c.id)\">delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientClientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">Home</li>\n    <li class=\"breadcrumb-item \">Ajouter Client</li>\n</ol>\n<div class=\"tab\" role=\"tabpanel\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" routerLink=\"/listproduct\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Produit</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/listfornisseurs\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Fornisseur</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/listclients\" [routerLinkActive]=\"['active']\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Client</a>\n        </li>\n    </ul>\n</div>\n<div id=\"panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4>Client</h4>\n    </div>\n    <div class=\"panel-body\">\n\n        <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"nom_produit\">nom client :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"client.nom\" class=\"form-control\" id=\"nom\" placeholder=\"nom client\"\n                        name=\"nom\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"prenom\">prenom client :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"client.prenom\" class=\"form-control\" id=\"prenom\"\n                        placeholder=\"prenom client\" name=\"prenom\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"status\">status :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"client.status\" class=\"form-control\" id=\"status\" placeholder=\"status\"\n                        name=\"status\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"photo\">photo :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.photo\" id=\"prix_de_vente\"\n                        placeholder=\"photo url\" name=\"photo\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"image\">Tel Client :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.telC\" id=\"telC\" placeholder=\"Tel Client\"\n                        name=\"telC\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"emailC\">email :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.emailC\" id=\"emailC\" placeholder=\"email\"\n                        name=\"emailC\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"adresseC\">adresse :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.adresseC\" id=\"adresseC\"\n                        placeholder=\"adresse\" name=\"adresseC\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"villeC\"> ville :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.villeC\" id=\"villeC\" placeholder=\"ville\"\n                        name=\"villeC\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button type=\"submit\" id=\"validerbtn\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Valider</button>\n                    <button type=\"reset\" class=\"btn btn-default\">Vider</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/container/container.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/container.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContainerContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fornisseur-list/fornisseur-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fornisseur-list/fornisseur-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFornisseurListFornisseurListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">Home</li>\n    <li class=\"breadcrumb-item \">fournisseurs</li>\n</ol>\n<div class=\"tab\" role=\"tabpanel\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" routerLink=\"/listproduct\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Produit</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/listfornisseurs\" [routerLinkActive]=\"['active']\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Fornisseur</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/listclients\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Client</a>\n        </li>\n    </ul>\n</div>\n<div id=\"panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4>List des fournisseurs</h4>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"text-right\">\n            <button id=\"addbtn\" routerLink='/addfornisseur' class=\"btn btn-primary\">Ajouter Fornisseur</button>\n        </div>\n        <table class=\"table table table-bordered\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">nom fornissuer</th>\n                    <th scope=\"col\">nom court</th>\n                    <th scope=\"col\">ville</th>\n                    <th scope=\"col\">adresse</th>\n                    <th scope=\"col\">Tel Fix</th>\n                    <th scope=\"col\">email</th>\n                    <th scope=\"col\">Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor='let f of listData'>\n                    <td scope=\"row\">{{ f.nomF }}</td>\n                    <td scope=\"col\">{{ f.nom_courtF }}</td>\n                    <td scope=\"col\">{{ f.villeF }} </td>\n                    <td scope=\"col\">{{ f.adressF }}</td>\n                    <td scope=\"col\">{{ f.telFix }}</td>\n                    <td scope=\"col\">{{ f.emailF }}</td>\n                    <td>\n                        <button id=\"editbutton\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"onEdit(f)\">Edit</button>\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onDelete(f.id)\">delete</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fornisseur/fornisseur.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fornisseur/fornisseur.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFornisseurFornisseurComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">Home</li>\n    <li class=\"breadcrumb-item \">Ajouter fornisseur</li>\n</ol>\n<div class=\"tab\" role=\"tabpanel\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" routerLink=\"/listproduct\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Produit</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/listfornisseurs\" [routerLinkActive]=\"['active']\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Fornisseur</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/listclients\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Client</a>\n        </li>\n    </ul>\n</div>\n<div id=\"panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4>Fornisseur</h4>\n    </div>\n    <div class=\"panel-body\">\n        <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"nom_produit\">nom fornissuer :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"fornisseur.nomF\" class=\"form-control\" id=\"nomF\"\n                        placeholder=\"nom fornissuer\" name=\"nomF\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"nom_courtF\">nom court :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"fornisseur.nom_courtF\" class=\"form-control\" id=\"nom_courtF\"\n                        placeholder=\"nom court\" name=\"nom_courtF\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"prix_de_bas\">ville :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"fornisseur.villeF\" class=\"form-control\" id=\"villeF\"\n                        placeholder=\"Ville\" name=\"villeF\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"adressF\">adresse :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fornisseur.adressF\" id=\"adressF\"\n                        placeholder=\"adresse\" name=\"adressF\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"image\">Tel Fix:</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fornisseur.telFix\" id=\"telFix\"\n                        placeholder=\"Tel Fix\" name=\"telFix\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"telMobile\">Tel Mobile :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fornisseur.telMobile\" id=\"telMobile\"\n                        placeholder=\"Tel Mobile\" name=\"telMobile\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"unite\">fax :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fornisseur.fax\" id=\"fax\" placeholder=\"fax\"\n                        name=\"fax\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"emailF\">email :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fornisseur.emailF\" id=\"emailF\"\n                        placeholder=\"email\" name=\"emailF\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button type=\"submit\" id=\"validerbtn\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Valider</button>\n                    <button type=\"reset\" class=\"btn btn-default\">Vider</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav id=\"navcolor\"  class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n                <a href=\"#\"><i class=\"zmdi zmdi-notifications\"></i>\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/listusers\"><i class=\"zmdi zmdi-settings\"></i>\n                </a>\n            </li>\n            <li><a href=\"#\">User</a></li>\n        </ul>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">Home</li>\n  <li class=\"breadcrumb-item \">Produits</li>\n</ol>\n<div class=\"tab\" role=\"tabpanel\">\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li role=\"presentation\" routerLink=\"/listproduct\" [routerLinkActive]=\"['active']\">\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Produit</a>\n    </li>\n    <li role=\"presentation\" routerLink=\"/listfornisseurs\" >\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Fornisseur</a>\n    </li>\n    <li role=\"presentation\" routerLink=\"/listclients\" >\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Client</a>\n    </li>\n  </ul>\n</div>\n<div id=\"panel\" class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4>List des produits</h4>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"text-right\">\n      <button id=\"addbtn\" routerLink=\"/addproduct\" class=\"btn btn-primary\">Ajouter Produit</button>\n    </div>\n    <table class=\"table table table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">nom</th>\n          <th scope=\"col\">nom court</th>\n          <th scope=\"col\">prix de bas</th>\n          <th scope=\"col\">remise</th>\n          <th scope=\"col\">quantite initial</th>\n          <th scope=\"col\">quantite en stock</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let p of listData'>\n          <td scope=\"row\">{{ p.nom }}</td>\n          <td scope=\"col\">{{ p.nom_court }}</td>\n          <td scope=\"col\">{{ p.prix_de_vente }} </td>\n          <td scope=\"col\">{{ p.remise }}</td>\n          <td scope=\"col\">{{ p.quantite_initial }}</td>\n          <td scope=\"col\">{{ p.quantite_en_stock }}</td>\n          <td>\n            <button id=\"editbutton\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"onEdit(p)\">Edit</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onDelete(p.id)\">delete</button>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produit.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produit.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProduitProduitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">Home</li>\n  <li class=\"breadcrumb-item \">Ajouter produit</li>\n</ol>\n<div class=\"tab\" role=\"tabpanel\">\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li role=\"presentation\" routerLink=\"/listproduct\" [routerLinkActive]=\"['active']\">\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Produit</a>\n    </li>\n    <li role=\"presentation\" routerLink=\"/listfornisseurs\" >\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Fornisseur</a>\n    </li>\n    <li role=\"presentation\" routerLink=\"/listclients\" >\n      <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Client</a>\n    </li>\n  </ul>\n</div>\n<div id=\"panel\" class=\"panel panel-default\">\n  <div class=\"panel-heading\"><h4>Produit</h4></div>\n  <div class=\"panel-body\">\n    <form  class=\"form-horizontal\" >\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"nom_produit\">nom produit :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [(ngModel)]=\"produit.nom\" class=\"form-control\" id=\"nom_produit\" placeholder=\"nom produit\" name=\"nom_produit\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"nom_court\">nom court :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [(ngModel)]=\"produit.nom_court\" class=\"form-control\" id=\"nom_court\" placeholder=\"nom court\" name=\"nom_court\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"prix_de_bas\">prix de bas :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [(ngModel)]=\"produit.prix_de_bas\" class=\"form-control\" id=\"prix_de_bas\" placeholder=\"prix de bas\" name=\"prix_de_bas\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"prix_de_vente\">prix de vente :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"produit.prix_de_vente\" id=\"prix_de_vente\" placeholder=\"prix de vente\" name=\"prix_de_vente\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"image\">image :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"produit.image\" id=\"image\" placeholder=\"image url\" name=\"image\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"image\">remise :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"produit.remise\" id=\"remise\"  placeholder=\"remise\" name=\"remise\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"unite\">unite :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"produit.unite\" id=\"unite\" placeholder=\"unite\" name=\"unite\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"quantite_initial\">quantite initial :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"produit.quantite_initial\" id=\"quantite_initial\" placeholder=\"quantite initial\" name=\"quantite_initial\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"quantite_en_stock\">quantite en stock :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"produit.quantite_en_stock\" id=\"quantite_en_stock\" placeholder=\"quantite en stock\" name=\"quantite_en_stock\">\n        </div>\n      </div>\n      <div class=\"form-group\">        \n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" id=\"validerbtn\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Valider</button>\n          <button type=\"reset\" class=\"btn btn-default\">Vider</button>\n        </div>\n        \n      </div>\n    </form>\n  </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"sidebar\">\n  <header>\n    <a href=\"#\"><strong>SmartVentes</strong>  </a>\n  </header>\n  <ul class=\"nav\">\n    <li>\n      <a routerLink=\"/listproduct\">\n        <i class=\"zmdi zmdi-view-dashboard\" ></i> Gestion de ventes\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"/listusers\">\n      <i class=\"zmdi zmdi-widgets\"></i> Utilisateurs\n      </a>\n    </li>\n    \n  </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">Home</li>\n    <li class=\"breadcrumb-item \">Utilisateurs</li>\n  </ol>\n  <div class=\"tab\" role=\"tabpanel\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" routerLink=\"/listusers\" [routerLinkActive]=\"['active']\">\n          <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Utilisateurs</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/adduser\" >\n          <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Ajouter utilisateur</a>\n        </li>\n       \n    </ul>\n  </div>\n  <div id=\"panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>List des utilisateurs</h4>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"text-right\">\n        <button id=\"addbtn\" routerLink=\"/adduser\" class=\"btn btn-primary\">Ajouter Utilisateur</button>\n      </div>\n      <table class=\"table table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Identifiant</th>\n            <th scope=\"col\">Profil</th>\n            <th scope=\"col\">Date création</th>\n            <th scope=\"col\">Date Fin</th>\n            <th scope=\"col\">photo</th>\n            <th scope=\"col\">email</th>            \n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let u of users'>\n            <td scope=\"row\">{{ u.identifiant }}</td>\n            <td scope=\"col\">{{ u.profil }}</td>\n            <td scope=\"col\">{{ u.date_creation }} </td>\n            <td scope=\"col\">{{ u.date_fin }}</td>\n            <td scope=\"col\">{{ u.photo }}</td>\n            <td scope=\"col\">{{ u.email }}</td>\n            <td>\n              <button id=\"editbutton\" type=\"button\" class=\"btn btn-default\" (click)=\"onEdit(u)\">Edit</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete(u)\">delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">Home</li>\n    <li class=\"breadcrumb-item \">Ajouter Utilisateur</li>\n</ol>\n<div class=\"tab\" role=\"tabpanel\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" routerLink=\"/listusers\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Utilisateurs</a>\n        </li>\n        <li role=\"presentation\" routerLink=\"/adduser\" [routerLinkActive]=\"['active']\">\n            <a aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Ajouter utilisateur</a>\n        </li>\n\n    </ul>\n</div>\n<div id=\"panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4>Utilisateur</h4>\n    </div>\n    <div class=\"panel-body\">\n        <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n\n                <label class=\"control-label col-sm-2\" for=\"identifiant\">Identifiant :</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"user.identifiant\" class=\"form-control\" id=\"identifiant\"\n                        placeholder=\"Identifiant\" name=\"identifiant\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"profil\">Profile :</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control custom-select\" name=\"profil\" id=\"profil\" [(ngModel)]=\"user.profil\">\n                        <option value=\"\" disabled selected>selectionner le profile d'utilisateur</option>\n                        <option *ngFor=\"let p of profils\" value=\"{{ p }}\">\n                            {{ p }}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"date_creation\">Date création</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"date\" [(ngModel)]=\"user.date_creation\" name=\"date_creation\" class=\"form-control\"\n                        id=\"date_creation\" placeholder=\"date creation\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"date_fin\">Date fin</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"date\" [(ngModel)]=\"user.date_fin\" name=\"date_fin\" class=\"form-control\" id=\"date_fin\"\n                        placeholder=\"date_fin\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"pb\">Photo</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" [(ngModel)]=\"user.photo\" name=\"photo\" class=\"form-control\" id=\"photo\"\n                        placeholder=\"photo url\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"email\">Email</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" id=\"email\"\n                        placeholder=\"email\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button id=\"validerbtn\" type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Valider</button>\n                    <button type=\"reset\" class=\"btn btn-default\">Vider</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");
    /* harmony import */


    var _fornisseur_fornisseur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fornisseur/fornisseur.component */
    "./src/app/fornisseur/fornisseur.component.ts");
    /* harmony import */


    var _fornisseur_list_fornisseur_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fornisseur-list/fornisseur-list.component */
    "./src/app/fornisseur-list/fornisseur-list.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _produit_produit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./produit/produit.component */
    "./src/app/produit/produit.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./client-list/client-list.component */
    "./src/app/client-list/client-list.component.ts");
    /* harmony import */


    var _client_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./client/client.component */
    "./src/app/client/client.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/listproduct',
      pathMatch: 'full'
    }, {
      path: 'addproduct',
      component: _produit_produit_component__WEBPACK_IMPORTED_MODULE_6__["ProduitComponent"]
    }, {
      path: 'editproduct',
      component: _produit_produit_component__WEBPACK_IMPORTED_MODULE_6__["ProduitComponent"]
    }, {
      path: 'listproduct',
      component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"]
    }, {
      path: 'listfornisseurs',
      component: _fornisseur_list_fornisseur_list_component__WEBPACK_IMPORTED_MODULE_3__["FornisseurListComponent"]
    }, {
      path: 'addfornisseur',
      component: _fornisseur_fornisseur_component__WEBPACK_IMPORTED_MODULE_2__["FornisseurComponent"]
    }, {
      path: 'editfornisseur',
      component: _fornisseur_fornisseur_component__WEBPACK_IMPORTED_MODULE_2__["FornisseurComponent"]
    }, {
      path: 'listclients',
      component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_8__["ClientListComponent"]
    }, {
      path: 'addclient',
      component: _client_client_component__WEBPACK_IMPORTED_MODULE_9__["ClientComponent"]
    }, {
      path: 'editclient',
      component: _client_client_component__WEBPACK_IMPORTED_MODULE_9__["ClientComponent"]
    }, {
      path: 'listusers',
      component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__["UserListComponent"]
    }, {
      path: 'adduser',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"]
    }, {
      path: 'edituser',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_Router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
      exports: [_angular_Router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angularMateriall';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _material_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./material/material/material.module */
    "./src/app/material/material/material.module.ts");
    /* harmony import */


    var _produit_produit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./produit/produit.component */
    "./src/app/produit/produit.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _container_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./container/container.component */
    "./src/app/container/container.component.ts");
    /* harmony import */


    var _fornisseur_fornisseur_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./fornisseur/fornisseur.component */
    "./src/app/fornisseur/fornisseur.component.ts");
    /* harmony import */


    var _fornisseur_list_fornisseur_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./fornisseur-list/fornisseur-list.component */
    "./src/app/fornisseur-list/fornisseur-list.component.ts");
    /* harmony import */


    var _client_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./client/client.component */
    "./src/app/client/client.component.ts");
    /* harmony import */


    var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./client-list/client-list.component */
    "./src/app/client-list/client-list.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _produit_produit_component__WEBPACK_IMPORTED_MODULE_9__["ProduitComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_13__["ContainerComponent"], _fornisseur_fornisseur_component__WEBPACK_IMPORTED_MODULE_14__["FornisseurComponent"], _fornisseur_list_fornisseur_list_component__WEBPACK_IMPORTED_MODULE_15__["FornisseurListComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"], _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_17__["ClientListComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/client-list/client-list.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/client-list/client-list.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientListClientListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/client-list/client-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/client-list/client-list.component.ts ***!
    \******************************************************/

  /*! exports provided: ClientListComponent */

  /***/
  function srcAppClientListClientListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientListComponent", function () {
      return ClientListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _services_client_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/client-service.service */
    "./src/app/services/client-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClientListComponent =
    /*#__PURE__*/
    function () {
      function ClientListComponent(service, router) {
        _classCallCheck(this, ClientListComponent);

        this.service = service;
        this.router = router;
        this.listData = [];
        this.fetchElements();
      }

      _createClass(ClientListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchElements();
        }
      }, {
        key: "fetchElements",
        value: function fetchElements() {
          var _this = this;

          this.service.getClients().subscribe(function (res) {
            if (!res) return;
            console.log(res);
            _this.listData = res;
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(row) {
          this.service.setter(row);
          this.router.navigateByUrl('/editclient');
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this2 = this;

          this.service.deleteClient(id).subscribe(function (res) {
            console.log(res);

            _this2.fetchElements();
          });
        }
      }, {
        key: "addClient",
        value: function addClient() {
          var c;
          this.service.setter(c);
          this.router.navigateByUrl('/addclient');
        }
      }]);

      return ClientListComponent;
    }();

    ClientListComponent.ctorParameters = function () {
      return [{
        type: _services_client_service_service__WEBPACK_IMPORTED_MODULE_2__["ClientServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ClientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-client-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./client-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/client-list/client-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./client-list.component.css */
      "./src/app/client-list/client-list.component.css")).default]
    })], ClientListComponent);
    /***/
  },

  /***/
  "./src/app/client/client.component.css":
  /*!*********************************************!*\
    !*** ./src/app/client/client.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientClientComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/client/client.component.ts":
  /*!********************************************!*\
    !*** ./src/app/client/client.component.ts ***!
    \********************************************/

  /*! exports provided: ClientComponent */

  /***/
  function srcAppClientClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
      return ClientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _services_client_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/client-service.service */
    "./src/app/services/client-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClientComponent =
    /*#__PURE__*/
    function () {
      function ClientComponent(service, router) {
        _classCallCheck(this, ClientComponent);

        this.service = service;
        this.router = router;
      }

      _createClass(ClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.getClients();
          this.client = this.service.getter();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.client.id);

          if (this.client.id == undefined) {
            console.log("new instance");
            this.service.insertClient(this.client).subscribe(function (res) {
              console.log(res);
            }); //  this.service.form.reset();
            //  this.service.initializeFormGroup();

            this.router.navigateByUrl('/listclients');
          }
          /*
          */
          else {
              this.service.updateClient(this.client).subscribe(function (res) {
                console.log(res);
              });
              this.router.navigateByUrl('/listclients');
            }
        }
      }]);

      return ClientComponent;
    }();

    ClientComponent.ctorParameters = function () {
      return [{
        type: _services_client_service_service__WEBPACK_IMPORTED_MODULE_2__["ClientServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-client',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./client.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./client.component.css */
      "./src/app/client/client.component.css")).default]
    })], ClientComponent);
    /***/
  },

  /***/
  "./src/app/container/container.component.css":
  /*!***************************************************!*\
    !*** ./src/app/container/container.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContainerContainerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/container/container.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/container/container.component.ts ***!
    \**************************************************/

  /*! exports provided: ContainerComponent */

  /***/
  function srcAppContainerContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerComponent", function () {
      return ContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContainerComponent =
    /*#__PURE__*/
    function () {
      function ContainerComponent() {
        _classCallCheck(this, ContainerComponent);
      }

      _createClass(ContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContainerComponent;
    }();

    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/container/container.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./container.component.css */
      "./src/app/container/container.component.css")).default]
    })], ContainerComponent);
    /***/
  },

  /***/
  "./src/app/fornisseur-list/fornisseur-list.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/fornisseur-list/fornisseur-list.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFornisseurListFornisseurListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm5pc3NldXItbGlzdC9mb3JuaXNzZXVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/fornisseur-list/fornisseur-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/fornisseur-list/fornisseur-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: FornisseurListComponent */

  /***/
  function srcAppFornisseurListFornisseurListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FornisseurListComponent", function () {
      return FornisseurListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _services_fornisseur_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/fornisseur-service.service */
    "./src/app/services/fornisseur-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FornisseurListComponent =
    /*#__PURE__*/
    function () {
      function FornisseurListComponent(service, router) {
        _classCallCheck(this, FornisseurListComponent);

        this.service = service;
        this.router = router;
        this.fetchElements();
      }

      _createClass(FornisseurListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchElements();
        }
      }, {
        key: "fetchElements",
        value: function fetchElements() {
          var _this3 = this;

          this.service.getFornisseurs().subscribe(function (res) {
            if (!res) return;
            console.log(res);
            _this3.listData = res;
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(row) {
          this.service.setter(row);
          this.router.navigateByUrl('/editfornisseur');
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this4 = this;

          this.service.deleteFornisseur(id).subscribe(function (res) {
            console.log(res);

            _this4.fetchElements();
          });
        }
      }, {
        key: "addFornisseur",
        value: function addFornisseur() {
          var f;
          this.service.setter(f);
          this.router.navigateByUrl('/addfornisseur');
        }
      }]);

      return FornisseurListComponent;
    }();

    FornisseurListComponent.ctorParameters = function () {
      return [{
        type: _services_fornisseur_service_service__WEBPACK_IMPORTED_MODULE_2__["FornisseurServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    FornisseurListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-fornisseur-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fornisseur-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fornisseur-list/fornisseur-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fornisseur-list.component.css */
      "./src/app/fornisseur-list/fornisseur-list.component.css")).default]
    })], FornisseurListComponent);
    /***/
  },

  /***/
  "./src/app/fornisseur/fornisseur.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/fornisseur/fornisseur.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFornisseurFornisseurComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm5pc3NldXIvZm9ybmlzc2V1ci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/fornisseur/fornisseur.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/fornisseur/fornisseur.component.ts ***!
    \****************************************************/

  /*! exports provided: FornisseurComponent */

  /***/
  function srcAppFornisseurFornisseurComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FornisseurComponent", function () {
      return FornisseurComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _services_fornisseur_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/fornisseur-service.service */
    "./src/app/services/fornisseur-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FornisseurComponent =
    /*#__PURE__*/
    function () {
      function FornisseurComponent(service, router) {
        _classCallCheck(this, FornisseurComponent);

        this.service = service;
        this.router = router;
      }

      _createClass(FornisseurComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.getFornisseurs();
          this.fornisseur = this.service.getter();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.fornisseur.id);

          if (this.fornisseur.id == undefined) {
            console.log("new instance");
            this.service.insertFornisseur(this.fornisseur).subscribe(function (res) {
              console.log(res);
            });
            this.router.navigateByUrl('/listfornisseurs');
          } else {
            this.service.updateFornisseur(this.fornisseur).subscribe(function (res) {
              console.log(res);
            });
            this.router.navigateByUrl('/listfornisseurs');
          }
        }
      }]);

      return FornisseurComponent;
    }();

    FornisseurComponent.ctorParameters = function () {
      return [{
        type: _services_fornisseur_service_service__WEBPACK_IMPORTED_MODULE_2__["FornisseurServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    FornisseurComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-fornisseur',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fornisseur.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fornisseur/fornisseur.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fornisseur.component.css */
      "./src/app/fornisseur/fornisseur.component.css")).default]
    })], FornisseurComponent);
    /***/
  },

  /***/
  "./src/app/material/material/material.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/material/material/material.module.ts ***!
    \******************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/product-list/product-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-list/product-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_produit_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/produit-service.service */
    "./src/app/services/produit-service.service.ts");

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent(service, router) {
        _classCallCheck(this, ProductListComponent);

        this.service = service;
        this.router = router;
        this.listData = [];
        this.fetchElements();
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchElements();
        }
      }, {
        key: "fetchElements",
        value: function fetchElements() {
          var _this5 = this;

          this.service.getProducts().subscribe(function (res) {
            if (!res) return;
            console.log(res);
            _this5.listData = res;
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(row) {
          this.service.setter(row); // this.service.populate(row);

          this.router.navigateByUrl('/editproduct'); // this.service.updateEmployee(row);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this6 = this;

          this.service.deleteProduct(id).subscribe(function (res) {
            console.log(res);

            _this6.fetchElements();
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          var p;
          this.service.setter(p);
          this.router.navigateByUrl('/addproduct');
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _services_produit_service_service__WEBPACK_IMPORTED_MODULE_3__["ProduitServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.css */
      "./src/app/product-list/product-list.component.css")).default]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/produit/produit.component.css":
  /*!***********************************************!*\
    !*** ./src/app/produit/produit.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProduitProduitComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1aXQvcHJvZHVpdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/produit/produit.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/produit/produit.component.ts ***!
    \**********************************************/

  /*! exports provided: ProduitComponent */

  /***/
  function srcAppProduitProduitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduitComponent", function () {
      return ProduitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_produit_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/produit-service.service */
    "./src/app/services/produit-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");

    var ProduitComponent =
    /*#__PURE__*/
    function () {
      function ProduitComponent(service, router) {
        _classCallCheck(this, ProduitComponent);

        this.service = service;
        this.router = router;
      }

      _createClass(ProduitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.getProducts();
          this.produit = this.service.getter();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.produit.id);

          if (this.produit.id == undefined) {
            console.log("new instance");
            this.service.insertProduct(this.produit).subscribe(function (res) {
              console.log(res);
            }); //  this.service.form.reset();
            //  this.service.initializeFormGroup();

            this.router.navigateByUrl('/listproduct');
          }
          /*
          */
          else {
              this.service.updateProduct(this.produit).subscribe(function (res) {
                console.log(res);
              });
              this.router.navigateByUrl('/listproduct');
            }
        }
      }]);

      return ProduitComponent;
    }();

    ProduitComponent.ctorParameters = function () {
      return [{
        type: _services_produit_service_service__WEBPACK_IMPORTED_MODULE_1__["ProduitServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProduitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-produit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./produit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./produit.component.css */
      "./src/app/produit/produit.component.css")).default]
    })], ProduitComponent);
    /***/
  },

  /***/
  "./src/app/services/client-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/client-service.service.ts ***!
    \****************************************************/

  /*! exports provided: ClientServiceService */

  /***/
  function srcAppServicesClientServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientServiceService", function () {
      return ClientServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClientServiceService =
    /*#__PURE__*/
    function () {
      function ClientServiceService(http) {
        _classCallCheck(this, ClientServiceService);

        this.http = http;
        this.url = 'http://localhost:3000/client';
        this.client = {
          id: null,
          nom: '',
          prenom: '',
          status: '',
          photo: '',
          telC: null,
          emailC: '',
          adresseC: '',
          villeC: ''
        };
      }

      _createClass(ClientServiceService, [{
        key: "getClients",
        value: function getClients() {
          return this.http.get(this.url);
        }
      }, {
        key: "insertClient",
        value: function insertClient(client) {
          console.log(client);
          return this.http.post(this.url, client);
        }
      }, {
        key: "updateClient",
        value: function updateClient(client) {
          return this.http.put("".concat(this.url, "/").concat(client.id), client);
        }
      }, {
        key: "deleteClient",
        value: function deleteClient(key) {
          return this.http.delete("".concat(this.url, "/").concat(key));
        }
      }, {
        key: "getter",
        value: function getter() {
          return this.client;
        }
      }, {
        key: "setter",
        value: function setter(c) {
          this.client = c;
        }
      }]);

      return ClientServiceService;
    }();

    ClientServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ClientServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ClientServiceService);
    /***/
  },

  /***/
  "./src/app/services/fornisseur-service.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/fornisseur-service.service.ts ***!
    \********************************************************/

  /*! exports provided: FornisseurServiceService */

  /***/
  function srcAppServicesFornisseurServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FornisseurServiceService", function () {
      return FornisseurServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FornisseurServiceService =
    /*#__PURE__*/
    function () {
      function FornisseurServiceService(http) {
        _classCallCheck(this, FornisseurServiceService);

        this.http = http;
        this.url = "http://localhost:3000/Fournisseur";
        this.fornissuer = {
          id: null,
          nomF: '',
          nom_courtF: '',
          villeF: '',
          adressF: '',
          telFix: null,
          telMobile: null,
          fax: '',
          emailF: ''
        };
      }

      _createClass(FornisseurServiceService, [{
        key: "getFornisseurs",
        value: function getFornisseurs() {
          return this.http.get(this.url);
        }
      }, {
        key: "insertFornisseur",
        value: function insertFornisseur(fornisseur) {
          console.log(fornisseur);
          return this.http.post(this.url, fornisseur);
        }
      }, {
        key: "updateFornisseur",
        value: function updateFornisseur(fornisseur) {
          return this.http.put("".concat(this.url, "/").concat(fornisseur.id), fornisseur);
        }
      }, {
        key: "deleteFornisseur",
        value: function deleteFornisseur(key) {
          return this.http.delete("".concat(this.url, "/").concat(key));
        }
      }, {
        key: "getter",
        value: function getter() {
          return this.fornissuer;
        }
      }, {
        key: "setter",
        value: function setter(f) {
          this.fornissuer = f;
        }
      }]);

      return FornisseurServiceService;
    }();

    FornisseurServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    FornisseurServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], FornisseurServiceService);
    /***/
  },

  /***/
  "./src/app/services/produit-service.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/produit-service.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProduitServiceService */

  /***/
  function srcAppServicesProduitServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduitServiceService", function () {
      return ProduitServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProduitServiceService =
    /*#__PURE__*/
    function () {
      function ProduitServiceService(http) {
        _classCallCheck(this, ProduitServiceService);

        this.http = http;
        this.url = "http://localhost:3000/Produit"; // });

        this.produit = {
          id: null,
          nom: '',
          nom_court: '',
          prix_de_bas: null,
          prix_de_vente: null,
          unite: '',
          remise: '',
          image: '',
          quantite_initial: null,
          quantite_en_stock: null
        };
      }

      _createClass(ProduitServiceService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(this.url);
        }
      }, {
        key: "insertProduct",
        value: function insertProduct(produit) {
          console.log(produit);
          return this.http.post(this.url, produit);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(produit) {
          return this.http.put("".concat(this.url, "/").concat(produit.id), produit);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(key) {
          return this.http.delete("".concat(this.url, "/").concat(key));
        }
      }, {
        key: "getter",
        value: function getter() {
          return this.produit;
        }
      }, {
        key: "setter",
        value: function setter(p) {
          this.produit = p;
        }
      }]);

      return ProduitServiceService;
    }();

    ProduitServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProduitServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProduitServiceService);
    /***/
  },

  /***/
  "./src/app/services/user-service.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/user-service.service.ts ***!
    \**************************************************/

  /*! exports provided: UserServiceService */

  /***/
  function srcAppServicesUserServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserServiceService", function () {
      return UserServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserServiceService =
    /*#__PURE__*/
    function () {
      function UserServiceService(http) {
        _classCallCheck(this, UserServiceService);

        this.http = http;
        this.Url = "http://localhost:3000/users";
        this.user = {
          identifiant: '',
          date_creation: null,
          photo: '',
          date_fin: null,
          email: '',
          profil: ''
        };
      }

      _createClass(UserServiceService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.Url);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http.delete(this.Url + "/".concat(id));
        }
      }, {
        key: "insertUser",
        value: function insertUser(user) {
          return this.http.post(this.Url, user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.Url + "/".concat(user.id), user);
        }
      }, {
        key: "setter",
        value: function setter(user) {
          this.user = user;
        }
      }, {
        key: "getter",
        value: function getter() {
          return this.user;
        }
      }]);

      return UserServiceService;
    }();

    UserServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserServiceService);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/sidebar/sidebar.component.css")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-list/user-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserListUserListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-list/user-list.component.ts ***!
    \**************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/user-service.service */
    "./src/app/services/user-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserListComponent =
    /*#__PURE__*/
    function () {
      function UserListComponent(userService, router) {
        _classCallCheck(this, UserListComponent);

        this.userService = userService;
        this.router = router;
        this.users = [];
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllUsers();
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this7 = this;

          this.userService.getUsers().subscribe(function (res) {
            console.log(res);
            _this7.users = res;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(user) {
          var _this8 = this;

          this.userService.deleteUser(user.id).subscribe(function (res) {
            console.log(res);

            _this8.getAllUsers();
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(user) {
          this.userService.setter(user);
          this.router.navigateByUrl('/edituser');
        }
      }, {
        key: "newUser",
        value: function newUser() {
          var user = {
            date_creation: null,
            photo: '',
            date_fin: null,
            email: '',
            profil: '',
            identifiant: ''
          };
          this.userService.setter(user);
          this.router.navigateByUrl('/adduser');
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ctorParameters = function () {
      return [{
        type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-list.component.css */
      "./src/app/user-list/user-list.component.css")).default]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/Router */
    "./node_modules/@angular/Router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/user-service.service */
    "./src/app/services/user-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(userService, router) {
        _classCallCheck(this, UserComponent);

        this.userService = userService;
        this.router = router;
        this.profils = ['admin', 'user', 'editor'];
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.userService.getter();
          this.user = this.userService.getter();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          if (this.user.id == undefined) {
            console.log('new instance');
            this.userService.insertUser(this.user).subscribe(function (res) {
              console.log(res);

              _this9.router.navigateByUrl('/listusers');
            });
          } else {
            this.userService.updateUser(this.user).subscribe(function (res) {
              _this9.router.navigateByUrl('/listusers');

              console.log(res);
            });
          }
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]
      }, {
        type: _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css")).default]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Omar\Desktop\exam\angularMateriall\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map