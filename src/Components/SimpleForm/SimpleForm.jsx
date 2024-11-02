

const SimpleForm = () => {


    const handleSubmit = e =>{
        console.log(e.target)
        e.preventDefault();
        console.log('form submitted..')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="name"/>
                <br />
                <input type="emaill" name="email" />
                <br />
              <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;