function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.dir = function(x, y) {
    if (x + this.xspeed !== 0) {
      this.xspeed = x;
    }

    if (y + this.yspeed !== 0) {
      this.yspeed = y;
    }
  };

  this.eat = function(food) {
    var pos_x = food.location.x,
        pos_y = food.location.y,
        d = dist(this.x, this.y, pos_x, pos_y);
    
    if (d < 1) {
      this.total += 1;
      return true;
    } else {
      return false;
    }
  };

  this.die = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  };

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }  
    }
    
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    if (this.x === width) {
      this.x = 0;
    }

    if (this.y === height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = width - scl;
    }

    if (this.y < 0) {
      this.y = height - scl;
    }
  };

  this.show = function() {
    fill(255);
    rect(this.x, this.y, scl, scl);
    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);  
    }
  };
}
