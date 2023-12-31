import {useState} from 'react';
const Question = ({content, buttonHandler})=>{
    
    return(
        <button onClick={buttonHandler} className="option">{decodeHTMLEntities(content)}</button>
    )
}
function decodeHTMLEntities(text) {
    const parser = new DOMParser();
    const dom = parser.parseFromString('<!doctype html><body>' + text, 'text/html');
    return dom.body.textContent;
}
export default Question;