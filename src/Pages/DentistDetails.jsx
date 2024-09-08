import React, {useEffect, useState} from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';
import {useParams} from "react-router-dom";
import axios from "axios";

const DentistDetails = () => {

  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);

  const { state } = useGlobalContext();
  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  const params = useParams();
  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id;

  useEffect(() => {
    axios(url).then((response) => {
        setDentist(response.data);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })
        .catch((error) => {
            console.log(error);
        });
  }, []);

  return (
      <div className={`details ${themeClass}`}>
        {loading ? 'Cargando...' : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Sitio web</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{dentist.name}</td>
                    <td>{dentist.email}</td>
                    <td>{dentist.phone}</td>
                    <td>{dentist.website}</td>
                  </tr>
                </tbody>
                </table>
            </>
        )
        }
      </div>
  )
}

export default DentistDetails
