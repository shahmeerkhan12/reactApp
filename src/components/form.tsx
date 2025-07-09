function Form() {
  return (
    <>
      <form action="#">
        <h6>Full Name</h6>
        <input type="text" name="name" id="name" />
        <br />
        <h6>Email</h6>
        <input type="email" />
        <br />
        <h6>Contact</h6>
        <input type="number" id="contact-no" />
        <br />
        <h6>Age</h6>
        <input type="number" name="age" id="age" />
        <br />
        <h6>Gender</h6>
        <input type="radio" name="Male" id="Male" />
        <label htmlFor="Gender">Male</label>
        <input type="radio" name="Female" id="Female" />
        <label htmlFor="Female">Female</label>
        <input type="radio" name="other" id="other" />
        <label htmlFor="other">Other</label>

        <br />
        <input type="button" className="btn btn-secondary" value="Submit" />
        <br />
      </form>
    </>
  );
}

export default Form;
