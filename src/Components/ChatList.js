import {Link} from "react-router-dom";
 const ChatList = () => {
    let userList = new Array(12).fill("Kelvin", 1)
    return ( 
        <section>
                 <div className="list-group"
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {userList.map((eachChat, index) => (
            <p className="list-group-item mb-0"  key={index} >
          <Link
            style={{ display: "block", margin: "1rem 0", textDecoration:"none", color:"black"}}
            to={`/userList/${index}`}
          >
            {eachChat}
          </Link>
          </p>
        ))}
      </div>
        </section>
     );
}
export default ChatList;