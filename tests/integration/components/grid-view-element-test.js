import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('grid-view-element', 'Integration | Component | grid view element', {
  integration: true
});

test('grid-view_element renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('feedItem', {
    link: {
      link: 'section-link',
      param: '1'
    },
    background: 'http://www.example.com',
    title: 'test'
  });

  this.render(hbs`
    {{#grid-view-element feedItem 1 test}}
      template block text
    {{/grid-view-element}}
  `);
  assert.equal(this.$().text().trim(), 'test', "It doesn't have yield, only renders the text given");
  assert.equal(this.$().children().length, 1, "and just one element");
  assert.equal(this.$('.grid_view-element').length, 1, "which is a grid_view element");
  assert.equal(this.$('.grid_view-element-link').length, 1, "and contains one grid_view-element-link");
  assert.equal(this.$('.grid_view-element-title').length, 1, "having inside just one grid_view-element-title.");
});

test('grid-view_element order is working', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('feedItem', {
    link: {
      link: 'section-link',
      param: '1'
    },
    background: 'http://www.example.com',
    title: 'test'
  });
  this.set('breakPoint', {
    pullBackOneElements: [3],
    pullBackTwoElements: [4]
  });

  this.render(hbs`{{grid-view-element feedItem 1 test}}`);
  assert.equal(this.$('li').attr('style'), "order: 1", "Sets the order given.");

  this.render(hbs`{{grid-view-element feedItem 2 test}}`);
  assert.equal(this.$('li').attr('style'), "order: 2", "Adds one position to the order given.");

  this.render(hbs`{{grid-view-element feedItem 3 test}}`);
  assert.equal(this.$('li').attr('style'), "order: 3", "Adds two positions to the order given.");

});
