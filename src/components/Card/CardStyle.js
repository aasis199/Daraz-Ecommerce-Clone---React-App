import styled from 'styled-components'

export const Click = styled.div`
    border: none;
    cursor:pointer;
    .car{
        position: absolute; 
        margin-top: -20%;
        justify-content:space-around;
    }
    .card_btn{ 
        display:flex;
        width: 15vw;
        height: 40px;
        line-height: 40px;
        text-indent: 10px;
        font-size: 18px;
        background-color: white;
        border-radius: 25px;
    }
    .card_btn img{
        max-width: 40px;
        padding: 5px;
    }
    a{
        color: black;
        font-weight: 500;
    }
    .card_btn:hover{
        box-shadow: 2px 2px 3px #999;
        content: <i class="fa fa-left"></i>
    }
`

