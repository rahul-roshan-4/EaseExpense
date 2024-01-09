import React, { useEffect, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import "./Contact.css";
import { UserContext } from "../UserContext";
import ListItem from "../ListItem";

const Contact = () => {
  const [mail, setMail] = useState("");
  const [owe, setOwe] = useState("");
  const { setUserInfo, userInfo } = useContext(UserContext);

  const [backenddata, setBackend] = useState([]);
  const [backenddata2, setBackend2] = useState([]);
  const [isOwnedClicked, setOwnedClicked] = useState(false);
  const [isHistoryClicked, setHistoryClicked] = useState(false);
useEffect(() => {
  // Call history function when the component mounts
  history({ preventDefault: () => {} }); // pass a dummy event object

  // Set up an interval to periodically call the history function
  const intervalId = setInterval(() => {
    history({ preventDefault: () => {} }); // pass a dummy event object
  }, 5000); // Update every 30 seconds, adjust the interval as needed
  

  // Clean up the interval when the component is unmounted
  return () => clearInterval(intervalId);
}, []);
useEffect(() => {
  // Call history function when the component mounts
  find({ preventDefault: () => {} }); // pass a dummy event object

  // Set up an interval to periodically call the history function
  const intervalId = setInterval(() => {
    history({ preventDefault: () => {} }); // pass a dummy event object
  }, 5000); // Update every 30 seconds, adjust the interval as needed

  // Clean up the interval when the component is unmounted
  return () => clearInterval(intervalId);
}, []);


  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const username = userInfo.mail;
  const mail2 = username;

  async function find(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/findfriend", {
        method: "POST",
        body: JSON.stringify({ mail2 }),
        headers: { "Content-Type": "application/json" },
      });

      const userInfo = await response.json();
      setOwnedClicked(true);
      setBackend(userInfo);
      console.log(userInfo[1].mail2);
    } catch (error) {
    }
  }

  async function history(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/history", {
        method: "POST",
        body: JSON.stringify({ mail2 }),
        headers: { "Content-Type": "application/json" },
      });

      const userInfo = await response.json();
      setHistoryClicked(true);
      setBackend2(userInfo);
      console.log(userInfo[0].mail2);
    } catch (error) {
      console.log("No data");
    }
  }

  const abc = userInfo.mail2;

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/friend", {
        method: "POST",
        body: JSON.stringify({ mail2, mail, owe }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Successfully added");
      } else {
        alert("Not added");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-text">
        <h1>Your Profile</h1>
        <h3>
          <b>{username}</b>
        </h3>
        <p style={{ color: "rgb(91, 96, 101)" }}>
          If you are not login please login to see your profile
        </p>
      </div>

      <div className="dashboard">
        <div className="owned">
          <h1>You Pay To</h1>
          {isOwnedClicked && (
            <ListGroup as="ol" numbered>
              {backenddata.map((data, index) => (
                <ListItem
                  key={index}
                  UserName={data.mail2}
                  Email={data.mail2}
                  Money={data.owe}
                />
              ))}
            </ListGroup>
          )}

          <Button onClick={find} variant="outline-primary">
            Refresh
          </Button>
        </div>

        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Add Owned Money</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={mail}
                  onChange={(ev) => setMail(ev.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Amount</label>
                <input
                  type="Number"
                  className="form-control mt-1"
                  placeholder="Enter Amount"
                  value={owe}
                  onChange={(ev) => setOwe(ev.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={register}
                >
                  Add Friend
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="history-sec">
          <h1>You Recieve From</h1>
          {isHistoryClicked && (
            <ListGroup as="ol" numbered>
              {backenddata2.map((data, index) => (
                <ListItem
                  key={index}
                  UserName={data.mail}
                  Email={data.mail}
                  Money={data.owe}
                />
              ))}
            </ListGroup>
          )}
          <Button onClick={history} variant="outline-primary">
            Refresh
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
