define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunction = exports.printObject = void 0;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
});
