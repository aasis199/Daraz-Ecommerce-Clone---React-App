import { Click } from './CardStyle'
import {Container} from 'react-bootstrap'

const Card = [
    {
        id: '1',
        title: 'Daraz Mall',
        URL : 'daraz-mall',
        image: 'https://icms-image.slatic.net/images/ims-web/27ecaafa-8dab-4bc7-b796-f33f32f3159f.png',
    },
    {
        id: '2',
        title: 'dMart',
        URL : 'dmart',
        image: 'https://icms-image.slatic.net/images/ims-web/2c69dca0-4720-461f-b686-0c1adba419fe.png',
    },
    {
        id: '3',
        title: 'Recharge Cards',
        URL : 'daraz-mall',
        image: 'https://icms-image.slatic.net/images/ims-web/965819c0-b12c-4b86-9e65-705464b63839.png',
    },
    {
        id: '4',
        title: 'Daraz Fashion',
        URL : 'daraz-mall',
        image: 'https://icms-image.slatic.net/images/ims-web/69d1e0b3-0bc6-4a2a-9386-61f2ad7d329a.png',
    },
    {
        id: '5',
        title: 'Collection',
        URL : 'global',
        image: 'https://icms-image.slatic.net/images/ims-web/b451bdc5-c0ce-4ed3-9e74-1f0f59d64480.png',
    },
    
]


export default function Cards() {
    return (
        <Click>
            <Container>
            <div className="car container row">
                {Card.map(({ id, title,URL, image, cName}) => (
                  <div className="card_btn d-lg-flex">
                    <img src={image} className="image w-100"></img>
                    <a href={URL}><p key={id}> {title}</p></a>
                  </div>
                ))}
            </div>
            </Container>
        </Click>
    )
}
