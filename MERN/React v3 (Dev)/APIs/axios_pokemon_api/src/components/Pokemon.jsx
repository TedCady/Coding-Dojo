const Pokemon = props => {
    const {poke} = props;

    return(
        <div style={{width:'35%'}}>
            <span>{poke}</span>
        </div>
    )
}
export default Pokemon;