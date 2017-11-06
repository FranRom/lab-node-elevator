class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";

  }

  start() {
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  };

  stop() {
    clearInterval(this.interval);
  }


  update() {

     this.log();
   };

  _passengersEnter() { }

  _passengersLeave() { }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
     this.direction = "up";
     this.floor++;
   };
  }

  floorDown() {
    if (this.floor > 0) {
     this.direction = "down";
     this.floor--;
   };
  }

  call(person) {
    this.waitingList.push(passenger);
    this.passenger.push(passenger);

   }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  };

};

module.exports = Elevator;
