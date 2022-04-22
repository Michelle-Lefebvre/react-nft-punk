import React, { useState, useEffect } from "react";
import "./Main.css";
import linkedinLogo from "../assets/owner/icons8-linkedin-2.svg";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber"> .#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                className="selectedPunk"
                src="https://lh3.googleusercontent.com/uuCmt6eW_3D_M7fdVKNeafLloIJ9X7Fl-A3V3vLGEMR9-1L2mOA8dld403fKO2HxLG2D1ia_BxHW7xyWOrKxa78CusJjisGc4yCyI9k=s120"
                alt="activePunk.owner"
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">@MMLdesigns</div>
              </div>
              <a
                href="https://www.linkedin.com/in/michellelefebvre1/"
                className="ownerLink"
              >
                <img src={linkedinLogo} alt="go to LinkedIn profile" />
              </a>
              <a href="https://twitter.com/MMLdesigns" className="ownerLink">
                <img src={twitterLogo} alt="go to Twitter profile" />
              </a>
              <div className="ownerLink">
                <img src={moreIcon} alt="go to portfolio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
