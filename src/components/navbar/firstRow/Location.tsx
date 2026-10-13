
const indianCities = [
  // Tier 1 Cities
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Ahmedabad",

  // Tier 2 Cities
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Nagpur",
  "Nashik",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Coimbatore",
  "Kochi",
  "Thiruvananthapuram",
  "Visakhapatnam",
  "Vijayawada",
  "Mysuru",
  "Mangaluru",
  "Madurai",
  "Tiruchirappalli",
  "Jodhpur",
  "Udaipur",
  "Dehradun",
  "Agra",
  "Kanpur",
  "Varanasi",
  "Prayagraj",
  "Patna",
  "Ranchi",
  "Raipur",
  "Bhubaneswar",
  "Guwahati",
  "Jalandhar",
  "Ludhiana",
  "Amritsar",
  "Meerut",
  "Gwalior",
  "Jabalpur",
  "Chhatrapati Sambhajinagar",
  "Kolhapur",
  "Solapur",
  "Siliguri",
  "Dhanbad",
  "Jamshedpur",
  "Warangal",
  "Tiruppur"
];

function Location() {
  return (
    <div>
        <label><strong>Choose your location: </strong></label>
        <select>
            {indianCities.map((city,index)=><option key={index}>{city}</option>)}
        </select>
    </div>
  )
}

export default Location