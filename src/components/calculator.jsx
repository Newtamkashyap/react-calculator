import { useState } from 'react'
import './calculator.css'

export const Calculator = () => {

    const [data, setData] = useState("");


    const getData = (event) => {
        console.log(event.target.value);
        setData(data.concat(event.target.value));

    }

    const calculation = () => {
        setData(eval(data).toString())//eval()method is in javascript which calculate or optimise our operation internally no need to write different diff operators like +,-,*,/
    }

    const backButton = () => {
        setData(data.slice(0, -1))
    }

    const allClearButton = () => {
        setData('')//empty input -all clear
    }
    return (
        <div className="main-div">
            <h3>React Calculator</h3>
            <div className="container">
                <input placeholder="0" value={data} />
            </div>
            <br />
            <div>
                <button onClick={getData} className='col-3 bg bg-warning' value="(">(</button>
                <button onClick={getData} className='col-3 bg bg-warning' value=")">)</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="%">%</button>
                <button onClick={allClearButton} className='col-3 bg bg-danger'>AC</button>
                <br />
            </div>

            <div>
                <button onClick={getData} className='col-3 bg bg-warning' value="7">7</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="8">8</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="9">9</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="*">*</button>
                <br />
            </div>

            <div>
                <button onClick={getData} className='col-3 bg bg-warning' value="4">4</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="5">5</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="6">6</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="-">-</button>
                <br />
            </div>

            <div>
                <button onClick={getData} className='col-3 bg bg-warning' value="1">1</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="2">2</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="3">3</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="+">+</button>
                <br />
            </div>

            <div>
                <button onClick={getData} className='col-3 bg bg-warning' value="0">0</button>
                <button onClick={backButton} className='col-3 bg bg-danger' value="Back">Back</button>
                <button onClick={calculation} className='col-3 bg bg-warning' >=</button>
                <button onClick={getData} className='col-3 bg bg-warning' value="/">/</button>
            </div>
        </div>
    )
}