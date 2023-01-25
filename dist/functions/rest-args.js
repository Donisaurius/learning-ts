"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(" ")}`;
    };
    console.log("My nama is", fullName("Adonis", "Daniel", "Mendoza", "Rebolledo"));
})();
//# sourceMappingURL=rest-args.js.map