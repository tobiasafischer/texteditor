// @ts-nocheck

import React from 'react'
import FroalaEditor from 'froala-editor'
import _ from 'lodash'
import FroalaEditorComponent from 'react-froala-wysiwyg'
import 'froala-editor/js/froala_editor.min.js'
import 'froala-editor/css/froala_editor.min.css'
import 'froala-editor/js/plugins.pkgd.min.js'
import 'froala-editor/js/plugins/colors.min.js'
import 'froala-editor/css/plugins/colors.min.css'
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton'
import './Froala.scss'
import { editorConfig, clientSmartFields } from './config'
import { Container, Header } from './Froala.styled'

export const values = {
   name: 'name',
   firstName: 'fn',
   lastName: 'ln',
   phone: 'phone',
   email: 'email',
   altContact: {
      firstName: 'altfn',
      lastName: 'altln',
      email: '<table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: middle;"><h3 class="sc-fBuWsC eeihxG" color="#000000" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);"><span>Tobias</span><span>&nbsp;</span><span>Fischer</span></h3><p class="sc-fMiknA bxZCMx" color="#000000" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Software Developer</span></p><p class="sc-dVhcbM fghLuF" color="#000000" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Dubsado</span></p></td><td width="30"><div style="width: 30px;"><br></div></td><td class="sc-jhAzac hmXDXQ" color="#F2547D" style="width: 1px; border-bottom: none; border-left: 1px solid rgb(242, 84, 125);" width="1"><br></td><td width="30"><div style="width: 30px;"><br></div></td><td style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr height="25" style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" color="#F2547D" style="display: block; background-color: rgb(242, 84, 125);" width="11"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px; color: rgb(0, 0, 0);"><a class="sc-gipzik iyhjGb" color="#000000" href="tel:(503)%20413-9265" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>(503) 413-9265</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" color="#F2547D" style="display: block; background-color: rgb(242, 84, 125);" width="11"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a class="sc-gipzik iyhjGb" color="#000000" href="mailto:Tobias.Alan.Fischer@gmail.com" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>Tobias.Alan.Fischer@gmail.com</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" color="#F2547D" style="display: block; background-color: rgb(242, 84, 125);" width="11"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a class="sc-gipzik iyhjGb" color="#000000" href="//tobiasafischer.com" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>tobiasafischer.com</span></a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td height="30"><br></td></tr><tr><td class="sc-jhAzac hmXDXQ" color="#F2547D" height="1" style="width: 100%; border-bottom: 1px solid rgb(242, 84, 125); border-left: none; display: block;"><br></td></tr><tr><td height="30"><br></td></tr></tbody></table></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td style="vertical-align: top;"><br></td><td style="text-align: right; vertical-align: top;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; display: inline-block;"><tbody><tr style="text-align: right;"><td><a class="sc-hzDkRC kpsoyz" color="#6A78D1" href="https://www.linkedin.com/in/tobiasafischer/" style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a></td><td width="5"><div><br></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>',
      phone: '<script>alert(1)</script>',
   },
   company: {
      name: 'company name',
   },
   address: 'addy',
   shippingAddress: 'ship',
}

const Froala: React.FC = () => {
   const buildMenu = (menu: { [id: string]: string }) => {
      Object.keys(menu).forEach((item) => {
         FroalaEditor.DefineIcon(item, { NAME: item, template: 'text' })
         FroalaEditor.RegisterCommand(item, {
            title: item,
            icon: item,
            focus: false,
            undo: false,
            refreshAfterCallback: true,
            callback: function (this: any) {
               this.html.insert(this.clean.html(_.get(values, menu[item])))
               this.smartField.hidePopup()
               this.undo.saveStep()
            },
         })
      })
   }

   FroalaEditor.PLUGINS.smartField = (editor) => {
      const initialization = () => {
         const smart_field_buttons =
            '<div class="fr-buttons wrap-toolbar-menu">' +
            editor.button.buildList(editor.opts.smartFieldButtons) +
            '</div>'

         const template = {
            buttons: smart_field_buttons,
         }

         return editor.popups.create('smartField.popup', template)
      }

      const showPopup = () => {
         const editorAny = editor as any
         const tb = editorAny.$tb

         editor.popups.setContainer('smartField.popup', tb)

         var $btn = tb.find('.fr-command[data-cmd="smartFieldButton"]')

         const left = $btn.offset().left + $btn.width() / 2
         const top = $btn.offset().top + (editor.opts.toolbarBottom ? 8 : $btn.outerHeight() - 10)
         const height = $btn.outerHeight()

         editor.popups.show('smartField.popup', left, top, height)
      }

      const hidePopup = () => {
         editor.popups.hide('smartField.popup')
      }
      return {
         initialization,
         showPopup: showPopup,
         hidePopup: hidePopup,
      }
   }

   buildMenu(clientSmartFields)

   return (
      <Container>
         <Header />
         <FroalaEditorComponent config={editorConfig} />
      </Container>
   )
}

export default Froala
