/* Prebuilt editor script: no npm needed */
(function (blocks, i18n, element) {
  const { registerBlockType } = blocks;
  const { __ } = i18n;
  const el = element.createElement;

  registerBlockType('myplugin/hello-world', {
    edit: function Edit() {
      return el('p', null, __('Hello World (Editor)', 'hello-world-block'));
    },
    save: function Save() {
      return el('p', null, __('Hello World (Frontend)', 'hello-world-block'));
    },
  });
})(window.wp.blocks, window.wp.i18n, window.wp.element);
