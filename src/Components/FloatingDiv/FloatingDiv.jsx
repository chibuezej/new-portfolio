import './Floating.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

function FloatingDiv({image, txt1, txt2}){
    const theme = useContext(themeContext)
    const darkMode =  theme.state.darkMode
    return (
        <div className="floatingdiv" style={{ color : darkMode ? 'orange': ''}}>
            <img src={image} alt="" />
            <span>
                {txt1}
                <br/>
                {txt2}
            </span>
        </div>
    )
}

export default FloatingDiv