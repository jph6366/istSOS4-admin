
const example  = {
    "value": [
        {
            "@iot.id": 1,
            "@iot.selfLink": "http://localhost:8018/istsos4/v1.1/FeaturesOfInterest(1)",
            "Observations@iot.navigationLink": "http://localhost:8018/istsos4/v1.1/FeaturesOfInterest(1)/Observations",
            "name": "location name 1",
            "description": "location 1",
            "encodingType": "application/vnd.geo+json",
            "feature": {
                "type": "Point",
                "coordinates": [
                    -117.05,
                    51.05
                ]
            },
            "properties": null
        }
    ]
}
class Observation {
  "@iot.id": number
}

const arr = Array.from(example.value, _ =>  new Observation)
example.value.map((v, i) => {
  arr[i] = v
})

console.log(arr)