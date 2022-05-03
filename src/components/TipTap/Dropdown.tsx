//@ts-nocheck
import React, { useState } from 'react'
import { Editor } from '@tiptap/react'
import { usePopper } from 'react-popper'
import styled from 'styled-components'
import { Button } from './TipTap.styled'

const Container = styled.div``

const DropdownContainer = styled.div<{ visible: boolean }>`
   display: ${({ visible }) => (visible ? 'flex' : 'none')};
   flex-direction: column;
   background-color: #fff;
   border-radius: 4px;
   box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
   padding: 5px 0px;
`

const Dropdown: React.FC<{ title: string; children: any; editor: Editor }> = ({
   children,
   title,
   editor,
}) => {
   // lol
   const [visible, setVisible] = useState(false)
   const [referenceRef, setReferenceRef] = useState(null)
   const [popperRef, setPopperRef] = useState(null)

   const { styles, attributes } = usePopper(referenceRef, popperRef, {
      placement: 'top',
   })

   const handleClick = () => {
      setVisible((prev) => !prev)
      editor.chain().focus()
   }

   return (
      <>
         <Button ref={setReferenceRef} onClick={handleClick}>
            {title}
         </Button>
         <Container ref={setPopperRef} style={styles.popper} {...attributes.popper}>
            <DropdownContainer style={styles.offset} visible={visible}>
               {children}
            </DropdownContainer>
         </Container>
      </>
   )
}
export default Dropdown
