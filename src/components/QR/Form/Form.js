import React from 'react';
import './styles.css';

export const Form = (props) => (
  <form>
    <label>
      <input
        type="text"
        value={props.qrInputValue}
        onChange={props.onChange}
        placeholder="Enter url or text..." />
    </label>
  </form>
);