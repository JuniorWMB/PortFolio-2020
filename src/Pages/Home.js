import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import Header from "../Components/Header";
import "./home.css";

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        <div className="home__textleft">
          <p>Hi,I'm Junior Wembopa</p>
        </div>
        <div className="home__textright">
          <p>
            Description: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Doloribus nihil eligendi deleniti, ut iusto veniam?
            Dignissimos possimus id est error dicta architecto. Soluta ea quo
            corrupti alias, modi tempore similique.
          </p>
          <div className="home__social">
            <GitHub size={50} />
            <Linkedin size={50} />
            <Twitter size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
