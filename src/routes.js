//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import data from './components/data.vue'
export default[
    { path: '/', component: PageContent},
    { path: '/add', component: AddItem},
    { path: '/data', component: data}
]