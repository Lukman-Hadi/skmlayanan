import * as React from 'react';
import {arrayOf, func, object} from 'prop-types';
import {sangatBaik, sangatBuruk, buruk, baik} from '../../components/Images'

export default function Indicator({indicator,onChangeI,onCustomClick}){
    return (
        <div className="flex-row h-screen w-screen bg-color2">
            {/* indicator */}
            <div className="justify-center">
                <h1 className="text-center pt-20 font-quicksand font-black text-7xl md:pt-10">{indicator.indicator}</h1>
            </div>
            {/* radio group */}
            <div className="flex h-3/5 justify-center mt-14 md:mt-5 lg:mt-1">
                {/* img+input */}
                <div className="w-1/5 mx-2 py-20 px-2 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="1" onChange={e=>onChangeI(indicator.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="sangat buruk" src={sangatBuruk}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Sangat Buruk</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 py-20 px-2 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="2" onChange={e=>onChangeI(indicator.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="buruk" src={buruk}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Buruk</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 py-20 px-2 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="3" onChange={e=>onChangeI(indicator.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="baik" src={baik}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Baik</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 py-20 px-2 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="4" onChange={e=>onChangeI(indicator.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="sangat baik" src={sangatBaik}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Sangat Baik</p>
                    </label>
                </div>
            </div>
            <div className="text-center">
                <button className="px-10 py-2 bg-white rounded-2xl" onClick={onCustomClick}>TEST</button>
            </div>
        </div>
    )
}

Indicator.propTypes ={
    indicator:arrayOf(object).isRequired,
    onChangeI: func
}