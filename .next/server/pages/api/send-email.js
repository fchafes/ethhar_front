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

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { plan , mode , name , email , message  } = req.body;\n        console.log(\"SMTP_HOST:\", \"mail.ethhar.com.uy\");\n        console.log(\"SMTP_PORT:\", \"465\");\n        console.log(\"SMTP_USER:\", \"info@ethhar.com.uy\");\n        console.log(\"SMTP_PASS:\", \"Info_2024$\");\n        // Configuracion del transportador de Nodemailer\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            host: \"mail.ethhar.com.uy\",\n            port: \"465\",\n            secure: true,\n            auth: {\n                user: \"info@ethhar.com.uy\",\n                pass: \"Info_2024$\"\n            },\n            tls: {\n                rejectUnauthorized: false\n            }\n        });\n        // Configuracion de opciones del correo\n        const mailOptions = {\n            from: \"info@ethhar.com.uy\",\n            to: \"info@ethhar.com.uy\",\n            subject: `Formulario de contacto, mensaje de ${name}`,\n            text: `Interes en el Plan: ${plan}\\nEn Modo: ${mode}\\nNombre del consultante: ${name}\\nEmail del consultante: ${email}\\nMensaje adicional: ${message}`\n        };\n        try {\n            await transporter.sendMail(mailOptions);\n            res.status(200).json({\n                message: \"Correo enviado con \\xe9xito\"\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"Error al enviar el correo\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC1lbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNSO0FBQzVCQyxvREFBYTtBQUVFLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtRQUVyREMsUUFBUUMsR0FBRyxDQUFDLGNBQWNDLG9CQUFxQjtRQUMvQ0YsUUFBUUMsR0FBRyxDQUFDLGNBQWNDLEtBQXFCO1FBQy9DRixRQUFRQyxHQUFHLENBQUMsY0FBY0Msb0JBQXFCO1FBQy9DRixRQUFRQyxHQUFHLENBQUMsY0FBY0MsWUFBcUI7UUFFL0MsZ0RBQWdEO1FBQ2hELE1BQU1NLGNBQWNyQixpRUFBMEIsQ0FBQztZQUM3Q3VCLE1BQU1SLG9CQUFxQjtZQUMzQlMsTUFBTVQsS0FBcUI7WUFDM0JVLFFBQVEsSUFBSTtZQUNaQyxNQUFNO2dCQUNKQyxNQUFNWixvQkFBcUI7Z0JBQzNCYSxNQUFNYixZQUFxQjtZQUM3QjtZQUNBYyxLQUFLO2dCQUNIQyxvQkFBb0IsS0FBSztZQUMzQjtRQUNGO1FBRUEsdUNBQXVDO1FBQ3ZDLE1BQU1DLGNBQWM7WUFDbEJDLE1BQU1qQixvQkFBcUI7WUFDM0JrQixJQUFJbEIsb0JBQXFCO1lBQ3pCbUIsU0FBUyxDQUFDLG1DQUFtQyxFQUFFekIsS0FBSyxDQUFDO1lBQ3JEMEIsTUFBTSxDQUFDLG9CQUFvQixFQUFFNUIsS0FBSyxXQUFXLEVBQUVDLEtBQUssMEJBQTBCLEVBQUVDLEtBQUsseUJBQXlCLEVBQUVDLE1BQU0scUJBQXFCLEVBQUVDLFFBQVEsQ0FBQztRQUN4SjtRQUVBLElBQUk7WUFDRixNQUFNVSxZQUFZZSxRQUFRLENBQUNMO1lBQzNCMUIsSUFBSWdDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUUzQixTQUFTO1lBQTJCO1FBQzdELEVBQUUsT0FBTzRCLE9BQU87WUFDZGxDLElBQUlnQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTRCO1FBQzVEO0lBQ0YsT0FBTztRQUNMbEMsSUFBSWdDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRTNCLFNBQVM7UUFBc0I7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbG1vLy4vcGFnZXMvYXBpL3NlbmQtZW1haWwuanM/NmE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBwbGFuLCBtb2RlLCBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlNNVFBfSE9TVDpcIiwgcHJvY2Vzcy5lbnYuU01UUF9IT1NUKTtcbiAgICBjb25zb2xlLmxvZyhcIlNNVFBfUE9SVDpcIiwgcHJvY2Vzcy5lbnYuU01UUF9QT1JUKTtcbiAgICBjb25zb2xlLmxvZyhcIlNNVFBfVVNFUjpcIiwgcHJvY2Vzcy5lbnYuU01UUF9VU0VSKTtcbiAgICBjb25zb2xlLmxvZyhcIlNNVFBfUEFTUzpcIiwgcHJvY2Vzcy5lbnYuU01UUF9QQVNTKTtcblxuICAgIC8vIENvbmZpZ3VyYWNpb24gZGVsIHRyYW5zcG9ydGFkb3IgZGUgTm9kZW1haWxlclxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuU01UUF9IT1NULFxuICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuU01UUF9QT1JULFxuICAgICAgc2VjdXJlOiB0cnVlLCAvLyBUcnVlIHBhcmEgcHVlcnRvIDQ2NSwgZmFsc2UgcGFyYSBvdHJvcyBwdWVydG9zXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlNNVFBfVVNFUixcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU01UUF9QQVNTLFxuICAgICAgfSxcbiAgICAgIHRsczoge1xuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIENvbmZpZ3VyYWNpb24gZGUgb3BjaW9uZXMgZGVsIGNvcnJlb1xuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuU01UUF9VU0VSLFxuICAgICAgdG86IHByb2Nlc3MuZW52LlNNVFBfVVNFUixcbiAgICAgIHN1YmplY3Q6IGBGb3JtdWxhcmlvIGRlIGNvbnRhY3RvLCBtZW5zYWplIGRlICR7bmFtZX1gLFxuICAgICAgdGV4dDogYEludGVyZXMgZW4gZWwgUGxhbjogJHtwbGFufVxcbkVuIE1vZG86ICR7bW9kZX1cXG5Ob21icmUgZGVsIGNvbnN1bHRhbnRlOiAke25hbWV9XFxuRW1haWwgZGVsIGNvbnN1bHRhbnRlOiAke2VtYWlsfVxcbk1lbnNhamUgYWRpY2lvbmFsOiAke21lc3NhZ2V9YCxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJDb3JyZW8gZW52aWFkbyBjb24gw6l4aXRvXCIgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgYWwgZW52aWFyIGVsIGNvcnJlb1wiIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTcOpdG9kbyBubyBwZXJtaXRpZG9cIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJkb3RlbnYiLCJjb25maWciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicGxhbiIsIm1vZGUiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiU01UUF9IT1NUIiwiU01UUF9QT1JUIiwiU01UUF9VU0VSIiwiU01UUF9QQVNTIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInRscyIsInJlamVjdFVuYXV0aG9yaXplZCIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJzZW5kTWFpbCIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/send-email.js\n");

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