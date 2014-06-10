define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Common = require("modules/Common");
  var Todos = require("modules/collection/TodosCollection");
  
  var TodoRouter = Backbone.Router.extend({
      routes: {
          '*filter': 'setFilter'
      },

      setFilter: function (param) {
          // Set the current filter to be used
          Common.TodoFilter = param || '';

          // Trigger a collection filter event, causing hiding/unhiding
          // of the Todo view items
          Todos.trigger('filter');
      }
  });
  
  // Defining the application router.
  module.exports = TodoRouter;
});
