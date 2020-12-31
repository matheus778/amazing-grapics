import styled from 'styled-components';

export const Container = styled.div`
box-sizing:border-box;
width: 100%;
height:100vh;
`;

export const Header = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
height: 100px;

h1{
    color: #D2872C;
}

ul{
    display: flex;
}

ul li {
    list-style: none;
    margin-right: 20px;
    transition: color 1s;
    cursor: pointer;
}

ul li:hover{
    color: #D2872C;
}
`;

export const Main = styled.main`
position: relative;
display: flex;
flex-direction: row;
margin: 0 auto;
width: 90%;
padding-top: 20px;
color: #766F68;

div{
    width:40%;
}

div h1{
    font-size: 42px;
    outline-width: 10px;
    margin-bottom: 20px;
}

div h2{
    font-size:20px;
}

button{
    margin-top: 15%;
    width:60%;
    height: 55px;
    border-radius: 8px;
    outline:none;
    border: none;
    background:#D2872C;
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
}
`;