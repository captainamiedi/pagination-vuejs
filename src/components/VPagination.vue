<template>
    <div>
        <div class="pagination-row">
            <button class="pagination-btn"  @click="changePageNumber(pageNumber - 1) "
                :disabled="pageNumber <= 1"
            >  
                    Previous
            </button>
            <span v-for="(item, index) in new Array(numberPages)" :key="index">
                <button :class="['pagination-btn', pageNumber === index + 1 ? 'active' : '']" @click="changePageNumber(index + 1 )">  
                    {{index + 1}}
                </button>
            </span>
            <button class="pagination-btn"  @click="changePageNumber(pageNumber + 1)"
                :disabled="pageNumber >= numberPages  "
            >  
                Next
            </button>
        </div>
        <slot name="data" :pageNumber="pageNumber"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageNumber: Number(this.$route.query.pageNumber) || 1,
                perPage: 20
            }
        },
        computed: {
            numberPages() {
                return Math.ceil(this.totalItems / this.perPage)
            }
        },
        methods: {
            changePageNumber(newPageNumber) {
               this.pageNumber = newPageNumber; 
               this.$router.push({path: this.$route.path, query: {pageNumber: newPageNumber}})
            }
        },
        props: {
            totalItems: {
                type: Number,
                required: true 
            },
        },
    }
</script>

<style scoped>
.pagination-btn {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
}
.active {
    background-color: #ccc;
    cursor: auto;
}
:disabled {
    cursor: auto;
}
.pagination-row{
    padding: 5px 0px;
}
</style>