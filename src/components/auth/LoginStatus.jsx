export default function LoginStatus({ isLoggedIn }) {
  return (
    <div className="text-lg pt-5">
      {isLoggedIn ? (
        <div className="flex gap-2">
          <a href="/preferencias" className="underline">
            Mis Preferencias
          </a>
          <a href="/logout" className="underline">
            Salir
          </a>
        </div>
      ) : (
        <div>
          <a href="/login" className="underline">
            Entrar
          </a>
        </div>
      )}
    </div>
  );
}
