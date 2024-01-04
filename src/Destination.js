import logo from './logo_location.png'

export default function Destination({ place }) {
    return (
        <div className="one-destination-container">
            <img src={place.imageUrl} alt={`image ${place.title}`} />
            <div className='country-info'>
                <div className='country-container'>
                    <img src={logo} className='logo-img' />
                    <div className='country'>{place.location.toUpperCase()}</div>
                    <a href={place.googleMapsUrl} target="_blank">view on google maps</a>
                </div>
                <h1>{place.title}</h1>
                <h4>{place.startDate} - {place.endDate}</h4>
                <p>
                    {place.description}
                </p>
            </div>
        </div>
    )
}