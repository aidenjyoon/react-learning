import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="card">
        <h1>Task 1</h1>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
