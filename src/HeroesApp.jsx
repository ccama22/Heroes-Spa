import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    // me va a servir para compartir la informacion que se encuentran en mi authProvider
    // en toda la aplicacion
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
