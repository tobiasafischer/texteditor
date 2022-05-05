import { Extension, Editor } from '@tiptap/core'
import '@tiptap/extension-text-style'

type FontSizeOptions = {
   types: string[]
}

let caretPosition = Infinity
const removeTempSpan = (p: Element) =>
   p?.childNodes.forEach((child) => {
      const htmlChild = child as HTMLSpanElement
      htmlChild.innerHTML = htmlChild.innerHTML.replace(String.fromCodePoint(0x200b), '')
   })

const initialize = (fontSize: string) => {
   const p = Array.from(document.querySelector('.ProseMirror')?.children || [])[0]
   removeTempSpan(p)
   if ((p?.childNodes[0] as HTMLElement).tagName === 'BR') {
      p.innerHTML = `<span style="font-size: ${fontSize}">&ZeroWidthSpace;</span>`
   }
}

const injectTempSpan = (fontSize: string, editor: Editor) => {
   const pList = Array.from(document.querySelector('.ProseMirror')?.children || [])
   pList.forEach((p) => {
      if (p?.childNodes.length === 1 && (p?.childNodes[0] as HTMLElement).tagName === 'BR') {
         return initialize(fontSize)
      }

      removeTempSpan(p)

      let counter = 0
      let pos = 0
      p?.childNodes.forEach((child) => {
         if (counter <= caretPosition) {
            const htmlChild = child as HTMLSpanElement
            const caretPositionTrim = caretPosition - counter - 2
            counter += htmlChild.innerHTML.length
            if (counter >= caretPosition - 2) {
               if (htmlChild.style.fontSize !== fontSize) {
                  const str = htmlChild.innerHTML
                  const str1 = str.substr(0, caretPositionTrim)
                  const str2 = str.substr(caretPositionTrim, str.length)
                  htmlChild.innerHTML = `<span style="font-size: ${htmlChild.style.fontSize}">${str1}</span><span style="font-size: ${fontSize}">&ZeroWidthSpace;</span><span style="font-size: ${htmlChild.style.fontSize}">${str2}</span>`
                  pos = caretPosition
               }
            }
         }
      })
      setTimeout(() => editor.commands.focus(pos), 0.00000001)
   })
}

let defFontSize = '12px'

declare module '@tiptap/core' {
   interface Commands<ReturnType> {
      fontSize: {
         /**
          * Set the font family
          */
         setFontSize: (fontSize: string) => ReturnType
      }
   }
}

export const FontSize = Extension.create<FontSizeOptions>({
   name: 'fontSize',
   // @ts-ignore
   onTransaction: ({ transaction }) => {
      caretPosition = transaction.selection.$anchor.pos
      console.log(caretPosition)
   },
   // @ts-ignore
   onCreate: ({ editor }) => editor.chain().focus().initialize('12px').run(),
   // @ts-ignore
   onUpdate: ({ editor }) => {
      if (editor.getText().length === 0) editor.chain().focus().initialize(defFontSize).run()
   },
   addGlobalAttributes: () => [
      {
         types: ['textStyle'],
         attributes: {
            fontSize: {
               default: null,
               parseHTML: (element) => element.style.fontSize,
               renderHTML: (attributes) => {
                  if (!attributes.fontSize) return {}
                  return {
                     style: `font-size: ${attributes.fontSize}`,
                  }
               },
            },
         },
      },
   ],
   addCommands: () => ({
      setFontSize:
         (fontSize: string) =>
         ({ chain, editor }: any) => {
            defFontSize = fontSize
            injectTempSpan(fontSize, editor)
            return chain().setMark('textStyle', { fontSize }).run()
         },
      initialize:
         (fontSize: string) =>
         ({ chain }: any) => {
            initialize(fontSize)
            return chain().setMark('textStyle', { fontSize }).run()
         },
   }),
})
