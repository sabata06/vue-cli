<template>
    <app-header />
    <div class="flex flex-row">
        <sideBar />
          <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
        <div v-else> Bookmark Bulunmamaktadır</div>
    </div>
</template>


<script>
import sideBar from '../components/Account/sideBar.vue';
import appHeader from "../components/Shared/appHeader.vue"

export default {
    components: {
        sideBar,
        appHeader
    },
    data() {
        return {
            bookmarkList: []
        }

    },
    created() {
        // this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_res => {
        //     console.log(bookmark_list_res);
        //     this.bookmarkList = bookmark_list_res?.data || []
        // })
    },
}
</script>