/* eslint-disable react/prop-types */
export const Card2 = (item) => {
    return(
        <div style={{border: '2px solid white', padding: 10, width: 300, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: 20}}>
            <h1>{item.name}</h1>
            <h2>{item.desc}</h2>
            <p>{item.value}</p>
            <img src={item.image} alt={item.name} width={150} height={"auto"}/>
        </div>
    )
  }