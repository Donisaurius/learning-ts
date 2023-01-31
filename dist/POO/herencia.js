"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger");
        }
        getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
    }
})();
//# sourceMappingURL=herencia.js.map