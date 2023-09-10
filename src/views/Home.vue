<template>
    <AppHeader />
    <div class="flex flex-row">
        <Sidebar @category-changed="updateBookmarkList" />
        <app-bookmark-list :items="bookmarkList" />
    </div>
</template>

<script>
import Sidebar from '../components/Home/Sidebar.vue';
export default {
    components: {
        Sidebar
    },
    data() {
        return {
            bookmarkList: []
        }

    },
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_res => {
            console.log(bookmark_list_res);
            this.bookmarkList = bookmark_list_res?.data || []
        })
    },
    methods: {
        updateBookmarkList(categoryId) {
            const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId} ` : `bookmarks?_expand=category&_expand=user`
            this.$appAxios.get(url).then(bookmark_list_res => {
                console.log(bookmark_list_res);
                this.bookmarkList = bookmark_list_res?.data || []
            })
        },

    }

}

</script>