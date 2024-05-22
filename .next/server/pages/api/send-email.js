"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/send-email";
exports.ids = ["pages/api/send-email"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/send-email.js":
/*!*********************************!*\
  !*** ./pages/api/send-email.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { plan , mode , name , email , message  } = req.body;\n        // Configura el transportador de Nodemailer\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            service: \"gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        // Configura las opciones del correo\n        const mailOptions = {\n            from: process.env.EMAIL_USER,\n            to: process.env.EMAIL_USER,\n            subject: `Formulario de contacto, mensaje de ${name}`,\n            text: `Interes en el Plan: ${plan}\\nEn Modo: ${mode}\\nNombre del consultante: ${name}\\nEmail del consultante: ${email}\\nMensaje adicional: ${message}`\n        };\n        try {\n            await transporter.sendMail(mailOptions);\n            res.status(200).json({\n                message: \"Correo enviado con \\xe9xito\"\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"Error al enviar el correo\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC1lbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRSxHQUFHUCxJQUFJUSxJQUFJO1FBRXJELDJDQUEyQztRQUMzQyxNQUFNQyxjQUFjWCxpRUFBMEIsQ0FBQztZQUM3Q2EsU0FBUztZQUNUQyxNQUFNO2dCQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7WUFDOUI7UUFDRjtRQUVBLG9DQUFvQztRQUNwQyxNQUFNQyxjQUFjO1lBQ2xCQyxNQUFNTixRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDNUJLLElBQUlQLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUMxQk0sU0FBUyxDQUFDLG1DQUFtQyxFQUFFakIsS0FBSyxDQUFDO1lBQ3JEa0IsTUFBTSxDQUFDLG9CQUFvQixFQUFFcEIsS0FBSyxXQUFXLEVBQUVDLEtBQUssMEJBQTBCLEVBQUVDLEtBQUsseUJBQXlCLEVBQUVDLE1BQU0scUJBQXFCLEVBQUVDLFFBQVEsQ0FBQztRQUN4SjtRQUVBLElBQUk7WUFDRixNQUFNRSxZQUFZZSxRQUFRLENBQUNMO1lBQzNCbEIsSUFBSXdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVuQixTQUFTO1lBQTJCO1FBQzdELEVBQUUsT0FBT29CLE9BQU87WUFDZDFCLElBQUl3QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTRCO1FBQzVEO0lBQ0YsT0FBTztRQUNMMUIsSUFBSXdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRW5CLFNBQVM7UUFBc0I7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbG1vLy4vcGFnZXMvYXBpL3NlbmQtZW1haWwuanM/NmE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgcGxhbiwgbW9kZSwgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gICAgLy8gQ29uZmlndXJhIGVsIHRyYW5zcG9ydGFkb3IgZGUgTm9kZW1haWxlclxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgc2VydmljZTogXCJnbWFpbFwiLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIENvbmZpZ3VyYSBsYXMgb3BjaW9uZXMgZGVsIGNvcnJlb1xuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUixcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgc3ViamVjdDogYEZvcm11bGFyaW8gZGUgY29udGFjdG8sIG1lbnNhamUgZGUgJHtuYW1lfWAsXG4gICAgICB0ZXh0OiBgSW50ZXJlcyBlbiBlbCBQbGFuOiAke3BsYW59XFxuRW4gTW9kbzogJHttb2RlfVxcbk5vbWJyZSBkZWwgY29uc3VsdGFudGU6ICR7bmFtZX1cXG5FbWFpbCBkZWwgY29uc3VsdGFudGU6ICR7ZW1haWx9XFxuTWVuc2FqZSBhZGljaW9uYWw6ICR7bWVzc2FnZX1gLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkNvcnJlbyBlbnZpYWRvIGNvbiDDqXhpdG9cIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJFcnJvciBhbCBlbnZpYXIgZWwgY29ycmVvXCIgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNw6l0b2RvIG5vIHBlcm1pdGlkb1wiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwbGFuIiwibW9kZSIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJib2R5IiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInBhc3MiLCJFTUFJTF9QQVNTIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsInNlbmRNYWlsIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/send-email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/send-email.js"));
module.exports = __webpack_exports__;

})();