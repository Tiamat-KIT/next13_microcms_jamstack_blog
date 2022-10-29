import {createClient} from "microcms-js-sdk"

const client = createClient({
    serviceDomain: process.env.ServiceDomain || "",
    apiKey: process.env.APIKey || "",
})

export default client