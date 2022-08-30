function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);  
    }
    return this.symbols[this.position];
  }
};

var slotMachine = {
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel)
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    for (let i = -1; i <= 1; i++) {
      const row = [];
      this.reels.forEach(function displayReel(reel) {
        tmpReel = Object.create(reel);
        tmpReel.position = (reel.symbols.length + reel.position + i) % reel.symbols.length
        row.push(tmpReel.display());
      });
      console.log(row.join(' | '));
    }
  }
};

slotMachine.spin();
slotMachine.display();
// < | @ | *
// @ | X | <
// X | Y | @

console.log('\n');

slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *