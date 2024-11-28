import InputWithLabel from "./InputWithLabel";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Login = () => {

    return (
        <>
           <Header
        headerText="Login"
      
      />

            <InputWithLabel
                id="eposta"
                label="E posta:"
                type="text"
                isFocused
                onInputChange={() => null}
                value={" "}
            />
            <InputWithLabel
                id="password"
                label="Şifre: "
                type="password"
                isFocused
                onInputChange={() => null}
                value={" "}
            />
            <h4>
                <NavLink to={"/register/"}> Kayıt Ol</NavLink>
            </h4>

            <button className="btn btn-default pull-right">Giriş Yap</button>
        </>
    )

}
export default Login;