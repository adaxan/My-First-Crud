import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MyFormData from "./components/MyFormData";

export default function App() {
  return (
    <>
      <Navbar/>
      <main className="grow">
        <MyFormData />
      </main>
      <Footer/>
    </>
  )
}
