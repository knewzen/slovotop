<template>
    <section class="ui-mt-2">
        <b-table
                :data="menus"
                :hoverable=true
                :loading='tableLoading'
                :narrowed=true
                :paginated=false>

            <template slot-scope="props">
                <b-table-column :label="trans('data.titleMenu')">
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column :label="trans('data.read')" centered>
                    <div class="field">
                        <b-checkbox true-value="1" v-model="props.row.roles[0].access"
                                    @input="selectMenu(props.row.id,props.row.roles[0].access)"></b-checkbox>
                    </div>
                </b-table-column>

                <b-table-column :label="trans('data.write')" centered>
                    <div class="field">
                        <b-checkbox true-value="2" v-model="props.row.roles[0].access"></b-checkbox>
                    </div>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                    icon="ban"
                                    icon-pack="fa"
                                    size="is-large">
                            </b-icon>
                        </p>
                        <p>{{ trans('data.searchNull') }}</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</template>

<script>
    export default {

        mounted() {
            this.getMenus();
        },

        props: {
            role: {}
        },

        data() {
            return {
                menus: [],
                // table
                tableLoading: false
            }
        },

        methods: {
            /**
             * get menus
             */
            getMenus() {
                this.tableLoading = true;
                Api.post('v1', 'getMenus', {role: this.role})
                    .then(response => {
                        this.menus = response.data.data;
                        this.tableLoading = false;
                    })
            },

            /**
             * set access menu
             * @param id
             * @param access
             */
            selectMenu(id, access) {
                let param = {menu: id, role: this.role, access: access};
                Api.post('v1', 'saveAccessMenu', param)
                    .then(response => {
                        this.$toast.open({
                            message: response.data.success,
                            type: 'is-success'
                        });
                    })
                    .catch(error => {
                        this.$toast.open({
                            duration: 5000,
                            message: Api.errorSerializer(error.response.data.errors),
                            type: 'is-danger'
                        });
                    });
            },
        }
    }
</script>