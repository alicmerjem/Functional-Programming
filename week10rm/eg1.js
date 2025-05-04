// facade
// we have some subsystem

class Lights {
    turnOn() {
        console.log("Lights on");
    }

    turnOff() {
        console.log("Lights off");
    }
}

class TV {
    turnOn() {
        console.log("TV on");
    }
    
    turnOff() {
        console.log("TV off");
    }
}

class SoundSystem {
    turnOn() {
        console.log("Sound system on");
    }

    turnOff() {
        console.log("Sound system off");
    }
}

// now we are making a facade
class HomeTheaterFacade {
    constructor() {
        this.lights = new Lights();
        this.tv = new TV();
        this.sound = new SoundSystem();
    }

    watchMovie() {
        console.log("Getting ready to watch a movie");
        this.lights.turnOff();
        this.tv.turnOn();
        this.sound.turnOn();
    }

    endMovie() {
        console.log("Shutting down");
        this.lights.turnOn();
        this.tv.turnOff();
        this.sound.turnOff();
    }
}

// example usage
const home = new HomeTheaterFacade();
home.watchMovie();
home.endMovie();