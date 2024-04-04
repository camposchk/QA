/* eslint-disable react/prop-types */
export const Card = (item) => {
  return(
      <div style={{backgroundColor: 'lightgray', padding: 10, width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h1>{item.name}</h1>
          <h2>{item.desc}</h2>
          <p>{item.categoria}</p>
          <p>{item.descvalue}</p>
          <img src={item.image} alt={item.name} width={150} height={"auto"}/>
          <div style={{height: 10, width: 10, backgroundColor: item.status ? 'green' : 'red', borderRadius: 50, marginTop: 10}}></div>
      </div>
  )
}