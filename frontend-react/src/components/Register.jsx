import InputWithLabel from "./InputWithLabel";
import { NavLink } from "react-router-dom";
import Header from "./Header";
const Register = () => {

    return (
        <>
            <Header
        headerText="Register"
      
      />

            <InputWithLabel
                id="adsoyad"
                label="Ad Soyad:"
                type="text"
                isFocused
                onInputChange={() => null}
                value={" "}
            />
            <InputWithLabel
                id="epostaa"
                label="E-posta: "
                type="text"
                isFocused
                onInputChange={() => null}
                value={" "}
            />
             <InputWithLabel
                id="sifre"
                label="Şifre: "
                type="password"
                isFocused
                onInputChange={() => null}
                value={" "}
            />
            <h4>
                <NavLink to={"/login/"}> Giriş Yap</NavLink>
            </h4>

            <button className="btn btn-default pull-right">Kayıt Ol</button>
        </>
    )

}
export default Register;