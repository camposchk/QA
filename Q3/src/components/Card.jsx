/* eslint-disable react/prop-types */
export const Card = ({name, desc, categoria, descvalue, status, image}) => {
  return(
      <div style={{backgroundColor: 'lightgray', padding: 10, width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{categoria}</p>
          <p>{descvalue}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <div style={{height: 10, width: 10, backgroundColor: status ? 'green' : 'red', borderRadius: 50, marginTop: 10}}></div>
      </div>
  )
}