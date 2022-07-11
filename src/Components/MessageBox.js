import  { useParams } from 'react-router-dom';
const MessageBox = () => {
    let {Id} = useParams();
    return ( 
        <section>
            <h2>ChatId: {Id}</h2>
        </section>
    );
                }
 
export default MessageBox;