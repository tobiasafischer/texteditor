import React from 'react'
import FroalaEditor from 'froala-editor'
import _ from 'lodash'
import FroalaEditorComponent from 'react-froala-wysiwyg'
import 'froala-editor/css/froala_editor.min.css'
import 'froala-editor/js/plugins.pkgd.min'
import 'froala-editor/js/plugins/colors.min'
import 'froala-editor/css/plugins/colors.min.css'
import './styles/Froala.scss'
import { editorConfig, fields } from './config'
import { Container, Header } from './styles'

type Props = {
   values: Record<string, unknown>
}

const Froala: React.FC<Props> = ({ values }) => {
   Object.keys(fields).forEach((field: string) => {
      FroalaEditor.DefineIcon(field, { NAME: field, template: 'text' })
      FroalaEditor.RegisterCommand(field, {
         title: `${field} variables`,
         type: 'dropdown',
         focus: false,
         undo: true,
         options: _.invert((fields as any)[field]),
         callback(this, cmd: any, val: any) {
            // eslint-disable-next-line react/no-this-in-sfc
            this.html.insert(this.clean.html(_.get(values, val)))
            // eslint-disable-next-line react/no-this-in-sfc
            this.undo.saveStep()
         },
      })
   })

   return (
      <Container>
         <Header />
         <FroalaEditorComponent config={editorConfig} />
      </Container>
   )
}

export default Froala
