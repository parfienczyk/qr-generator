import React from 'react';
import QRCode from 'qrcode';
import queryString from 'query-string';

import { Form } from "components/QR/Form/Form";

import './styles.css'

const QR_VERSION = 10; // Calculated QR Code version

class QR extends React.Component {
  state = {
    value: '',
  }

  onChange = (event) => {
    const valueForm = event.target.value;

    this.onQR(valueForm);
  }

  onQR(value) {
    this.setState({ value }, () => {
      if (value) {
        this.generateQR(this.state.value);
      }
      this.updateQueryParams();
    });
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (queryParams && queryParams.query) {
      this.onQR(queryParams.query);
    }
  }

  updateQueryParams() {
    this.props.history.push({
      pathname: '/',
      search: `?query=${this.state.value}`,
    });
  }

  generateQR = async text => {
    try {
      await QRCode.toCanvas(
        document.getElementById('canvas'),
        text,
        { version: QR_VERSION }, (error) => {
          if (error) console.error(error)
          // console.log('success!');
        });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <section className="Wrapper">
        <div>
          <Form
            qrInputValue={this.state.value || ''}
            onChange={this.onChange}
          />
        </div>
        <div>
          {this.state.value && <canvas id="canvas"></canvas>}
        </div>
      </section>
    );
  }
}

export default QR;