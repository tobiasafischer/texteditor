import styled from 'styled-components'

export const Header = styled.div`
   display: flex;
   align-items: center;
   min-height: 40px;
   width: 100%;
   border: 1px solid #e9ecef;
   border-radius: 4px 4px 0px 0px;
`

export const Container = styled.div`
   border-radius: 4px;
   min-height: 351px;
   max-height: 351px;
   width: 80%;
   .is-active {
      background-color: #ebebeb;
   }
   .ProseMirror {
      border-left: 1px solid #e9ecef;
      border-right: 1px solid #e9ecef;
      color: #292e35;
      padding: 10px;
      height: 259px;
      overflow: auto;
      &:focus {
         outline: none;
      }
   }
`
