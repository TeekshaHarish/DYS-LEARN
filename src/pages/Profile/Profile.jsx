import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="profile_main">
        <div className="personal_details">
          <div className="personal_top_bar">Personal Details</div>
          <div className="profile_logo">S</div>
          <div className="complete_details">
            <ul>
              <li className="details_list_item">Name: Sarvesh Pahwa</li>
              <li className="details_list_item">
                Email: sarveshpahwa2003@gmail.com
              </li>
              <li className="details_list_item">Phone: 8882262811</li>
              <li className="details_list_item">Age: 21</li>
            </ul>
          </div>
          <div className="horizontal_break" />
          <div className="game_details">
            <h3>Game Stats</h3>
            <ul>
              <li className="game_details_level">
                Handwritten To Text: Level- 1
              </li>
              <li className="game_details_level">Text To Text: Level- 1</li>
              <li className="game_details_level">
                Match The Following: Level- 1
              </li>
              <li className="game_details_level">Speech to Text: Level- 1</li>
            </ul>
          </div>
        </div>
        <div className="report_card">
          <div className="report_card_header">Report Card</div>
          <div className="game_graphs">
            <div className="row">
              <div className="graph">
                Handwritten To Text <br />
                <img
                  className="graph_image"
                  src="https://cdn.ttgtmedia.com/digitalguide/images/Misc/ptpgraph.gif"
                />
              </div>
              <div className="graph">
                Text To Text <br />
                <img
                  className="graph_image"
                  src="https://cdn.ttgtmedia.com/digitalguide/images/Misc/ptpgraph.gif"
                />
              </div>
            </div>
            <div className="row">
              <div className="graph">
                Match The Following <br />
                <img
                  className="graph_image"
                  src="https://cdn.ttgtmedia.com/digitalguide/images/Misc/ptpgraph.gif"
                />
              </div>
              <div className="graph">
                Speech to Text <br />
                <img
                  className="graph_image"
                  src="https://cdn.ttgtmedia.com/digitalguide/images/Misc/ptpgraph.gif"
                />
              </div>
            </div>
          </div>
          <div className="features_count">
            <div className="counter">Summerization</div>
            <div className="counter">Flash card</div>
            <div className="counter">Speech guide</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
