(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger");
    }

    private getFullName(): string {
      return `${this.name} - ${this.realName}`;
    }
  }

  class Xmen extends Avenger {}
})();
