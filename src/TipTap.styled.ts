import styled from 'styled-components'

export const ButtonGroup = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   height: 100%;
   padding: 0px 3px;
   button + button::before {
      width: 0px !important;
   }
`

export const ButtonTab = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: 52px;

   border: 1px solid #e9ecef;
   border-radius: 0px 0px 4px 4px;

   button + button::before,
   ${ButtonGroup} + ${ButtonGroup}::before, button + ${ButtonGroup}::before {
      content: '';
      position: absolute;
      left: 0;
      top: 19%;
      height: 61%;
      width: 1px;
      background-color: #e9ecef;
   }
`

export const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   height: 100%;

   background-color: transparent;
   border: none;
   &:hover {
      transition: background-color 0.25s ease-in-out;
      background-color: #ebebeb;
   }
`

export const DropdownItem = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 100%;
   height: 20px;
   padding-right: 10px;
   padding-left: 10px;
   align-items: center;
   font-size: 12px;

   &:hover {
      background-color: #ebebeb;
   }
   &:active {
      font-weight: 700;
      color: #ebebeb;
   }
   cursor: pointer;
`

export const Header = styled.div`
   display: flex;
   align-items: center;
   min-height: 40px;
   width: 100%;
   border: 1px solid #e9ecef;
   border-radius: 4px 4px 0px 0px;
`

export const Container = styled.div`
   //border: 1px solid #e9ecef;
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
