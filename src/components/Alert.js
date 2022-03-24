import React from 'react'

function Alert(props) {
console.log("Alert .js");

    const capitalize = (word)=>{
        console.log(props.alert.type);
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   props.alert && <div className={'alert alert-warning alert-dismissible fade show ,'} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}
//${props.alert.type}
export default Alert
