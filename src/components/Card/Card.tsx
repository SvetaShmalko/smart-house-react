import React from 'react';
import style from './Card.module.scss';
import { Oven, RobotHoover } from '../../redux/reducers/deviceReducer';

interface Props {
    device: Oven | RobotHoover
}

const Card = (props: Props) => {

    const { image, name, category } = props.device;

    return (
        <div>
            <div className={style.card} >
                <div className={style.card__image}>
                    <img src={image} alt={name} />
                </div>
                <div className={style.card__content}>
                    <div>
                        <h5>{name}</h5>
                        <p>{category}</p>
                    </div>
                    <div className={props.device.status === true ? style.status_on : style.status_off}></div>
                </div>
            </div>
        </div>
    )
}

export default Card;