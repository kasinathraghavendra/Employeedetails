import "./styles.css";
let userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer"
  }
];
function Userprofile(props) {
  const { userdetails } = props;
  const { name, role, imageUrl } = userdetails;
  return (
    <div class="cardcontainer">
      <div>
        <img src={imageUrl} className="image" alt="img" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Employes Details</h1>
      {userDetailsList.map((eachitem) => (
        <Userprofile userdetails={eachitem} />
      ))}
    </div>
  );
}
