import React, { useEffect, useState } from 'react'
import ReactQuill, { Quill as quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'
import { Header, Container, ButtonTab, Button } from './Quill.styled'

const sizes = [
   '8px',
   '9px',
   '10px',
   '11px',
   '12px',
   '14px',
   '16px',
   '18px',
   '20px',
   '24px',
   '30px',
   '36px',
   '48px',
   '60px',
   '72px',
   '96px',
]
const icons = quill.import('ui/icons')
const fontSizeStyle = quill.import('attributors/style/size')
fontSizeStyle.whitelist = sizes
quill.register(fontSizeStyle, true)

const Toolbar = () => (
   <ButtonTab id="toolbar">
      <select className="ql-size">
         {sizes.map((size) => (
            <option key={size} value={size}>
               {size}
            </option>
         ))}
      </select>
      <Button className="ql-bold" />
      <Button className="ql-italic" />
   </ButtonTab>
)

const modules = {
   toolbar: {
      container: '#toolbar',
   },
   clipboard: {
      matchVisual: false,
   },
}

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
   'header',
   'font',
   'size',
   'bold',
   'italic',
   'underline',
   'strike',
   'blockquote',
   'list',
   'bullet',
   'indent',
   'link',
   'image',
   'color',
]

const Quill: React.FC = () => {
   const [value, setValue] = useState('')

   useEffect(() => {
      const QuillModule = new quill('#quill')
      QuillModule.clipboard.dangerouslyPasteHTML(
         0,
         '<table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: middle;"><h3 class="sc-fBuWsC eeihxG" color="#000000" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);"><span>Tobias</span><span>&nbsp;</span><span>Fischer</span></h3><p class="sc-fMiknA bxZCMx" color="#000000" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Software Developer</span></p><p class="sc-dVhcbM fghLuF" color="#000000" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Dubsado</span></p></td><td width="30"><div style="width: 30px;"><br></div></td><td class="sc-jhAzac hmXDXQ" color="#F2547D" style="width: 1px; border-bottom: none; border-left: 1px solid rgb(242, 84, 125);" width="1"><br></td><td width="30"><div style="width: 30px;"><br></div></td><td style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr height="25" style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" color="#F2547D" style="display: block; background-color: rgb(242, 84, 125);" width="11"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px; color: rgb(0, 0, 0);"><a class="sc-gipzik iyhjGb" color="#000000" href="tel:(503)%20413-9265" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>(503) 413-9265</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" color="#F2547D" style="display: block; background-color: rgb(242, 84, 125);" width="11"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a class="sc-gipzik iyhjGb" color="#000000" href="mailto:Tobias.Alan.Fischer@gmail.com" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>Tobias.Alan.Fischer@gmail.com</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" color="#F2547D" style="display: block; background-color: rgb(242, 84, 125);" width="11"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a class="sc-gipzik iyhjGb" color="#000000" href="//tobiasafischer.com" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>tobiasafischer.com</span></a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td height="30"><br></td></tr><tr><td class="sc-jhAzac hmXDXQ" color="#F2547D" height="1" style="width: 100%; border-bottom: 1px solid rgb(242, 84, 125); border-left: none; display: block;"><br></td></tr><tr><td height="30"><br></td></tr></tbody></table></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td style="vertical-align: top;"><br></td><td style="text-align: right; vertical-align: top;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; display: inline-block;"><tbody><tr style="text-align: right;"><td><a class="sc-hzDkRC kpsoyz" color="#6A78D1" href="https://www.linkedin.com/in/tobiasafischer/" style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a></td><td width="5"><div><br></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>',
      )
   }, [])

   useEffect(() => console.log(value), [value])

   return (
      <Container id="quill-container">
         <Header />
         <ReactQuill
            id="quill"
            value={value}
            onChange={setValue}
            theme="snow"
            modules={modules}
            formats={formats}
         />
         <Toolbar />
      </Container>
   )
}

export default Quill
