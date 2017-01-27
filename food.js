function Food() {
  this.location = {
    'x': null,
    'y': null
  };

  this.getLocation = function() {
    var pos_x, pos_y;

    do {
      pickLocation();
    } while (!validLocation());

    this.location.x = pos_x;
    this.location.y = pos_y;

    function pickLocation() {
      pos_x = floor(random(floor(width/scl))) * scl;
      pos_y = floor(random(floor(height/scl))) * scl;
    }

    function validLocation() {
      if (pos_x === snake.x && pos_y === snake.y) {
        return false;
      }

      for (var i = 0; i < snake.tail.length; i++) {
        if (pos_x === snake.tail[i].x && pos_y === snake.tail[i].y) {
          return false;
        }
      }

      return true;
    }
  };
}
