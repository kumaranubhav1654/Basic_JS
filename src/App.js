import "./styles.css";

export default function App() {
  //var i=0;
  function a() {
    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log("Block Scope", i);
      }, 0);
    }
    for (var i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log("Global Scope", i);
      }, 0);
    }
  }
  a();

  return (
    <div className="App">
      <h1>To Understand scope</h1>
      <h2>Check the console log</h2>
    </div>
  );
}
