import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-nav', 'Integration | Component | main nav', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`
    {{#main-nav}}
      template block text
    {{/main-nav}}
  `);

  assert.equal(
    this.$().text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'IndexFrontEnd DevGraphic DesignPhotography', "It just renders the main links even used as a block");

});
