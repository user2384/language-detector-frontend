import React from 'react';

const WordForm = ({onInputChange, onButtonClick, language, submitted}) => {
    return (
        <div className="context ">
        <h1>Type in or paste text:</h1>
        <div className=''>
                <div className='form center pa3 br3 shadow-5'>
                <input onChange={onInputChange} className='f4 pa2 w-70 center' type='text'/>
                <button
                    onClick={onButtonClick} className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue'
                >Detect</button>
                </div>
        </div>
        { submitted ? <h2 className='pa3 white'>That is {language}!</h2> : <p></p>}
      </div>
    )
}

export default WordForm;