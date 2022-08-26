import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Spinner from "../elements/Spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    error: "",
    success: false,
    isLoading: false,
  });

  const handleSendLink = async () => {
    setStatus({ error: "", success: false, isLoading: true });

    const result = await supabase.auth.signIn(
      { email: email },
      { redirectTo: import.meta.env.PUBLIC_REDIRECT_URL }
    );
    if (result?.error?.message) {
      setStatus(() => ({
        error: result.error.message,
        success: false,
        isLoading: false,
      }));
    } else {
      setStatus({ error: "", success: true, isLoading: false });
    }
  };

  return (
    <div className="w-full mt-10">
      <div className="pb-2">
        Para entrar o registrarte, introduce tu email para recibir un link en tu
        email.
      </div>
      <div>
        <input
          disabled={status.isLoading}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(v) => setEmail(v.target.value)}
        />
        {status.error ? (
          <div className="text-sm text-red-400">{status.error}</div>
        ) : null}
        {status.success ? (
          <div className="text-sm text-green-600">
            Revisa en tu bandeja de entrada
          </div>
        ) : null}
      </div>
      <div className="pt-3 relative">
        <button
          disabled={status.isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full flex flex-row justify-center items-center align-center"
          type="button"
          onClick={handleSendLink}>
          {status.isLoading && <Spinner />} Entrar
        </button>
      </div>
    </div>
  );
}
