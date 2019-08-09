import React from "react";
import "./card-styles.css";
import "bulma/css/bulma.css";

const Card = ({ user }) => {
  const toggleModal = e => {
    const toggleModal = document.getElementById(`${user._id}`);
    toggleModal.classList.toggle("is-active");
  };
  let jobStatus = "";
  if (user.seekingEmployment == false) {
    jobStatus = "Not seeking employment";
  } else {
    jobStatus = "seeking employment";
  }

  return (
    <div>
      <div className="box card">
        <center>
          <img className="avatar" alt={`${user._id} img`} src={user.img} />
          <br />
          <h1>
            <strong>
              {user.name.first} {user.name.last}
            </strong>
          </h1>
          <h3>{user.employer}</h3>
          <br />
          <h3>
            <span className="label">Graduation Year:</span> {user.gradYear}
          </h3>
          <br />
          <h3>
            <span className="label">Current Location:</span>
            {user.location}
          </h3>
          <span>
            <p>
              <button className="button" onClick={toggleModal}>
                See More
              </button>
            </p>
          </span>
        </center>
      </div>

      <div className="modal" id={user._id}>
        <div className="modal-background">
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                {user.name.first} {user.name.last}
              </p>
              <button
                className="delete"
                aria-label="close"
                onClick={toggleModal}
              />
            </header>
            <section className="modal-card-body">
              <center>
                <div class="column">
                  <img
                    className="avatar"
                    alt={`${user._id} img`}
                    src={user.img}
                  />{" "}
                  <br />
                  {user.employmentStatus} <br />
                  {user.employer} <br />
                  {user.bio}
                  <h3>
                    <a href={user.contactLinks.gitHub}>Github</a> |
                    <a href={user.contactLinks.linkedIn}> LinkedIn </a> |
                    <a href={user.contactLinks.other}> Other</a> <br />
                    <span className="label">Current Location:</span>
                    {user.location}
                    <span className="label">Graduation Year: </span>{" "}
                    {user.gradYear}
                    <span className="label">Final Project:</span>
                    {user.finalProject}
                    <span className="label">Employment Status: </span>{" "}
                    {jobStatus}
                  </h3>
                </div>
              </center>
            </section>
            <footer className="modal-card-foot">
              <br />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
