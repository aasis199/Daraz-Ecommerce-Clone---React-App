import React from 'react'
import Button from '../Button/Button'
import { Salestyle } from './SaleStyle' 

export default function Sale() {
    return (
        <Salestyle>
        <div class="container offer-status d-flex">
            <p className="col-primary px-4">On Sale Now</p>
            <div className="main">
            <p>Ending in</p>
            <div className="timer">
                <span>00</span>
                <span>00</span>
                <span>00</span>
            </div>
            <Button />

            </div>
        </div>
        </Salestyle>
    )
}
