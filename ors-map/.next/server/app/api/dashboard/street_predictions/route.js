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
exports.id = "app/api/dashboard/street_predictions/route";
exports.ids = ["app/api/dashboard/street_predictions/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&page=%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute.js&appDir=D%3A%5Ccomputervesionlearning%5Cors-map%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccomputervesionlearning%5Cors-map&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&page=%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute.js&appDir=D%3A%5Ccomputervesionlearning%5Cors-map%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccomputervesionlearning%5Cors-map&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_computervesionlearning_ors_map_src_app_api_dashboard_street_predictions_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/street_predictions/route.js */ \"(rsc)/./src/app/api/dashboard/street_predictions/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/street_predictions/route\",\n        pathname: \"/api/dashboard/street_predictions\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/street_predictions/route\"\n    },\n    resolvedPagePath: \"D:\\\\computervesionlearning\\\\ors-map\\\\src\\\\app\\\\api\\\\dashboard\\\\street_predictions\\\\route.js\",\n    nextConfigOutput,\n    userland: D_computervesionlearning_ors_map_src_app_api_dashboard_street_predictions_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZzdHJlZXRfcHJlZGljdGlvbnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmRhc2hib2FyZCUyRnN0cmVldF9wcmVkaWN0aW9ucyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmRhc2hib2FyZCUyRnN0cmVldF9wcmVkaWN0aW9ucyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDY29tcHV0ZXJ2ZXNpb25sZWFybmluZyU1Q29ycy1tYXAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNjb21wdXRlcnZlc2lvbmxlYXJuaW5nJTVDb3JzLW1hcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMkM7QUFDeEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXGNvbXB1dGVydmVzaW9ubGVhcm5pbmdcXFxcb3JzLW1hcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcc3RyZWV0X3ByZWRpY3Rpb25zXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9kYXNoYm9hcmQvc3RyZWV0X3ByZWRpY3Rpb25zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZGFzaGJvYXJkL3N0cmVldF9wcmVkaWN0aW9uc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL3N0cmVldF9wcmVkaWN0aW9ucy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXGNvbXB1dGVydmVzaW9ubGVhcm5pbmdcXFxcb3JzLW1hcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcc3RyZWV0X3ByZWRpY3Rpb25zXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&page=%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute.js&appDir=D%3A%5Ccomputervesionlearning%5Cors-map%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccomputervesionlearning%5Cors-map&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/dashboard/street_predictions/route.js":
/*!***********************************************************!*\
  !*** ./src/app/api/dashboard/street_predictions/route.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.js\");\n\nasync function GET() {\n    try {\n        const conn = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.getDBConnection)();\n        const [rows] = await conn.execute(`\n      SELECT sp.RoadID, sp.FinalPrediction, sp.ProcessedAt,\n             rd.Latitude, rd.Longitude\n        FROM street_predictions sp\n        JOIN road_data rd ON sp.RoadID = rd.RoadID\n        ORDER BY sp.ProcessedAt DESC\n    `);\n        await conn.end();\n        return new Response(JSON.stringify(rows), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error('GET predictions error:', error);\n        return new Response(JSON.stringify({\n            error: 'Server error'\n        }), {\n            status: 500\n        });\n    }\n}\nasync function PUT(req) {\n    try {\n        const { RoadID, FinalPrediction } = await req.json();\n        const id = parseInt(RoadID);\n        const prediction = parseFloat(FinalPrediction);\n        if (!id || isNaN(prediction)) {\n            return new Response(JSON.stringify({\n                error: 'Invalid input'\n            }), {\n                status: 400\n            });\n        }\n        const conn = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.getDBConnection)();\n        await conn.execute('UPDATE street_predictions SET FinalPrediction = ? WHERE RoadID = ?', [\n            prediction,\n            id\n        ]);\n        await conn.end();\n        return new Response(JSON.stringify({\n            success: true\n        }));\n    } catch (error) {\n        console.error('PUT street_predictions error:', error);\n        return new Response(JSON.stringify({\n            error: 'Server error'\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvc3RyZWV0X3ByZWRpY3Rpb25zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUVwQyxlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRix3REFBZUE7UUFDbEMsTUFBTSxDQUFDRyxLQUFLLEdBQUcsTUFBTUQsS0FBS0UsT0FBTyxDQUFDLENBQUM7Ozs7OztJQU1uQyxDQUFDO1FBQ0QsTUFBTUYsS0FBS0csR0FBRztRQUVkLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDTCxPQUFPO1lBQ3hDTSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU8sSUFBSUwsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVHLE9BQU87UUFBZSxJQUFJO1lBQUVGLFFBQVE7UUFBSTtJQUMvRTtBQUNGO0FBRU8sZUFBZUksSUFBSUMsR0FBRztJQUMzQixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFDbEQsTUFBTUMsS0FBS0MsU0FBU0o7UUFDcEIsTUFBTUssYUFBYUMsV0FBV0w7UUFFOUIsSUFBSSxDQUFDRSxNQUFNSSxNQUFNRixhQUFhO1lBQzVCLE9BQU8sSUFBSWQsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFRyxPQUFPO1lBQWdCLElBQUk7Z0JBQUVGLFFBQVE7WUFBSTtRQUNoRjtRQUVBLE1BQU1QLE9BQU8sTUFBTUYsd0RBQWVBO1FBQ2xDLE1BQU1FLEtBQUtFLE9BQU8sQ0FDaEIsc0VBQ0E7WUFBQ2dCO1lBQVlGO1NBQUc7UUFFbEIsTUFBTWhCLEtBQUtHLEdBQUc7UUFFZCxPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFZSxTQUFTO1FBQUs7SUFDckQsRUFBRSxPQUFPWixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO1FBQy9DLE9BQU8sSUFBSUwsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVHLE9BQU87UUFBZSxJQUFJO1lBQUVGLFFBQVE7UUFBSTtJQUMvRTtBQUNGIiwic291cmNlcyI6WyJEOlxcY29tcHV0ZXJ2ZXNpb25sZWFybmluZ1xcb3JzLW1hcFxcc3JjXFxhcHBcXGFwaVxcZGFzaGJvYXJkXFxzdHJlZXRfcHJlZGljdGlvbnNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERCQ29ubmVjdGlvbiB9IGZyb20gJ0AvbGliL2RiJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBnZXREQkNvbm5lY3Rpb24oKTtcclxuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm4uZXhlY3V0ZShgXHJcbiAgICAgIFNFTEVDVCBzcC5Sb2FkSUQsIHNwLkZpbmFsUHJlZGljdGlvbiwgc3AuUHJvY2Vzc2VkQXQsXHJcbiAgICAgICAgICAgICByZC5MYXRpdHVkZSwgcmQuTG9uZ2l0dWRlXHJcbiAgICAgICAgRlJPTSBzdHJlZXRfcHJlZGljdGlvbnMgc3BcclxuICAgICAgICBKT0lOIHJvYWRfZGF0YSByZCBPTiBzcC5Sb2FkSUQgPSByZC5Sb2FkSURcclxuICAgICAgICBPUkRFUiBCWSBzcC5Qcm9jZXNzZWRBdCBERVNDXHJcbiAgICBgKTtcclxuICAgIGF3YWl0IGNvbm4uZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShyb3dzKSwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignR0VUIHByZWRpY3Rpb25zIGVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ1NlcnZlciBlcnJvcicgfSksIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IFJvYWRJRCwgRmluYWxQcmVkaWN0aW9uIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3QgaWQgPSBwYXJzZUludChSb2FkSUQpO1xyXG4gICAgY29uc3QgcHJlZGljdGlvbiA9IHBhcnNlRmxvYXQoRmluYWxQcmVkaWN0aW9uKTtcclxuXHJcbiAgICBpZiAoIWlkIHx8IGlzTmFOKHByZWRpY3Rpb24pKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0ludmFsaWQgaW5wdXQnIH0pLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBnZXREQkNvbm5lY3Rpb24oKTtcclxuICAgIGF3YWl0IGNvbm4uZXhlY3V0ZShcclxuICAgICAgJ1VQREFURSBzdHJlZXRfcHJlZGljdGlvbnMgU0VUIEZpbmFsUHJlZGljdGlvbiA9ID8gV0hFUkUgUm9hZElEID0gPycsXHJcbiAgICAgIFtwcmVkaWN0aW9uLCBpZF1cclxuICAgICk7XHJcbiAgICBhd2FpdCBjb25uLmVuZCgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiB0cnVlIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignUFVUIHN0cmVldF9wcmVkaWN0aW9ucyBlcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdTZXJ2ZXIgZXJyb3InIH0pLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0REJDb25uZWN0aW9uIiwiR0VUIiwiY29ubiIsInJvd3MiLCJleGVjdXRlIiwiZW5kIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiaGVhZGVycyIsImVycm9yIiwiY29uc29sZSIsIlBVVCIsInJlcSIsIlJvYWRJRCIsIkZpbmFsUHJlZGljdGlvbiIsImpzb24iLCJpZCIsInBhcnNlSW50IiwicHJlZGljdGlvbiIsInBhcnNlRmxvYXQiLCJpc05hTiIsInN1Y2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/street_predictions/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.js":
/*!***********************!*\
  !*** ./src/lib/db.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dbConfig: () => (/* binding */ dbConfig),\n/* harmony export */   getDBConnection: () => (/* binding */ getDBConnection)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\nconst dbConfig = {\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASS,\n    database: process.env.DB_NAME\n};\nconst getDBConnection = ()=>mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection(dbConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUU1QixNQUFNQyxXQUFXO0lBQ3RCQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87SUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztJQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxPQUFPO0lBQzdCQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLE9BQU87QUFDL0IsRUFBRTtBQUVLLE1BQU1DLGtCQUFrQixJQUFNWiw0REFBc0IsQ0FBQ0MsVUFBVSIsInNvdXJjZXMiOlsiRDpcXGNvbXB1dGVydmVzaW9ubGVhcm5pbmdcXG9ycy1tYXBcXHNyY1xcbGliXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29uZmlnID0ge1xyXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREQkNvbm5lY3Rpb24gPSAoKSA9PiBteXNxbC5jcmVhdGVDb25uZWN0aW9uKGRiQ29uZmlnKTtcclxuIl0sIm5hbWVzIjpbIm15c3FsIiwiZGJDb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImdldERCQ29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/lru-cache","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&page=%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fstreet_predictions%2Froute.js&appDir=D%3A%5Ccomputervesionlearning%5Cors-map%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccomputervesionlearning%5Cors-map&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();