import countriesJson from "../data/countries.json";
import { Link } from "react-router-dom";

function CountryDetails({ selectedCountry }) {
    console.log(selectedCountry.name.common)
    const country = selectedCountry;

    return(  
        <>
        <div>

      
      <div className="container">
        <p style={{fontSize:'24px', fontWeight:'bold'}}>Country Details</p>

        <h1>{country.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width:'30%'}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} Km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {country.borders.map((countryBorders) => <li><Link to="/AND">{countryBorders}</Link></li>
                        
                    )}
                  
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
         </> )
    
   
    
   
    
   
    
  }
  
export default CountryDetails