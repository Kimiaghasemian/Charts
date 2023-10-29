import React, { useState } from 'react'
import '../styles/table.css'
export default function Table() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>درس</th>
            <th>درصد</th>
            <th>آزمون</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ریاضی</td>
            <td>50%</td>
            <td>آزمون 1</td>
          </tr>
          <tr>
            <td>ریاضی</td>
            <td>70%</td>
            <td>آزمون 2</td>
          </tr>
          <tr>
            <th colspan="3">60%</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
