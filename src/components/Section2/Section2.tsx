import React, { useEffect, useRef } from "react";
import classes from './Section2.module.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap";

function Section2() {


const ref1 = useRef<any>(null)
const ref2 = useRef<any>(null)

useEffect(()=>{

    gsap.fromTo(ref1.current,{
        x:-100,
       
    },{
        x:50,
        duration:2
    });

    gsap.fromTo(ref2.current,{
        x:-200,
    },{
        x:100,
        duration:3
    })

},[])

  return <div className={classes.main}>
                <div className={classes.parent}>
                        <div className={classes.left_child}>
                            <div className={classes.upper_part}></div>
                            <div className={classes.lower_part}>
                                <div className={classes.part_1} ref={ref1}>
                                       <div>card1</div>
                                       <div>card2</div>
                                </div>
                                <div className={classes.part_2} ref={ref2}>
                                      <div>card3</div>
                                      <div>card4</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right_child}></div>
                </div>
  </div>;
}

export default Section2;
