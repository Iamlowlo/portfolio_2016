import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-header', 'Integration | Component | main header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{main-header}}`);
  var $component = this.$();
  $component.find('.main_nav').remove();
  assert.equal(
    $component.text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'I am LoWLo');

  // Template block usage, no yield shown:
  this.render(hbs`
    {{#main-header}}
      template block text
    {{/main-header}}
  `);
  $component = this.$();
  $component.find('.main_nav').remove();
  assert.equal(
    $component.text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'I am LoWLo');
});
