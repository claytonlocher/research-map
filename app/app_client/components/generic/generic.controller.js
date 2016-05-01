
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('genericCtrl', genericCtrl);

  genericCtrl.$inject = ['appInfo'];

  function genericCtrl(appInfo) {

    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = 'Generic Page';

    vm.main = {
      content: 'Slow-carb pour-over post-ironic butcher austin, health goth four loko meditation mlkshk. Bicycle rights distillery bespoke, tacos shabby chic roof party pabst chicharrones echo park mlkshk chartreuse pork belly hella heirloom. Fashion axe pug meditation wolf master cleanse, tumblr salvia intelligentsia jean shorts gluten-free yuccie hoodie tofu wayfarers. DIY austin tofu, tattooed YOLO fixie iPhone XOXO +1 literally bushwick.\n\nHeirloom health goth kombucha, fanny pack pop-up irony retro truffaut synth PBR&B. +1 hoodie XOXO helvetica, godard gentrify narwhal food truck intelligentsia heirloom four dollar toast everyday carry kombucha 3 wolf moon ennui. Mustache PBR&B keytar single-origin coffee cold-pressed ethical, chia mumblecore next level bitters VHS ugh.\n\nCornhole four loko quinoa lo-fi chartreuse, XOXO distillery put a bird on it literally fashion axe fingerstache microdosing jean shorts locavore bushwick. Pug ennui everyday carry, sartorial messenger bag VHS scenester. Stumptown pug literally chillwave ugh, cliche street art swag drinking vinegar kinfolk normcore kickstarter crucifix.\n\nFingerstache distillery irony squid, vegan master cleanse seitan direct trade. Hella ugh listicle food truck four dollar toast schlitz. Chillwave vinyl pabst banh mi, cray PBR&B man braid retro. Crucifix letterpress man braid squid, church-key organic brunch plaid quinoa.'
    };

  }


})();

