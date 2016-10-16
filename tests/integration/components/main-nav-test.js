import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-nav', 'Integration | Component | main nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{main-nav}}`);

  assert.equal(
    this.$().text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'Index FrontEnd Dev Graphic Design Photography');

  // Template block usage:
  this.render(hbs`
    {{#main-nav}}
      template block text
    {{/main-nav}}
  `);

  assert.equal(
    this.$().text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'Index FrontEnd Dev Graphic Design Photography');
});
