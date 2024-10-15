<template>
  <div class="section-leadform full-width ">
    <div class="dev-full content-box">
      <div class="container">
        <div class="row">
          <div class="col-8 offset-2">
            <h2 class="text-secondary font-basic">Get in touch</h2>
            <p class="text-white font-basic mb-4">
              if you have any question, do not hesitate to giving us the contract
            </p>

            <div class="form-lead">
              <form @submit.prevent="submitForm">
                <div class="form-group mb-4">
                  <label for="name" class="text-white font-basic d-block">
                    Your Name:
                  </label>
                  <input type="text" id="name" v-model="name" required class="form-control">
                </div>
                <div class="form-group mb-4">
                  <label for="email" class="text-white font-basic d-block">
                    Your Email:
                  </label>
                  <input type="email" id="email" v-model="email" required class="form-control">
                </div>
                <div class="form-group mb-4">
                  <label for="message" class="text-white font-basic d-block">
                    Your Message:
                  </label>
                  <textarea id="message" v-model="message" required class="form-control"></textarea>
                </div>
                <input type="submit" class="btn btn-primary font-basic w-auto" value="Call us today">
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const snackbar = useSnackbar();

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = async () => {
  const googleFormId = '1FAIpQLSczxIJhMkMadcOcD2T6oAFNX_Jmr1F7jlUrZ9fgAY21eX-Y8w'
  const googleFormUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`

  const formData = new FormData()
  formData.append('entry.1479507392', name.value)
  formData.append('entry.1626804766', email.value)
  formData.append('entry.460617258', message.value)

  try {
    await fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })

    console.log('Form submitted successfully')
    snackbar.add({
      type: 'success',
      text: 'Successfully submitted form!'
    })

    // Clear form fields
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>

<style scoped>
.section-leadform {

  height: 200px;
  position: relative;
}

.content-box {
  background-color: #655d5a;
  padding: 20px;

}

label,
textarea,
input {
  width: 100%;
  border-radius: 5px;
  display: block;
}

input[type="submit"] {
  width: auto;
}

label {
  margin-bottom: 5px;
}
</style>