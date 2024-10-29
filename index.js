const calculate = () => {
  const baseValue = document.getElementById('base').value;
  const exponentValue = document.getElementById('exponent').value;

  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({ base: baseValue, exponent: exponentValue });
  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // make API call to API gateway
  fetch(
    "https://anohpr7ll3.execute-api.ap-southeast-2.amazonaws.com/dev",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => alert(JSON.parse(result).body))
    .catch((error) => console.log("error", error));
};

document.getElementById("calculateBtn").addEventListener("click", calculate);