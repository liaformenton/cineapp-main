import styled from 'styled-components'

const Div = styled.div`
    width: 100vw; 
    height: 100vh;
    position: relative;
    padding: 50px 25px 0 25px;
    overflow-y: hidden;
    background: linear-gradient(180deg, #15002D 0%, #1C172B 100%);
`
/*vw=view port se adqua a pg como se fosse 100% da pg*/
/*position: relative; caso algun filho se mecha vai ser em relaçao ao container*/
   
export function Container({ children }) {
    return (
        <Div>
            {children}
        </Div>
    )
}