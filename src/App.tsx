import React, { useState } from 'react'
import styled from 'styled-components'
import { Froala, TipTap } from './components'
import { values } from './components/Froala/api'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
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
   position: absolute;
   top: 20%;
   &:hover {
      background-color: lightgray;
   }
`

const App: React.FC = () => {
   const [show, setShow] = useState(true)
   const handleClick = () => setShow((prev) => !prev)

   return (
      <Container>
         <Button onClick={handleClick}>{show ? 'Go to TipTap' : 'Go to Froala'}</Button>
         {show ? <Froala values={values} /> : <TipTap />}
      </Container>
   )
}

export default App
