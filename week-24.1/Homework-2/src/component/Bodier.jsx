import React from 'react';
import './Bodier.css';
function Bodier() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Company</td>
            <td>Contract</td>
            <td>Country</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Bodier;
