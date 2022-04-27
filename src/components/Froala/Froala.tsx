import React from 'react'
import FroalaEditor from 'froala-editor'
import _ from 'lodash'
import FroalaEditorComponent from 'react-froala-wysiwyg'
import 'froala-editor/js/froala_editor.min.js'
import 'froala-editor/css/froala_editor.min.css'
import 'froala-editor/js/plugins.pkgd.min.js'
import 'froala-editor/js/plugins/colors.min.js'
import 'froala-editor/css/plugins/colors.min.css'
import './Froala.scss'
import { editorConfig, fields } from './config'
import { Container, Header } from './Froala.styled'

type Props = {
   values: Record<string, unknown>
}

const Froala: React.FC<Props> = ({ values }) => {
   const buildMenu = (menuFields: Record<string, Object>) => {
      Object.keys(menuFields).forEach((field: string) => {
         FroalaEditor.DefineIcon(field, { NAME: field, template: 'text' })
         FroalaEditor.RegisterCommand(field, {
            title: 'Advanced options',
            type: 'dropdown',
            focus: false,
            undo: false,
            refreshAfterCallback: true,
            options: _.invert(menuFields[field]),
            callback: function (this, cmd: any, val: any) {
               this.html.insert(this.clean.html(_.get(values, val)))
               this.undo.saveStep()
            },
         })
      })
   }

   buildMenu(fields)

   return (
      <Container>
         <Header />
         <FroalaEditorComponent config={editorConfig} />
      </Container>
   )
}

export default Froala
