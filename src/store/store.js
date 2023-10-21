import { configureStore} from "@reduxjs/toolkit";
import botonProfile from "./botonProfile";
import botonLogIn from "./botonLogIn";
import botonSignUp from "./botonSignUp";
import botonCarrito from "./botonCarrito";
import cambiarDeporte from "./sportTittle";

export default configureStore({
    reducer: {
        profile: botonProfile,
        log:  botonLogIn,
        sign: botonSignUp,
        car: botonCarrito,
        deporte: cambiarDeporte
    }
});