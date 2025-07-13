import react_img from "../assets/react.svg";
function Form() {
  return (
    <>
      <div className="row">
        <form className="col  " style={{ width: "100%", textAlign: "center" }}>
          <h2>Drop Your Details</h2>
          <div className="form-group">
            <label htmlFor="username">Full Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="user-email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="user-email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-no">Contact</label>
            <br />
            <input
              type="number"
              id="contact-no"
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <br />
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter Your Age"
            />
          </div>
          <div
            className="form-group"
            style={{ textAlign: "center", width: "100%" }}
          >
            <h3>Gender</h3>
            <div className="form-check">
              <input type="checkbox" name="Male" id="Male" />
              <label htmlFor="Gender" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="Female" id="Female" />
              <label htmlFor="Female" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="other" id="other" />
              <label htmlFor="other" className="form-check-label">
                Other
              </label>
            </div>
          </div>
          <br />
          <input type="button" className="btn btn-secondary" value="Submit" />
          <br />
        </form>
        <div className="col">
          <img
            src={react_img}
            className=" h-100 center-block image-center"
            alt="react svg"
          />
        </div>
      </div>
    </>
  );
}

export default Form;
