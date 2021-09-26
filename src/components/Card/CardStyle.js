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
    @media only screen and (max-width: 768px) {
    .car{
        margin-top: 20px;
    }
    .card_btn{ 
        align-items: center;
        width: 17vw;
        height: 7vh;
        display:block;
        text-align:center;
        font-size: 12px; 
        line-height: 16px;
        backgound-color: transparent;
        text-indent: 0px;
    }
    .card_btn img{
        width: 50px;
    }
    @media only screen and (max-width: 600px) {
        .car{
            margin-top: 20px;
            text-align:center;
            z-index: 1111;
        }
        .card_btn{ 
            align-items: center;
            width: 17vw;
            height: 10vh;
            display:block;
            text-align:center;
            font-size: 12px; 
            line-height: 16px;
            backgound-color: transparent;
            text-indent: 0px;
        }
        .card_btn img{
            width: 50px;
        }

    }
`

