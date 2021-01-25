export default props => {
    const { id } = props;
    return (
        <a 
            href={`/authors/edit/${id}`}
                ><button
                    style={{backgroundColor:'yellow'}}
                    >Edit
            </button>
        </a>
    )
}
