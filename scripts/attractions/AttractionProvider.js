let attraction = []

export const useAttractions = () => {
    return attractions
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.log(parsedAttractions)
                attractions = parsedAttractions.slice()
            }
        )
}

console.log("criminal data")