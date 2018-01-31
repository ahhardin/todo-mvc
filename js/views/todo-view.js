// The DOM element for a todo item...
TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model,'destroy', this.remove)
    this.listenTo(this.model,'change:completed', this.markComplete)
  },

  //execute completeTask and removeTask when the checkbox or x are clicked
  events: {
    'click .toggle': 'completeTask',
    'click .destroy': 'removeTask',
  },

  completeTask: function () {
    if (this.model.get('completed')) {
      this.model.set('completed', false)
    }
    else this.model.set('completed', true)
    console.log(todosCollection.length)

  },

  removeTask: function () {
    this.model.destroy();
  },

  markComplete: function() {
    if (this.model.get('completed')) {
      this.$el.addClass('completed')
    }
    else this.$el.removeClass('completed')
  },

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
