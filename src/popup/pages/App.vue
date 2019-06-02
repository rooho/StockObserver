<template>
    <div>
        <h1>{{ msg }}</h1>
        <span> page list </span> Correct usage:
        <Page :current="1" :total="100"></Page>
    
        Incorrect usage:
        <Page current="1" total="100"></Page>
    </div>
</template>

<script>
import { Button, Table } from 'iview';

export default {
    data() {
        return {
            msg: 'Welcome baby!'
        }
    },
    components: {
        "i-button": Button,
        "i-table": Table,
    },
}
</script>

<style lang="stylus">
</style>
