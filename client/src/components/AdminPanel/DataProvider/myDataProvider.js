import { fetchUtils}  from 'ra-core';
import axios from 'axios'

export default (apiUrl, httpClient = fetchUtils.fetchJson) => ({
    getList: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     filter: JSON.stringify(params.filter),
        // };
        const url = `${apiUrl}/${resource}`;

        return axios.get(url).then(({data, headers}) => {
            console.log(data)
            console.log(headers)
            if (!headers.hasOwnProperty('content-range')) {
                throw new Error(
                    'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                );
            }
            return {
                data: data.map(resource => ({ ...resource, id: resource._id }) ),
                total: parseInt(
                    headers['content-range']
                        .split('/')
                        .pop(),
                    10
                ),
            };
        });
    },


    getOne: (resource, params) =>
        axios.get(`${apiUrl}/${resource}/${params.id}`).then(({ data }) => ({
            data,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
        return axios.get(url).then(({ data }) => ({ data: data }));
    },

    getManyReference: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     filter: JSON.stringify({
        //         ...params.filter,
        //         [params.target]: params.id,
        //     }),
        // };
        const url = `${apiUrl}/${resource}`;

        return axios.get(url).then(({ data, headers }) => {
            if (!headers.hasOwnProperty('content-range')) {
                throw new Error(
                    'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                );
            }
            return {
                data: data.map(resource => ({ ...resource, id: resource._id }) ),
                total: parseInt(
                    headers['content-range']
                        .split('/')
                        .pop(),
                    10
                ),
            };
        });
    },

    update: (resource, params) =>
        axios.put(`${apiUrl}/${resource}/${params.id}`, {
            body: JSON.stringify(params.data),
        }).then(({ data }) => ({ data })),

    updateMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                axios.put(`${apiUrl}/${resource}/${id}`, {
                    body: JSON.stringify(params.data),
                })
            )
        ).then(responses => ({ data: responses.map(({ json }) => json._id) })),

    create: (resource, params) =>
        axios.post(`${apiUrl}/${resource}`, 
            params.data
        ).then(({ data }) => ({
            data: { ...params.data, id: data._id },
        }
        )),

    delete: (resource, params) =>
        axios.delete(`${apiUrl}/${resource}/${params.id}`)
        .then(({ data }) => ({ data: data })),


    deleteMany: (resource, params) =>{
    console.log(params.ids)

        return Promise.all(
            params.ids.map(id =>
                axios.delete(`${apiUrl}/${resource}/${id}`)
            )
        ).then((data) => ({data : data.map(({data}) => data._id)}))},
    
});