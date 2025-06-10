import { Model } from "pinia-orm";

export class Observation extends Model {
    static override entity = "Observations";

    static override fields() {
        return {
            id: this.uid(),
            "@iot.id": this.attr(null),
            "@iot.selfLink": this.attr(""),
            "FeatureOfInterest@iot.navigationLink": this.attr(""),
            "Datastream@iot.navigationLink": this.attr(""),
            phenomenonTime: this.attr(""),
            resultTime: this.attr(null),
            result: this.attr(null),
            resultQuality: this.attr(null),
            validTime: this.attr(null),
            parameters: this.attr(null),
        }
    }

    // static override config = {
    //     axiosApi: {
    //         actions: {
    //             fetchById (id: number) {
    //                 return (this as any).get(`/Datastreams(${id})`)
    //             }
    //         },
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //             'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    //         },
    //         baseURL: 'http://localhost:8018/istsos4/v1.1' 
    //     }
    // }
}
