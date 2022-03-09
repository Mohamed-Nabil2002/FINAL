import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import classes from "./trainers.module.css";
import * as Icon from 'react-bootstrap-icons';
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
        <div className={"container mt-3 pb-5"}>
          <div className="row g-3 ">
            <h2 className={classes.title}>Our Trainers</h2>
            {/* {trainerState.map((trainer, index) => {
            return (a
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
              style={{ padding: "10px",
              backgroundColor: "#c5b0a3" 
              ,width:'18rem',border:'dark'
              ,marginLeft:'100px',
              textAlign:'center'
              ,marginTop:'40px',marginBottom:'80px',boxShadow:'0 0 24px 0 #000000'}}
              id="card"
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Mohamed Ali</Card.Title>
                <Card.Text className={"my-1"}>Graphic designer engineer</Card.Text>
                <Card.Text>
                i'm mohamed ali a Graphic designer with 5 years of
                  experience<br/>
                  The courses that i explain:-
                  <br/>
                    - Photoshop
                  <br/>
                    - Graphic Design
                    <br/>
                    <br/>
                    <div className={classes.Icon}>
                    <i><Icon.Facebook size={20}  position="absolute" width={'40px'}/> </i>
                    <i><Icon.Github size={20}  position="absolute"  width={'40px'}/></i>
                    <i><Icon.Twitter size={20}  position="absolute" width={'40px'}/></i>
                    <i><Icon.Instagram size={20}  position="absolute" width={'40px'}/></i>
                      </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "20px"
              , backgroundColor: "#c5b0a3" 
              ,width:'18rem',border:'dark'
              ,marginRight:'40px'
              ,marginLeft:'40px',
              textAlign:'center',marginTop:'40px',marginBottom:'80px',boxShadow:'0 0 24px 0 #000000'}}
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
                <Card.Text className={"my-1"}>Graphic designer engineer</Card.Text>
                <Card.Text>
                  i'm ahmed hossam a Graphic designer with 6 years of
                  experience<br/>
                  The courses that i explain:-
                  <br/>
                    - Art and Design
                  <br/>
                    - Graphic Design
                    <br/>
                    <br/>
                    <div className={classes.Icon}>
                    <i><Icon.Facebook size={20}  position="absolute" width={'40px'}/> </i>
                    <i><Icon.Github size={20}  position="absolute"  width={'40px'}/></i>
                    <i><Icon.Twitter size={20}  position="absolute" width={'40px'}/></i>
                    <i><Icon.Instagram size={20}  position="absolute" width={'40px'}/></i>
                      </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "20px"
              , backgroundColor: "#c5b0a3" 
              ,width:'18rem',border:'dark'
              ,marginRight:'10px',
              textAlign:'center',
              marginTop:'40px',marginBottom:'80px',boxShadow:'0 0 24px 0 #000000'}}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ahmed Naser</Card.Title>
                <Card.Text className={"my-1"}>Graphic designer engineer</Card.Text>
                <Card.Text>
                i'm ahmed naser a Graphic designer with 4 years of
                  experience<br/>
                  The courses that i explain:-
                  <br/>
                    - Adobe Indesign
                  <br/>
                    - Adobe Illustrator
                    <br/>
                    <br/>
                    <div className={classes.Icon}>
                    <i><Icon.Facebook size={20}  position="absolute" width={'40px'}/> </i>
                    <i><Icon.Github size={20}  position="absolute"  width={'40px'}/></i>
                    <i><Icon.Twitter size={20}  position="absolute" width={'40px'}/></i>
                    <i><Icon.Instagram size={20}  position="absolute" width={'40px'}/></i>
                      </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "20px", 
              backgroundColor: "#c5b0a3" ,
              width:'18rem',border:'dark',
              marginLeft:'100px',marginRight:'40px'
              ,textAlign:'center',marginBottom:'140px'
              ,marginTop:'-40px',boxShadow:'0 0 24px 0 #000000'}}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title> Khalid Ahmed</Card.Title>
                <Card.Text className={"my-1"}>Graphic designer engineer</Card.Text>
                <Card.Text>
                i'm khalid ahmed a Graphic designer with 3 years of
                  experience<br/>
                  The courses that i explain:-
                  <br/>
                    - Typography
                  <br/>
                    - Graphic Design
                    <br/>
                    <br/>
                    <div className={classes.Icon}>
                    <i><Icon.Facebook size={20}  position="absolute" width={'40px'}/> </i>
                    <i><Icon.Github size={20}  position="absolute"  width={'40px'}/></i>
                    <i><Icon.Twitter size={20}  position="absolute" width={'40px'}/></i>
                    <i><Icon.Instagram size={20}  position="absolute" width={'40px'}/></i>
                      </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "20px",
               backgroundColor: "#c5b0a3" 
               ,width:'18rem',border:'dark'
               ,marginRight:'40px'
               ,textAlign:'center'
               ,marginBottom:'140px',
               marginTop:'-40px' ,boxShadow:'0 0 24px 0 #000000'}}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Mahmoud Ali</Card.Title>
                <Card.Text className={"my-1"}>Graphic designer engineer</Card.Text>
                <Card.Text>
                i'm mahmoud ali a Graphic designer with 5 years of
                  experience<br/>
                  The courses that i explain:-
                  <br/>
                    - Photoshop
                  <br/>
                    - Graphic Design
                    <br/>
                    <br/>
                    <div className={classes.Icon}>
                    <i><Icon.Facebook size={20}  position="absolute" width={'40px'}/> </i>
                    <i><Icon.Github size={20}  position="absolute"  width={'40px'}/></i>
                    <i><Icon.Twitter size={20}  position="absolute" width={'40px'}/></i>
                    <i><Icon.Instagram size={20}  position="absolute" width={'40px'}/></i>
                      </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={"col-sm-12 col-md-3  p-4 "}
              style={{ padding: "20px"
              , backgroundColor: "#c5b0a3" 
              ,width:'18rem',border:'dark'
              ,marginRight:'10px',
              textAlign:'center' ,
              marginBottom:'140px',marginTop:'-40px',boxShadow:'0 0 24px 0 #000000'}}
            >
              <Card.Img
                className={classes.imgSize}
                variant="top"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
              />
              <Card.Body>
                <Card.Title>Ali Omar</Card.Title>
                <Card.Text className={"my-1"}>Graphic designer engineer</Card.Text>
                <Card.Text>
                i'm ali omar a Graphic designer with 4 years of
                  experience<br/>
                  The courses that i explain:-
                  <br/>
                    - Photoshop
                  <br/>
                    - Graphic Design
                    <br/>
                    <br/>
                    <div className={classes.Icon}>
                    <i><Icon.Facebook size={20}  position="absolute" width={'40px'}/> </i>
                    <i><Icon.Github size={20}  position="absolute"  width={'40px'}/></i>
                    <i><Icon.Twitter size={20}  position="absolute" width={'40px'}/></i>
                    <i><Icon.Instagram size={20}  position="absolute" width={'40px'}/></i>
                      </div>
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
