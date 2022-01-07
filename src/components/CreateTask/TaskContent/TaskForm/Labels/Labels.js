import React from 'react'
import './Labels.css'
import qstn from '../../../../../image/task/queistion.svg'
import camera from '../../../../../image/task/camera.svg'
import card from '../../../../../image/task/card.svg'

const Labels = () => {
    return (
        <div className="labels">

            <label className="taskForm__label label">
                <span className="label__text">Мне нужно</span>
                <input type="text"
                    placeholder="Напишите, чем вам нужно помочь..."
                />
            </label>

            <label className="taskForm__label taskForm__label_multiple label">
                <span className="label__text">Параметры посылки</span>
                <div className="multiple__inputs">

                    <div className="multiple__row">
                        <input type="text"
                            placeholder="Вес посылки"
                            maxLength="5"
                        />
                        <input type="text"
                            placeholder="Длина, м"
                            maxLength="5"
                        />
                    </div>

                    <div className="multiple__row">
                        <input type="text"
                            placeholder="Ширина, м"
                            maxLength="5"
                        />
                        <input type="text"
                            placeholder="Высота, м"
                            maxLength="5"
                        />
                    </div>

                </div>

            </label>

            <label htmlFor="textarea" className="textarea">
                <span className="label__text">Опишите пожелания и детали, чтобы исполнители лучше оценили вашу задачу</span>
            </label>
            <div className="taskForm__label label text-area">
                <textarea id="textarea" name=""
                    placeholder="Например: развести 10 небольших пакетов по 5 адресам. Общий вес - не более 7 кг. Желательно успевать доставить все пакеты за один день.">
                </textarea>
                <div className="label__fakes">
                    <div className="label__fake label__photo_fake">
                        <input type="file" className="input__photo" id="input__photo" />
                        <label htmlFor="input__photo">
                            <img src={camera} alt="" />
                            <span className="fake__text">Добавить фото</span>
                        </label>
                    </div>

                    <div className="label__fake label__card_fake">
                        <input type="file" className="input__card" id="input__card" />
                        <label htmlFor="input__card">
                            <img src={card} alt="" />
                            <span className="fake__text"> Приватная информация</span>
                        </label>
                    </div>
                </div>


            </div>

            <div className="label__fakes2">
                <div className="label__fake label__photo_fake">
                    <input type="file" className="input__photo" id="input__photo" />
                    <label htmlFor="input__photo">
                        <img src={camera} alt="" />
                        <span className="fake__text">Добавить фото</span>
                    </label>
                </div>

                <div className="label__fake label__card_fake">
                    <input type="file" className="input__card" id="input__card" />
                    <label htmlFor="input__card">
                        <img src={card} alt="" />
                        <span className="fake__text"> Приватная информация</span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Labels
