import classes from "./Mobile.module.scss";
import Item from "./Item";
import Icon from "./Icon";
import { useEffect, useState, useRef } from "react";

function Mobile({ left }) {
  let [show, setShow] = useState(false);
  let openRef = useRef();
  let profileRef = useRef();
  let coverRef = useRef();
  let iconsRef = useRef();
  let nameRef = useRef();
  let imageRef = useRef();

  useEffect(() => {
    if (!show) {
      coverRef.current.style.height = "5px";
      imageRef.current.style.backgroundSize = "300%";
      imageRef.current.style.backgroundPosition = "0 -1100%";
      setTimeout(() => {
        iconsRef.current.style.opacity = 0;
      }, 200);
      setTimeout(() => {
        coverRef.current.style.width = 0;
        nameRef.current.style.opacity = 0;
      }, 600);
      setTimeout(() => {
        profileRef.current.style.width = 0;
        profileRef.current.style.height = 0;
        profileRef.current.style.transform =
          "translate(-50%, -50%) rotate(180deg)";
      }, 1000);
      setTimeout(() => {
        openRef.current.style.width = "100%";
      }, 2000);
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      openRef.current.style.width = 0;
      setTimeout(() => {
        profileRef.current.style.width = "80px";
        profileRef.current.style.height = "80px";
        profileRef.current.style.transform = "translate(-50%, -50%) rotate(0)";
      }, 200);
      setTimeout(() => {
        nameRef.current.style.opacity = 1;
        coverRef.current.style.width = "80%";
        coverRef.current.style.height = "5px";
      }, 600);
      setTimeout(() => {
        imageRef.current.style.backgroundPosition = "0 center";
        coverRef.current.style.height = "140px";
        iconsRef.current.style.opacity = 1;
      }, 1000);
      setTimeout(() => {
        imageRef.current.style.backgroundSize = "186%";
      }, 1400);
    }
  }, [show]);
  return (
    <div className={classes.mobileWrapper} style={{ left: left }}>
      <div className={classes.return} onClick={() => setShow(false)}>
        <div className={classes.line} style={{ transform: "rotate(45deg)" }} />
        <div className={classes.line} style={{ transform: "rotate(-45deg)" }} />
      </div>
      <div
        className={classes.open}
        ref={openRef}
        onClick={() => setShow(true)}
      />
      <div className={classes.mobileFrameLine} />
      <div className={classes.mobileFrameDot} />
      <div
        className={classes.profileImage}
        ref={profileRef}
        style={{
          backgroundImage: "url('/interactive/assets/queenElizabeth.jpeg')",
        }}
      />
      <div className={classes.name} ref={nameRef}>
        A-Queen
      </div>
      <div
        className={classes.cover}
        ref={coverRef}
        style={{ backgroundImage: "url('/interactive/assets/queenCover.png')" }}
      />
      <div className={classes.iconsWrapper} ref={iconsRef}>
        <Icon url="instagramIcon.png" />
        <Icon url="githubIcon.png" />
        <Icon url="linkdinIcon.png" />
        <Icon url="mailIcon.png" />
        <Icon url="phoneIcon.png" />
      </div>
      <div
        className={classes.image}
        ref={imageRef}
        style={{ backgroundImage: "url('/interactive/assets/bigBen.png')" }}
      />
      <Item
        bottom="170px"
        header="ABOUT ME"
        top="0px"
        show={show}
        animation={true}
      />
      <Item
        bottom="120px"
        header="WHAT'S NEW"
        top="50px"
        show={show}
        animation={true}
      />
      <Item
        bottom="70px"
        header="AT YOUR SERVICE"
        top="100px"
        show={show}
        animation={true}
      />
      <Item
        bottom="20px"
        header="LET'S MEET"
        top="150px"
        show={show}
        animation={true}
      />
    </div>
  );
}

export default Mobile;
