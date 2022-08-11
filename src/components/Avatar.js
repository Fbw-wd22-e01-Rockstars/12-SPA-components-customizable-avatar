import React from "react";

export default function Avatar(props) {
  return (
    <div style={{width:"300px"}}>
      <img className={`${props.size} ${props.type}`} src={props.src} alt="" />
      <p>
        Size : {props.size} with{" "}
        {props.size === "s"
          ? "30X30"
          : props.size === "m"
          ? "60X60"
          : props.size === "l"
          ? "120X120"
          : "200X200"}
      </p>
      <p>Type: {props.type}</p>
    </div>
  );
}

Avatar.defaultProps = {
  size: "m",
  type: "square",
};

/* export default function Avatar(props) {
    const {src} = props
    return (
      <div>
          <img src={src} alt="" />
      </div>
    )
  }

export default function Avatar(props) {
    return (
      <div>
          <img src={props.src} alt="" />
      </div>
    )
  } */

/*   function sum(a=2,b=4){
      console.log(a+b)
  }

  sum() // 6
  sum(3,5) //8 */
