parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/headerPage1/mobilex1.jpg":[["mobilex1.fecb40eb.jpg","FOaU"],"FOaU"],"./../images/headerPage1/mobilex2.jpg":[["mobilex2.d6c5254b.jpg","bQwq"],"bQwq"],"./../images/headerPage1/tablex1.jpg":[["tablex1.a50bb594.jpg","rXoc"],"rXoc"],"./../images/headerPage1/tablex2.jpg":[["tablex2.df18c235.jpg","nQrP"],"nQrP"],"./../images/headerPage1/desktopx1.jpg":[["desktopx1.4cb0e7b1.jpg","UCiC"],"UCiC"],"./../images/headerPage1/desktopx2.jpg":[["desktopx2.3e2be51f.jpg","ILHI"],"ILHI"]}],"gHMV":[function(require,module,exports) {
"use strict";function e(){return'<section class="header">\n    <div class="header-wrapper">\n        <div class="header-top">\n            <div class="logo">\n                <a href=\'#\' class="logo-link">\n                    <svg class="logo-images" width="24px" height="24px">\n                        <use href="./images/headerPage1/symbol-defs.svg#film"></use>\n                    </svg>\n                    <span class="logo-name">\n                        Filmoteka\n                </a>\n                </span>\n                </a>\n            </div>\n            <nav class="nav-menu">\n                <ul class="list-nav">\n                    <li class="item ">\n                        <a href="#" class="item-current">\n                            Home\n                        </a>\n                    </li>\n                    <li class="item">\n                        <a href="#">\n                        My library\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <form class="header-form">\n            <input class=\'header-input\' type="text" name="filmName" placeholder="Поиск фильмов" />\n            <button class=\'header-button--submit\' type="submit">\n                <svg width="12px" height="12px" class="input-images">\n                    <use href="./images/headerPage1/symbol-defs.svg#search"></use>\n                </svg>\n            </button>\n        </form>\n    </div>\n</section>\n'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"GSE6":[function(require,module,exports) {
"use strict";function e(){return'<header class="header-lib">\n    <div class="header-wrapper">\n        <div class="header-top">\n            <div class="logo">\n                <a href=\'#\' class="logo-link">\n                    <svg class="logo-images" width="24px" height="24px">\n                        <use href="./images/headerPage1/symbol-defs.svg#film"></use>\n                    </svg>\n                    <span class="logo-name">\n                        Filmoteka\n                </a>\n                </span>\n                </a>\n            </div>\n            <nav class="nav-menu">\n                <ul class="list-nav">\n                    <li class="item ">\n                        <a href="#" class="item-current">\n                            Home\n                        </a>\n                    </li>\n                    <li class="item">\n                        <a href="#">\n                        My library\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <form class="header-form">\n            <input class=\'header-input\' type="text" name="filmName" placeholder="Поиск фильмов" />\n            <button class=\'header-button--submit\' type="submit">\n                <svg width="12px" height="12px" class="input-images">\n                    <use href="./images/headerPage1/symbol-defs.svg#search"></use>\n                </svg>\n            </button>\n        </form>\n    </div>\n</header>\n'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=s(require("./HeaderPage1")),r=s(require("./HeaderLib.js"));function s(e){return e&&e.__esModule?e:{default:e}}const t=document.getElementById("root");t.innerHTML=(0,e.default)();
},{"./sass/main.scss":"clu1","./HeaderPage1":"gHMV","./HeaderLib.js":"GSE6"}]},{},["Focm"], null)
//# sourceMappingURL=/filmoteka/src.dd064064.js.map