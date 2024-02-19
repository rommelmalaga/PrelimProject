import React from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ToggleTheme = ({ darkTheme , toggleTheme}) => {
    return (
    <div className='Togglebtn'>
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </Button>
    </div>
    )
}

export default ToggleTheme;