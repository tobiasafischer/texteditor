// @ts-nocheck
import { Extension } from '@tiptap/react'

export type FontSizeOptions = {
   types: string[]
}

export const FontSize = Extension.create<FontSizeOptions>({
   name: 'fontSize',

   addOptions() {
      return {
         types: ['textStyle'],
      }
   },

   addGlobalAttributes() {
      return [
         {
            types: this.options.types,
            attributes: {
               fontSize: {
                  default: null,
                  parseHTML: (element) => element.style.fontSize.replace(/['"]+/g, ''),
                  renderHTML: (attributes) => {
                     if (!attributes.fontSize) {
                        return {}
                     }

                     return {
                        style: `font-size: ${attributes.fontSize}`,
                     }
                  },
               },
            },
         },
      ]
   },

   addCommands() {
      return {
         setFontSize:
            (fontSize) =>
            ({ chain }) => {
               const mirror = document.getElementsByClassName('ProseMirror')[0]
               mirror.style.fontSize = fontSize
               chain().setMark('textStyle', { fontSize }).run()
            },
         unsetFontSize:
            () =>
            ({ chain }) =>
               chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run(),
      }
   },
})
