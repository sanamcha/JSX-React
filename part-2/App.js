const App = () => {
    return (

        <div>
            <Tweet 
            name="Sammy Lee"
            username="Sammy123"
            date={new Date().toDateString()}
            msg="Hello Tammmy how r u?"
            />
            <Tweet 
            name="Tammy Bro"
            username="Tammy!!"
            date={new Date().toDateString()}
            msg="Hi sammy I am fine bro."
            />
            <Tweet 
            name="Fernan Hernan"
            username="Fernando11"
            date={new Date().toDateString()}
            msg="I am going outside today."
            />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);