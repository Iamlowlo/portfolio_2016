import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-gallery', 'Integration | Component | photo gallery', {
  integration: true
});

test('photo-gallery component renders properly', function(assert) {

  this.set('photo_id', 0);
  this.set('model', [{
      id: 0,
      urlList: {
        thumbnail: 'http://fakeimg.pl/100x100/4589C1/333',
        screen_sm: 'http://fakeimg.pl/320x180/4589C1/333',
        screen_md: 'http://fakeimg.pl/640x360/4589C1/333',
        screen_lg: 'http://fakeimg.pl/1280x720/4589C1/333',
        screen_xlg: 'http://fakeimg.pl/1920x1080/4589C1/333'
      },
      title: 'test_0'
    },{
      id: 1,
      urlList: {
        thumbnail: 'http://fakeimg.pl/100x100/0B7F6C/333',
        screen_sm: 'http://fakeimg.pl/320x180/0B7F6C/333',
        screen_md: 'http://fakeimg.pl/640x360/0B7F6C/333',
        screen_lg: 'http://fakeimg.pl/1280x720/0B7F6C/333',
        screen_xlg: 'http://fakeimg.pl/1920x1080/0B7F6C/333'
      },
      title: 'test_1'
    }]);

  this.render(hbs`
    {{#photo-gallery photoList=model selectedId=photo_id}}
      template block text
    {{/photo-gallery}}
  `);

  assert.equal(this.$().text()
      .replace(/[\r\n]+/g,' ')
      .replace(/\s{2,}/g,' ')
      .trim(), 'test_0 open test_0 test_1', "It renders properly and doesn't include any yield");

});
