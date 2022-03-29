import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff; 
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    @media(max-width: 815px){
        flex-direction: column;
    }
`;

export const InputBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    button{
        margin-top: 28px;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid gray;
    }
    input,select{
        border-radius: 5px;
        padding: 0.5rem;
        border: 1px solid gray;
    }
    label{
        font-weight: bold;
        height: 20px;
        margin-bottom: 8px;
    }
`;