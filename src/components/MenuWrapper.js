import Styled from "styled-components";

export default Styled.section`
background: #03a9f4;
width: 300px;
height: 100vh;
padding: 20px;
color: white;
position: relative;
transition: 1s;
transform: translate( ${props => (props.opened ? "0" : "-100%")});
`;

