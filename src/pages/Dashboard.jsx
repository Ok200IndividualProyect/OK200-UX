import Header from "../components/Header/Header";
import Main_dashboard from "../components/Mains/Main_dashboard";

export default function Dashboard () {
return (
    <div>
        <Header 
  linkText="Blog"
  linkTo="/dashboard"
  showLogo={true}
  className="custom-header"
/>
        <Main_dashboard />

    </div>
)  }