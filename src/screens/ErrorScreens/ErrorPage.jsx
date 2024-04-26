import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { MdDangerous } from 'react-icons/md'

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <MdDangerous className="text-9xl text-purple-900 " />
      <h1 className="text-6xl font-bold text-fuchsia-600">Oops!</h1>
      <p className="mt-5 mtext-3xl font-quatro-bookfont-bold text-purple-900">
        Désolée, une erreur s'est produite !
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/Homy" className="text-purple-700 hover:purple-900">
        Revenir en lieu sûr
      </Link>
    </div>
  );
}

export default ErrorPage