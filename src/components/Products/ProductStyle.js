import styled from "styled-components";

export const ProductList = styled.div`
    border: none;
    product-card{
    }
    .product-card:hover{
        box-shadow: -3px 2px 3px -3px #ccc;
    }
    .product-title{
        font-size: 14px;
        color: black;
        padding: 4rem 0;
    }
    .product-price{
        color: #f57224;
        font-weight: 500;
    }
    .strike{
        text-decoration: line-through;
        color: #999;
        font-weight: 400;
        font-size: 12px;
    }
    @media only screen and (max-width: 768px) {
        
    }
    @media only screen and (max-width: 600px) {
        
        .product-card{
            position:relative;
        }
        margin-top: 2rem;
    }
`