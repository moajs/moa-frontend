$(function(){
  var editor = new Simditor({
    textarea: $('#editor'),
    //optional options
    upload: {
        fileObjName: 'file',
        url: '/upload',
        fileKey: 'file',
        params: {
            "token": window.qn_token
        }
    },
    toolbar:[
      'title',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'color',
      'ol',             // ordered list
      'ul',             // unordered list
      'blockquote',
      'code',           // code block
      'table',
      'link',
      'image',
      'hr',             // horizontal ruler
      'indent',
      'outdent',
      'alignment',
    ]
  });
})