import React from 'react'
import FroalaEditorComponent from 'react-froala-wysiwyg'
import 'froala-editor/js/froala_editor.min.js'
import 'froala-editor/css/froala_editor.min.css'
import 'froala-editor/js/plugins.pkgd.min.js'
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton'
import './Froala.scss'
export const sizes = [
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

export const fonts = {
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

const Froala: React.FC = () => {
   const toolbarButtons = [
      'bold',
      'italic',
      'underline',
      '|',
      'fontFamily',
      'fontSize',
      '|',
      'undo',
   ]

   const editorConfig = {
      key: 'bTYPASIBGMWC1YLMP==',
      tabSpaces: 8,
      heightMin: 10, // min height of editor
      toolbarSticky: true, //idfk
      fontFamily: fonts,
      fontFamilySelection: true,
      fontSize: sizes,
      fontSizeSelection: true,
      toolbarButtons: toolbarButtons,
      toolbarButtonsXS: toolbarButtons,
      toolbarButtonsSM: toolbarButtons,
      toolbarButtonsMD: toolbarButtons,
      keepFormatOnDelete: true,
      pluginsEnabled: ['fontFamily', 'fontSize', 'smartField'],
      toolbarBottom: true,
   }

   return (
      <>
         <FroalaEditorButton />
         <FroalaEditorComponent config={editorConfig} />
      </>
   )
}

export default Froala
