import './Button.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    
    let classes = 'Button '
    classes +=  props.operation ? 'operation': ''
    classes +=  props.double ? 'double': ''
    classes +=  props.triple ? 'triple': ''
    
    return(
            <button 
                onClick={e => props.click(props.label)}
                className={classes}>
                {props.label}
            </button>
    )
}