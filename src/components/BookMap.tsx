import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import {books} from "../books"

export default function BookMap() {
    // const books =[
    //     {
    //         title: "The Prophet",
    //         author: "Khalil Gibran",
    //         year: 1923,
    //         lat: 33.8886,   // Bsharri, Lebanon
    //         lng: 35.8356,
    //         country: "Lebanon"
    //     },
    //     {
    //         title: "The Art of War",
    //         author: "Sun Tzu",
    //         year: -500,      // approximate
    //         lat: 34.3416,   // Qi state, ancient China, near modern Henan
    //         lng: 113.6496,
    //         country: "China"
    //     },
    //     {
    //         title: "The Interior Castle (Inner Castle)",
    //         author: "Teresa of Ávila",
    //         year: 1577,
    //         lat: 40.6565,   // Ávila, Spain
    //         lng: -4.6810,
    //         country: "Spain"
    //     }
    // ]

    function getColor(year:number){
        const minYear = -500
        const maxYear = 2026
        const clampedYear = Math.min(Math.max(year, minYear), maxYear)

        const hue = ((clampedYear - minYear)/(maxYear-minYear)) *300

        return `hsl(${hue}, 100%, 60%)`
    }

    return(
        <MapContainer
            center={[20,0]}
            zoom={2}
            style={{height:"300px", width:"600px", padding:"20px"}}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {books.map((book, i) => (
                <CircleMarker
                    key={i}
                    center={[book.lat, book.lng]}
                    radius={8}
                    pathOptions={{ color:getColor(book.year), fillOpacity:0.65}}
                >
                <Tooltip>
                    {book.title} ({book.year})
                </Tooltip>
                </CircleMarker>
            ))}

        </MapContainer>
    )
}