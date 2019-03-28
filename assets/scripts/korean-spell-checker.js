jQuery(document).ready(($) => {
  window.tinymce.create('tinymce.plugins.koreanSpellChecker', {
    init: (editor) => {
      editor.addCommand('open_korean_spell_checker', () => {
        const text = editor.getContent({ format: 'text' });
        $('<form/>', {
          id: '#korean_spell_checker',
          target: '_blank',
          action: 'http://speller.cs.pusan.ac.kr/results',
          method: 'POST',
          html: '<textarea name="text1"></textarea>',
        }).appendTo('body');
        $('form#KSC_form textarea').html(text);
        $('form#KSC_form').submit();
        $('form#KSC_form').remove();
      });

      // Register buttons
      editor.addButton('korean_spell', {
        title: '한국어 맞춤법 검사기를 열어요.',
        cmd: 'open_korean_spell_checker',
      });
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
});
