export default function HelloButton(props) { 
    if (props.mood==="pink")
    {
        return (<button style={{backgroundColor:"pink"}}>{props.mood}</button>)
    }
    return (<button>{props.mood}</button>)
}