const App = () => {
    return (
        <div>
            <Person 
            name="Samual"
            age ={30}
            hobbies={["swimming", "dancing", "playing video games"]} />
            <Person 
            name="Mammateshor"
            age={17}
            hobbies={["reading", "drinking wine", "watching movies"]}
            />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById("root"));

