<script setup lang="ts">
import {tools} from "./tools.ts"
import { useData } from 'vitepress'
import IndexTools from "./1index.vue"

const { params } = useData()

console.log(params.title)
// const info=tools.filter(item => item.title === params.title)[0]
// params.log()
</script>

{{params.title}}
<IndexTools :title="params.title"/>