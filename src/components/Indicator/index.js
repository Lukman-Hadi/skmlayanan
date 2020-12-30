import * as React from 'react';
import {func, object} from 'prop-types';
import {sangatBaik, sangatBuruk, buruk, baik} from '../../components/Images'

export default function Indicator({indicator,onChangeI}){   
    let [fuck,setFuck] = React.useState('0')
    let [fuck1,setFuck1] = React.useState('0')
    let [fuck2,setFuck2] = React.useState('0')
    let [fuck3,setFuck3] = React.useState('0')
    return (
        <div className="">
            {/* indicator */}
            <div className="justify-center">
                <h1 className="text-center pt-20 font-quicksand font-black text-7xl md:pt-8">{indicator.indicator}</h1>
            </div>
            {/* radio group */}
            <div className="flex h-3/5 justify-center mt-14 md:mt-0 lg:mt-1 sm:mt-5">
                {/* img+input */}
                <div className="w-1/5 mx-2 lg:my-10 lg:py-20 px-2 h-auto md:py-4 md:my-0">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="1" onClick={(e)=>{onChangeI(indicator.bg, e.target.value);setFuck('1')}} bounce={fuck}></input>
                        <img onAnimationEnd={()=>setFuck('0')} className="smiley w-full" alt="sangat buruk" src={sangatBuruk}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Sangat Buruk</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 lg:my-10 lg:py-20 px-2 h-auto md:py-4">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="2" onClick={(e)=>{onChangeI(indicator.bg, e.target.value);setFuck1('1')}} bounce={fuck1}></input>
                        <img onAnimationEnd={()=>setFuck1('0')} className="smiley w-full" alt="buruk" src={buruk}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Buruk</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 lg:my-10 lg:py-20 px-2 h-auto md:py-4">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="3" onClick={(e)=>{onChangeI(indicator.bg, e.target.value);setFuck2('1')}} bounce={fuck2}></input>
                        <img onAnimationEnd={()=>setFuck2('0')} className="smiley w-full" alt="baik" src={baik}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Baik</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 lg:my-10 lg:py-20 px-2 h-auto md:py-4">
                    <label className="radioimg">
                        <input type="radio" name={indicator.indicator} value="4" onClick={(e)=>{onChangeI(indicator.bg, e.target.value);setFuck3('1')}} bounce={fuck3}></input>
                        <img onAnimationEnd={()=>setFuck3('0')} className="smiley w-full" alt="sangat baik" src={sangatBaik}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Sangat Baik</p>
                    </label>
                </div>
            </div>
            <div className="text-center">
                {/* <button className="px-10 py-2 bg-white rounded-2xl" onClick={onCustomClick}>TEST</button> */}
            </div>
        </div>
    )
}

Indicator.propTypes ={
    indicator:object.isRequired,
    onChangeI: func
}