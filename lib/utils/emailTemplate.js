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
<html>
  <head>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        display: flex;
        justify-content: center;
        font-family: sans-serif;
        text-align: justify;
        align-items: center;
        font-size: 16px;
        line-height: 1.5;
      }
      .container {
        background-color: #252424;
        color: #ccc;
        border: 1px solid #ccc;
        margin: 100px 0;
        width: 60vw;
        padding: 0;
      }
      h1 {
        text-align: center;
        border-bottom: 1px solid #ccc;
        padding: 2rem;
        color: rgb(255, 2, 2);
        background-color: #333333;
      }
      .inner {
        padding: 3rem;
      }
      .box {
        width: 100%;
        background-color: rgba(255, 0, 0, 0.1);
        padding: 1rem;
        margin: 1rem 0;
      }
      table {
        width: 50%;
        margin: 0 2rem;
      }
      footer {
        margin-top: 100px;
        padding: 1rem 3rem;
        background-color: #333333;
      }
      h4 {
        margin-top: 1rem;
        font-weight: 800;
      }
      a {
        color: #ccc;
      }
      i {
        font-size: 1.5rem;
        margin: 0 0.3rem;
        color: #ccc;
      }
      h5 {
        margin-bottom: 1.5rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Your Car Insurance Quotes</h1>
      <div class="inner">
        <p>
          Dear Talha!
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
              <td>${email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>${phone}</td>
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
        <h2 style="text-align: center">
          <a href="https://www.veeels.com/">www.veeels.com</a>
        </h2>
      </footer>
    </div>
  </body>
</html>
`;
};
