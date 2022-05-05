import { fields } from './SmartFields'

const sizes = [
   '8',
   '9',
   '10',
   '11',
   '12',
   '14',
   '16',
   '18',
   '20',
   '24',
   '30',
   '36',
   '48',
   '60',
   '72',
   '96',
]

const fonts = {
   Arial: 'Arial',
   Verdana: 'Verdana',
   Helvetica: 'Helvetica',
   Tahoma: 'Tahoma',
   'Trebuchet MS': 'Trebuchet MS ',
   'Times New Roman': 'Times New Roman',
   Georgia: 'Georgia',
   Garamond: 'Garamond',
   'Courier New': 'Courier New',
   'Brush Script MT': 'Brush Script MT',
}

const toolbarButtons = {
   moreRich: {
      buttons: Object.keys(fields),
      buttonsVisible: 0,
   },
   moreText: {
      buttons: [
         'bold',
         'italic',
         'underline',
         'strikeThrough',
         'subscript',
         'superscript',
         'textColor',
         'backgroundColor',
         'inlineClass',
         'inlineStyle',
         'clearFormatting',
      ],
      buttonsVisible: 0,
   },
   moreMisc: {
      buttons: ['fontFamily', 'fontSize'],
   },
   moreParagraph: {
      buttons: ['undo'],
   },
}

export const editorConfig = {
   key: 'bTYPASIBGMWC1YLMP==',
   tabSpaces: 8,
   heightMin: 10, // min height of editor
   toolbarSticky: true, // idfk
   fontFamily: fonts,
   charCounterCount: true,
   events: {
      initialized() {
         const moreRich = document.getElementById('moreRich-1')
         moreRich?.addEventListener('mouseenter', () => {
            const tooltip = document.getElementsByClassName('fr-tooltip')[0]
            tooltip.id = 'smart-tooltip'
            tooltip.innerHTML = 'Insert Smartfields'
         })
         moreRich?.addEventListener('mouseleave', () => {
            const tooltip = document.getElementsByClassName('fr-tooltip')[0]
            tooltip.id = ''
         })
         moreRich!.innerHTML = 'Smart Fields'
      },
   },
   fontFamilySelection: true,
   fontSize: sizes,
   fontSizeSelection: true,
   keepFormatOnDelete: true,
   pluginsEnabled: [
      'fontFamily',
      'fontSize',
      'smartField',
      'align',
      'colors',
      'lists',
      'paragraphFormat',
      'quote',
      'link',
      'image',
      'table',
      'formattingOptions',
      'customFormattingOptions',
      'codeView',
      'moreOptions',
   ],
   toolbarButtons,
   toolbarButtonsXS: toolbarButtons,
   toolbarButtonsSM: toolbarButtons,
   toolbarButtonsMD: toolbarButtons,
   toolbarBottom: true,
}
