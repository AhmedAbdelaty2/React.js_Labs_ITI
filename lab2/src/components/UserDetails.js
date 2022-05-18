import { useParams } from "react-router-dom";

let UserDetails = () => {
  let { name } = useParams();

  return (
    <div className="container-sm bg-light my-5 p-5">
      <h3 className="text-center mb-4 text-primary">Hello {name}</h3>
      <p className="text-primary" style={{ fontSize: "20px" }}>
        Welcome to our website. We wish you a very nice experience.
      </p>
    </div>
  );
};

export default UserDetails;
