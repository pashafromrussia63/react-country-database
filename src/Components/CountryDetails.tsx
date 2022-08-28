import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import BorderCountries from './BorderCountries';
import { ReactComponent as ReturnIcon } from '../icons/arrow.svg';
import { Country } from "../types";
import {
  formatNumber,
  getNativeName,
  getCurrencies,
  getLanguages
} from '../helpers';
import "./CountryDetails.scss";

function CountryDetails({ countries } : { countries: Country[] }) {
  let { countryCode } = useParams();

  let country = countries.find(el => el.cca3 === countryCode);
  if (!country) return <Navigate to="/" />;

  return (
    <div className="countryDetails">
      <Link
        className="countryDetails-back"
        to="/"
      >
        <ReturnIcon className="countryDetails-backIcon"/>
        Back
      </Link>
      <div className="countryDetails-content">
        <img
          className="countryDetails-flag"
          src={country.flags.svg}
          alt={country.name.common}
        ></img>
        <div className="countryDetails-info">
          <div className="countryDetails-title">{country.name.common}</div>
          <div className="countryDetails-main">
            <div className="countryDetails-column">
              <div>
                <span className="countryDetails-label">Native name: </span>
                {getNativeName(country.name.nativeName)}
              </div>
              <div>
                <span className="countryDetails-label">Population: </span>
                {formatNumber(country.population)}
              </div>
              <div>
                <span className="countryDetails-label">Region: </span>
                {country.region}
              </div>
              <div>
                <span className="countryDetails-label">Sub Region: </span>
                {country.subregion}
              </div>
              <div>
                <span className="countryDetails-label">Capital: </span>
                {country.capital}
              </div>
            </div>
            <div className="countryDetails-column">
              <div>
                <span className="countryDetails-label">Top-level domain: </span>
                {country.tld}
              </div>
              <div>
                <span className="countryDetails-label">Currencies: </span>
                {getCurrencies(country.currencies)}
              </div>
              <div>
                <span className="countryDetails-label">Languages: </span>
                {getLanguages(country.languages)}
              </div>
            </div>
          </div>
          <BorderCountries
            countries={ countries }
            country={ country }
          />
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
