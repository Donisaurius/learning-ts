"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Avengers", "Scott Lang");
    console.log("Antman", antman.bio());
})();
//# sourceMappingURL=clases.js.map