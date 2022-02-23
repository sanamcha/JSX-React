const Person = (props) => {
    let vote = props.age >=18 ? "Please Go vote." : "You must be 18 to vote.";

    let hobbies = props.hobbies.map(h => <li>{h}</li>);
  
    return (
        <div>
            <h1>Person Infromation</h1>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age:{props.age}</li>
                <ul>
                    Hobbies{hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    );
}