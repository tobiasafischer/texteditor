import React, { useState } from 'react'
import styled from 'styled-components'
import { Froala, TipTap } from './components'
import { values } from './components/Froala/api'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative;
   width: 100vw;
   height: 100vh;
`

const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   gap: 20px;
   position: absolute;
   top: 20%;
`

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 200px;
   height: 50px;
   border-radius: 5px;
   background-color: transparent;
   border: 1px solid #333;
   &:hover {
      background-color: lightgray;
   }
`

const App: React.FC = () => {
   const [active, setActive] = useState('froala')
   const handleFroala = () => setActive('froala')
   const handleTipTap = () => setActive('tiptap')

   return (
      <Container>
         <ButtonContainer>
            <Button onClick={handleFroala} disabled={active === 'froala'}>
               Go to Froala
            </Button>
            <Button onClick={handleTipTap} disabled={active === 'tiptap'}>
               Go to TipTap
            </Button>
         </ButtonContainer>
         {active === 'froala' && <Froala values={values} />}
         {active === 'tiptap' && <TipTap />}
      </Container>
   )
}

export default App
