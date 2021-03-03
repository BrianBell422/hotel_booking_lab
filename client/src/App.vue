<template>
  <div id="app">

    <booking-grid />
  </div>
</template>

<script>
import BookingGrid from '@/components/BookingGrid';
import BookingForm from '@components/BookingForm';

export default {
  name: 'App',
  components: {
    'booking-form': BookingForm,
    'booking-grid': BookingGrid,
  },



}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
