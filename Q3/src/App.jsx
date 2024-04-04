import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { Card2 } from './components/Card2'
import { Alert } from './components/Alert'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [alert, setAlert] = useState(false)
  const [modal, setModal] = useState()
  const position = [-25.42202852360281, -49.268924769319675]


  useEffect(() => {
    api.get(`/character/?page=${page}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
        setAlert(true)
      }
      setData(response.data.results)
      setAlert(false)
    }).catch((error) => {
      if (error.response.status === 404) {
        console.log("Esta pagina nao contem este personagem")
        setAlert(true)
      }
      console.error(error)
    })
  }, [page])

  useEffect(() => {
    api.get(`/character/?name=${name}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
        setAlert(true)
      }
      setData(response.data.results)
      setAlert(false)
    }).catch((error) => {
      if (error.response.status === 404) {
        console.log("Esta pagina nao contem este personagem")
        setAlert(true)
      }
      console.error(error)
    })
  }, [name])

  return (
    <>
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.wrapProducts}>
              {produtos.map((item) => {
                return (
                  <Card name={item.name} desc={item.desc} value={item.value} categoria={item.categoria} image={item.image} status={item.status} key={item.id} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
          <>
            <h2>Rick and Morty API</h2>
            <div>
              <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
              <input type="text" placeholder="Rick" value={name} onChange={(event) => setName(event.target.value)} style={{ marginLeft: 20 }} />
            </div>
            {alert && <Alert></Alert> ||
              <div className={style.wrapProducts}>
                {data.map((item) => {
                  return (
                    <div key={item.id}>
                      <Card2 name={item.name} desc={item.species} value={item.gender} image={item.image} />
                      <button onClick={() => {setModal(key)}}>Info</button>
                    </div>
                  )
                })}
              </div>
            }
          </>
        }
        {show === "map" &&
          <>
            <h2>Mapa</h2>
            <div>
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '50em', width: '50em' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
