const Tweet = (props) =>  {
    return(
       <div>
           <p>{props.name}</p>
           <p>{props.username}</p>
           <p>{props.date}</p>
           <p>{props.msg}</p>
       </div> 
    );
}
