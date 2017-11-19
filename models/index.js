const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/hotels");

const Hotel = db.define("hotel", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  starCount: {
    type: Sequelize.INTEGER
  }
});

const Room = db.define("room", {
  floor: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  noOfBeds: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  hasSeaView: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

Room.belongsTo(Hotel);
Hotel.hasMany(Room);

module.exports = {
  db: db,
  Hotel: Hotel,
  Room: Room
};
