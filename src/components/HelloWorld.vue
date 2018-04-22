<template>
  <div class="hello">
    <p>{{ output }}</p>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      output: '', 
    };
  },
  mounted() {
    navigator.requestMIDIAccess()
      .then(function(access) {

        // Get lists of available MIDI controllers
        this.output = access.outputs.values();
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
