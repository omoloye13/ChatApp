import ChatList from "./ChatList";
import MessageBox from "./MessageBox";

const Container = () => {
    return ( 
        <section>
            <h1 className="text-center">ChainConsult Chat App</h1>
           <div className="row g-0 mt-2">
                <div className="col-4">
                
                <ChatList/>
                </div>
                <div className="col-8">
                <MessageBox/>
                </div>
            </div>
        </section>
     );
}
 
export default Container;