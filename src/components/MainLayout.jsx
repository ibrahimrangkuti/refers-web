import Header from "@/components/General/Header";
import Footer from "@/components/General/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;  
