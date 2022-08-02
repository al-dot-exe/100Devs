const Hello = _ => 'Hello World';
const App = _ => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log('Welcome to React console');
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <p>It is {now.toString()} o'clock</p>
      <p>By the way {a} plus {b} equals <b>{a + b}</b></p>
    </div>
  );
}

export default App;
