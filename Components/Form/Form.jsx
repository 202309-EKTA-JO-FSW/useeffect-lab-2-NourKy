import React ,{ useState } from "react";
export default function Form({onInput}) {
  const [inputUserName,setInputUserName]=useState('');
  function handleInput(event)
  {
    event.preventDefault();
    console.log("inputUserNameSub",inputUserName)
    onInput(inputUserName);

  }
 function handleInputText(event)
 {
  const updatedValue = event.target.value;
  setInputUserName(updatedValue);
  console.log("inputUserName", updatedValue);
 }
  return (
    <form onSubmit={handleInput}>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input type="text" className="form-control" placeholder="User Name" onChange={handleInputText} />
        <button type="submit">enter</button>
      </div>
    </form>
  );
}
