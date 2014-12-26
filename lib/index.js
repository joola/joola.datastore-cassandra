module.exports = Cassandra;

function Cassandra(options, helpers, callback) {
  if (!(this instanceof Cassandra)) return new Cassandra(options);

  callback = callback || function () {
  };

  var self = this;

  this.name = 'Cassandra';
  this.options = options;
  this.logger = helpers.logger;
  this.common = helpers.common;
  this.memory = helpers.memory;

  return this.init(options, function (err) {
    if (err)
      return callback(err);

    return callback(null, self);
  });
}

Cassandra.prototype.init = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;

  self.logger.info('Initializing connection to cassandra [' + self.name + '].');

  return self.openConnection(options, callback);
};

Cassandra.prototype.destroy = function (callback) {
  callback = callback || function () {
  };

  var self = this;

  self.logger.info('Destroying connection to cassandra [' + self.name + '].');

  return callback(null);
};

Cassandra.prototype.find = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

Cassandra.prototype.delete = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

Cassandra.prototype.update = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

Cassandra.prototype.insert = function (collection, documents, options, callback) {
  callback = callback || function () {
  };

  var self = this;
  var result = [];

  return callback(null, result);
};

Cassandra.prototype.buildQueryPlan = function (query, callback) {
  callback = callback || function () {
  };

  var self = this;
  var plan = {};

  return callback(null, plan);
};

Cassandra.prototype.query = function (context, query, callback) {
  callback = callback || function () {
  };

  var self = this;
  var results = [];

  return callback(null, results);
};

Cassandra.prototype.openConnection = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null, null);
};

Cassandra.prototype.closeConnection = function (connection, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

Cassandra.prototype.checkConnection = function (connection, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null, connection);
};

Cassandra.prototype.stats = function (collectionName, callback) {
  callback = callback || function () {
  };

  var self = this;
  var stats = {};

  return callback(null, stats);
};

Cassandra.prototype.drop = function (collectionName, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

Cassandra.prototype.purge = function (callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};