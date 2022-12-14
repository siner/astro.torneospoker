import Spinner from "../elements/Spinner";
import { useState } from "react";
import { updateTorneo, deleteTorneo } from "../../lib/api";

export default function EditTorneo({ currenttorneo, casinos }) {
  const casino = currenttorneo.casinos;
  const [torneo, setTorneo] = useState({
    id: currenttorneo.id,
    name: currenttorneo.name,
    casino_id: currenttorneo.casino_id,
    date: currenttorneo.date,
    hour: currenttorneo.hour,
    price: currenttorneo.price,
    image: currenttorneo.image,
    description: currenttorneo.description,
  });

  const [status, setStatus] = useState({
    error: "",
    success: false,
    isLoading: false,
  });

  const handleChange = (event) => {
    setTorneo({
      ...torneo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async () => {
    setStatus({ error: "", success: false, isLoading: true });
    const result = await updateTorneo(torneo.id, torneo);
    if (result?.error?.message) {
      setStatus(() => ({
        error: result.error.message,
        success: false,
        isLoading: false,
      }));
    } else {
      setStatus({ error: "", success: true, isLoading: false });
      window.location.reload(false);
    }
  };

  const handleDelete = async () => {
    setStatus({ error: "", success: false, isLoading: true });
    const result = await deleteTorneo(torneo.id);
    if (result?.error?.message) {
      setStatus(() => ({
        error: result.error.message,
        success: false,
        isLoading: false,
      }));
    } else {
      setStatus({ error: "", success: true, isLoading: false });
      window.location.reload("/");
    }
  };

  return (
    <div className="w-full mt-10">
      <div>
        <form
          onSubmit={handleSave}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={torneo.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="casino">
              Casino
            </label>
            <div className="relative">
              <select
                className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="casino_id"
                onChange={handleChange}
                defaultValue={casino.id}>
                {casinos.map((casino) => (
                  <option key={casino.id} value={casino.id}>
                    {casino.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mb-4 w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date">
                Fecha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="date"
                value={torneo.date}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hour">
                Hora
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                name="hour"
                value={torneo.hour}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hour">
                Precio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="price"
                value={torneo.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image">
              Imagen
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="image"
              value={torneo.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description">
              Descripci??n
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              value={torneo.description}
              onChange={handleChange}></textarea>
          </div>
          <button
            disabled={status.isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSave}>
            {status.isLoading && <Spinner />} Guardar
          </button>
          <button
            disabled={status.isLoading}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleDelete}>
            {status.isLoading && <Spinner />} Borrar
          </button>
        </form>
      </div>
    </div>
  );
}
