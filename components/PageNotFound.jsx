import {Link} from "react-router-dom"

function PageNotFound(){

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h1>Page not found</h1>

      <img src="../src/assets/JustforLaughs.jpg" />
      <Link to="/">Go back to Home</Link>

    </div>
    
  )
}

export default PageNotFound