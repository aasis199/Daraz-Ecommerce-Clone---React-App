import styled from 'styled-components';

export const Nav = styled.nav`
    .top_menu{
        background-color:rgba(158,158,158,.2);
        height:25px;
        width:100%;
    }
    ul{
        display:flex;
        float:right;
        font-size: 12px;
        background-color: white !important;

    }
    ul li{
        margin-left: 25px;
        padding: 2px;
    }
    ul li a{
        color: #333;
    }
    .second-menu{
        width: 95%;
        margin:auto;
        display:flex; 
        justify-content: space-evenly;
        height: 65px;
        background-color: white !important;
    }
    .logo{
        width:140px;
    }
    .search {
        width: 45vw;
        height: 45px;
        border:none;
        background-color: rgba(158,158,158,.2);
        font-size: 14px;
        outline: none;
        text-indent: 10px;
    }
    .fa-search{
        background-color:#f57224;
        width:45px;
        height: 45px;
        text-align:center;
        line-height: 45px;
        color: white;
        font-size: 1.2rem;
    }
    .fa-shopping-cart{
        margin-left: 15px;
        text-align:center;
        line-height: 45px;
        width:45px;
        height: 45px;
        color: black !important; 
        font-size: 1.3rem;
    }
    .fa-shopping-cart a{
        color: black !important; 
    }
    .offer{ 
        width:190px;
    }
    .active{
        color: #f57224;
        font-weight: 500;
    }
`

