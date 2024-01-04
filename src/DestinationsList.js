
import data from './data'
import Destination from './Destination'

export default function DestinationsList() {
    return (
        <div className="all-destinations-container">
            {data.map(place =>
                <Destination place={place} />
            )}
        </div>

    )
}