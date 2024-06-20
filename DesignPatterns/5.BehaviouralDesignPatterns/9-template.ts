/*
  Opposite of strategy pattern

*/

abstract class CakeRecipe {
    public bakeCake(): void {
        this.preHeatOven();
        this.mixIngrediants();
        this.bake();
        this.coolingDown();
        this.decorate();
    }
    protected preHeatOven(): void {
        console.log("Preheating oven to 120 C");
    }
    protected bake(): void {
        console.log("Baking cake...");
    }
    protected coolingDown(): void {
        console.log("Cooling down the cake...");
    }
    protected decorate(): void {
        console.log("Decorating cake....");
    }
    protected abstract mixIngrediants(): void;
}

class ChoclateCake extends CakeRecipe {
    protected mixIngrediants(): void {
        console.log("Mixing: choco,sugar,butter,flour,eggs");
    }
    protected decorate(): void {
        console.log("Decorating cake with chocolate");
    }
}

class VanillaCake extends CakeRecipe {
    protected mixIngrediants(): void {
        console.log("Mixing: Vanilla extract,sugar,butter,flour,eggs");
    }
}

//client

function bakeCake(cake: CakeRecipe) {
    cake.bakeCake();
}

console.log("Baking a choco cake:");
bakeCake(new ChoclateCake());

// when to use

// real world use case 

abstract class DataParser {
    public parseData(): void {
        this.loadData();
        const data = "Sample Data";
        const parseData = this.parse(data);
        this.validate(parseData);
        this.useData(parseData);
    }
    protected loadData(): void {
        console.log("Loading Data.....");
    }
    protected validate(data: any): void {
        console.log("Validating data....");
    }
    protected useData(data: any): void {
        console.log("Using data....");
    }
    protected abstract parse(data: any): void;
}

class JSONParser extends DataParser {
    protected parse(data: any): void {
        console.log("Parsing Data as JSON");
    }

}
class XMLParser extends DataParser {
    protected parse(data: any): void {
        console.log("Parsing Data as XML");
    }

}

function dataParser(dataParser: DataParser) {
    dataParser.parseData();
}

console.log("Parsing XML data");
dataParser(new XMLParser());