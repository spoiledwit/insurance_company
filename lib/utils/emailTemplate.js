export const emailTemplate = (
  fname,
  lname,
  email,
  phone,
  dob,
  nationality,
  uaeLiscence,
  homeCountryLiscence,
  emirateOfRegistration,
  yearOfRegistration,
  vehicleMake,
  vehicleModel,
  insurance
) => {
  return `
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Roboto", sans-serif;
          text-align: justify;
          font-size: 16px;
          line-height: 1.5;
          background-color: #fff;
        }
        .container {
          background-color: #fff;
          color: #333;
          border: 1px solid #ddd;
          width: 100%;
          height: 100%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          border-bottom: 1px solid #ddd;
          padding: 1.5rem;
          color: #fff;
          background-color: #d32f2f;
        }
        .inner {
          padding: 2rem;
        }
        .box {
          background-color: rgba(211, 47, 47, 0.1);
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .box:hover {
          background-color: rgba(211, 47, 47, 0.2);
        }
        table {
          width: 100%;
          margin: 0 auto;
          border-collapse: collapse;
        }
        table td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }
        footer {
          padding: 1rem 2rem;
          background-color: #d32f2f;
          text-align: center;
          color: #fff;
        }
        h4 {
          margin-top: 1rem;
          font-weight: 700;
        }
        a {
          color: #fff !important;
          text-decoration: none;
        }
        #email {
          color: #000 !important;
        }
        a:hover {
          text-decoration: underline;
        }
        h6 {
          text-align: center;
        }
        h6 span {
          background-color: #d32f2f;
          font-size: 0.8rem;
          color: #fff;
          padding: 0.5rem;
          border-radius: 50px;
        }
        .title {
          text-align: center;
          margin: 1.5rem 0;
          font-size: medium;
        }
        ul {
          margin-left: 1rem;
        }
        .price {
          display: block;
          text-align: center;
          background-color: #d32f2f;
          color: #fff;
          padding: 5px;
          border-radius: 50px;
          margin: 1rem 0;
        }
        .plan_table {
          margin-bottom: 10px;
          font-size: small;
          border-top: 1px dashed;
          border-bottom: 1px dashed;
        }
        .plan_table td {
          padding: 5px;
          border: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Your Car Insurance Quotes</h1>
        <div class="inner">
          <p>
            Dear ${fname}!
            <br />
            <br />
            Thank you for requesting a quote for your car insurance. We have now
            received all the information we need to provide you with a quote.
            Please find below the details of your quote. If you would like to
            proceed with this quote, please click on the link below to complete
            your purchase. If you have any questions, please do not hesitate to
            get in touch. <br />
            We look forward to hearing from you.
          </p>
          <br />
          <div class="box">
            <h5>Your Vehicle Details:-</h5>
            <table>
              <tr>
                <td>Vehicle Make</td>
                <td>${vehicleMake}</td>
              </tr>
              <tr>
                <td>Vehicle Model</td>
                <td>${vehicleModel}</td>
              </tr>
              <tr>
                <td>Year of Registration</td>
                <td>${yearOfRegistration}</td>
              </tr>
            </table>
          </div>
          <div class="box">
            <h5>Your Personal Details:-</h5>
            <table>
              <tr>
                <td>Name:</td>
                <td>${fname} ${lname}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><a id="email" href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>${[phone]}</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>${dob}</td>
              </tr>
              <tr>
                <td>Nationality:</td>
                <td>${nationality}</td>
              </tr>
            </table>
          </div>
          <h2>Our Insurance Plans:</h2>
          <div class="box">
            <h6><span>Comprehensive</span></h6>
            <h5 class="title">Liva (RSA) Motor Smart</h5>
            <ul>
              <li>myAlfred membership</li>
              <li>Fast track claims service</li>
              <li>Roadside assistance</li>
              <li>Driver cover</li>
              <li>Passenger cover</li>
            </ul>
            <a href="https://www.veeels.com/" class="price">
              Buy Now <br />
              AED 1,540.00 + VAT
            </a>
          </div>
          <div class="box">
            <h6><span>Comprehensive</span></h6>
            <h5 class="title">Sukoon - Gold</h5>
            <table class="plan_table">
              <tr>
                <td>Car Value (AED)</td>
                <td>25598</td>
              </tr>
              <tr>
                <td>Excess (AED)</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Repair Type</td>
                <td>Premium Workshop</td>
              </tr>
            </table>
            <ul>
              <li>myAlfred membership</li>
              <li>Fast track claims service</li>
              <li>Roadside assistance</li>
              <li>Driver cover</li>
              <li>Passenger cover</li>
            </ul>
            <a href="https://www.veeels.com/" class="price">
              Buy Now <br />
              AED 1,400.00 + VAT
            </a>
          </div>
  
          <div class="box">
            <h6><span>Comprehensive</span></h6>
            <h5 class="title">Tokio Must</h5>
            <table class="plan_table">
              <tr>
                <td>Car Value (AED)</td>
                <td>25598</td>
              </tr>
              <tr>
                <td>Excess (AED)</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Repair Type</td>
                <td>Premium Workshop</td>
              </tr>
            </table>
            <ul>
              <li>myAlfred membership</li>
              <li>Fast track claims service</li>
              <li>Roadside assistance</li>
              <li>Driver cover</li>
              <li>Passenger cover</li>
            </ul>
            <a href="https://www.veeels.com/" class="price">
              Buy Now <br />
              AED 1,600.00 + VAT
            </a>
          </div>
        </div>
        <footer>
          <h4>Registered Office:-</h4>
          <p>International city france cluster p24 office s 11, Dubai, UAE</p>
          <h4>Contact:-</h4>
          <p>
            Telephone: +971 4 555555 <br />
            Mobile: +971 55 5555555 <br />
            Whatsapp: +971 50 7114383
          </p>
          <h4 style="text-align: center">
            <a href="https://www.veeels.com/">www.veeels.com</a>
          </h4>
        </footer>
      </div>
    </body>
  </html>  
`;
};
