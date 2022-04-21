import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'

import { Container, Button, ButtonGroup, Header, ButtonTab, DropdownItem } from './TipTap.styled'
import Dropdown from './Dropdown'
import FontFamily from '@tiptap/extension-font-family'
import { FontSize } from './FontSize'

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

const MenuBar: React.FC = ({ editor }) => {
   const [displaySize, setDisplaySize] = useState('12')
   return (
      <ButtonTab>
         <ButtonGroup>
            <Button
               onClick={() => editor.chain().focus().toggleBold().run()}
               className={editor.isActive('bold') && 'is-active'}
            >
               Smart Fields
            </Button>
         </ButtonGroup>
         <ButtonGroup>
            <Button
               onClick={() => editor.chain().focus().toggleItalic().run()}
               className={editor.isActive('italic') && 'is-active'}
            >
               Aa
            </Button>
         </ButtonGroup>
         <ButtonGroup>
            <Dropdown title="Font Family">
               {Object.keys(fonts).map((font) => (
                  <DropdownItem
                     onClick={() => editor.chain().focus().setFontFamily(fonts[font]).run()}
                     className={
                        editor.isActive('textStyle', { fontFamily: fonts[font] }) && 'is-active'
                     }
                     style={{ fontFamily: fonts[font] }}
                  >
                     {font}
                  </DropdownItem>
               ))}
            </Dropdown>
            <Dropdown title={displaySize}>
               {sizes.map((size) => (
                  <DropdownItem
                     onClick={() => {
                        setDisplaySize(size)
                        editor.chain().focus().setFontSize(`${size}px`).run()
                     }}
                     className={
                        editor.isActive('textStyle', { fontSize: `${size}px` }) && 'is-active'
                     }
                  >
                     {size}
                  </DropdownItem>
               ))}
            </Dropdown>
         </ButtonGroup>
      </ButtonTab>
   )
}

const TipTap: React.FC = ({ onChange, content }: any) => {
   const editor = useEditor({
      extensions: [StarterKit, TextStyle, FontFamily, FontSize],
      // onUpdate({ editor }) {
      //    onChange(editor.getHTML())
      // },
      // autofocus: true,
      content,
   })

   return (
      <Container>
         <Header />
         <EditorContent editor={editor} />
         {editor && <MenuBar editor={editor} />}
      </Container>
   )
}
export default TipTap
