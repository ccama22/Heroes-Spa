// auth provider es quien va a exponer esta informacion
// el auth provider utiliza el auth context con el objetivo que este
// sea componente que sirva para proveer informacion a toda
// mi aplicacion

import { createContext } from "react";

export const AuthContext = createContext();
