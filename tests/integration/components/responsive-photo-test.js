import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import config from './../../../config/environment';

moduleForComponent('responsive-photo', 'Integration | Component | responsive photo', {
  integration: true
});

test('Responsive-photo renders as desired', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('urlList', {
    thumbnail: 'thumbnail',
    screen_sm: 'screen_sm',
    screen_md: 'screen_md',
    screen_lg: 'screen_lg',
    screen_xlg: 'screen_xlg'
  });

  const component = this.render(hbs`
    {{#responsive-photo title=title urlList=urlList}}
      template block text
    {{/responsive-photo}}
  `);

  assert.equal(this.$().text().trim(), '', "No text is rendered if there is no title");

  this.set('title', 'test');
  this.set('width', 300);
  assert.equal(this.$().text().trim(), 'test', "But the tittle appears if is passed.");
  assert.equal(this.$('.responsive_photo').length, 1, "There is just one responsive_photo element");
  assert.ok(this.$(window).innerWidth() >= config.mediaQueries[this.$('img').attr('src')].value, "Is on the right image acording to the window width");
});
