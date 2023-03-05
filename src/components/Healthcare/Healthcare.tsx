import HealthcareCard from "./components/HealthcareCard";
import SymptomChecker from "../../assets/card/SymptomChecker.png"
import MedicalSupport from "../../assets/card/MedicalSupport.png"
import Conditions from "../../assets/card/Conditions.png"
import Google from "../../assets/button/Google.png"
import AppStore from "../../assets/button/AppStore.png"

const Healthcare = () => {
    return (
        <div className="healthcare_container page_container">
            <h1><span>Healthcare</span> at your Fingertips.</h1>
            <p>Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring
                healthcare to<br/>your fingertips. Signup and be a part of the new health culture.</p>
            <div className="healthcare_body_container">
                <HealthcareCard image={SymptomChecker} title="Symptom Checker"
                                text="Check if you are infected by COVID-19 with our Symptom Checker"/>
                <HealthcareCard image={MedicalSupport} title="24x7 Medical support"
                                text="Consult with 10,000+ health workers about your concerns."/>
                <HealthcareCard image={Conditions} title="Conditions"
                                text="Bringing premium healthcare features to your fingertips."/>
            </div>
            <div className="download_buttons_container">
                <a>
                    <img src={Google} alt="Google"/>
                </a>
                <a>
                    <img src={AppStore} alt="Google"/>
                </a>
            </div>
        </div>
    )
}

export default Healthcare