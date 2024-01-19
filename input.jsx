import React from "react";

function input(props){
    return (
      <>
        <input
          type={props.type}
          id={props.id}
          class={props.class}
          name={props.name}
          placeholder={props.placeholder}
          value = {props.value}
        />
      </>
    );
}

export default input;