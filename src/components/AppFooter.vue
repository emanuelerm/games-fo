<template>
    <footer>
        <div class="container H d-flex align-items-center">
            <h4>Powered by Group-5 with &hearts;</h4>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<style lang="scss" scoped>
    footer{
        width: 100%;
        background-color: #061c25;
        height: 80px;
        color: white;
        position: fixed;
        bottom: 0;
    }

    .H{
        height: 100%;
    }
</style>