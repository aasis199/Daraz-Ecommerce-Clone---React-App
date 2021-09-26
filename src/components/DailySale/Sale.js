import React from 'react'
import Button from '../Button/Button'
import { Salestyle } from './SaleStyle' 

export default function Sale() {
    return (
        <Salestyle>
        <div class="container offer-status d-md-flex">
            <div class="d-flex mb-2">
                <p className="col-primary px-4">On Sale Now</p>
                <div className=" d-lg-none">
                    <Button />
                </div>
            </div>
                
            <div className="main">
                <p>Ending in</p>
                <div className="timer">
                    <span>00</span>
                    <span>00</span>
                    <span>00</span>
                </div>
                <div className="d-none d-lg-block">
                    <Button />
                </div>
            </div>
        </div>
        </Salestyle>
    )
}
