import styled from "styled-components"

const BtnStyled = styled.button`
    padding: 10px 30px;
    background-color: ${props => props.background || 'transparent'};
    border: 1px solid black;
    margin-left: 10px;
    opacity: .7;
    &:hover{
        opacity: 1;
    } 
`

export const BtnStyle = (props) => {
  return <BtnStyled {...props}/>
}
