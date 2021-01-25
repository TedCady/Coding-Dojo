import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default props => {
    const { id, info } = props;
    const tdStyle = ({
        textAlign: 'left'
    })
    return (
        <tr>
            <td style={tdStyle}><a 
                href={`/authors/show/${id}`}
                >{info.name}
            </a></td>
            <td><EditButton id={id}/></td>
            <td><DeleteButton id={id}/></td>
        </tr>
    )
}
