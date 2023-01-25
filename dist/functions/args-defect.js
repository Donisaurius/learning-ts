"use strict";
(() => {
    const fullName = (firstName, lastName, age = 23) => {
        return `${firstName} ${lastName} - ${age > 18 ? "Older" : "Junior"}`;
    };
    console.log(fullName("Adonis", "Mendoza"));
})();
//# sourceMappingURL=args-defect.js.map