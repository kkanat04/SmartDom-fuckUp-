import React from 'react'
import './SortingTask.css'
import { Link } from 'react-router-dom'
import icon from '../../../../../image/avatar.jpg'
import shield from '../../../../../image/searchTask/shield.svg'
import card from '../../../../../image/searchTask/card.svg'

const SortingTask = (props) => {
    return (
        <div className="sortingTask">
            <div className="sortingTask__left-block">
                <img className="sortingTask__icon" src={props.ava ? props.ava : icon} alt="" />
            </div>
            <div className="sortingTask__decsr">
                <div className="sortingTask__center-block">
                    <h2 className="sortingTask__name">
                        {props.name}
                        <span className={props.checkDis ? 'checkDis' : ''}>
                            <img src={props.check} alt="" />
                        </span>
                    </h2>
                    <div className="sortingTask__address">{props.address}</div>
                    <div className="sortingTask__workType">{props.workType}</div>
                    <div className="sortingTask__func">
                        <div className="sortingTask__shield">
                            <img src={shield} alt="" />
                            <div className="sortingTask__services">Предпочтение застрахованым</div>
                        </div>
                        <div className="sortingTask__card">
                            <img src={card} alt="" />
                            <div className="sortingTask__services">Сделка без риска</div>
                        </div>
                    </div>
                </div>
                <div className="sortingTask__right-block">
                    <h2 className="sortingTask__price">{props.price}</h2>
                    <div className="sortingTask__user"><Link to="/infProfile">{props.userName}</Link></div>
                    <button className="sortingTask__more">{props.more}</button>
                    <div className={props.btnDis ? 'dis' : ''}>
                        <button className="sortingTask__btn">{props.btn ? 'Получить оплату' : ''}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SortingTask