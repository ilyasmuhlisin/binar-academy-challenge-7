import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { connect } from "react-redux";

class CardResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: [],
      // jika data belum didapatkan akan loading
      Loading: true,
    };
  }
  // mengambil data schedule
  getDataFilm = async () => {
    try {
      //   untuk menarik data dari json
      //cross untuk mencegah error dalam limiter
      await axios
        .get(
          `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`,
          { crossDomain: true }
        )
        .then((res) => {
          console.log(res.data);
          let dataRes = res.data;
          this.setState({
            dataFilm: dataRes,
            Loading: false,
          });
        });
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  };
  //   komponen dijalankan sebelum render supaya dapat menampilkan function
  componentDidMount = async () => {
    await this.getDataFilm();
  };
  render() {
    return (
      <>
        {this.state.Loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            {this.state.dataFilm.map((data, key) => {
              return (
                <Col
                  className="col-auto m-2 mx-auto"
                  style={{ textAlign: "left" }}
                  key={key}
                >
                  <Card className="mt-5" style={{ width: "20rem" }}>
                    <Card.Img
                      src={data.image}
                      alt=""
                      className="card-img-top-img-fluid"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body style={{ fontSize: "14px" }}>
                      <Card.Title className="fw-bold mt-4">
                        {/* {manufacture}/{model} */}
                        {`${data.manufacture} / ${data.model}`}
                      </Card.Title>
                      <Card.Text className="fw-bold mt-3">
                        Rp. {data.rentPerDay} / Day
                      </Card.Text>
                      <Card.Text className="mt-3" style={{ height: "90px" }}>
                        {/* {description} */}
                        {data.description}
                      </Card.Text>
                      <Card.Text>
                        {/* <i className="fw-bold mt-3"></i> */}
                        {/* <img
                          src="images/fi_settings.png"
                          alt=""
                          className="me-2"
                        /> */}
                        {data.transmission}
                      </Card.Text>
                      <Card.Text>
                        {/* <i className="fw-bold mt-3"></i> */}
                        {/* <img
                          src="images/fi_users.png"
                          alt=""
                          className="me-2"
                        /> */}
                        {data.capacity} Orang
                      </Card.Text>
                      <Card.Text className="mt-3">
                        {/* <img
                          src="images/Home/fi_calendar.png"
                          alt=""
                          className="me-2"
                        /> */}
                        {data.year}
                      </Card.Text>
                    </Card.Body>

                    <div className="d-grid gap-2">
                      <Button
                        className="mt-2"
                        href="/cars"
                        style={{ backgroundColor: "#5cb85f", border: "none" }}
                      >
                        Sewa Mobil
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </div>
        )}
      </>
    );
  }
  // const { image, manufacture, model, rent, capacity, description, transmission, year } = car;
}

const mapDispatchtoProps = (dispatch) => {
  return {
    type: "ACTIVE_ITEM",
    Activeitem: "",
  };
};

export default connect(null, mapDispatchtoProps)(CardResult);
