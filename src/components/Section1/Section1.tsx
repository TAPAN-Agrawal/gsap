import React, { useEffect, useRef } from "react";
import classes from "./Section1.module.scss";
import Navbar from "../Navbar/Navbar";
import { gsap } from "gsap";
import img1 from "../../Assets/Images/spin-removebg-preview.png";
import img2 from "../../Assets/Images/bounce.jpg";
import Typewriter from "typewriter-effect";

function Section1() {
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.to(ref2.current, {
      // x:100,
      scale: 4,
      rotation: -720,
      duration: 3,
    });




    t1.fromTo(
      ref1.current,
      {
        x: 240,
        y: -350,
      },
      {
        // x:240,
        y: 150,
        duration: 3,
      }
    );

    t1.fromTo(
      ref3.current,
      
      {
        y: -700,
        x: -1000,
      },
      {
        y: 200,
        // delay:5,
        duration: 5,
        ease: "bounce",
      }
    );

    // t1.pause(5)

  }, []);

  return (<div className={classes.main}>
  <div className={classes.nav}>
    <Navbar/>
    </div>
    <div className={classes.parent}>
      
      <div className={classes.left_part}>
        <div className={classes.typewritting} ref={ref1}>
          <div className={classes.type1}> #Editors Choice App of 2020</div>
          <div className={classes.tick}>✔</div>

          <div className={classes.type2}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Best app for your modern lifestyle .")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(200)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={classes.type3}>TRY FOR FREE</div>
        </div>
      </div>
      <div className={classes.right_part}>
        <img src={img1} ref={ref2} className={classes.img1} />
      </div>
      <div className={classes.bounce} ref={ref3}>
        <div className={classes.bounce_1}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            numquam provident dicta!
          </div>
          <div>$12.00</div>
          <div>Ios app</div>
        </div>
        <div className={classes.bounce_2}>
          <img src={img2} className={classes.bounce_img2} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section1;
