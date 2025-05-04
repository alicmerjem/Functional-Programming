// old interface
class OldPrinter {
    printOldWay(text) {
        console.log(`Printing the old way: ${text}`);
    }
}

// new system expects this 
class newPrinter {
    print(text) {
        console.log(`Printing the new way: ${text}`);
    }
}

// adapter
class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    print(text) {
        // adapt the old method to the new method
        this.oldPrinter.printOldWay(text);
    }
}

// example usage
const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

adapter.print("Hello from adapter");