function App() {
  return (
    <div className="bg-white rounded-[16px] m-4 p-4 max-w-[400px] shadow-lg">
      <img
        className="max-w-[100%] rounded-[inherit] mb-4"
        src={require("../images/image-qr-code.png")}
        alt="qr-code"
      />
      <div className="p-2">
        <h1 className="lg:text-3xl">
          Improve your front-end skills by building project
        </h1>
        <p className="lg:text-xl">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
