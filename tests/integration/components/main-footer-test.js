import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-footer', 'Integration | Component | main footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{main-footer}}`);

  assert.equal(
    this.$().text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'I am Lowlo Email Me');

  // Template block usage, no yield shown:
  this.render(hbs`
    {{#main-footer}}template block text{{/main-footer}}
  `);
  assert.equal(
    this.$().text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'I am Lowlo Email Me');
});
