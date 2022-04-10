import React from "react";

//style
import "./Details.css";

export default function Details({ allFeed }) {
  return (
    <div className="all-details">
      {allFeed.slice(0, 1).map((detail) => (
        <>
          <div className="first">
            <div className="head">
              <img src={detail.img} alt="" />
              <p>
                <span style={{ color: "#0464D3" }}>moderator</span> • 3 October
                2022 • 9:41
              </p>
            </div>
            <p className="first-details">{detail.details}...</p>
            <p className="more">More...</p>
            <img
              className="first-img"
              style={{ width: "300px" }}
              src="https://cdn.pixabay.com/photo/2020/08/25/12/51/ring-5516736_960_720.jpg"
              alt=""
            />
            <p className="rews">
              Reply
              <img src={"../assets/arrow-alt-down.svg"} alt="" /> 2250
              <img src={"../../assets/arrow-alt-down (1).svg"} alt="" />
              2250
            </p>
          </div>

          <div className="others">
            <div className="head">
              <img
                className="dark-person"
                src={"../assets/dark-small.png"}
                alt=""
              />
              <p>username • 3d</p>
            </div>
            <p className="first-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="rews">
              Reply
              <img src={"../assets/arrow-alt-down.svg"} alt="" /> 2250
              <span style={{ color: "#03B425" }}>
                <img src={"../../assets/arrow-alt-down-green.svg"} alt="" />
                2250
              </span>
            </div>
          </div>

          <div className="second">
            <div className="head">
              <img
                className="dark-person"
                src={"../assets/white-small.png"}
                alt=""
              />
              <p>username • 6d</p>
            </div>
            <p className="first-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="rews">
              Reply
              <img src={"../assets/arrow-alt-down.svg"} alt="" /> 2250
              <img src={"../../assets/arrow-alt-down (1).svg"} alt="" />
              2250
              <p className="reply">
                <img src={"../assets/reply.svg"} alt="" />3
              </p>
            </p>

            <div className="third">
              <div className="head">
                <img src={"../assets/girl-small.png"} alt="" />
                <p>username • 3h</p>
              </div>
              <p className="first-details">
                <span style={{ color: "#03B425" }}>@username</span> lorem ipsum
                dolor sit amet, consectet adipiscing elit, sed do
              </p>

              <div className="grid-img">
                <img
                  className="one"
                  src="https://i.pinimg.com/originals/f0/53/b0/f053b0f732cb7e38a0d7891e633600b2.jpg"
                  alt=""
                />
                <img
                  className="two"
                  src="https://www.wallpaperup.com/uploads/wallpapers/2017/08/29/1097775/a48f5068c7d43ab3bc4800d3b20be997-700.jpg"
                  alt=""
                />
                <img
                  className="three"
                  src="https://www.wallpaperup.com/uploads/wallpapers/2017/08/29/1097775/a48f5068c7d43ab3bc4800d3b20be997-700.jpg"
                  alt=""
                />
              </div>
              <p className="rews">
                Reply
                <img src={"../assets/arrow-alt-down.svg"} alt="" /> 2250
                <img src={"../../assets/arrow-alt-down (1).svg"} alt="" />
                2250
              </p>
            </div>
            <div className="last">
              {" "}
              <p>Reply to this thread</p>{" "}
              <img src={"../assets/arrows.svg"} alt="" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
