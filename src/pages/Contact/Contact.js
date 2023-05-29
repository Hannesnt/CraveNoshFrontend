import React, { useState } from "react";
import "./Kontakt.css";
import postContactData from "../../hooks/FetchContactComments";
function Contact() {
  const [author, setAuthor] = useState(null);
  const [email, setEmail] = useState(null);
  const [commentText, setCommentText] = useState(null);
  const [thanksVisible, setThanksVisible] = useState(false);
  let CommentData = {
    data: {
      Email: email,
      Name: author,
      Subject: commentText,
    },
  };

  function commentSubmit() {
    setEmail(null);
    setAuthor(null);
    setCommentText(null);
    setThanksVisible(true);
  }

  return (
    <div className="contactMain">
      <div className="container " id="CommentForm">
        <div className="row d-flex contactrow justify-content-center align-items-center">
          <div className="col-12 col-lg-6 d-flex flex-column  mt-md-5 mt-lg-0">
            <div className="mb-3">
              <h2>Kontakt</h2>
              <hr className="m-0"></hr>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (e.target.checkValidity()) {
                  postContactData(CommentData);
                  commentSubmit();
                  document.getElementById("name").value = "";
                  document.getElementById("email").value = "";
                  document.getElementById("message").value = "";
                  setTimeout(() => {
                    setThanksVisible(false);
                  }, 6000);
                }
              }}
            >
              <div className="col-12 d-flex justify-content-between align-items-center ">
                <input
                  className="mb-3 col-5"
                  placeholder="Namn"
                  type="name"
                  id="name"
                  name="Author"
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
                <input
                  className="mb-3 col-5"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex ">
                <textarea
                  className="col-12"
                  placeholder=" Kommentar"
                  id="message"
                  name="CommentText"
                  rows="6"
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mt-2">
                <button type="submit" className="btn contactBtn">
                  Skicka
                </button>
              </div>
            </form>
            <div className="mt-3" id="submitMessage">
              {thanksVisible ? <h4>Tack för ditt meddelande!</h4> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
