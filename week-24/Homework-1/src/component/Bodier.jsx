import React from 'react';
import './Bodier.css';
function Bodier() {
  return (
    <div>
      <div className="input_info">
        <label>Name</label>
        <input className="input_type" type="text" name="name" />
      </div>
      <div className="input_info">
        <label>Age</label>
        <input className="input_type" type="number" name="age" />
      </div>
      <div className="input_info">
        <label>DoB</label>
        <input className="input_type" type="date" name="dob" />
      </div>
      <div className="input_info">
        <label>About me</label>
        <textarea className="input_type" type="text" name="about" />
      </div>
      <div>
        <label>Gender</label>
        <select className="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <div>Hobbies</div>
        <div class="checkbox_hobbies">
          <label>
            <input type="checkbox" name="hobbies" value="soccer" />
            Soccer
          </label>
        </div>
        <div class="checkbox_hobbies">
          <label>
            <input type="checkbox" name="hobbies" value="Video_game" />
            Video game
          </label>
        </div>
        <div class="checkbox_hobbies">
          <label>
            <input type="checkbox" name="hobbies" value="Sleep" />
            Sleep
          </label>
        </div>
      </div>
      <div>
        Are you a code ninja?
        <input type="radio" name="codeninja" value="yes" />
        yes
        <input type="radio" name="codeninja" value="no" />
        No
      </div>
    </div>
  );
}
export default Bodier;
