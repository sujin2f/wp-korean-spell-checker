jQuery(document).ready(($) => {
  window.tinymce.create('tinymce.plugins.koreanSpellChecker', {
    init: (editor) => {
      editor.addCommand('open_korean_spell_checker', () => {
        const text = editor.getContent({ format: 'text' });
        console.log(text);
        $('<form />', {
          id: 'korean_spell_checker',
          target: '_blank',
          action: 'http://speller.cs.pusan.ac.kr/results',
          method: 'post',
          html: '<textarea name="text1"></textarea>',
        }).appendTo('body');

        $('form#korean_spell_checker textarea').html(text);
        $('form#korean_spell_checker').submit();
        $('form#korean_spell_checker').remove();
      });

      // Register buttons
      editor.addButton('korean_spell', {
        title: '한국어 맞춤법 검사기를 열어요.',
        cmd: 'open_korean_spell_checker',
      });
      console.log('editor.addButton');
    },
    getInfo: () => ({
      longname: 'Korean Spell Checker',
      author: 'sujin',
      authorurl: 'http://www.sujinc.com',
      infourl: '',
      version: '1.0',
    }),
  });

  // Register plugin
  window.tinymce.PluginManager.add('korean_spell', window.tinymce.plugins.koreanSpellChecker);
  console.log('Register plugin');
});
