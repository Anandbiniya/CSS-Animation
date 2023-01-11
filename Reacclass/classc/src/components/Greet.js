import react from "react";
const Greet = (props) => {
  //there are two wasy to destructre the props in functional component
  //first way to destruce in function parameter
  //   { name, hero }
  //destrucre in function body
  const { name, hero } = props;

  return (
    <div>
      <h1>
        {name} {hero}
      </h1>
    </div>
  );
};
export default Greet;
// when we use default when we import we can give any name to tag
