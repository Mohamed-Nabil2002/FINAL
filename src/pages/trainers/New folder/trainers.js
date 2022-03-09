import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import classes from "./trainers.module.css";
function Trainers() {
  const [trainerState, setTrainerState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/trainers")
      .then((res) => setTrainerState(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(trainerState);

  return (
    <>
      <div className={classes.body}>
        <div className={"container mt-3"}>
          <div className="row g-3 ">
            <h2 className={classes.title}>Our Trainers</h2>
            {/* {trainerState.map((trainer, index) => {
            return (
              <Card
                className={" col-sm-12 col-md-3 p-4  "}
                style={{  padding: "0px" }}
                key={index}
              >
                <Card.Img
                  variant="top"
                  // src="holder.js/100px180"
                  src={`http://localhost:8080/${trainer.trainerImage}`}
                />
                <Card.Body>
                  <Card.Title>
                    {trainer.firstName} {trainer.lastName}
                  </Card.Title>
                  <Card.Text>{trainer.job}</Card.Text>
                  <Card.Text>{trainer.about}</Card.Text>
                </Card.Body>
              </Card>
            );
          })} */}

            {/* dumy data : */}

            <Card
              className={"col-sm-12 col-md-3 p-4 bg-transparent-25"}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "0px", backgroundColor: "#c5b0a3" }}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Hossam</Card.Title>
                <Card.Text className={"my-1"}>front end developer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a front end developer with 5 years of
                  experience
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainers;