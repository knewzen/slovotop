'use strict';
/**
 * class query for graphQL
 */
export default class Query {

    constructor() {

        this.v1 = '/apps/v1';

        this.id = `id`;
        this.menu = `id,name,slug,refer,accessMenu{id,menu_id,access,role_id}`;
        this.role = `id,name,created_at,updated_at,count`;
        this.user = `id,name,surname,email,roles{id,role{${this.role}}},confirm,created_at,updated_at`;
        this.project = `id,name,site,user{${this.user}},created_at,updated_at`;

    }

    /**
     * get items
     * @param url
     * @param item
     * @param select
     * @param params
     * @return {*|AxiosPromise}
     */
    getItem(url, item, select, params) {

        let querytoapi;

        if (select) {
            querytoapi = this.clearQuery(`{ ${item} ( ${select} ) { ${this[params]} } }`);
        } else {
            querytoapi = this.clearQuery(`{ ${item} { ${this[params]} } }`);
        }

        return axios.post(this[url], ({query: querytoapi}));
    }

    /**
     * set items
     * @param url
     * @param item
     * @param select
     * @param params
     * @return {*|AxiosPromise}
     */
    setItem(url, item, select, params = this.id) {

        let querytoapi = this.clearQuery(`mutation { ${item} ( ${select} ) { ${this[params]} } }`);

        return axios.post(this[url], ({query: querytoapi}));
    }

    /**
     * clear query
     * @param strings
     */
    clearQuery(strings) {
        return strings.replace(/\t*\n*\s{2,}/gi, '');
    }

    /**
     * get raw query
     * @param url
     * @param params
     * @return {*|AxiosPromise}
     */
    getRaw(url, params) {
        return axios.post(url, params)
    }
}