<template>
  <div id="app">
    <button
      @click="toogle"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        buttonText: 'on'
      }
    },
    methods: {
      async toogle () {
        try {
          const res = await axios.get('http://localhost:3003/blink')
            .then(function (response) {
              return response
            })
            .catch(function (error) {
              // handle error
              console.log(error)
            })

          if (res.status === 200) {
            this.buttonText = this.buttonText === 'on' ? 'off' : 'on'
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
