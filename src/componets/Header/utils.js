
export const getKindTemp = (props) => {
    console.log(props)
    if(props.kindCel){
        return Math.round(props.temp - 273)
    }
    if(props.kindFah){
        return Math.round(props.temp - 273)
    }
    return 5
}
