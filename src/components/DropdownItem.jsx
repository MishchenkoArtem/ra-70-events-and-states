import { useState } from 'react';

export default function DropdownItem (props) {
    const [color, setColor] = useState({color: ''});
    return (
        <>
            {props.btnName.map((elem) => {
                return (
                    <li id={elem.id} className={elem.title === color.color ? 'active' : ''} >
                        <a id={elem.id} href="#0" onClick={() => {
                            setColor({color: elem.title});
                            props.handleClick();
                        }}
                        >{elem.title}</a>
                    </li>
                );
            })}
        </>
    );
}