import React from 'react';

function SearchBar(value) {
//  function handleClick(){
//    console.log(value);
//  }

function getClickedInput(input) {
  alert(`${input}`);
}

return (
  <form>
    <div className="form-group">
      <label>
        <input type="radio" value="male"
        onClick={() => getClickedInput('male')}/>
        male
          </label>
      <label>
        <input type="radio" value="female" 
        onClick={() => getClickedInput('female')}/>
        female
          </label>
    </div>
  </form>
)};

export default SearchBar;