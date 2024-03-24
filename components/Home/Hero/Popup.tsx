"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";
import { set } from "mongoose";
import axios from "axios";

const UAELiscenceValues = [
  {
    value: "0 to 6 months",
    homeCountry: true,
  },
  {
    value: "6 months to 1 year",
    homeCountry: true,
  },
  {
    value: "1 year",
    homeCountry: true,
  },
  {
    value: "2 years",
    homeCountry: false,
  },
  {
    value: "3 years",
    homeCountry: false,
  },
  {
    value: "4 years",
    homeCountry: false,
  },
  {
    value: "5 years and above",
    homeCountry: false,
  },
];
const EmirateOfRegistrationValues = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
];

const YearOfRegistrationValues = [
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2001",
  "2000",
  "1999",
  "1998 and below",
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor-Leste)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const Popup = () => {
  const [step, setStep] = useState(1);
  const [uaeLiscence, setUAELiscence] = useState("");
  const [check, setCheck] = useState(false);
  const [homeCountryLiscence, setHomeCountryLiscence] = useState("");
  const [emirateOfRegistration, setEmirateOfRegistration] = useState("");
  const [yearOfRegistration, setYearOfRegistration] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [insurance, setInsurance] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const value = UAELiscenceValues.find(
      (value) => value.value === uaeLiscence
    );
    if (value) {
      setCheck(value.homeCountry);
    }
  }, [uaeLiscence]);
  const handleSubmmit = async (e: any) => {
    e.preventDefault();
    console.log({
      fname,
      lname,
      email,
      phone,
      dob,
      nationality,
      uaeLiscence,
      homeCountryLiscence,
      vehicleYear,
      emirateOfRegistration,
      yearOfRegistration,
      vehicleMake,
      vehicleModel,
      insurance,
    });
    setLoading(true);
    if (!fname || !lname || !email || !phone || !dob || !nationality) {
      toast.error("Please fill all the fields");
      return;
    }
    if (dob > new Date(Date.now() - 568024668000).toISOString().split("T")[0]) {
      toast.error("You must be 18 years or older to apply for insurance");
      return;
    }

    const response = await axios.post("/api/quotes", {
      fname,
      lname,
      email,
      phone,
      dob,
      nationality,
      vehicleYear,
      uaeLiscence,
      homeCountryLiscence,
      emirateOfRegistration,
      yearOfRegistration,
      vehicleMake,
      vehicleModel,
      insurance,
    });
    toast.success(response.data.message);
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setDob("");
    setNationality("");
    setVehicleYear("");
    setUAELiscence("");
    setHomeCountryLiscence("");
    setEmirateOfRegistration("");
    setYearOfRegistration("");
    setVehicleMake("");
    setVehicleModel("");
    setInsurance("");
    setStep(2);
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => setStep(0)}
        className="px-10 py-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800"
      >
        Get Your Quote Now
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-center font-bold text-4xl text-red-700">
          Veeels.com
        </DialogHeader>
        {step < 2 && (
          <div>
            <p className="text-center text-xs sm:text-sm font-light text-black">
              Please provide the following information to initiate your car
              insurance quote.
            </p>
            <p className="mt-3 text-center text-lg font-semibold text-black">
              Step{" "}
              <span className="text-red-700 font-extrabold">{step + 1}</span> of{" "}
              <span className="text-red-700 font-extrabold">2</span>
            </p>
          </div>
        )}
        <form onSubmit={handleSubmmit} className="mt-5">
          {step === 0 && (
            <div className="space-y-3 sm:space-y-6 flex flex-col">
              <div className="flex w-full gap-3 sm:gap-5 flex-col sm:flex-row">
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">
                    UAE Liscence held for
                  </p>
                  <Select onValueChange={(e) => setUAELiscence(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {UAELiscenceValues.map((value) => (
                        <SelectItem value={value.value}>
                          {value.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">
                    Emirate of registration
                  </p>
                  <Select onValueChange={(e) => setEmirateOfRegistration(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {EmirateOfRegistrationValues.map((value) => (
                        <SelectItem value={value}>{value}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {check && (
                <div className="w-full sm:w-1/2">
                  <p className="mb-1 text-sm sm:text-base">
                    Home country driving licence held for
                  </p>
                  <Select onValueChange={(e) => setHomeCountryLiscence(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {UAELiscenceValues.map((value) => (
                        <SelectItem value={value.value}>
                          {value.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="flex w-full  flex-col sm:flex-row  gap-3 sm:gap-5">
                <div className="w-full sm:w-[35%]">
                  <p className="mb-1 text-sm sm:text-base">
                    Year of manufacture
                  </p>
                  <Select onValueChange={(e) => setYearOfRegistration(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {YearOfRegistrationValues.map((value) => (
                        <SelectItem value={value}>{value}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-5 w-full sm:w-[65%]">
                  <div className="w-full">
                    <p className="mb-1 text-sm sm:text-base">Car Make</p>
                    <input
                      type="text"
                      placeholder=""
                      value={vehicleMake}
                      onChange={(e) => setVehicleMake(e.target.value)}
                      className="border-b border-black p-2 outline-none w-full"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mb-1 text-sm sm:text-base">Car Model</p>
                    <input
                      type="text"
                      placeholder=""
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      className="border-b border-black p-2 outline-none w-full"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mb-1 text-sm sm:text-base">Car Year</p>
                    <input
                      type="text"
                      placeholder=""
                      value={vehicleYear}
                      onChange={(e) => setVehicleYear(e.target.value)}
                      className="border-b border-black p-2 outline-none w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="mb-2 text-sm sm:mt-10">
                  Are you looking for fully comprehensive insurance or third
                  party insurance?
                </p>
                <Select onValueChange={(e) => setInsurance(e)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Comprihensive">
                      Comprihensive Insurance
                    </SelectItem>
                    <SelectItem value="Third Party">
                      Third Party Insurance
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <button
                type="button"
                className="bg-red-700 text-white py-3 text-lg"
                onClick={() => {
                  if (
                    !uaeLiscence ||
                    !emirateOfRegistration ||
                    !yearOfRegistration ||
                    !vehicleMake ||
                    !vehicleModel ||
                    !insurance ||
                    (check && !homeCountryLiscence)
                  ) {
                    toast.error("Please fill all the fields");
                    return;
                  }
                  setStep(1);
                }}
              >
                Next
              </button>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-3 sm:space-y-6 flex flex-col">
              <div className="flex w-full  flex-col sm:flex-row  gap-3 sm:gap-5">
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">First Name</p>
                  <input
                    type="text"
                    placeholder="e.g. John"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    className="border-b border-black p-2 outline-none w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">Last Name</p>
                  <input
                    type="text"
                    placeholder="e.g. Doe"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    className="border-b border-black p-2 outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex w-full  flex-col sm:flex-row  gap-3 sm:gap-5">
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">Email</p>
                  <input
                    type="text"
                    placeholder="e.g.johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b border-black p-2 outline-none w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">Mobile</p>
                  <input
                    type="text"
                    placeholder="e.g. 971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-b border-black p-2 outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex w-full items-center flex-col sm:flex-row  gap-3 sm:gap-5">
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">Date of birth</p>
                  <input
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="border rounded-md p-1.5 outline-none w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="mb-1 text-sm sm:text-base">Nationality</p>
                  <Select onValueChange={(e) => setNationality(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries?.map((value) => (
                        <SelectItem value={value}>{value}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <button
                  type="button"
                  className="bg-red-700 text-white py-3 text-lg w-full"
                  onClick={() => {
                    setStep(0);
                  }}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-red-700 text-white py-3 text-lg w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col items-center sm:-translate-y-5">
              <video
                src="/tick.mp4"
                muted
                autoPlay
                className="w-32 rounded-full"
              ></video>
              <p className="text-center text-lg mt-5 font-semibold">
                We appreciate your effort in completing the information form.
                Rest assured, our team will review it and get back to you
                shortly.
              </p>
              <p className="mt-5 text-center text-red-700 text-lg font-bold">
                Thank you for your patience!
              </p>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
