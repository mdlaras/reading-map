import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
// import {books} from "../data/books"
import { countryCoords } from "../data/countrycodes";
import type { Book } from "../types"


type Props = {
    books_list: Book[]
}

export default function BookMap({ books_list }: Props) {
    function getColor(year: number) {
        const minYear = -500
        const maxYear = 2026
        const clampedYear = Math.min(Math.max(year, minYear), maxYear)

        const hue = ((clampedYear - minYear) / (maxYear - minYear)) * 300

        return `hsl(${hue}, 100%, 60%)`
    }

    function placeMarkers() {
        return (
            books_list.map((book, i) => (
                <CircleMarker
                    key={i}
                    center={countryCoords[book.country]}
                    radius={8}
                    pathOptions={{ color: getColor(book.first_publish_year), fillOpacity: 0.65 }}
                >
                    <Tooltip>
                        {book.title} ({book.first_publish_year})
                    </Tooltip>
                </CircleMarker>
            ))
        )

    }

    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "300px", width: "600px", padding: "20px" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {placeMarkers()}

        </MapContainer>
    )
}