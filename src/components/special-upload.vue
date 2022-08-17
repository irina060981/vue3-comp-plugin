<script setup lang="ts">
import { ref, inject } from "vue";

const props = defineProps<{
  customImg?: string
}>()

const imgPlugin = inject("SpecialUploaderImage") as string
const imgVal = imgPlugin ?? props.customImg
const imgSRC = ref(imgVal)

const fileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement
  const file = target.files[0]
  fileProcess(file)
}

const fileProcess = (file: File) => {
  imgSRC.value = URL.createObjectURL(file)
}

</script>

<template>
  
  <div class="image-uploader">
    <h2>File Uploader</h2>
    <input @change = "fileUpload" type="file" id="file-upload" name="fileUpload" accept="image/*">
    <div class="your-file">
        <img :src="imgSRC" alt="">
    </div>
  </div>
</template>

<style scoped>
h2 {
    margin-bottom: 20px;
}
.image-uploader {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    width: 55%;
    background-color:beige;
    margin: 0 auto;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.your-file {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.your-file img {
  width: 70%;
  max-height: 250px;
}

</style>
