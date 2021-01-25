import axios from 'axios';
export default props => {
    const { id } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
    }
    return (
        <a href='/'>
            <button 
                onClick={deletePerson}
                style={{color:'white',backgroundColor:'crimson'}}
                >Delete
            </button>
        </a>
    )
}
