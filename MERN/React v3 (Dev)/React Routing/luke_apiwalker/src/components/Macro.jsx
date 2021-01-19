import { Link } from '@reach/router'

export default function Macro(props){
    const { macroAPI } = props;

    return(
        <div>
            <div className='form'>
                {props.macroNames.map((item, index) => {
                    return(
                        <Link
                            to={`/${item.toLowerCase()}`}
                            className='macro'
                            key={index}
                        >
                            <button
                                type='submit'
                                className={
                                    props.macro == item.toLowerCase() ? 
                                        'sMacro' : 
                                        'macro'}
                                key={index}>
                                {item}
                                </button>
                        </Link>
                    )
                })}
            </div>
            {props.children}
        </div>
    )
}